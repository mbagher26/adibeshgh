import { useEffect, useState } from "react";
import {api} from "./adib.tsx";



export default function CoursePublicSections(){


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
        getCoursePublicSections(1);

      },[])
   function getCoursePublicSections(id:number){

    api.c.getCoursePublicSections(id).then((res) =>{

        console.log('coursepublicsection:',res.data.result)
        setCoursepublic(res.data.result);
    }).catch((error) =>{
        console.error('Error:',error);
    })
    
   }


   return(

    <div>
        {
            coursepublic?.map((item) =>
                <div>
                    {item.CourseID}
                    {item.Description}
                    {item.ExamCount}
                    
                </div>
            )
        }
    </div>

   )

}

