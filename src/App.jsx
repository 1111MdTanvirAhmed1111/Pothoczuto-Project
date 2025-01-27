import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useTheme } from './Api/ThemeContext';
import { Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const {theme} = useTheme()
  return (
    <div className={theme}>
      <Navbar />
      <Suspense fallback={<div>Loadingg</div>}>
    <Outlet />
    </Suspense>
    <ScrollToTop />
    </div>
  )
}

export default App