import {put,takeEvery, all} from 'redux-saga/effects';
import * as actions from '../ActionTypes/subreddits';
import {getSubreddits, getSubredditsFailure, getSubredditsStart, getSubredditsSuccess} from '../Actions/index';
import axios from 'axios';
let url='https://www.reddit.com/r/';

function* getSubredditsS(){
    try{
        yield(put(getSubredditsStart()));
        let data=yield axios.get(`${url}cats.json`);
        yield(put(getSubredditsSuccess(data)));
    }
    catch(err){
        yield(put(getSubredditsFailure(err)));
    }
}


function* watchActions(){
    yield takeEvery(actions.GET_SUBREDDITS, getSubredditsS);
}

export default function* rootSaga(){
    yield all([
        watchActions()
    ])
}


    
