import { Link } from "react-router-dom"

export default function Header(){
    
    return(
        <>
            <Link to='/search'>جستجو</Link>
            <Link to='/about'>درباره ما</Link>
            <Link to='/radio'>رادیوادیب</Link>
            <Link to='/home'>خانه</Link>
        </>
    )
}

