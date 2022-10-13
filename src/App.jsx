import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
import Record from './page/Record';
import Header from './components/Header/Header';

function App() {
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    if (audioList.length !== 0) sessionStorage.setItem('audioList', JSON.stringify(audioList));
  }, [audioList]);

  useEffect(() => {
    const parsedList = JSON.parse(sessionStorage.getItem('audioList'));
    if (parsedList !== null) setAudioList(parsedList);
  }, []);

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
