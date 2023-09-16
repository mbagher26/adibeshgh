import React from 'react'

import App from './App.tsx'
import './index.css'

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,
         RouterProvider,
         } from "react-router-dom";

import CoursePublicSections from "./components/coursepublicsection";

const router = createBrowserRouter([{
    path:"/",
    element:<CoursePublicSections/>
}])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
