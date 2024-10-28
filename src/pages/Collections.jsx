import React from 'react'
import { Link } from 'react-router-dom'

function Collections() {
  const collections = [
    { id: 1, name: 'Everyday Essentials', image: '/placeholder.svg?height=300&width=400' },
    { id: 2, name: 'Luxe Lingerie', image: '/placeholder.svg?height=300&width=400' },
    { id: 3, name: 'Sporty Comfort', image: '/placeholder.svg?height=300&width=400' },
    { id: 4, name: 'Bridal Collection', image: '/placeholder.svg?height=300&width=400' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">{collection.name}</h2>
            <Link to={`/collections/${collection.id}`} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200">
              View Collection
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections