import React from 'react';

const UserPhoneComponent = ({ phone }) => {
    return(
        <a href={`tel:${ phone }`} target="_blank" rel="noopener noreferrer" className='user-info'>
            <p>{ phone }</p>
            <div className='divider'></div>
            <div className='user-info-subtitle'>phone</div>
        </a>
    )
}

export default UserPhoneComponent