import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Post from './Post';
import { getSubreddits, makeFavorite, removeFavorite } from '../store/Actions/index';
import Loader from './Loader';

class SubredditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        let data = this.props.location.pathname.split('/')[2];
        this.props.getData(data);
        console.log(data);
    }
    favoriteHandler = (action, id) => {
        if (action == 'makeFavorite') {
            this.props.makeFavorite({ id });
        }
        else {
            this.props.removeFavorite({ id });
        }
    }
    render() {
        let data = this.props.location.pathname.split('/')[2];
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div>
                        <h3 style={{ color: 'white', marginTop: "30px" }}>Showing Results for r/{data} </h3>
                    </div>
                    {this.props.subreddits.map(item => (
                        <div className="row centeredCss" key={item.id}>
                            <div className="col-md-6 col-sm-12">
                                {this.props.loading ? <Loader /> : <Post {...item} toggleFavorite={this.favoriteHandler} />}
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
        subreddits: state.subreddits,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (data) => dispatch(getSubreddits(data)),
        makeFavorite: (id) => dispatch(makeFavorite({ id })),
        removeFavorite: (id) => dispatch(removeFavorite({ id }))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubredditPage));