import { useEffect, useState } from "react"
import { Api} from "../api/adib-api"

export default function Adib() {


    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])

    const api = new Api({ baseUrl: "https://api.adibeshgh.com" })


    useEffect(() => {
        // test();
        category();
    }, [])


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



    return (

        <section>

            <div>
                <div>
                
                    {
                    courselist.map((item, index) =>
                        <div className="courseslist" key={index} >

                            <p className="titlestyle">{item.Title},{item.Count}</p>
                            <div className="course">
                                
                               {item.Records?.split('|||').map((record) =>(
                                    <div className="recordstyle" key={JSON.parse(record).id}>
                                    
                                        <a href={JSON.parse(record).cover}>

                                            <img  alt={JSON.parse(record).title}
                                            src="https://api.adibeshgh.com/Attachment/courseCover?filename=crs_20_bK2XvsEq.jpg"
                                            />
                                            <div>{JSON.parse(record).title}</div>

                                        </a>
                                    </div>
                               ))}
                            
                            </div>
                            
                        </div>
                    )
                    }

                </div>
            </div>
        </section>
    )
}




