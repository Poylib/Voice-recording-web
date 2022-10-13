import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
import Record from './page/Record';
import Header from './components/Header/Header';

function App() {
  const [selectedRecord, setSelectedRecord] = useState('');
  const [recOn, setRecOn] = useState(true);
  return (
    <>
      <GlobalStyle />
      <Header setSelectedRecord={setSelectedRecord} recOn={recOn} />
      <Routes>
        <Route path='/' element={<Play selectedRecord={selectedRecord} />} />
        <Route path='/record' element={<Record recOn={recOn} setRecOn={setRecOn} />} />
      </Routes>
    </>
  );
}

export default App;
