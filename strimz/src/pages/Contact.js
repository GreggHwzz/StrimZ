import React, { useState } from 'react';

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
        <div>
          {['Problem', 'Idea development', 'Recruitment', 'Artist Support', 'Others'].map((category) => (
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
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  );
}