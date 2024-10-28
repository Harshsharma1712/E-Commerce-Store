import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Bras', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Panties', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Sleepwear', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Shapewear', image: '/placeholder.svg?height=300&width=300' },
]

const featuredProducts = [
  { name: 'Comfort Lace Bra', price: 39.99, image: '/placeholder.svg?height=300&width=300' },
  { name: 'Seamless Boyshort', price: 14.99, image: '/placeholder.svg?height=300&width=300' },
  { name: 'Silk Pajama Set', price: 89.99, image: '/placeholder.svg?height=300&width=300' },
]

export default function Women() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">Women's Collection</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-700 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">{category.name}</h3>
                <Link
                  to={`/women/${category.name.toLowerCase()}`}
                  className="text-pink-500 hover:text-pink-600 transition-colors duration-200"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-700 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">{product.name}</h3>
                <p className="text-pink-600 mb-4">${product.price.toFixed(2)}</p>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Why Choose Our Women's Collection?</h2>
        <ul className="list-disc list-inside text-pink-800">
          <li>Designed for comfort and style</li>
          <li>High-quality, breathable fabrics</li>
          <li>Inclusive sizing for all body types</li>
          <li>Ethically manufactured</li>
        </ul>
      </section>
    </div>
  )
}