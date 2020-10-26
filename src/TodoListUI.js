import React,{Component,Fragment} from 'react';
import {Input,Button,List} from 'antd';

class TodoListUI extends Component{
    render() {
        return (
          <Fragment>
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
              <Input
                value={this.props.inputValue}
                placeholder="todo info"
                style={{ width: '300px' }}
                onChange={this.props.handleInputChange}
              />
              <Button
                type='primary'
                style={{ marginLeft: '10px' }}
                onClick={this.props.handleBtnClick}
              >提交</Button>
            </div>
            <List
              style={{ marginTop:10,marginLeft: '10px', width: '300px' }}
              bordered
              dataSource={this.props.List}
              renderItem={(item,index) => (
                <List.Item onClick={this.props.handleItemClick.bind(this,index)}>
                  {item}
                </List.Item>
              )}
            />
          </Fragment>
        )
      }
}
export default TodoListUI;