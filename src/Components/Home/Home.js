import { Sec1 } from "./../Sec1/Sec1";
import { Sec2 } from "./../Sec2/Sec2";
export function Home({filterFunction,loading,setLoading}){
    return(
        <>
         <Sec1/>
         <Sec2 filterFunction={filterFunction} loading={loading} setLoading={setLoading}/>  
        </>
        
    )
}