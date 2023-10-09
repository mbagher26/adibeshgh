import { useEffect,useState } from "react";
import Slider from "react-slick";
import { api } from './adib.js';
import './Slider.css';


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
        <div className="container">
            <div className="slider">
                <Slider {...settings}>
                    {slid?.map((item) =>
                        <div className="slide" key={item.ID}>
                            <p>{item.Banner}</p>
                            <img src={returnPictureUrl(item.Banner)} alt={item.Title} />
                            <p className="slide-title">{item.Title}</p>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
}

// sld_19_JawjrjOz.png
// sld_26_ydpriUg9.png


    // let baner1 ="sld_19_JawjrjOz.png";
    // let baner2 ="sld_26_ydpriUg9.png";



//     <Slider> 

//     <div style={{width:'250px'}}>
//         <p>250</p>
//         <img src={returnPictureUrl(baner2)}  />
//     </div>

//     <div style={{width:'130px'}}>
//         <img src={returnPictureUrl(baner1)} />
//         <p>130</p>
//     </div>

//     <div style={{width:'300px'}}>
//         <img src={returnPictureUrl(baner2)}  />
//         <p>300</p>
//     </div>

//     <div style={{width:'100px'}}>
//         <img src={returnPictureUrl(baner1)} />
//         <p>100</p>
//     </div>
    
// </Slider>