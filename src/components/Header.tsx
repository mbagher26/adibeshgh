import { Link } from "react-router-dom"

export default function Header(){
    
    return(
        <nav>
            <ul>
                <li>
                    <Link to=''>درباره ما</Link>
                </li>
                <li>
                    <Link to=''>خانه</Link>
                </li>
                <li>
                    <Link to=''>جستحو</Link>
                </li>
                <li>
                    <Link to=''>رادیوادیب</Link>
                </li>
            </ul>
        </nav>
    )
}

