import React from 'react'
import './App.css';
import {Header,AboutUs,SpecailMenue,Chef,Intro,Laurels,Gallery,FindUs,Footer } from'./container'
import { Navbar } from './components';

function App() {
  return (
    <div>
                            <div>
                              <Navbar/>
                              <Header/>
                            </div>
        <AboutUs/>
        <SpecailMenue/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUs/>
    <Footer/>
     
  
  
  
 
 
    </div>
  )
}

export default App