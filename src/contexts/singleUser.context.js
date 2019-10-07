import React, { createContext, useEffect, useState } from 'react';
import {  getSingleUser } from "../services/user-service";

const SingleUsersContext = createContext();
const { Provider, Consumer } = SingleUsersContext;


const SingleUserProvider = ({ children }) => {
    const [user, setUser] = useState({ isLoading: false, error: false, detail: [] });

    useEffect(() => {
        getSingleUser(1)
            .then(res => {
                const userDetail = res.data.map(user => ({ id: user.id, first_name: user.first_name, last_name: user.last_name }));
                setUser(prev => ({ ...prev, detail: userDetail }));
            })
            .catch(err => {
                setUser(prev => ({ ...prev, error: true, isLoading: true }));
            });
    },[]);

    return <Provider value={user}>{children}</Provider>;
};

export default SingleUsersContext;
export { SingleUserProvider, Consumer as UserConsumer };
