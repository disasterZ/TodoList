import React, { Component} from 'react';
import TodoListUI from './TodoListUI';
import 'antd/dist/antd.css';
import store from './store';
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreateor'


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return(
      <TodoListUI 
        inputValue={this.state.inputValue}
        List={this.state.List}
        //
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        handleItemClick={this.handleItemClick}
      >
      </TodoListUI>
    )
  }

  componentDidMount(){
    const action=getInitList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action=getInputChangeAction(e.target.value);
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState());
  }  

  handleBtnClick(){
    const action=getAddItemAction();
    store.dispatch(action);
  }

  handleItemClick(index){
    const action=getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;