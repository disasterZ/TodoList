import React , {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this)
    }

    render(){
        const {content}=this.props
        return (<div
                onClick={this.handClick}
                dangerouslySetInnerHTML={{__html:content}}
                ></div>)
    }
    handClick(){
        const {deleteItem,index}=this.props
        deleteItem(index)
    }
}

TodoItem.propTypes={
    content:PropTypes.arrayOf(PropTypes.number,PropTypes.string),
    deleteItem:PropTypes.func,
    index:PropTypes.number,

}

export default TodoItem;