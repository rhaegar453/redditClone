import * as actions from '../ActionTypes/subreddits';
import {structureData} from './helpers';

const initialState={
    subreddits:[],
    loading:false, 
    error:false, 
    favorites:[]
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actions.GET_SUBREDDITS_START:
            return {...state, loading:true};
        case actions.GET_SUBREDDITS_FAILURE:
            return {...state, error:true, loading:false}
        case actions.GET_SUBREDDITS_SUCCESS:
            console.log(structureData(action.payload.data.data.children))
            return {...state, subreddits:structureData(action.payload.data.data.children), loading:false};
        case actions.MAKE_FAVORITE:
            let item=state.subreddits.filter(item=>item.id==action.payload.id)[0];
            let changed=state.subreddits.map(item=>{
                if(item.id==action.payload.id){
                    return {...item, isFavorite:true}
                }
                else return item;
            })
            return {...state, favorites:[...state.favorites, item],subreddits:changed }
        case actions.REMOVE_FAVORITE:
            let changed1=state.subreddits.map(item=>{
                if(item.id==action.payload.id){
                    return {...item, isFavorite:false}
                }
                else{
                    return item;
                }
            });
            return {...state, favorites:state.favorites.filter(item=>item.id!==action.payload.id), subreddits:changed1}
        default:
            return {...state};
    }
}


export default reducer;