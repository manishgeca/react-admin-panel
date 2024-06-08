import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import Dashboard from "./src/components/ThemeSwitcher"
import Tables from './src/pages/Table';
import Charts from './src/pages/Calender';
import Calendar from './src/pages/Calender'
import Kanban from './src/pages/Kanban';
import { lightTheme, darkTheme } from './src/themes';
import "./src/CSS/global.css";

const App = () => {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="app-container">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;