import { ReactNode, useEffect, useState } from "react"
import { Api, HttpResponse } from "../api/adib-api"
import { ResponseModel,UserModel } from "../api/adib-api";

export default function Adib(){

    const [mobile,setMobile] = useState<string>('');
    const [name,setName] = useState<string>('');

    const [reguest,setReguest] = useState< {
    message?: ResponseModel | undefined;
    result?: UserModel | undefined;
    ums?: string | undefined;
}>();

    const api = new Api({ baseUrl :"https://api.adibeshgh.com"})


    useEffect(() => {
        // test();
    },[])


    function login(){

        api.login().then(() => {

        })
    }

    function test(){
        api.c.
        api.c.addToFamily(mobile,name).then((res) => {
            console.log('res:',res.data);
            
            setReguest(res.data);
        }).catch((error) =>{
            console.error('Error:',error);
        })
        
    }

    return(

        <section>
            <div>
                <label>mobile:</label>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                <br />
                <label>name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <input type="submit" value="submit" name="test" onClick={test}/>
            </div>
        </section>

    )

}


