import React, { useState } from 'react';
import NavBar from './components/Navbar';
import './App.css';

function App() {
 

  return (
    <div >
      <header>
        <NavBar/> 
      </header>
      <main>
          <div className='main-content'>
            <div className='presentation'>
              <h1> Become the best music critic ! Keep track of your listenings !</h1>
            </div>
          </div>
          
      </main>
    </div>
  );
}

export default App;