import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
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

    const {courseId,sectionId} = useParams();
    const CourseId:number = Number(courseId);
    const SectionId:number = Number(sectionId);
    console.log({courseId,sectionId});

    const ssss = useParams();
    useEffect(()=>{
        Publiclessens({CourseId,SectionId})
    },[SectionId,CourseId])
    console.log('sss',ssss);
    
    
    function Publiclessens({CourseId,SectionId}:{CourseId:number,SectionId:number}){
        
        api.c.getPublicLessons(CourseId,SectionId).then((res) =>{
            console.log('publiclessens:',res.data.result);
            setPubliclessens(res.data.result);
        })
    }
    return(
        <> 
            <div className='divcontainer'>
                {publiclessens?.map((response) =>
                    <div key={response.ID} className='publiclessens'>                     
                        <p style={{direction:'rtl'}}>{response.Description}</p>
                        <p>{response.Title}</p>
                    </div>
                )}
            </div>
        </>
    )  
}


