import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
import Record from './page/Record';
import Header from './components/Header/Header';

function App() {
  const [audioList, setAudioList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Play audioList={audioList} />} />
        <Route path='/record' element={<Record audioList={audioList} setAudioList={setAudioList} />} />
      </Routes>
    </>
  );
}

export default App;
