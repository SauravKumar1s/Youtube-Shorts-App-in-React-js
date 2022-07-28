import "./App.css";
import Header from "./components/Header";
import Shorts from "./components/Shorts";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Shorts src="https://qqcdn.mxtakatak.com/video/06572ee33ecf648598aa2cedd7972dc9/download/1/h264_high_480.mp4"  />
        <Shorts src="https://qqcdn.mxtakatak.com/video/8781c7de95b8f00a8b75662bc74d08c8/download/2/raw.mp4" />
        <Shorts src="https://qqcdn.mxtakatak.com/video/2000117sUo/download/1/h264_high_720.mp4" />
        <Shorts src="https://qqcdn.mxtakatak.com/video/9254dcb688dd4a01a6c20e146a573b98/download/1/h264_high_480.mp4" />
      </div>
    </div>
  );
}

export default App;
