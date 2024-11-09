import MainPage from './pages/MainPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories'
import { Header } from '../components/Header/Header';
import { About_us } from './pages/about_us/About_us';
import ProductPage from './pages/ProductPage';
import { ROUTES } from '../config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Header />}>
          <Route path={ROUTES.root} element={<MainPage />} />
          <Route path={ROUTES.product} element={<ProductPage />} />
          <Route path={ROUTES.categories} element={<Categories />} />
          <Route path={ROUTES.about_us} element={<About_us />} />
          <Route path="*" element={<Navigate to={ROUTES.root} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
