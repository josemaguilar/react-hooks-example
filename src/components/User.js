import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getSingleUser } from "../services/user-service";


const User = ({  }) => {
    const [user, setUser] = useState({details: {}, isLoaded: false});
    const urlParams = useParams();

    useEffect(() => {
        getSingleUser(urlParams.id)
            .then(res => {
                const userDetail = ({ id: res.data.id, first_name: res.data.first_name, last_name: res.data.last_name });
                setUser(prev => ({ ...prev, details: userDetail, isLoaded: true }));
            })
            .catch(err => {
                setUser(prev => ({ ...prev, error: true, isLoaded: true }));
            });
    }, []);

    const getUser = () => {
        return (
            <ul>
                <li>ID: {user.details.id}</li>
                <li>First Name: {user.details.first_name}</li>
                <li>Last Name: {user.details.last_name}</li>
            </ul>
        )
    };

    return (
        <div>
            <Link to="/" >Volver</Link>
            {
                user.isLoaded
                    ? getUser()
                    : 'Cargando....'

            }
        </div>
    );
}

export default withRouter(User);
