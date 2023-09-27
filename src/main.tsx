import Adib from './components/pages/adib';
import Course from './components/pages/course';
import "./App.css";
import CourseSection from './components/pages/coursesections';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import Search from './components/pages/search';
import About from './components/pages/about';
import Header from './components/Header';
import App from './App';



const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
















