import React, { Fragment } from 'react';
import Navbar from './app/components/navbar/Navbar';
import Footer from './app/components/footer/Footer';
import Home from './app/pages/home/Home'
function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
