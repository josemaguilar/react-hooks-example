import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { UsersProvider } from "./contexts/users.context";
import { SingleUserProvider } from "./contexts/singleUser.context";
import App from './App';
import User from './components/User';

const Main = () => (
    <UsersProvider>
        <SingleUserProvider>
            <Router>
                <Switch>
                    <Route path="/" component={App} exact={ true }/>
                    <Route path="/users/:id" component={User} exact={true} />
                </Switch>
            </Router>
        </SingleUserProvider>
    </UsersProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
