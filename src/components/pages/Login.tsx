import { Link } from "react-router-dom";
import {api} from "./adib.tsx";
import { useEffect, useState } from "react";


export default function Login(){
    
    useEffect(() =>{
        Mobilelogin();
    },[])
    
    const handelInput = (event:any) => {
        setMobile(event.target.value);
    }
    const [mobile, setMobile] = useState('');
    
    function Mobilelogin(){
        
        console.log(mobile);
        // const Input =(document.getElementsByName('EM') [0] as HTMLInputElement).value
        api.login.login(mobile).then((res) =>{
            console.log(res);
        })
        // .catch((error) =>{
        //     console.error("ERROR:",error);
        // })
    }


    return(
        <div className="login-container">
            <div className="sidbarlogin">
                <img src="https://adibeshgh.com/assets/logo.7df3b54d.svg"/>
                <input type="text" placeholder="شماره تلفن  یا ایمیل" value={mobile} onChange={handelInput}/>
                <input type="submit" value='ارسال' onClick={Mobilelogin}/>
                <div>
                    <Link to=''>ثبت نام</Link>
                </div>
            </div>
            <div className="imagelogin">
                <img src="https://adibeshgh.com/assets/wallpaper.17038905.png"/>
            </div>
        </div>
    )
}




