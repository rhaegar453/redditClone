import React from 'react';
import './HomeComponent.css';


const Loader = () => {
    return (
        <div className="loaderBackground centeredCss">
            <div style={{width:'90%'}}>
                <div className="loaderInside" style={{ height: '30px', marginTop:'20px'}}></div>
                <div className="loaderInside" style={{ height: '10px', marginTop:'10px'}}></div>
                <div className="loaderInside" style={{ height: '200px', marginTop:'20px', marginBottom:'30px'}}></div>
            </div>
        </div>
    );
}
export default Loader;