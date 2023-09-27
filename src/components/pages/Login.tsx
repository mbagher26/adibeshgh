import {api} from './adib.tsx';
export default function Login(){

    api.login({mobile,name,family,birthdate,cityId}:{mobile:String,}).then((res) =>{

        console.log(res.data.result);
        
    })
}