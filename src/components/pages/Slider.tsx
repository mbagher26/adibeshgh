import { useEffect,useState } from "react";
import Slider from "react-slick";
import { api } from './adib.js';

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
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };

    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
            {slid?.map((item) =>
            <div>
                <img src={returnPictureUrl(item.Banner)} alt={item.Title} />
            </div>
            )}
        </Slider>
      </div>
    );
}

