import React, { useState } from 'react';

// 引入元件
import Navbar from './components/Navbar/Navbar';
import MapComponent from './components/MapComponent/MapComponent';
import TempleModal from './components/TempleModal/TempleModal';
import Footer from './components/Footer/Footer';

// 引入主要圖片
import kaijiMazuImg from './assets/Kaiji_Mazu_Temple.jpg';
import wumiaoImg from './assets/Wumiao_Temple.jpg';
import tianhouImg from './assets/Tianhou_Temple.jpg';

// --- 新增：引入歷史圖片和 AR 影片 ---
import kaijiHistImg from './assets/historical/kaiji_historical.jpg';
import wumiaoHistImg from './assets/historical/wumiao_historical.jpg';
import grandmazuHistImg from './assets/historical/grandmazu_historical.jpg';
import kaijiArVideo from './assets/videos/kaiji_ar.mp4';
import wumiaoArVideo from './assets/videos/wumiao_ar.mp4';
import grandmazuArVideo from './assets/videos/grandmazu_ar.mp4';
// --- 結束新增 ---

// 引入樣式
import './App.css';

// 更新廟宇資料，加入 historicalImage 和 arVideo
const templeData = [
  {
    id: 'kaijiMazu',
    translationKey: 'kaijiMazu',
    coords: [23.003718, 120.205899],
    image: kaijiMazuImg,
    googleMapUrl: 'https://maps.app.goo.gl/1srWsMBv8EwHwj2C8',
    historicalImage: kaijiHistImg, // 新增
    arVideo: kaijiArVideo,         // 新增
  },
  {
    id: 'wumiao',
    translationKey: 'wumiao',
    coords: [22.997288, 120.202011],
    image: wumiaoImg,
    googleMapUrl: 'https://maps.app.goo.gl/xK3RcZWYQZRgHiH97',
    historicalImage: wumiaoHistImg, // 新增
    arVideo: wumiaoArVideo,         // 新增
  },
  {
    id: 'grandMazu',
    translationKey: 'grandMazu',
    coords: [22.99618, 120.20111],
    image: tianhouImg,
    googleMapUrl: 'https://maps.app.goo.gl/nCp5LnyChsdKKQ4TA',
    historicalImage: grandmazuHistImg, // 新增
    arVideo: grandmazuArVideo,         // 新增
  },
];

function App() {
  const [selectedTemple, setSelectedTemple] = useState(null);

  const handleMarkerClick = (temple) => {
    setSelectedTemple(temple);
  };

  const handleCloseModal = () => {
    setSelectedTemple(null);
  };

  return (
    <>
      <Navbar />
      <main>
        <MapComponent temples={templeData} onMarkerClick={handleMarkerClick} />
      </main>
      <Footer />
      <TempleModal temple={selectedTemple} onClose={handleCloseModal} />
    </>
  );
}

export default App;
