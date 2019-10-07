import React, { Component, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import SingleUsersContext from "../contexts/singleUser.context";


class User extends Component {

    render() {
        console.log('____', this.props)
        return <p>{'Cargando....' }</p>
    }
}

export default withRouter(User);
