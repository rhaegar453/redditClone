import * as actions from '../ActionTypes/subreddits';
import {structureData} from './helpers';

const initialState={
    subreddits:[],
    loading:false, 
    error:false
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actions.GET_SUBREDDITS_START:
            return {...state, loading:true};
        case actions.GET_SUBREDDITS_FAILURE:
            return {...state, error:true, loading:false}
        case actions.GET_SUBREDDITS_SUCCESS:
            console.log(structureData(action.payload.data.data.children))
            return {...state, subreddits:structureData(action.payload.data.data.children), loading:true};
        default:
            return {...state};
    }
}


export default reducer;