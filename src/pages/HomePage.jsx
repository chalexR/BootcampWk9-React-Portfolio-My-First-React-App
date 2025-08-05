// HomePage.js
import React from 'react';
import { useState } from 'react';
import Professional from '../pages/home/Professional';

const HomePage = () => {

  const [info, setInfo] = useState("Professional");

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content of the home page.</p>
      <div>
        <div>
          <span onClick={() => setInfo("Professional")}>Professional</span>
          <span onClick={() => setInfo("Design")}>Design</span>
          <span>Coding</span>
          <span>Consulting</span>
        </div>
        <div>
          {info === "Professional" && <Professional />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
