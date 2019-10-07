import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import UsersContext from "./contexts/users.context";

function App() {
  const { total_page, isLoading, items } = useContext(UsersContext);

  const getUsers = () => {
    return items.map(user => {
      return <li key={user.id}><Link to={ `/users/${user.id}` }>
        <span><img src={user.avatar} alt=""/></span>
        <p>{ user.email }</p>
      </Link></li>
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Total page: { total_page }</p>

        <ul>
          {
            isLoading ?  getUsers() : 'Spinner'
          }
        </ul>


      </header>
    </div>
  );
}

export default App;
