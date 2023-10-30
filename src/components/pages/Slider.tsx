import { useEffect,useState } from "react";
import { api } from './adib.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../mobile.css';

export default function SlideComponent() {

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

        slides();

    }, [])

    function slides() {

        api.c.getSlides().then((res) => {
            console.log('slid:', res.data.result);
            setSlid(res.data.result);
        })

    }

    function returnPictureUrl(cover: string | undefined) {
        return 'https://api.adibeshgh.com/Attachment/courseCover?filename=' + cover
    }

    
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      };

    return (
        <>
            <Slider {...settings}>
                {slid?.map((item) =>
                    <div className="slider" key={item.ID}>
                         {/* <p>{item.Title}</p> */}
                         <img src={"https://api.adibeshgh.com/Attachment/courseCover?filename="+item.Banner}  />
                    </div>
                )}
            </Slider>
        </>
    );
}