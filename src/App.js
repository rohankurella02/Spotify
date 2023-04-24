import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SideBar from './Components/SlideBar';
import DisplayHome from './Components/DisplayHome';
import Search from './Components/Search';
import VideoPage from './Components/VideoPage';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  let navigate=useNavigate();
  const tranfertoBlog=()=>{
    navigate('/Blog')
  }
  return (
    <div className="App bg-dark">
    <Home/>
    <Routes>
    <Route path="/" element={<DisplayHome />} />
    <Route path="/Search" element={<Search />} />
    <Route path="/Video" element={<VideoPage />} />
  </Routes>
      {/*<Home/>*/}
      {/*<Search/>*/}
      {/*<DisplayHome/>*/}
      {/*<VideoPage/>*/}
      <div className="row pt-5 mt-5 text-info border border-1 border-info m-1 pb-5">
      <div class="col ms-4 mt-5">
          <a href="#" class="navbar-brand text-light">
              <img width="120px" height="120px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
                  alt=""></img></a>
                  <p className='brandlast'>Spotify</p>
      </div>
      <div className="col last">
              <h4>ADDRESS</h4><hr/>
              <p>Post box No. 10</p>
              <p>Harita, Housar-635 108</p>
              <p>Ph:8897450872 </p>
              <p>Fax: 04344-276865</p>
      </div>
      <div className="col last">
          <h4>CALL US ON</h4><hr/>
          <p>Toll Free: 18002587444</p>
          <p>Ph:+91-9177100359</p>
      </div>
      <div className="col text-center mt-3 last">
           <h5>Email:</h5>
          <h6>ldhanush02@gmail.com</h6>
          <h6>20071a6933@vnrvjiet.in</h6>
      </div>
  </div>
    </div>
  );
}

export default App;
