import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../img/Logo3_strimz.png';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';
import './Navbar.css'
import profile from '../../img/profileLogo.png'

const NavBar = () => {

  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setRegisterFormOpen] = useState(false);
  

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
    setRegisterFormOpen(false);
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);

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
  const handleMyProfileClick = () => navigate('/profile');
 

  return (
    <>
      <img src={image} alt="StrimZ" className='image-logo'  onClick={handleClick} />
      <div className="header-buttons">
        <button className='button-login' onClick={handleOpenLoginForm}>Login</button>
        <button className='button-signup' onClick={handleOpenRegisterForm}>Sign Up</button>
        <img
            
            src={profile}
            alt="My Profile"
            className="profile-image"
            onClick={handleMyProfileClick}
          />
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