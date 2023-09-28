import {api} from "./adib.tsx"
export default function Login(){

    function Mobilelogin(){

        api.login.login(mobile:String).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.error("ERROR:",error);
        })
    }
    return(
        <>

        </>
    )
}




