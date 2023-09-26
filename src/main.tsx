import Adib from './components/adib';
import Course from './components/course';
import "./App.css";
import CourseSection from './components/coursesections';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import Search from './components/search';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Adib />,
  },
  {
    path:'/home',
    element:<Navigate replace to='/'/>,
  },
  {
    path:'/course',
    element:<Course />,
    children: [
      {
        path: ":courseId",
        element: <CourseSection />,
      },
    ],
  },
  {
    path:'/search',
    element:<Search />,
  }
]);


const root = document.getElementById('root');

if(root){
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
}



  
  











