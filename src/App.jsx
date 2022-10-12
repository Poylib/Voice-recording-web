import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
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
      </Routes>
    </>
  );
}

export default App;
