import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContextComponent';
import UserEmailComponent from "./UserEmailComponent";
import UserPhoneComponent from "./UserPhoneComponent";
import UserLocationComponent from "./UserLocationComponent";

const UserInfoComponent = () => {
    const { currentUser: user } = useContext(UserContext);

    return(
        <address className='user-info-list'>
            {user.email && <UserEmailComponent email={user.email} />}
            {user.phone && <UserPhoneComponent phone={user.phone} />}
            {user.location && <UserLocationComponent city={user.location.city} country={user.location.country} />}
        </address>
    )
}

export default UserInfoComponent