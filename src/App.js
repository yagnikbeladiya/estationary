import logo from './logo.svg';
import './App.css';
import Home from './Crud/Home';
import Api from './API/Api';
import { useEffect, useState } from 'react';

function App() {

  const [data,setdata]=useState([]);

  const getuser=async ()=>{
    const response = await fetch('  https://api.github.com/users');
    setdata(await response.json());
    
  }

  useEffect(()=>{
   getuser();
  },[]);
  return (
  <>
  <div >{
    data.map((item)=>{
       return(
        <>
        <p>{item.id}</p>

        <img src={item.avatar_url} alt={`Avatar of ${item.login}`} width="100" />
        </>
       )  })
    
    }
  </div>
  </> 
  );
}

export default App;
