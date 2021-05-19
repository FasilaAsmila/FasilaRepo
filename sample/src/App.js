import './App.css'
import Header from './components/Header';
import {useState} from 'react'
import Employee from './Employee';
import Counting from './Counting';
import Counter1 from './counter1';

function App() {

  const [counter, setCount]=useState(0)
  const data = 'Asmila'
//  let counter = 0;
  const addCount =()=>{
    setCount(counter+1)
    console.log(counter);
  }

  let obj = {
    title:'1st Counter',
    count:counter,
    place:'hello'
  }

  let emp =[
    {name:'fasila',age:25},
    {name:'asmila',age:21},
    {name:'farida',age:22},
    {name:'farhana',age:15},
  ]

  const [state, setState]=useState(false)

  return (
    <div>
{/* UseEffect */}
      <h3 onClick={()=>setState(!state)}>Show/hide</h3>
 { state ? <Counting /> : null }


{/* Map */}
  
  {
    emp.map((obj, index)=>


  <Employee key={index} {...obj} />
  
    )
  }
{/* counter++ */}
<button onClick={addCount}>Add</button>
  <Counter1 {...obj} />
  <Counter1 title='2nd Counter' count={counter} />


<Header data={data}/>

  


    <p style={{color:'red'}}>Fasila {data} </p>
    
    {/* <Hello   />
    <Hello/>
    <Hello/>
     */}

    </div>
    
  );
}
function Hello(){
  return(
    <h1 className='Hello'>hello fasila</h1>
  )
}
export default App;
