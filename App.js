import React, { useState, useEffect } from "react";
import './App.css';
import FPCounter from './FPComponents/FPCounter';
import FPHeader from './FPComponents/FPHeader';
import './Common.css';
import Test from './Test';
import Home from './FPComponents/Home';
import About from './FPComponents/About';
import { Route, Routes, useLinkClickHandler } from 'react-router-dom';
import Header from "./Header";
import Errorpage from "./FPComponents/Errorpage";
import Calculator from "./FPComponents/Calculator";
import Pokemon from "./FPComponents/Pokemon";
import Array from "./FPComponents/Array";
import HtmlCssJS from "./HtmlCssJSComponent/HtmlCssJS";
// import HtmlCssJScss from './HtmlCssJSComponent/HtmlCssJScss';



function App() {
  const [toggle, updatedtoggle] = useState(false);
  //   useEffect(()=>{
  //     window.alert("I am clicked.....")
  // });
 //Hi
  return (
    <>
    
      <div className="main">
    <FPHeader />
    <FPCounter />
    </div> 
    <div>
      <button onClick={()=>{updatedtoggle(!toggle)}}>Toggle</button>
      { toggle && <Test/> }
    </div>

      <Routes >
        <Route path="/" element={<FPHeader />} />
        <Route path="/NormalHeader" element={
          <>
            <FPHeader />
            <Header />
          </>} />
        <Route path="/Home" element={
          <>
            <FPHeader />
            <Home />
          </>
        }
        />
        <Route path="/About" element={
          <>
            <FPHeader />
            <About />
          </>} />
        <Route path='*' element={<Errorpage />} />
        <Route path="/Calculator" element={
          <>
            <FPHeader />
            <Calculator />
          </>} />
          <Route path="/HtmlCssJS" element={
          <>
            <FPHeader />
            <HtmlCssJS />
          </>} />
          <Route path="/Pokemon" element={
            <>
            <FPHeader />
            <Pokemon/>
            </>
          }/>
          <Route path="/Array" element={
            <>
            <FPHeader />
            <Array/>
            </>
          }/>
      </Routes >
    </>
  );
}

export default App;
