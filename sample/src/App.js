import './App.css'
import Header from './components/Header';
import {useState} from 'react'
import Counter1 from './counter1';

function App() {

  const [counter, setCount]=useState(0)
  const data = 'Asmila'
//  let counter = 0;
  const addCount =()=>{
    setCount(counter+1)
    console.log(counter);
  }
  return (
    <div>
  <button onClick={addCount}>Add</button>
  <Counter1 title='1st' count={counter} />
  <Counter1 title='2nd' count={counter} />


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
