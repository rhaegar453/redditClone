import React from 'react';
import { connect } from 'react-redux';
import { makeFavorite, removeFavorite } from '../store/Actions/index';
import Navbar from './Navbar';
import "./HomeComponent.css";
import Post from './Post';
import db from '../Helpers/dexie';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            favorites:[]
        }
    }
    componentDidMount(){
        db.favorites.toArray().then(data=>{
            this.setState({favorites:data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    handleFavorite = (data, id) => {
        this.setState((prevState)=>{
            return {favorites:prevState.favorites.filter(item=>item.id!==id)}
        })
        this.props.removeFavorite({id});
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.state.favorites.map(item => (
                        <div className="row centeredCss">
                            <div className="col-md-6 col-sm-12">
                                <Post {...item} toggleFavorite={this.handleFavorite} key={item.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeFavorite: (id) => dispatch(makeFavorite({ id })),
        removeFavorite: (id) => dispatch(removeFavorite({ id }))
    }
}
const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);