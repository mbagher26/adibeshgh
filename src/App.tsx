
import { Route, RouterProvider, Routes ,createBrowserRouter, Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Adib from './components/pages/adib';
import Course from './components/pages/course';
import CourseSection from './components/pages/coursesections';
import Search from './components/pages/search';
import About from './components/pages/about';
import React from 'react';


function App() {

  return (
    <>
      <div>        
        <Header/>
      </div>
      <div>
        <Routes>
          <Route path=''/>

           
        </Routes>       
      </div>
    </>
  )
}

export default App

