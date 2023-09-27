import { useState } from 'react';
import {api} from './adib.tsx';
export default function Login(){

    
    api.login({mobile,name,family,birthdate,cityId}:{mobile:String,}).then((res) =>{

        console.log(res.data.result);

    })

    return(
        <>
            <label>شماره موبایل</label>
            <input type='text' placeholder='09133510000' name='mobile'/>
            <label>نام</label>
            <input type='text' placeholder='محمد' name='name'/>
            <label>فامیل</label>
            <input type='text' placeholder='ارجمند' name='family'/>
            <label>تاریخ تولد</label>
            <input type='text' placeholder='1376/01/26' name='birthdate'/>
            <label>شهر</label>
            <input type='number' placeholder='یزد' name='city'/>
            <input type='button' onClick={}/>
        </>
    )
}