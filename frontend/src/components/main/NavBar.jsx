import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NavBar = () => {

  const navigate = useNavigate();
  const [logoClick, setLogoClick] = useState(false);
  const [registerClick, setRegisterClick] = useState(false);

  const logoBtn = () => {
    setLogoClick(true);
  }

  const registerBtn = () => {
    setRegisterClick(true);
  }

  useEffect(() => {
    if (logoClick) {
      navigate('/');
      setLogoClick(false);
    } else if (registerClick) {
      navigate('/register');
      setRegisterClick(false);
    }
  }, [logoClick, registerClick])

  return (
    <div className='nav-bar'>
      <div className='space-between'>
        <div onClick={logoBtn}>
          <img className='logo-size' src={logo} alt='logo' />
        </div>
        <Button onClick={registerBtn} className="register-button" style={{ fontFamily: "Arial", textTransform: 'capitalize' }} color="secondary" variant="contained"> Register </Button>
      </div>
    </div>
  );
}

export default NavBar;