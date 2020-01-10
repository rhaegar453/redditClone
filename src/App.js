import React from 'react';
import Post from './Components/Post';
import { connect } from 'react-redux';
import { getSubreddits } from './store/Actions/index';
import { structureData } from './store/Reducers/helpers';
import {makeFavorite, removeFavorite} from './store/Actions/index';
import Navbar from './Components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getData()
  }
  favoriteHandler=(action, id)=>{
    if(action=='makeFavorite'){
      this.props.makeFavorite({id});
    }
    else{
      this.props.removeFavorite({id});
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.subreddits.map(item => (
            <div className="row centeredCss" key={item.id}>
              <div className="col-md-6 col-sm-12">
                <Post {...item} toggleFavorite={this.favoriteHandler}/>
              </div>
            </div>
          ))}
        </div>
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
    makeFavorite:(id)=>dispatch(makeFavorite({id})), 
    removeFavorite:(id)=>dispatch(removeFavorite({id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);