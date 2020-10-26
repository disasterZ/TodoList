import React,{Component,Fragment} from 'react';
import {Input,Button,List} from 'antd';

const TodoListUI = (props)=>{
    return (
        <Fragment>
          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <Input
              value={props.inputValue}
              placeholder="todo info"
              style={{ width: '300px' }}
              onChange={props.handleInputChange}
            />
            <Button
              type='primary'
              style={{ marginLeft: '10px' }}
              onClick={props.handleBtnClick}
            >提交</Button>
          </div>
          <List
            style={{ marginTop:10,marginLeft: '10px', width: '300px' }}
            bordered
            dataSource={props.List}
            renderItem={(item,index) => (
              <List.Item onClick={props.handleItemClick.bind(this,index)}>
                {item}
              </List.Item>
            )}
          />
        </Fragment>
      )
}

export default TodoListUI;