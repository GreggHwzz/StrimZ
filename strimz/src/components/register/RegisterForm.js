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
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;