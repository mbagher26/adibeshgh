import { useEffect, useState } from "react";
import { Api } from "../../api/adib-api";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


export const api = new Api({ baseUrl: "https://api.adibeshgh.com" })

export default function Adib() {

    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])


    interface SliderModel {
        /** Slider's id */
        ID?: number;
        /** Slider's Title */
        Title?: string;
        /** Slider's CourseId */
        Type?: string;
        /** Slider's description */
        Description?: string;
        /** Slider's link */
        Link?: string;
        /** Slider's banner */
        Banner?: string;
        /** Slider's hit count */
        HitCount?: number;
    }

    const [slid, setSlid] = useState<SliderModel[]>();

    useEffect(() => {

        category();
        slides();

    }, [])





    function slides() {

        api.c.getSlides().then((res) => {
            console.log('slid:', res.data.result);
            setSlid(res.data.result);
        })

    }


    function category() {

        api.c.getCategorizedCourseList().then((res) => {

            console.log(res.data.result);
            if (res.data.result) {
                setCourselist(res.data.result);
            }

        }).catch((error) => {

            console.error('Error:', error);
        })
    }


    function returnPictureUrl(cover: string | undefined) {
        return 'https://api.adibeshgh.com/Attachment/courseCover?filename=' + cover
    }


    return (

        <section>
            <div>


                <div>
                    <Link to='' >فروشگاه</Link>
                    <Link to='' >رادیو ادیب</Link>
                </div>

                <div>   
                    <Slide>
                        {slid?.map((item) => (

                            <div key={item.ID}>
                                
                                <div className="divStyle" style={{
                                    backgroundImage: `url(${'https://api.adibeshgh.com/Attachment/courseCover?filename=' + item.Banner})`  
                                }}>
                                    
                                </div>

                            </div>
                        ))}
                    </Slide>                
                </div>
                <div>

                    {
                        courselist.map((item, index) =>
                            <div className="courseslist" key={index} >

                                <div className="titlestyle">
                                    <p>{item.Title}</p>
                                    <p>{item.ID}</p>
                                    <p>{item.Count}</p>
                                </div>

                                <div className="course">

                                    {
                                        item.Records?.split('|||').map((record) => (
                                            <div className="recordstyle" key={JSON.parse(record).id}>
                                            
                                                <Link to={`/course/${JSON.parse(record).id}`}>

                                                    <img alt={JSON.parse(record).title}
                                                        src={returnPictureUrl(JSON.parse(record).cover)}
                                                    />
                                                    <div>{JSON.parse(record).title}</div>
                                                </Link>

                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}




