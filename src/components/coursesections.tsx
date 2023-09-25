import { useEffect, useState } from "react";
import {api} from "./adib.tsx";
import { useLocation } from "react-router-dom";

export default function CourseSection(){


    const [coursesection,setCoursesection] = useState<{
        ID?: number | undefined;
        Title: string;  
        CourseID?: number | undefined;
        Description?: string | undefined;
        ExerciseCount?: number | undefined;
        LessonCount?: number | undefined;
        ExamCount?: number | undefined;
        NewLessons?: number | undefined; 
    }[]>();

    const location = useLocation();
    console.log('loca:',location.state.data)
        useEffect(()=>{
            getCourseSections(location.state.data);
        },[])


    function getCourseSections(courseId:number){

        api.c.getCourseSections(courseId).then((res) =>{
            console.log('coursesection:',res.data.result);
            setCoursesection(res.data.result);
        })
    }


    return(
        <>
        {
            coursesection?.map((res) =>{
                <>
                    <p>{res.CourseID}</p>
                    <p>{res.Description}</p>
                    <p>{res.ExamCount}</p>
                    <p>{res.ExerciseCount}</p>
                    <p>{res.ID}</p>
                    <p>{res.LessonCount}</p>
                    <p>{res.NewLessons}</p>
                    <p>{res.Title}</p>
                </>
            })
        }
        </>
    )
}



