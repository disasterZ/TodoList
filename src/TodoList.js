import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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
                        ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                        <TodoItem 
                                            key={item}
                                            content={item} 
                                            index={index}
                                            deleteItem={this.handleDelete}
                                        />
                                ) 
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('/api/todolist')
            .then((res)=>{
                this.setState(()=>({
                    list:[...res.data]
                }))
            })
            .catch(()=>{alert('error')})
    }

    handleInputChange(){
        const value=this.input.value
        this.setState(()=>({
            inputValue:value
        }))
    }

    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:'',
        }));

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