import { useEffect, useState } from 'react';
import { api } from './adib.js';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Course() {


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
        AgeCategory?: {
            /** AgeCategory id */
            ID?: number;
            /** AgeCategory Title */
            Title: string;
            /** From Age */
            From?: number;
            /** To Age */
            To?: number;
        };
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

    const [status,setStatus] = useState<boolean>();
    const {courseId} = useParams();
    const CourseId:number = Number(courseId);
    const [course, setCourse] = useState<CourseModel>();
    const [coursepublic, setCoursepublic] = useState<{

        ID?: number | undefined,
        Title: string | undefined,
        CourseID?: number | undefined,
        Description?: string | undefined,
        ExerciseCount?: number | undefined,
        LessonCount?: number | undefined;
        ExamCount?: number | undefined,
        NewLessons?: number | undefined,

    }[]>();

    useEffect(() => {
        CourseById(CourseId);
        getCoursePublicSections(CourseId);
    }, [CourseId])


    function CourseById(CourseId: number) {
        api.c.getCourseById(CourseId).then((res) => {
            console.log('coursebyid:', res.data.result);
            setCourse(res.data.result);
        })
    }

    function returncover(cover: string) {
        return 'https://api.adibeshgh.com/Attachment/courseCover?filename=' + cover

    }


    function getCoursePublicSections(CourseId: number) {
        api.c.getCoursePublicSections(CourseId).then((res) => {

            console.log('coursepublicsection:', res.data.result);

            setCoursepublic(res.data.result);
        }).catch((error) => {
            console.error('Error:', error);
        })
    }


    function handelclick(){
        setStatus(true);
    }

    function handelclose(){
        setStatus(false);
    }

    function Publicrelation(){

        return(
            <>
                <div>
                    <p>روابط عمومی</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque magni quis exercitationem explicabo iste velit ex at inventore iusto, ea sint assumenda! Fugiat in aut, excepturi voluptatibus nesciunt suscipit?</p>
                        <button onClick={handelclose}>بستن</button>
                    </div>
                </div>
            </>
        )
    }
    
    return (
        <div className='maincontainer'>
            <div className='publickrelation'>
                {status===true && (<Publicrelation/>)}
            </div>
            <div className='divcourse'>


                <div style={{ marginTop: '1.1rem' }}>
                    <img alt={course?.Title} src={course?.Cover ? returncover(course.Cover) : ''} width='145' height='200' />
                    <div>
                        <h1>{course?.Title}</h1>
                        <p>{course?.Description}</p>
                    </div>

                </div>
                <hr />

                <div className="coursedata">
                    <div style={{ marginLeft: '0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </div>

                    <p style={{ margin: '0.01rem' }}>{course?.LessonCount}</p>
                    <div style={{ marginLeft: '0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                        </svg>
                    </div>

                    <p style={{ margin: '0.01rem' }}>{course?.EnrolledCount}</p>

                </div>

                <br />

                <div className='coursedata'>
                    <Link to={`/ageCategoryCourses/${course?.AgeCategory?.ID}`} className='buttonstyle'>{course?.AgeCategory?.Title}</Link>
                    <Link to='' style={{backgroundColor:'greenyellow'}} className='buttonstyle'>عمومی</Link>
                    <button onClick={handelclick} className='buttonstyle'>روابط عمومی</button>
                </div>
                <br />
                <div className='coursedata'>
                    <Link to='' className='buttonstyle'>عضویت</Link>
                </div>

                <div>
                    <Link to='' className='buttonlink'>
                        حمایت از ادیب عشق...
                    </Link>
                </div>
            </div>


            <div className='divcourse'>
                {coursepublic?.map((item) =>
                    <div key={item.ID}>


                        <Link  to={`section/${item.ID}`} className='coursepublic'>
                            
                            <div>
                                
                                <h2>{item.Title}</h2>

                                <p>{item.Description}</p>

                                <p>{item.LessonCount} </p>

                            </div>
                        </Link> 

                    </div>
                )}
            </div>
            <div className='divoutlet'>
                <Outlet/>
            </div>

        </div>
    )
}


