import { useState } from 'react';
import axios from 'axios';
import Card1 from './Card1';
function DisplayHome() {
    let [arr1,setarr1]=useState([]);
    
  return (
    <div>
    <h1 className='text-start text-primary CardZoner'>Horror</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr1.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    </div>
  );
}

export default DisplayHome;
