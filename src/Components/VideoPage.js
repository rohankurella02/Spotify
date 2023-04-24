import React from 'react'
import ReactPlayer from 'react-player'

function VideoPage() {
  return (
    <div className="VideoPage d-flex">
    <div className='player-wrapper'>
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' light={<img src='https://i3.ytimg.com/vi/5zOHSysMmH0/maxresdefault.jpg' alt='Thumbnail' 
    className='w-100'/>} 
    controls 
    width='50%'
    height='50%' />
    </div>
    <div>
    <p className='text-info'>Hai</p>
    </div>
    </div>
  );
}

export default VideoPage;
