import React , {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this)
    }

    
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
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
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number,

}

export default TodoItem;