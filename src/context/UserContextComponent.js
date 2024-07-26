import React, { createContext, useState } from 'react';
import usersData from '../data/users_data.json';

const UserContextComponent = createContext();

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users] = useState(usersData.users);
    const [currentUser, setCurrentUser] = useState(usersData.users[0]);

    return (
        <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };