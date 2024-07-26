import React from 'react';

const SocialFacebookComponent = ({url}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className='social-media-link'>
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 0.400024C8.27999 0.400024 0.399994 8.28003 0.399994 18C0.399994 26.824 6.89999 34.1096 15.3696 35.3824V22.6648H11.0152V18.0384H15.3696V14.96C15.3696 9.86322 17.8528 7.62562 22.0888 7.62562C24.1176 7.62562 25.1904 7.77602 25.6984 7.84482V11.8832H22.8088C21.0104 11.8832 20.3824 13.588 20.3824 15.5096V18.0384H25.6528L24.9376 22.6648H20.3824V35.42C28.9728 34.2544 35.6 26.9096 35.6 18C35.6 8.28003 27.72 0.400024 18 0.400024Z"
                    fill="#D0C196"/>
            </svg>
        </a>
    )
}

export default SocialFacebookComponent;