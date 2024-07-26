import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContextComponent';

const ProfileComponent = () => {
    const { currentUser: user } = useContext(UserContext);

    return(
        <div>
            <img src={`${user.avatar}`} alt="user profile" className='profile-image'/>
            <h1>{`${user.lastName}`}<br/>{`${user.name}`}</h1>
            <p className='paragraph-big'>{`${user.position}`}</p>
        </div>
    )
}

export default ProfileComponent


