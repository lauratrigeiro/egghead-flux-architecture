#Egghead Flux Architecture Course

##Notes

####Lesson 1
- Action => Dispatcher => Store (Manages app state) => View (React Components) listens for actions =>>> Action

- View can send an action to a dispatcher received by a store which can then send that action back to the view
- Action: something happens in app
- Dispatcher: distributes action info to correct store
- Store: when something is changed in state, announces that to the view/components

####Lesson 2
- node_modules/flux/lib/Dispatcher.js comes from Facebook
- Methods we care about are `register`, `dispatch` which mainly prevent race conditions while handling actions
- separate app dispatcher from flux dispatcher to inject logic you need

####Lesson 3
- `constants`: list of actions (ex: `ADD_ITEM: 'ADD_ITEM'`)
- `actions` look like:
```
addItem(item){
  dispatch({
    actionType: AppConstants.ADD_ITEM, item
  })
},
```
- Components can then import and call these actions

####Lesson 4
- Store manages state of application
- PrivateMethods to manipulate data called by exposed store methods
- `dispatcherIndex` method maps actions to store methods (switch)
- Has constant `EVENT_CHANGE` that store can emit (after dispatcherIndex switch) and add/remove listeners

####Lesson 5 (Catalog/Cart app)

####Lesson 6
- Creating higher order component allows inner components (ex. Cart) to become stateless
- Higher order functions let other components now be aware of state

####Lesson 8
Newer version of reacter-router requires a [history](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md). Figured out thanks to [this](http://stackoverflow.com/questions/40872481/react-router-uncaught-typeerror-cannot-read-property-getcurrentlocation-of).

####Lesson 9
- react-router has <Link to="">. can do < style={obj}>
- Interesting: when you refresh the page, you lose the store

####Lesson 10
- Take logic out of store and put into Api that the "dumb" store can call
