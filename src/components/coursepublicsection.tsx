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
      const [coursesection,setCoursesection] = useState<{
        /** Section's id */
        ID?: number | undefined;
        /** Section's Title */
        Title: string;
        /** Section's CourseId */
        CourseID?: number | undefined;
        /** Section's description */
        Description?: string | undefined;
        /** Section's exercise count */
        ExerciseCount?: number | undefined;
        /** Section's lessons count */
        LessonCount?: number | undefined;
        /** Section's exams count */
        ExamCount?: number | undefined;
        /** Section's new lessons */
        NewLessons?: number | undefined; 
      }[]>();

      useEffect(() =>{
        getCoursePublicSections(location.state.data);
        getCourseSections(location.state.data);

      },[])


   function getCoursePublicSections(id:number){
    api.c.getCoursePublicSections(id).then((res) =>{

        console.log('coursepublicsection:',res.data.result);
        setCoursesection(res.data.result);
        setCoursepublic(res.data.result);
    }).catch((error) =>{
        console.error('Error:',error);
    })
   }

   function getCourseSections(id:number){
    api.c.getCourseSections(id).then((res) =>{
        console.log(res.data.result);
    }).catch((error) =>{
        console.error('Error:',error);
    }
    );
    
   }

   return(

    <div>
        {
            coursepublic?.map((item) =>
                <div >
                    <p>courseid:{item.CourseID}</p>
                    <p>Description:{item.Description}</p>
                    <p>Exa:{item.ExamCount}</p>
                    <p>Exer:{item.ExerciseCount}</p>
                    <p>ID:{item.ID}</p>
                    <p>Less:{item.LessonCount}</p>
                    <p>new:{item.NewLessons}</p>
                    <p>title:{item.Title}</p>



                    <button className="coursepublic">

                    <h2>{item.Title}</h2>
                    
                    <p>{item.Description}</p>

                    <div>
                        <p style={{display: "inline-flex"}}>{item.LessonCount } </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                    </div>
                    
                    </button>
                </div>

            )
        }
    </div>

   )

}

