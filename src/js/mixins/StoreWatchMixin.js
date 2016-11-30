// Higher order component keeps track of state
import React from 'react';
import AppStore from '../stores/app-store.js';

export default (InnerComponent, stateCallback) => class extends React.Component {
  constructor(props){
    super(props);
    this.state = stateCallback(props);
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    // state gets what's currently in the store
    this.setState( stateCallback(this.props) );
  }
  render(){
    return <InnerComponent {...this.state} {...this.props} />
  }
}
