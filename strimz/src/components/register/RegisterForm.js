import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({onClose}) {
  const [isPopupOpen, setPopupOpen] = useState(true); // Affichez le popup par défaut

  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };

  return (
    <div className={`RegisterForm ${isPopupOpen ? 'popup-open' : ''}`}>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-inner">
            <span className="close-button" onClick={handleClosePopup}>
              &times;
            </span>
            <h2>Register</h2>
            {/* Ajoutez ici les champs de votre formulaire */}
            <form>
              <input type="text" id="username" name="username" placeholder='Username' className='register-placeholder'/>
              <br/>
              <input type="text" id="email" name="email" placeholder='Email' className='register-placeholder'/>
              <br/>
              <input type="password" id="password" name="password" placeholder='Password' className='register-placeholder'/>
              <br/>
              <button type="submit" className='register-button'>Register</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;