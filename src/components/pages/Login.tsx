import { Link } from "react-router-dom";
import {api} from "./adib.tsx";
import { useEffect } from "react";


export default function Login(){

    useEffect(() =>{
        Mobilelogin();
    },[])

    function Mobilelogin(){
        const Input =(document.getElementsByName('EM') [0] as HTMLInputElement).value
        api.login.login(Input).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.error("ERROR:",error);
        })
    }


    return(
        <div className="container">
            <div className="sidbarlogin">
                <img src="https://adibeshgh.com/assets/logo.7df3b54d.svg"/>
                <input type="text" name="EM" placeholder="شماره تلفن  یا ایمیل"/>
                <input type="submit" value='ارسال'/>
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




