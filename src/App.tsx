
import { Route, Routes , Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Adib from './components/pages/adib';
import Course from './components/pages/course';
import Search from './components/pages/search';
import About from './components/pages/about';
import Login from './components/pages/Login';
import "./Login.css";

function App() {

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
          <Route path='/course' element={<Course/>}/>
          <Route path='/login' element={<Login/>}/>          
        </Routes>       
      </div>
    </>
  )
}

export default App




