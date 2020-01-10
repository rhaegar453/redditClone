import React from 'react';
import Post from './Components/Post';
import { connect } from 'react-redux';
import { getSubreddits } from './store/Actions/index';
import { structureData } from './store/Reducers/helpers';
import { makeFavorite, removeFavorite } from './store/Actions/index';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import Loader from 'react-content-loader';
import SubredditPage from './Components/SubredditPage';
import FavoritesPage from './Components/Favorites';

let labels = [
  { label: 'Alternative', link: 'alternative' },
  { label: 'Pics', link: 'pics' },
  { label: 'Gifs', link: 'gifs' },
  { label: 'Advice Animals', link: 'adviceanimals' },
  { label: 'Cats', link: 'cats' },
  { label: 'Images', link: 'images' },
  { label: 'Photoshop Battles', link: 'photoshopbattles' },
  { label: 'Hmmm', link: 'hmmm' },
  { label: 'All', link: 'all' },
  { label: 'Aww', link: 'aww' }];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact >
            <HomeComponent arr={labels} />
          </Route>
          <Route path="/subreddit">
            <SubredditPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getSubreddits()),
    makeFavorite: (id) => dispatch(makeFavorite({ id })),
    removeFavorite: (id) => dispatch(removeFavorite({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);