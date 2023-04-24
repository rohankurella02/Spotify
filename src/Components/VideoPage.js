import React from 'react'
import ReactPlayer from 'react-player'

function VideoPage() {
    const props=JSON.parse(localStorage.getItem("key3"));
    console.log(props)
  return (
    <div className="VideoPage d-flex">
    <div className='player-wrapper'>
    <ReactPlayer url="https://www.youtube.com/watch?v=0B7i8GeNKVY" light={<img src={props.item.thumbnail} alt='Thumbnail' 
    className='w-100'/>} 
    controls 
    width='600px'
    height='400px' />
    </div>
    <div className='player-wrapper2'>
    <h1 className='Vtit text-info fw-bold mb-5 mt-2'>{props.item.speakerName}</h1>
    <p className=' Vdes text-info'><span className="VDes fw-bold">Podacast Name : </span>{props.item.podcastName}</p>
    <p className=' Vdes text-info'><span className="VDes fw-bold">Description : </span>{props.item.podcastDescription}</p>
    <p className=' Vdes text-info'><span className="VDes fw-bold">Category : </span>{props.item.category}</p>
    <p className=' Vdes text-info'><span className="VDes fw-bold">Language : </span>{props.item.language}</p>
    <p className=' Vdes text-info'><span className="VDes fw-bold">Views : </span>{props.item.views}</p>
    </div>
    </div>
  );
}

export default VideoPage;
