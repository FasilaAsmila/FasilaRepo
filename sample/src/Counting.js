import React,{useState,useEffect} from 'react'

function Counting() {
    const [count, setCount]=useState(0)
    const [count2, setCount2]=useState(0)
    useEffect(
        ()=>{
            console.log('Mounting...');
            console.log('Count1..'+count);
            console.log('Count2..'+count2);
            // return()=>{
            //     console.log('UnMounting..'+count);
            // }
        },[count,count2]
    )

 
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
           <h1>I am component :{count}</h1> 

           <button onClick={()=>setCount2(count2+1)}>Increment</button>
           <h1>I am component2 :{count2}</h1> 
        </div>
    )
}

export default Counting
