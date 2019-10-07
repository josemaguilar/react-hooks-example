import React, { createContext, useEffect, useState } from 'react';
import {  getUsers } from "../services/user-service";

const UsersContext = createContext();
const { Provider, Consumer } = UsersContext;


const UserProvider = ({ children }) => {
    const { users, setUsersList} = useState({ isLoading: false, error: false, items: [], current_page: 1, total_page: 0 });

    useEffect(() => {
       getUsers()
           .then(res => {
               const usersList = res.data.map(user => ({ id: user.id, email: user.email, avatar: user.avatar }));
               setUsersList(prev => ({ ...prev, isLoading: true, current_page: res.page, total_page: res.total_pages, items: usersList }));
           })
           .catch(err => {
               setUsersList(prev => ({ ...prev, error: true, isLoading: true }));
           });
    },[]);

    return <Provider value={users}>{children}</Provider>;
};

export default UsersContext;
export { UserProvider, Consumer as UserConsumer };
