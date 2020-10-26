import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreateor'

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
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px' }}
            onChange={this.handleInputChange}
          />
          <Button
            type='primary'
            style={{ marginLeft: '10px' }}
            onClick={this.handleBtnClick}
          >提交</Button>
        </div>
        <List
          style={{ marginTop:10,marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={this.state.List}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleItemClick.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
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