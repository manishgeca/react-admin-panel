import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../Store/themeReducer';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;