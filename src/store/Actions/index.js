import * as actions from '../ActionTypes/subreddits';


export const getSubreddits=()=>({type:actions.GET_SUBREDDITS});
export const getSubredditsStart=()=>({type:actions.GET_SUBREDDITS_START});
export const getSubredditsSuccess=(data)=>({type:actions.GET_SUBREDDITS_SUCCESS, payload:data});
export const getSubredditsFailure=(err)=>({type:actions.GET_SUBREDDITS_FAILURE, payload:err});


export const makeFavorite=({id})=>({type:actions.MAKE_FAVORITE, payload:id});
export const removeFavorite=({id})=>({type:actions.REMOVE_FAVORITE, payload:id})


