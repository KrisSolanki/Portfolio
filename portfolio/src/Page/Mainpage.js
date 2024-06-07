// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content'
import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader/Loader';



const Mainpage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
        ) : (
    <div>
          <Navbar/>
          {/* <Rside/> */}
          {/* <Side/> */}
          <Content/>
    </div>
          )}
        </>
  )
}

export default Mainpage
