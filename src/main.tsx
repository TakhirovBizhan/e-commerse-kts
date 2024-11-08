import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.tsx';
import './styles/Roboto/fonts.scss';
import './styles/styles.scss';
import './styles/variables.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
