import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutUs, Cart, Categories, MainPage, ProductPage, Profile } from './pages';
import { ROUTES } from '../config/routes';
import { ThemeProvider } from '../hooks/useThemes/themeProvider';
import { Provider } from 'react-redux';
import { store } from '../store';
import Header from '../components/Header';

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
            <Route path={ROUTES.about_us} element={<AboutUs />} />
            <Route path={ROUTES.profile} element={<Profile />} />
            <Route path={ROUTES.cart} element={<Cart />} />
            <Route path="*" element={<Navigate to="/main" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
