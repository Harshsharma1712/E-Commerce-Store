import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src="/src/assets/Profile-pic.jpg" alt="Profile" className="h-32 w-32 rounded-full mr-6" />
          <div>
            <h2 className="text-2xl font-semibold text-pink-800">Jane Doe</h2>
            <p className="text-pink-600">jane.doe@example.com</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-pink-800 mb-4">Personal Information</h3>
            <p className="mb-2"><span className="font-semibold">Name:</span> Jane Doe</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> jane.doe@example.com</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
            <p className="mb-2"><span className="font-semibold">Address:</span> 123 Comfy Street, Cozy Town, 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-pink-800 mb-4">Account Settings</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/change-password" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">
                  Change Password
                </Link>
              </li>
              <li>
                <Link to="/notification-preferences" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">
                  Notification Preferences
                </Link>
              </li>
              <li>
                <Link to="/privacy-settings" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">
                  Privacy Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-pink-800 mb-4">Recent Orders</h3>
          <div className="bg-pink-50 rounded-md p-4">
            <p className="text-pink-800">You haven't placed any orders yet.</p>
            <Link to="/collections" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">
              Start shopping now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}