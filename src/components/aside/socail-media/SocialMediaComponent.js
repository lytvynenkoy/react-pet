import React, {useContext} from 'react';
import SocialFacebookComponent from "./SocialFacebookComponent";
import SocialGithubComponent from "./SocialGithubComponent";
import SocialInstagramComponent from "./SocialInstagramComponent";
import SocialTelegramComponent from "./SocialTelegramComponent";
import SocialViberComponent from "./SocialViberComponent";
import { UserContext } from '../../../context/UserContextComponent';

const SocialMediaComponent  = () => {
    const { currentUser: user } = useContext(UserContext);

    return (
        <div className="social-media-links">
        {user.social.facebook && <SocialFacebookComponent url={user.social.facebook} />}
        {user.social.github && <SocialGithubComponent url={user.social.github} />}
        {user.social.instagram && <SocialInstagramComponent url={user.social.instagram} />}
        {user.social.telegram && <SocialTelegramComponent url={user.social.telegram} />}
        {user.social.viber && <SocialViberComponent url={user.social.viber} />}
    </div>
    )
}

export default SocialMediaComponent