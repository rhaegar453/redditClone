import React from 'react';
import Post from './Components/Post';
import { connect } from 'react-redux';
import { getSubreddits } from './store/Actions/index';
import { structureData } from './store/Reducers/helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <div>
        {this.props.subreddits.map(item => (
          <div style={{width:'65%', margin:'auto'}}>
            <Post {...item} />
          </div>
        ))}
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
    getData: () => dispatch(getSubreddits())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);