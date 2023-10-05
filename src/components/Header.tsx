import { NavLink } from "react-router-dom"
import './Header.css'
import Search from "./pages/search";

export default function Header(){
    

    return(
        <nav >
            <NavLink to='/login' className="loginkey">
                ورود
            </NavLink>

            <ul>
                <li>
                    <NavLink to='/about'>درباره ما</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>تماس با ما</NavLink>
                </li>
                <li>
                    <NavLink to='/radio'>رادیوادیب</NavLink>
                </li>
            </ul>
            {/* <div>
                <input type="text" name="phrase"/>
                <input type="button" value='جستجو' onClick={handelSearchClick} />
            </div> */}
            <div>
                <Search/>
            </div>

            <NavLink  to='/' className="logo">
                <img src="http://adibeshgh.com/assets/logo.7df3b54d.svg" />
            </NavLink>
        </nav>
    )
}



