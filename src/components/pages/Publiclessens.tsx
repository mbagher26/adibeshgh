import { useLocation } from 'react-router-dom';
import { api } from './adib.js';


export default function Publiclessens(){

    const location = useLocation();

    
    function Publiclessens(){
        
        api.c.getPublicLessons({courseId,sectionId}:{courseId:Number,sectionId:Number}).then((res) =>{

        })
    }
    return(
        <>

        </>
    )
    
}