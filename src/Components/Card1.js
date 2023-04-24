import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1(props) {
    console.log(props)
  return (
    <div className="card ms-2 me-2 ">
    <div className='InnerCard p-5 pt-5'>
    <img src={props.item.thumbnail}
    width="180px" height="200px" />
    <h6 className='cardTitle fw-bold'>{props.item.speakerName}</h6>
    <p className='cardDescription'>{props.item.podcastDescription}</p>
    </div>
    </div>
  );
}

export default Card1;
