import { useEffect, useState } from 'react';

export default function ThemeSwitch({ onToggle, currentTheme }) {
  return (
    <button className="theme-toggle" onClick={onToggle} title="Alternar Tema">
      <span className="material-icons">
        {currentTheme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}