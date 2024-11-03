import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories'
import { Header } from '../components/Header/Header';
import { About_us } from './pages/about_us/About_us';

function App() {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About_us" element={<About_us />} />
      </Routes>   
    </BrowserRouter>
  )
}

export default App
