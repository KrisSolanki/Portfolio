// Loader.js

import React from 'react';
import './Loader.css';
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="loader-container">
      {/* <div className="circle-container">
        <div className="circle">
          <div className="inner-circle">K</div>
        </div>
      </div> */}
      <PacmanLoader
  color="#0ba668"
  size={45}
/>
 
    </div>
  );
};

export default Loader;
