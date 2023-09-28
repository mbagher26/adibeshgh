import { useEffect, useState } from 'react';
import {api} from './adib.tsx';


export default function Login(){

    const [formdata,setFormdata] = useState<{mobile:string|undefined,name:string|undefined,family:string|undefined,birthdate:string|undefined,cityId:number|undefined}>(
        {
        mobile: "",
        name: "",
        family: "",
        birthdate: "",
        cityId: undefined,
        }
    );
    
    useEffect(()=>{
        Logining();
    },[]);

    function Logining(){

        api.login({mobile:String,name:String,family:String,birthdate:String,cityId:Number}).then((res) =>{

            if(res && res.message){
                console.log(res.message);
            }

        }).catch((error) => {
            console.error("Api call failed:",error)
        });
    }
        
    return(
        <>
            <label>شماره موبایل</label>
            <input value={formdata.mobile} type='text' placeholder='09133510000' id='mobile'/>
            <label>نام</label>
            <input value={formdata.name} type='text' placeholder='محمد' id='name'/>
            <label>فامیل</label>
            <input value={formdata.family} type='text' placeholder='ارجمند' id='family'/>
            <label>تاریخ تولد</label>
            <input value={formdata.birthdate} type='text' placeholder='1376/01/26' id='birthdate'/>
            <label>شهر</label>
            <input value={formdata.cityId} type='text' placeholder='یزد' id='cityId'/>
            <input type='button' />
        </>
    )
}




