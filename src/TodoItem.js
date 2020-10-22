import React , {Component} from 'react';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this)
    }

    render(){
        return (<div
                onClick={this.handClick.bind(this)}
                >{this.props.content}</div>)
    }
    handClick(){
       this.props.deleteItem(this.props.index)
    }
}
export default TodoItem;