import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useThemes/themeContext';
import Button from '../Button';

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <Button onClick={toggleTheme}>Переключить тему (текущая: {theme})</Button>;
};
