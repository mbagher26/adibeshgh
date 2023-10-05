import { NavLink } from "react-router-dom"
import './Header.css'
import Search from "./pages/search";

export default function Header() {


    return (
        <>        <nav >
            <NavLink to='/login' className="loginkey">
                ثبت نام|ورود
            </NavLink>
            <div>
                <p>شماره تماس: ۰۳۵-۸۶۵۴۵۵۶۷</p>
            </div>
            {/* <div>
                <input type="text" name="phrase"/>
                <input type="button" value='جستجو' onClick={handelSearchClick} />
            </div> */}
            <div>
                <Search />
            </div>

            <NavLink to='/' className="logo">
            </NavLink>

        </nav>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>

    )
}



