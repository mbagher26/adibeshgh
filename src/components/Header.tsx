import { Link, NavLink } from "react-router-dom"
import './Header.css'

export default function Header(){
    
    return(
        <nav >
            <NavLink  to='/' className="title">
                ادیب عشق
            </NavLink>
            <ul>
                <li>
                    <NavLink to='/about'>درباره ما</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>تماس با ما</NavLink>
                </li>
                <li>
                    <NavLink to='/search'>جستحو</NavLink>
                </li>
                <li>
                    <NavLink to='/radio'>رادیوادیب</NavLink>
                </li>
            </ul>
        </nav>
    )
}



