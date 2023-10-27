import { Link, NavLink } from "react-router-dom";
import './Header.css'
import Search from "./pages/search";
import { api } from './pages/adib.js';
import { useEffect, useState } from "react";


export default function Header() {


    useEffect(() => {

        category();

    }, [])


    const [show, setShow] = useState<boolean>();
    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])


    function category() {

        api.c.getCategorizedCourseList().then((res) => {

            console.log(res.data.result);
            if (res.data.result) {
                setCourselist(res.data.result);
            }

        }).catch((error) => {

            console.error('Error:', error);
        })
    }


    function handelclick() {
        setShow(!show);
    }
    return (
        <>
            <nav>
                <section className="header-top">
                    <NavLink to='/login' className="loginkey">
                        ثبت نام|ورود
                    </NavLink>
                    <div className="contact">
                        <p>شماره تماس: ۰۳۵-۸۶۵۴۵۵۶۷</p>
                    </div>

                    <div>
                        <Search />
                    </div>

                    <NavLink to='/' className="logo">
                    </NavLink>


                </section>
                <section className="header-low">
                    <button onClick={handelclick}>
                        <p>دسته بندی</p>
                        {/* <div className="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                    </button>
                </section>
            </nav>
            {show && <div className="boxgrouping">
                {
                    courselist.map((item) =>
                        <div className="grouping-div" key={item.ID}>

                            <Link className="link-title" to=''>{item.Title}</Link>

                        </div>
                    )
                }
            </div>
            }
            <div style={{clear:"both"}}></div>
        </>
    )
}