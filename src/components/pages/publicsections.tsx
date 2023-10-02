import { api } from './adib.js';

export default function Publicsections(){

    function getAgeCategoryCourses(AgeCategoryId:number){

        api.c.getAgeCategoryCourses(AgeCategoryId).then((res) =>{
            console.log(res);
        })
    }
    
}