import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Card1(props) {
    console.log(props)

    let navigate=useNavigate();
    const fun1=()=>{
      localStorage.setItem("key3", JSON.stringify(props));
        navigate('/Video')
        setData(props)
    }
    const [data, setData] = useState([]);


  return (
    <div onClick={fun1} className="card ms-2 me-2 ">
    
    <div className='InnerCard p-5 pt-5'>
    <img className="myimg" src={props.item.thumbnail}
    width="180px" height="200px" />
    <h6 className='cardTitle fw-bold'>{props.item.speakerName}</h6>
    <p className='cardDescription'>{props.item.podcastDescription}</p>
    </div>
    </div>
  );
}

export default Card1;
