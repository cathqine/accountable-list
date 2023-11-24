import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import { useScrollTrigger } from '@mui/material';

const NavBar = () => {

  const navigate = useNavigate();
  const [logoClick, setLogoClick] = useState(false);

  const beenClickedOn = () => {
    setLogoClick(true);
  }

  useEffect(() => {
    if (logoClick) {
      navigate('/'); // goes to main page
    }
  }, [logoClick])

  return (
    <div className='nav-bar'>
      <div className='space-between'>
        <div onClick={beenClickedOn}>
          <img className='logo-size' src={logo} alt='logo' />
        </div>
        <Button> Register </Button>
      </div>
    </div>
  );
}

export default NavBar;