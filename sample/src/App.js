import './App.css'
import Header from './components/Header';
import {useState} from 'react'

function App() {

  const [counter, setCount]=useState(0)
  const data = 'Asmila'

  // let counter = 0;
  const addCount =()=>{
    setCount(counter+1)
    console.log(counter);
  }
  return (
    <div>
  <button onClick={addCount}>Add</button>
<h2>Counter: {counter}</h2>

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
