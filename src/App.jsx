import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './components/Play/Play';
import PlayList from './page/PlayList';
import Record from './page/Record';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Play />} />
        <Route path='/record' element={<Record />} />
        <Route path='/playlist' element={<PlayList />} />
      </Routes>
    </>
  );
}

export default App;
