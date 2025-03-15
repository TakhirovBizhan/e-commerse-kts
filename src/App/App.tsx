import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutUs, Cart, Categories, MainPage, ProductPage, AuthPage } from './pages';
import { ROUTES } from '../config/routes';
import { ThemeProvider } from '../hooks/useThemes/themeProvider';
import { AppLayout } from './AppLayout';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path={ROUTES.root} element={<MainPage />} />
            <Route path={ROUTES.category} element={<MainPage />} />
            <Route path={ROUTES.product} element={<ProductPage />} />
            <Route path={ROUTES.categories} element={<Categories />} />
            <Route path={ROUTES.about_us} element={<AboutUs />} />
            <Route path={ROUTES.auth} element={<AuthPage />} />
            <Route path={ROUTES.cart} element={<Cart />} />
            <Route path="*" element={<Navigate to="main" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
