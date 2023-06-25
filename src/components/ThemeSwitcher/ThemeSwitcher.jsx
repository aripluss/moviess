import React, { useContext } from 'react';

import { ThemeContext } from 'components/App';

function ThemeSwitcher() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ fontSize: 20 }}>
      {currentTheme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeSwitcher;
