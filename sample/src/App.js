import './App.css'
import Header from './components/Header';

function App() {
  const data = 'Asmila'

  let count = 0;
  return (
    <div>

<h2>Counter: {count}</h2>

<Header data={data}/>


    <p style={{color:'red'}}>Fasila {data} </p>
    
    <Hello   />
    <Hello/>
    <Hello/>
    

    </div>
    
  );
}
function Hello(){
  return(
    <h1 className='Hello'>hello fasila</h1>
  )
}
export default App;
