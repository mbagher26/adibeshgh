import { useEffect, useState } from "react"
import { Api, HttpResponse } from "../api/adib-api"
import { ResponseModel, UserModel } from "../api/adib-api";
// import React from "react";

export default function Adib() {


    const [mobile, setMobile] = useState<string>('');
    const [name, setName] = useState<string>('');

    const [courselist, setCourselist] = useState<{
        ID?: number | undefined;
        Count?: number | undefined;
        Title?: string | undefined;
        Records?: string | undefined;
    }[]>([])



    const [reguest, setReguest] = useState<{
        message?: ResponseModel | undefined;
        result?: UserModel | undefined;
        ums?: string | undefined;
    }>();


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

    function test() {
        
        api.c.addToFamily(mobile, name).then((res) => {
            console.log('res:', res.data);

            setReguest(res.data);
        }).catch((error) => {
            console.error('Error:', error);
        })

    }


    return (

        <section>
            <div>
                <label>mobile:</label>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <br />
                <label>name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="submit" value="submit" name="test" onClick={test} />
            </div>
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




