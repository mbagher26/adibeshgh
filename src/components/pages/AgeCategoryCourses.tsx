import { api } from './adib.js';
import { useEffect, useState } from 'react';

export default function AgeCategoryCourses(){

    interface CourseModel {
        /** Course id */
        ID?: number;
        /** Course Title */
        Title: string;
        /** Draft */
        Draft?: number;
        /** Number of users who can join the course */
        Capacity?: number;
        /** Active status of course */
        Active?: number;
        /** Age category id */
        AgeCategoryID?: number;
        /** Cover image id */
        Cover?: string;
        /** Description */
        Description?: string;
        /** Persian End Date */
        EndDateFa?: string;
        /** Persian Start Date */
        StartDateFa?: string;
        /** Number of course lessons */
        LessonCount?: number;
        /** Number of course users */
        EnrolledCount?: number;
        /** Enrollment status of the current user */
        Enrolled?: number;
        /** AgeCategory Model */
        AgeCategory?: AgeCategoryModel;
        /** More inforamtion about the course */
        InfoList?: {
          ID?: number;
          CourseID?: number;
          Type?: "text" | "tell" | "url";
          Title?: string;
          Description?: string;
        };
        /** The Link of the course */
        Link?: string;
        /** New lessons for current user */
        NewLessons?: number;
        /** Privacy of the course */
        Private?: number;
        /** Tag */
        Tag?: string;
      }

    const [courses,setCourses] = useState<CourseModel[]>();

    useEffect(() =>{
        AgeCategoryCourses(6);
    },[])

    function AgeCategoryCourses(AgeCategoryId:number){

        api.c.getAgeCategoryCourses(AgeCategoryId).then((res) =>{
            console.log(res.data.result);
            setCourses(res.data.result);
        })
    }
    return(
        <>
            <p>this is page Agecategory</p>
            {
                courses?.map((course) =>{
                    <div>
                        <p>{course.Title}</p>
                        <p>{course.Description}</p>
                    </div>                    
                })
            }
        </>
    )

}
