import { api } from './adib.js';
import type { RootState } from '../redux/store.tsx';
import { setSearchResult } from '../redux/searchSlice.tsx';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';




export default function Search() {

    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.search);
  


    function search() {
        const phraseInput = (document.getElementsByName('phrase')[0] as HTMLInputElement).value;
        api.c.search(phraseInput, 0, 10).then(
            
            (res) => {

                const resultsearch= res.data.result;
                console.log('search:', res.data.result)
                dispatch(setSearchResult(resultsearch))

            }
        );
    };


 

    return (
        <>
            <input className='input-search' type='text' name='phrase' />
            <input className='input-button-search' type='button' value='جستجو' onClick={search} />
            {selector}
            

        </>
    )
}