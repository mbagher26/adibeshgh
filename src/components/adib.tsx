import { useEffect, useState } from "react"
import { Api} from "../api/adib-api";


export const api = new Api({ baseUrl: "https://api.adibeshgh.com" })

export default function Adib() {


    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])


    useEffect(() => {
        
        CourseCategories();
        category();
       
    }, [])

    
    function CourseCategories(){
        
        api.c.getCourseCategories().then((res) =>{

            console.log('result:',res.data.result);

        }).catch((error) => {

            console.error('Error:', error)
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
                                        <a href=''>

                                            <img  alt={JSON.parse(record).title}
                                            src={returnPictureUrl(JSON.parse(record).cover)}
                                            />
                                            <div>{JSON.parse(record).title}</div>
                                            
                                        </a>
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




