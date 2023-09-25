import {api} from './adib.tsx';




export default function Search(){

    api.c.search({phrase,index,limit}:{phrase:String,index:Number,limit:Number}).then((res) => {
        
    })
}