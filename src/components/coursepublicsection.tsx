import { useEffect, useState } from "react";
import {api} from "./adib.tsx";
import { useLocation } from "react-router-dom";

export default function CoursePublicSections(){

    const location  = useLocation();
    
    console.log('data:',location.state.data)
    

    const [coursepublic,setCoursepublic] = useState<{

        ID?: number | undefined,
        Title: string | undefined,
        CourseID?: number | undefined,
        Description?: string | undefined,
        ExerciseCount?: number | undefined,
        LessonCount?: number | undefined;
        ExamCount?: number | undefined,
        NewLessons?: number | undefined,
        
      }[]>();


      useEffect(() =>{

        getCoursePublicSections(location.state.data);

      },[])


   function getCoursePublicSections(id:number){
    api.c.getCoursePublicSections(id).then((res) =>{

        console.log('coursepublicsection:',res.data.result);
        
        setCoursepublic(res.data.result);
    }).catch((error) =>{
        console.error('Error:',error);
    })
   }


   return(

    <div>

        <p>cousrse public section page</p>
        {
            coursepublic?.map((item) =>
                <div>
                    <p>courseid:{item.CourseID}</p>
                    
                    <p>ID:{item.ID}</p>
                    
                    

                    <button className="coursepublic">

                    <h2>{item.Title}</h2>
                    
                    <p>{item.Description}</p>

                    <div>
                        <p>{item.LessonCount } </p>
                    </div>
                    
                    </button>
                     
                </div>
            )
        }
    </div>
   )
   
}

