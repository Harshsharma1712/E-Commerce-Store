import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LowerSection from './components/LowerSection'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import ProfileDashboard from './pages/ProfileDashboard'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          {/* Add other routes here */}
        </Routes>
        <LowerSection />
      </div>
    </Router>
  )
}