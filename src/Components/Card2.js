function Card2(props) {
  return (
    <div className="Card2 ">
    <div className="card2 ms-2 me-2">
    <div className='InnerCard p-5 pt-5'>
    <img src={props.item.thumbnail}
    width="180px" height="200px" />
    <h6 className='cardTitle fw-bold'>{props.item.speakerName}</h6>
    <p className='cardDescription'>{props.item.podcastDescription}</p>
    </div>
    </div>
    </div>
  );
}

export default Card2;
