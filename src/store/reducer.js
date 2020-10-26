import TodoList from '../TodoList';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';
const defaultState={
    inputValue:'',
    List:["112"]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE){
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        newState.List.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        newState.List.splice(action.index,1);
        return newState;
    }
    return state;
}