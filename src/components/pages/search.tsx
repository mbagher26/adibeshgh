import { api } from './adib.js';
import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import { setSearchResult } from '../redux/searchSlice.tsx';
import '../../App.css';



export default function Search() {
    
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.search)
    console.log('selector:',selector);
    
    function search() {
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        api.c.search(phraseInput, 0, 10).then(
            
            (res) => {
                const resultsearch= res.data.result;
                console.log('search:', resultsearch)
                if(resultsearch){
                    console.log({resultsearch});
                    dispatch(setSearchResult(resultsearch))
                }
            }
        );
    };

    return (
        <>
            
            <input className='input-search' type='text' name='phrase' />
            <input className='input-button-search' type='button' value='جستجو' onClick={search} />
            
            

            {selector.map((item) => 
                <div key={item.ID}>
                    
                    <h1 style={{color: 'white'}}>{item.ContentText}</h1>
                    <h1 style={{color:'white'}}>{item.ContentTitle}</h1>
                    <h1>{item.CourseDescription}</h1>
                    <h1>{item.CourseID}</h1>
                    <h1 style={{color: 'white'}}>{item.CourseTitle}</h1>
                </div>
            )}
            
        </>
    )
}

