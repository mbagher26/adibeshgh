import { useEffect, useState } from 'react';
import {api} from './adib.tsx';


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


const [resultsearch,setResultsearch] = useState<SearchModel[]>();

export default function Search(){


    useEffect(() =>{
        search();
    },[])


    function search(){

        api.c.search({phrase,index,limit}:{phrase:String,index:Number,limit:Number}).then((res) => {

            setResultsearch(res.data.result);
        })
    }

}




