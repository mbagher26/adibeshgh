import {api} from './adib.tsx';




export default function Search(){


    function search(){

        api.c.search({phrase,index,limit}:{phrase:String,index:Number,limit:Number}).then((res) => {
            
        })
    }
}