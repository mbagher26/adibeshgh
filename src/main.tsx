import React from 'react';
import Adib from './components/adib';
import CoursePublicSections from './components/coursepublicsection';
import './App.css';
import * as ReactDOM from "react-dom";


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<Adib />} />
      <Route path='/home' element={<Navigate replace to="/" />} />
      <Route path='/course' element={<CoursePublicSections />} />
    </Routes>
  </Router>,

  document.getElementById('root')
);






