import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Loyout from './components/Loyout';
import NotFound from './pages/NotFound/NotFound';
import Movies from './pages/Movies/Movies';
import MovieInfo from './components/MovieInfo/MovieInfo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
