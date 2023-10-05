import { useState } from 'react';
import {api} from './adib.js';
import Loading from './Loading.js';

interface SearchModel {
    /** Lesson id */
    ID?: number;
    /** Lesson Title */
    Title?: string;
    /** Lesson Date */
    Date?: string;
    /** Lesson Description */
    Description?: string;
    /** Content Title */
    ContentTitle?: string;
    /** Content Text */
    ContentText?: string;
    /** Section ID */
    SectionID?: number;
    /** Section Title */
    SectionTitle?: string;
    /** Section Description */
    SectionDescription?: string;
    /** Course ID */
    CourseID?: number;
    /** Course Title */
    CourseTitle?: string;
    /** Course Description */
    CourseDescription?: string;
  }

export default function Search(){

    const [resultsearch,setResultsearch] = useState<SearchModel[]|undefined>([]);
    const [loading,setLoading] = useState<boolean>(false);


    function search(){
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        setLoading(true)
        api.c.search(phraseInput, 0, 10).then((res) => {

            setResultsearch(res.data.result);
            setLoading(false);
            console.log('search:',res.data.result)
        })
    }


    return(
        <>           
            <input type='text'  name='phrase'/>
            <input type='button' value='جستجو' onClick={search}/>
            <br/>
            {loading?<Loading/>:            
                resultsearch?.map((item) => 
                <div>{item.Title}</div>
            )}
        </>
    )

}