import Loader from '../Components/Loader';
import React from 'react'


export default { title: "Loader Component" };

export const singleLoader = () => {
    return <div className="col-md-6">
        <Loader />
        <Loader />
        <Loader />
    </div>
}



