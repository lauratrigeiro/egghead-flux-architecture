import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events'; // from Node
import CartApi from '../api/CartApi';

const CHANGE_EVENT = 'change'; // value broadcasted to app

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart(){
    return CartApi.cartItems;
  },

  getCatalog(){
    return CartApi.getCatalog();
  },

  getCartTotals(){
    return CartApi.cartTotals();
  },

  dispatcherIndex: register(function(action){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        CartApi.addItem(action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        CartApi.removeItem(action.item);
        break;

      case AppConstants.INCREASE_ITEM:
        CartApi.increaseItem(action.item);
        break;

      case AppConstants.DECREASE_ITEM:
        CartApi.decreaseItem(action.item);
        break;
    }

    AppStore.emitChange();
  })
});

export default AppStore;
