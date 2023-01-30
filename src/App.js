import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='p-8'>
      <SearchBar />
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
