import * as actionTypes from '../store/ActionTypes/subreddits';
import * as actions from '../store/Actions/index';
import db from '../Helpers/dexie';

export const cache = ({ getState, dispatch }) => next => async action => {
    try {
        console.log(action);
        if (action.type == actionTypes.GET_FROM_CACHE) {
            console.log(action.payload);
            let cache = await db.subreddits.where('subreddit').equals(action.payload).toArray();
            if (cache.length > 0) {
                dispatch(actions.getSubredditsSuccess(cache));
            }
            else {
                dispatch(actions.getSubreddits(action.payload))
            }
        }
        next(action);
    }
    catch (err) {
        console.log(err);
    }
}



