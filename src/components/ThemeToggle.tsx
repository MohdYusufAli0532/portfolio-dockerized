import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const shouldLight = stored ? stored === 'light' : false;
    setIsLight(shouldLight);
    const root = document.documentElement;
    if (shouldLight) root.classList.add('light');
    else root.classList.remove('light');
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="glass-panel p-2 hover-glow transition-colors"
    >
      {isLight ? <Moon size={16} className="text-brand" /> : <Sun size={16} className="text-brand" />}
    </button>
  );
};

export default ThemeToggle;
