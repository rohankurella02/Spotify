import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SideBar from './Components/SlideBar';
import DisplayHome from './Components/DisplayHome';
import Search from './Components/Search';
import VideoPage from './Components/VideoPage';
function App() {
  return (
    <div className="App bg-dark">
      <Home/>
      <div className='loader2 mb-2'></div>
      {/*<Search/>*/}
      <DisplayHome/>
      {/* <VideoPage/> */}
    </div>
  );
}

export default App;
