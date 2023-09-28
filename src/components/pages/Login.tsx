import { Link } from "react-router-dom";
import {api} from "./adib.tsx";
import { useEffect } from "react";
export default function Login(){

    function Mobilelogin(){
        
        api.login.login(mobile:String).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.error("ERROR:",error);
        })
    }

    useEffect(() =>{
        
    },[])
    return(
        <>
            <div>
                <img src="https://adibeshgh.com/assets/logo.7df3b54d.svg"/>
                <input type="text" id='EM' placeholder="شماره تلفن  یا ایمیل"/>
                <input type="submit" placeholder="ارسال"/>
                <div>
                    <Link to=''>ثبت نام</Link>
                </div>
            </div>
            <div>
                <img src="https://adibeshgh.com/assets/wallpaper.17038905.png"/>
            </div>
        </>
    )
}




