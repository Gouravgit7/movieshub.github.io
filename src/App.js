import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Mainnav/MainNav';
import Details from './Pages/Details/Details';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="app">

        <Container>
          <Routes>
            <Route path='/' element={<Trending />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;
