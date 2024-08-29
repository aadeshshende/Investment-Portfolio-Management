import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'top', height: '12vh' }}>
        <img src="default-monochrome.svg" alt="logo" style={{width:'350px', height:'150px'}}/>
      </div>
      <div className="container text-center mt-5" style={{color:'#004080'}}>
      <h1 className="display-5"><b>Invest in everything</b></h1>
        <h3>Online platform to invest in stocks, derivatives, mutual funds, and more</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="homepagepic.png" alt="homepagepic" style={{ width: '1000px', height: '300px' }}/>
      </div>
      <div className="container text-center mt-5">
        <Link to="/loginregister" className="btn btn-primary btn-lg mt-3"><strong><b>Get Started</b></strong></Link>
      </div>
    </div>
  );
};

export default HomePage;
