import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../img/Logo3_strimz.png';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';
import './Navbar.css'

const NavBar = () => {

  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setRegisterFormOpen] = useState(false);
  

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
    setRegisterFormOpen(false);
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);
    navigate('/profile'); 
  };

  const handleOpenRegisterForm = () => {
    setRegisterFormOpen(true);
    setLoginFormOpen(false);
  };

  const handleCloseRegisterForm = () => {
    setRegisterFormOpen(false);
  };

  const navigate = useNavigate();
  const handleClick = () => navigate('/');

 

  return (
    <>
      <img src={image} alt="StrimZ" className='image-logo'  onClick={handleClick} />
      <div className="header-buttons">
        <button className='button-login' onClick={handleOpenLoginForm}>Login</button>
        <button className='button-signup' onClick={handleOpenRegisterForm}>Sign Up</button>
      </div>
      {isLoginFormOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <LoginForm onClose={handleCloseLoginForm} />
          </div>
        </div>
      )}
      {isRegisterFormOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <RegisterForm onClose={handleCloseRegisterForm} />
          </div>
        </div>
      )}
    </>
    
  );
};

export default NavBar;