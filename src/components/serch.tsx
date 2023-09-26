import { useEffect, useState } from 'react';
import {api} from './adib.tsx';


const [resultsearch,setResultsearch] = useState();

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

