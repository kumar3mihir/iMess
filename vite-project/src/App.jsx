import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MessMenu from './components/MessMenu'
import Calendar from './components/Calendar'
import UserProfilePage from './pages/ProfilePage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/MessMenu" element={<MessMenu />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter> {/* Added closing BrowserRouter tag */}
    </>
  );
}

export default App;