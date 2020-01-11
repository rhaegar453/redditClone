import {put,takeEvery, all} from 'redux-saga/effects';
import * as actions from '../ActionTypes/subreddits';
import {getSubreddits, getSubredditsFailure, getSubredditsStart, getSubredditsSuccess} from '../Actions/index';
import {structureData} from '../Reducers/helpers';
import axios from 'axios';
let url='https://www.reddit.com/r/';

function* getSubredditsS(x){
    try{
        yield(put(getSubredditsStart()));
        let data=yield axios.get(`${url}${x.payload}.json`);
        let structuredData=yield structureData(data.data.data.children);
        yield(put(getSubredditsSuccess(structuredData)));
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


    
