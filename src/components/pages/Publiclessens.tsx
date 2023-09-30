import { useLocation } from 'react-router-dom';
import { api } from './adib.js';
import { useEffect, useState } from 'react';

export default function Publiclessens(){

    interface LessonModel {
        /** Lesson's id */
        ID?: number;
        /** Lesson's title */
        Title: string;
        /** Lesson's description */
        Description?: string;
        /** Lesson's course id */
        CourseId?: number;
        /** Lesson's section id */
        SectionId?: number;
        /** Course Model */
        /** Lesson's privacy */
        Public?: number;
        /** Lesson's date */
        Date?: string;
        /** Lesson's Ordering */
        Ordering?: number;
      }


    const [publiclessens,setPubliclessens] = useState<LessonModel[]>();

    const location = useLocation();
    
    const courseId = location.state[0];
    const sectionId = location.state[1];

    useEffect(()=>{
        Publiclessens({courseId,sectionId});
    },[])

    function Publiclessens({courseId,sectionId}:{courseId:number,sectionId:number}){
        
        api.c.getPublicLessons(courseId,sectionId).then((res) =>{
            console.log('publiclessens:',res.data.result);
            setPubliclessens(res.data.result);
        })
    }
    return(
        <> 
            <div>
                {publiclessens?.map((response) =>
                    <div>
                        
                        <p>{response.Description}</p>
                        <p>{response.Title}</p>
                        <hr/>
                    </div>
                )}
            </div>
        </>
    )  
}