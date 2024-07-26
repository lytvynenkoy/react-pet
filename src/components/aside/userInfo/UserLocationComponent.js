import React from 'react';

const UserLocationComponent = ({ city, country }) => {
    return(
        <div className='user-info'>
            <p>{city}, {country}</p>
            <div className='divider'></div>
            <div className='user-info-subtitle'>location</div>
        </div>
    )
}

export default UserLocationComponent