// // Loader.js

// import React from 'react';
// import './Loader.css';
// import { PacmanLoader } from 'react-spinners'

// const Loader = () => {
//   return (
//     <div className="loader_container">
//      <div className="K">

//      K
//     </div>
//      <div className="circle">

//      </div>
//       {/* <PacmanLoader
//   color="#0ba668"
//   size={45}
// /> */}
 
//     </div>
//   );
// };

// export default Loader;


import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="K">K</div>
      <div className="circle">
        <svg className='svg_loader' viewBox="0 0 200 200">
          <circle
            className="circle-progress"
            cx="100"
            cy="100"
            r="94"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;

