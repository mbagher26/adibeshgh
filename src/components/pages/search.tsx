import { useState} from 'react';
import {api} from './adib.js';
// import Loading from './Loading.js';
import type { RootState } from '../redux/store.tsx';
import { setSearchResult } from '../redux/searchSlice.tsx';
import { useDispatch,useSelector } from 'react-redux';
import '../../App.css';


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
    
    const dispatch = useDispatch();
    const selector = useSelector((state:RootState)=> state.search);
    const [resultsearch,setResultsearch] = useState<SearchModel[]|undefined>([]);
    // console.log(selector);
    // const [loading,setLoading] = useState<boolean>(false);
    
    
    function search(){
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        // setLoading(true)
        api.c.search(phraseInput, 0, 10).then((res) => {
            
            console.log('search:',res.data.result);
            setResultsearch(res.data.result);
            dispatch(setSearchResult(resultsearch?.map((item) => {item.ContentTextxxx })));
           
            // setLoading(false);
        })
    }



    return(
        <>           
            <input className='input-search' type='text'  name='phrase'/>
            <input className='input-button-search' type='button' value='جستجو' onClick={search}/>
            {selector.ID}
            {selector.Title}
            {selector.CourseDescription}
            {selector.CourseID}
            {selector.CourseTitle}
            {selector.SectionID}
            {selector.ContentText}
            {selector.ContentTitle}
            <br/>
            {/* {loading?<Loading/>:            
                resultsearch?.map((item) => 
                <div key={item.ID}>{item.Title}</div>
            )} */}
        </>
    )
}