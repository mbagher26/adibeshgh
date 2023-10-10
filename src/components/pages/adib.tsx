import { useEffect, useState } from "react";
import { Api } from "../../api/adib-api";
import { Link } from "react-router-dom";
import SlideComponent from "./Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export const api = new Api({ baseUrl: "https://api.adibeshgh.com" })

export default function Adib() {

    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 2
    //   };

    function setSliderSettings(itemscount:number){
        return{
                dots: true,
                infinite: true,
                speed: 500,

                slidesToShow: itemscount <4 ? 1 : 4 ,
                slidesToScroll: 2
              }
    }

    useEffect(() => {

        category();
    }, [])


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

                <div style={{margin:'10px'}}>
                    <Link to='' >فروشگاه</Link>
                    <Link to='' >رادیو ادیب</Link>
                </div>
                <div>   
                    <SlideComponent/>
                </div>
                <div style={{clear:'both'}}></div>
                <>
                {
                    courselist.map((item) =>
                    <>
                        <div className="title-style">
                            <p>{item.Title}</p>
                            <p>{item.ID}</p>
                            <p>{item.Count}</p>
                        </div>
                        <div>
                            <div style={{clear:'both'}}></div>
                            <Slider {...setSliderSettings(item.Records && item.Records.length || 0)}>
                                {    
                                    item.Records?.split('|||').map((record) =>
                                        <div className="slide-style" key={JSON.parse(record).id}>

                                            <Link to={`/course/${JSON.parse(record).id}`}>

                                                <img style={{width:'300px'}} alt={JSON.parse(record).title}
                                                    src={returnPictureUrl(JSON.parse(record).cover)}
                                                />
                                                <div>{JSON.parse(record).title}</div>
                                            </Link>

                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </>
                    )
                }
                </>
                {/* <div>

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

                </div> */}
            </div>
        </section>
    )
}




