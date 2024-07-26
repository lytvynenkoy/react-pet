import React from 'react';
import SocialMediaComponent from "./socail-media/SocialMediaComponent";
import UserInfoComponent from "./userInfo/UserInfoComponent";
import ProfileComponent from "./profile/ProfileComponent";

const Aside = () => {
    return (
        <aside>
            <ProfileComponent />
            <UserInfoComponent />
            <SocialMediaComponent />
        </aside>
    )
}

export default Aside