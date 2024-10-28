import React, { useState } from 'react';

const featuredProducts = [
  { id: 1, name: 'Comfort Bra', price: 39.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Silk Boxers', price: 29.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Lace Panties', price: 19.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Cotton Briefs', price: 24.99, image: '/placeholder.svg?height=300&width=300' },
];

export default function MiddleSection() {
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);
  const [animatingProductId, setAnimatingProductId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const addToCart = (product) => {
    setAnimatingProductId(product.id);
    setTimeout(() => {
      setCart([...cart, product]);
      setAnimatingProductId(null);
    }, 500);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <section className="relative h-96 rounded-lg overflow-hidden mb-12">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold mb-4">Comfort Meets Style</h2>
          <p className="text-xl mb-6">Discover our new collection of premium undergarments</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button
                  className={`mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ${
                    animatingProductId === product.id ? 'animate-bounce' : ''
                  }`}
                  onClick={() => addToCart(product)}
                >
                  {animatingProductId === product.id ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-right">
              <p className="font-bold">
                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Promotional Section */}
      <section className="bg-pink-100 rounded-lg p-8 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter and get 10% off your first purchase!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}