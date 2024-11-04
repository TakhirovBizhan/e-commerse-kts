import MainPage from './pages/MainPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories'
import { Header } from '../components/Header/Header';
import { About_us } from './pages/about_us/About_us';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/product/:id" element={<ProductPage />} />
        <Route path="/main/page/:number" element={<MainPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="*" element={<Navigate to="/main" replace />} />   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
