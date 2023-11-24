import React from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
// pages
import AccountAList from '../pages/AccountAList';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Main = () => {
  const location = useLocation().pathname;
  console.log(location);

  const ternary = (
    location === '/' ? <AccountAList /> : // if 
      location === '/register' ? <Register /> : // else if 
        location === '/login' ? <Login /> : // else if
          <AccountAList />
  );

  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          {ternary}
        </header>
      </div>
    </>
  )
}

export default Main;