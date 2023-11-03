import React, { useState } from 'react';
import fb from "../img/facebook.png"
import tt from "../img/tic-tac.png"
import ytb from "../img/youtube.png"
import inst from "../img/instagram.png"
import x from "../img/twitter.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category:'',
  });

  const [activeButton, setActiveButton] = useState(null);

  const handleCategoryClick = (category) => {
    setFormData({
      ...formData,
      category: category,
    });
    setActiveButton(category);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = JSON.stringify(formData);
    localStorage.setItem('contactData', json);
    console.log('Données du formulaire sauvegardées en JSON :', json);
    setFormData({
      name: '',
      email: '',
      message: '',
      category: '',
    });
    setActiveButton(null);
  };

  const isActive = (category) => activeButton === category;

  return (
    <main>
      <div className='contact-form'>
       
        <h1>Contact us</h1>
        <h3>-Any Question ?</h3>
        <div className='content'>
        <div>
          {['Problem', 'Development', 'Recruitment', 'Artist support', 'Others'].map((category) => (
            <button
              key={category}
              type="button"
              className={isActive(category) ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
          </div>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Your name'
              value={formData.name}
              onChange={handleChange}
            />
          
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Your mail'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder='What do you want ? Ask us.'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Send Request</button>
        </form>
        </div>
        <div className="third-content">
          <ul>
            <li><a href="./About">About</a></li>
            <li><a href="./Contact">Contact</a></li>
            <li><a href="./PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="./Terms">Terms</a></li>
          </ul>
          <ul>
            <li><a href="http://localhost:3000/about"><img src={fb} alt="Facebook"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={inst} alt="Instagram"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={ytb} alt="Youtube" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={tt} alt="Tik-tok" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={x} alt="Twitter"  class="hoverable-image" width="40px" height="auto"></img></a></li>
          </ul>
          <span>© 2023, TV Time, EFREI Students</span>
          </div>
      </div>
    </main>
  );
}