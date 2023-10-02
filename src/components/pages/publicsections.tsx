import { api } from './adib.js';
import { useEffect } from 'react';
export default function Publicsections(){

    useEffect(() =>{
        getAgeCategoryCourses(6);
    },[])

    function getAgeCategoryCourses(AgeCategoryId:number){

        api.c.getAgeCategoryCourses(AgeCategoryId).then((res) =>{
            console.log(res);
        })
    }
    
}