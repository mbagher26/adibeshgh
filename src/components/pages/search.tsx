import { useState } from 'react';
import {api} from './adib.js';
import Loading from './Loading.js';
import {setSearchResult} from '../../searchSlice.js';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../store.ts';
import '../../App.css';
interface SearchModel {
    /** Lesson id */
    ID?: number |undefined;
    /** Lesson Title */
    Title?: string |undefined;
    /** Lesson Date */
    Date?: string |undefined;
    /** Lesson Description */
    Description?: string |undefined;
    /** Content Title */
    ContentTitle?: string |undefined;
    /** Content Text */
    ContentText?: string |undefined;
    /** Section ID */
    SectionID?: number |undefined;
    /** Section Title */
    SectionTitle?: string |undefined;
    /** Section Description */
    SectionDescription?: string |undefined;
    /** Course ID */
    CourseID?: number |undefined;
    /** Course Title */
    CourseTitle?: string |undefined;
    /** Course Description */
    CourseDescription?: string |undefined;
}

export default function Search(){
    
    const dispatch = useDispatch();
    // const Selector = useSelector((state:RootState)=> state.seatch);

    const [resultsearch,setResultsearch] = useState<SearchModel[]|undefined>([]);
    const [loading,setLoading] = useState<boolean>(false);


    function search(){
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        setLoading(true)
        api.c.search(phraseInput, 0, 10).then((res) => {

            setResultsearch(res.data.result);
            dispatch(setSearchResult(res.data.result));
           
            setLoading(false);
            console.log('search:',res.data.result)
        })
    }



    return(
        <>           
            <input type='text'  name='phrase'/>
            <input type='button' value='جستجو' onClick={search}/>
            {/* {Selector.ID}
            {Selector.Title} */}
            <br/>
            {loading?<Loading/>:            
                resultsearch?.map((item) => 
                <div key={item.ID}>{item.Title}</div>
            )}
        </>
    )
}