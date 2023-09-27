import Adib from './components/adib';
import Course from './components/course';
import "./App.css";
import CourseSection from './components/coursesections';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import Search from './components/search';
import About from './components/about';
import Header from './components/Header';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Adib />,
  },
  {
    path: '/home',
    element: <Navigate replace to='/' />,
  },
  {
    path: '/course',
    element: <Course />,
    children: [
      {
        path: ":courseId",
        element: <CourseSection />,
      },
    ],
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/about',
    element: <About />
  }
]);


const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <RouterProvider router={router}/>

      </BrowserRouter>
      
    </React.StrictMode>
  );
}
















