import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer(){


    return(
        
            <nav className="container">
                
                <NavLink to=''>
                    فروشگاه
                </NavLink>

                <NavLink to=''>
                    درباره ما
                </NavLink>


                <NavLink to=''>
                    قوانین
                </NavLink>
            </nav>
        
    )
}