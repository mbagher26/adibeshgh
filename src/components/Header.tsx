import { Link } from "react-router-dom"

export default function Header(){
    
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/about'>درباره ما</Link>
                </li>
                <li>
                    <Link to='/home'>خانه</Link>
                </li>
                <li>
                    <Link to='/search'>جستحو</Link>
                </li>
                <li>
                    <Link to='/radio'>رادیوادیب</Link>
                </li>
            </ul>
        </nav>
    )
}

