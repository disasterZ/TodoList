import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreateor';

// eslint-disable-next-line require-yield
function* getInitList(){
    const res = yield axios.get('/list.json');
    const action=initListAction(res.data);
    yield put(action);
    
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;