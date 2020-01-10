import Dexie from 'dexie';

let db=new Dexie('redditify');
db.version(1).stores({ subreddits: "&id,subreddit", favorites:'&id'});




export default db;