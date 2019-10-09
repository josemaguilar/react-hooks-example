import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { UsersProvider } from "./contexts/users.context";
import App from './App';
import User from './components/User';

const Main = () => (
    <UsersProvider>
        <Router>
            <Switch>
                <Route path="/" component={App} exact={ true }/>
                <Route path="/users/:id" component={User} exact={true} />
            </Switch>
        </Router>
    </UsersProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
