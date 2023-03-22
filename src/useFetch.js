import { useState ,useEffect} from "react";
const useFetch=(url)=>{
    const[data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);


    useEffect(()=>{
        const abort=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abort.signal})
        .then(res=>{
            if(!res.ok){
                throw Error("Sorry we could not fetch this resource at the moment!")
            }
            setError(null)
            return res.json()
        })
        .then(data=>{
            setData(data)
            setIsPending(false)
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log("fetch aborted !")
            }else{
            setIsPending(false)
            setError(err.message);
        }
        })
        });
        return ()=>abort.abort();
    },[]);
    return {data,isPending,error}

}
export default useFetch;