import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({onClose}) {
  const [isPopupOpen, setPopupOpen] = useState(true); // Affichez le popup par défaut

  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };

  return (
    <div className={`LoginForm ${isPopupOpen ? 'popup-open' : ''}`}>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-inner">
            <span className="close-button" onClick={handleClosePopup}>
              &times;
            </span>
            <h2>Login</h2>
            
            <form>
              <input type="text" id="username" name="username" placeholder='Username' className='login-placeholder'/>
              <br/>
              <input type="password" id="password" name="password" placeholder='Password' className='login-placeholder'/>
              <br/>
              <button type="submit" className='login-button'>Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;