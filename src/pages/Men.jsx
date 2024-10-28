import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Boxers', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Briefs', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Undershirts', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Loungewear', image: '/placeholder.svg?height=300&width=300' },
]

const featuredProducts = [
  { name: 'Comfort Fit Boxer', price: 24.99, image: '/placeholder.svg?height=300&width=300' },
  { name: 'Breathable Brief', price: 19.99, image: '/placeholder.svg?height=300&width=300' },
  { name: 'Soft Cotton Undershirt', price: 29.99, image: '/placeholder.svg?height=300&width=300' },
]

export default function Men() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">Men's Collection</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-800 mb-8">{category.name}</h3>
                <Link
                  to={`/men/${category.name.toLowerCase()}`}
                  className="text-pink-800 mb-8 hover:text-blue-600 transition-colors duration-200"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{product.name}</h3>
                <p className="text-blue-600 mb-4">${product.price.toFixed(2)}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-800 mb-8">Why Choose Our Men's Collection?</h2>
        <ul className="list-disc list-inside text-pink-800 mb-8">
          <li>Designed for ultimate comfort and support</li>
          <li>Premium quality, durable materials</li>
          <li>Wide range of sizes for all body types</li>
          <li>Moisture-wicking technology for all-day freshness</li>
        </ul>
      </section>
    </div>
  )
}