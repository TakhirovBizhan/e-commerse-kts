import MainPage from './pages/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import { Header } from '../components/Header/Header';
import { About_us } from './pages/about_us/About_us';
import ProductPage from './pages/ProductPage';
import { ROUTES } from '../config/routes';
import { ThemeProvider } from '../hooks/useThemes/themeProvider';
import { Provider } from 'react-redux';
import { store } from '../store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={ROUTES.root} element={<MainPage />} />
            <Route path={ROUTES.product} element={<ProductPage />} />
            <Route path={ROUTES.categories} element={<Categories />} />
            <Route path={ROUTES.about_us} element={<About_us />} />
            <Route path="*" element={<Navigate to="/main" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
