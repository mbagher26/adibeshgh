import { api } from './adib.js';
import type { RootState } from '../redux/store.tsx';
import { setSearchResult } from '../redux/searchSlice.tsx';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';



const selector = useSelector((state: RootState) => state.search);

export default function Search() {

    const dispatch = useDispatch();
    console.log({selector});


    function search() {
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        api.c.search(phraseInput, 0, 10).then(
            
            (res) => {

                const resultsearch= res.data.result;
                console.log('search:', resultsearch)
                if(resultsearch){
                    console.log({resultsearch});
                    dispatch(setSearchResult(resultsearch))
                }else{
                    dispatch(setSearchResult([]))
                }
            }
        );
    };

    return (
        <>
            <input className='input-search' type='text' name='phrase' />
            <input className='input-button-search' type='button' value='جستجو' onClick={search} />
            {selector.map((item) => {
                <div>
                    <h1 style={{color: 'white'}}>{item.ContentText}</h1>
                    <h1 style={{color:'white'}}>{item.ContentTitle}</h1>
                    <h1>{item.CourseDescription}</h1>
                    <h1>{item.CourseID}</h1>
                    <h1 style={{color: 'white'}}>{item.CourseTitle}</h1>
                </div>
            })}
        </>
    )
}

