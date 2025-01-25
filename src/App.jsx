import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useTheme } from './Api/ThemeContext';
import { Suspense } from 'react';

function App() {
  const {theme} = useTheme()
  return (
    <div className={theme}>
      <Navbar />
      <Suspense fallback={<div>Loadingg</div>}>
    <Outlet />
    </Suspense>
    
    </div>
  )
}

export default App