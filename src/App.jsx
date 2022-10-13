import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
import Record from './page/Record';
import Header from './components/Header/Header';

function App() {
  const [audioList, setAudioList] = useState([]);
  const [recOn, setRecOn] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Header audioList={audioList} recOn={recOn} />
      <Routes>
        <Route path='/' element={<Play audioList={audioList} />} />
        <Route
          path='/record'
          element={<Record audioList={audioList} setAudioList={setAudioList} recOn={recOn} setRecOn={setRecOn} />}
        />
      </Routes>
    </>
  );
}

export default App;
