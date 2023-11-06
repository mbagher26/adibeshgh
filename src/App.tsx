
import { createContext, useContext } from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Adib from './components/pages/adib';
import Course from './components/pages/course';
import Search from './components/pages/search';
import About from './components/pages/about';
import Login from './components/pages/Login';
import Publiclessens from './components/pages/Publiclessens';
import AgeCategoryCourses from './components/pages/AgeCategoryCourses';
import "./Login.css";
import './App.css';
import './mobile.css';
import './tablet.css';
import './normal.css';
function App() {

  const AppContext = createContext(null);

  return (
    <>
   
      <div>        
        <Header/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Adib/>}/>
          <Route path='/home'  element={<Navigate replace to='/'/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/course/:courseId' element={<Course/>}>
          
            <Route path='section/:sectionId' element={<Publiclessens/>}/>
            
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/ageCategoryCourses/:categoryId' element={<AgeCategoryCourses/>}/>
        </Routes>       
      </div>
      <div>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
