import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Women', path: '/women' },
  { name: 'Men', path: '/men' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="bg-pink-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-pink-800">Comfy Undies</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-pink-800 hover:text-pink-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="relative">
          <button
            className="flex items-center text-pink-800 hover:text-pink-600 transition-colors duration-200"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
            <span className="hidden md:inline">My Profile</span>
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link to="/profile" className="block px-4 py-2 text-sm text-pink-800 hover:bg-pink-100">View Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-pink-800 hover:bg-pink-100">Settings</Link>
              <button className="block w-full text-left px-4 py-2 text-sm text-pink-800 hover:bg-pink-100">Logout</button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-800 hover:text-pink-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-pink-50 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 text-pink-800 hover:bg-pink-200 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/profile" className="block px-4 py-2 text-pink-800 hover:bg-pink-200 transition-colors duration-200">
            My Profile
          </Link>
        </nav>
      )}
    </header>
  )
}