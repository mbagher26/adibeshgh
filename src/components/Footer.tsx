import { NavLink } from "react-router-dom";

export default function Footer(){


    return(
        <>
            <nav>
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
        </>
    )
}