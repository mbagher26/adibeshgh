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

    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        rtl: true
    }

    // function setSliderSettings(itemscount:number){
    //     return{
    //             dots: true,
    //             infinite: false,
    //             speed: 500,
    //             slidesToShow: itemscount <= 4 ? itemscount : 4 ,
    //             slidesToScroll: 4
    //           }
    // }

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
            <div className="rtl-container" >

                <div>
                    <SlideComponent />
                </div>
                <div style={{ clear: 'both' }}></div>
                <>
                    {
                        courselist.map((item) =>
                            <div className="parent-style">
                                <div className="title-style" key={item.ID}>
                                    <p>{item.Title}</p>

                                </div>
                                <div className="slider-style">
                                    <div style={{ clear: 'both' }}></div>
                                    {/* <Slider {...setSliderSettings(item.Records && item.Records.length || 0)}> */}
                                    <Slider {...setting}>

                                        {
                                            item.Records?.split('|||').map((record) =>
                                                <div key={JSON.parse(record).id}>

                                                    <Link to={`/course/${JSON.parse(record).id}`}>
                                                        <div className="items-style">
                                                            <img alt={JSON.parse(record).title}
                                                                src={returnPictureUrl(JSON.parse(record).cover)}
                                                            />
                                                            <div>{JSON.parse(record).title}</div>
                                                        </div>
                                                    </Link>
                                                </div>

                                            )
                                        }
                                    </Slider>
                                </div>
                            </div>
                        )
                    }
                </>
            </div>
        </section>
    )
}




