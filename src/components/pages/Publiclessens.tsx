import { useLocation } from 'react-router-dom';
import { api } from './adib.js';
import { useEffect } from 'react';

export default function Publiclessens(){

    const location = useLocation();
    console.log('2id:',location.state);
    const courseId = location.state[0];
    const sectionId = location.state[1];

    useEffect(()=>{
        Publiclessens({courseId,sectionId});
    },[])

    function Publiclessens({courseId,sectionId}:{courseId:number,sectionId:number}){
        
        api.c.getPublicLessons(courseId,sectionId).then((res) =>{
            console.log('publiclessens:',res.data.result);
        })
    }
    return(
        <>
            <p>thiis is public lessens</p>
        </>
    )
    
}