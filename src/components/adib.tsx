import { useEffect, useState } from "react"
import { Api} from "../api/adib-api";
import { Link } from "react-router-dom";

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

    const [slid,setSlid] = useState<SliderModel[]>();

    useEffect(() => {
           
        category();
        slides();

    },[])

    
    function slides(){

        api.c.getSlides().then((res) => {
            console.log('slid:',res.data.result);
            setSlid(res.data.result);
        })
            
    }


    function category() {

        api.c.getCategorizedCourseList().then((res) => {

            console.log(res.data.result);
            if(res.data.result){
            setCourselist(res.data.result);
            }

        }).catch((error) => {

            console.error('Error:', error);
        })
    }


    function returnPictureUrl(cover:string){
        return 'https://api.adibeshgh.com/Attachment/courseCover?filename=' + cover
    }


    return( 
       
        <section>


            <div>
                
                <div>
                    
                    {
                    courselist.map((item, index) =>
                        <div className="courseslist" key={index} >
        
                            <p className="titlestyle">{item.Title},{item.ID},{item.Count}</p>
                            
                            <div className="course">
                                
                               {
                               item.Records?.split('|||').map((record) =>(
                                    <div className="recordstyle" key={JSON.parse(record).id}>
                                        {JSON.parse(record).id}

                                        <Link state={{data:JSON.parse(record).id}} to="/course">

                                        <img  alt={JSON.parse(record).title}
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




