import { api } from './adib.js';
import { useAppDispatch } from '../redux/hooks.ts';
import { setSearchResult } from '../redux/searchSlice.tsx';
import '../../App.css';
import { useState } from 'react';



export default function Search() {
    
    const dispatch = useAppDispatch();
    const [phraseInput,setPhraseInput] = useState('');
    const onChange = (event:any) => {
        setPhraseInput(event.target.value)
    }
    
    function search() {
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
            
            <input className='input-search' type='text' value={phraseInput} onChange={onChange} />
            <input className='input-button-search' type='button' value='جستجو' onClick={search} />
            
        </>
    )
}

