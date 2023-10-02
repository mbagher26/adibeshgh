import { api } from './adib.js';
import { useEffect } from 'react';

export default function AgeCategoryCourses(){

    useEffect(() =>{
        AgeCategoryCourses(6);
    },[])

    function AgeCategoryCourses(AgeCategoryId:number){

        api.c.getAgeCategoryCourses(AgeCategoryId).then((res) =>{
            console.log(res.data.result);
        })
    }
    return(
        <>
        </>
    )
    
}
