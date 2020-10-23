import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './style.css';

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[],
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    } 

    render() {
        return (
            <Fragment>
                {/* JSX->createElemnt->虚拟DOM（JS对象）->真实的DOM */}
                <div>
                    {/*这是一条注释*/}
                    <label htmlFor="insert">输入内容</label>
                    <input 
                        id='insert'
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                        <TodoItem 
                                            key={index}
                                            content={item} 
                                            index={index}
                                            deleteItem={this.handleDelete}
                                        />
                                ) 
                        })
                    }
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    handleInputChange(e){
        const value=e.target.value
        this.setState(()=>({
            inputValue:value
        }))
    }

    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:'',
        }))
    }

    handleDelete(index){
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
}
export default TodoList;