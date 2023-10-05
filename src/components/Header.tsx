import { NavLink } from "react-router-dom"
import './Header.css'
import Search from "./pages/search";

export default function Header() {


    return (
        <>        
        <nav >
            <NavLink to='/login' className="loginkey">
                ثبت نام|ورود
            </NavLink>
            <div>
                <p>شماره تماس: ۰۳۵-۸۶۵۴۵۵۶۷</p>
            </div>

            <div>
                <Search />
            </div>

            <NavLink to='/' className="logo">
            </NavLink>

        </nav>
        <nav className="navmenu">
            <NavLink to=''>
                <p style={{color:'white'}}>دسته بندی</p>
                <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        
                </div>
            </NavLink>
                    </nav>
            
        </>
    )
}



