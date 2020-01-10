import React from 'react';
import './HomeComponent.css';
import {withRouter} from 'react-router-dom';



const HomeComponent = (props) => {
    return (
        <div className="homeBackground">
            <div className="col-md-12">
            <div className="centeredCss">
                <h1 className="fontHeader">Redditify</h1>
            </div>
            <div className="container" style={{textAlign:'center'}}>
            {props.arr.map(item => (
                <span className="pillBox" onClick={()=>props.history.push(`subreddit/${item.link}`)}>{item.label}</span>
            ))}
            </div>
            </div>
        </div>
    );
}


export default withRouter(HomeComponent);