import React from 'react';

const UserEmailComponent = ({email}) => {
        return(
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className='user-info'>
                <p>{email}</p>
                <div className='divider'></div>
                <div className='user-info-subtitle'>email</div>
            </a>
        )
}

export default UserEmailComponent