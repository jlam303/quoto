import './App.css';
import {useState,useEffect} from 'react'
const url = 'https://api.quotable.io/random';

function App() {
  const [quote,setQuote]=useState("Quoto")
  useEffect(()=>{
    funky()
  },[])
  const funky = () =>{
    fetch(url).then((response)=>{
            if(response.status>=200&&response.status<=299){
                return response.json()
            }else{
                throw new Error(response.statusText)
            }
        }).then(e=>{
          setQuote(e)
          console.log(quote)
        }).catch(err=>console.log(err));
  }
  return (
    <div className="App">
        <h1>"{quote.content}" - {quote.author}</h1>
        <button className="bean" onClick={()=>{funky()} }>Quote</button>
    </div>
  );
}

export default App;
