import React from 'react'
import { Star, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    comment: 'The most comfortable bra Ive ever worn. I forget Im wearing it!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Thompson',
    comment: 'Great quality boxers. Soft material and perfect fit.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emily Davis',
    comment: 'Love the variety of styles. These panties are both cute and comfy!',
    rating: 5,
  },
]

const sizeGuide = [
  { size: 'XS', bust: '30-32', waist: '24-26', hip: '33-35' },
  { size: 'S', bust: '32-34', waist: '26-28', hip: '35-37' },
  { size: 'M', bust: '34-36', waist: '28-30', hip: '37-39' },
  { size: 'L', bust: '36-38', waist: '30-32', hip: '39-41' },
  { size: 'XL', bust: '38-40', waist: '32-34', hip: '41-43' },
]

export default function LowerSection() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Size Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-pink-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Size</th>
                  <th className="py-3 px-4 text-left">Bust (inches)</th>
                  <th className="py-3 px-4 text-left">Waist (inches)</th>
                  <th className="py-3 px-4 text-left">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((size, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4">{size.size}</td>
                    <td className="py-3 px-4">{size.bust}</td>
                    <td className="py-3 px-4">{size.waist}</td>
                    <td className="py-3 px-4">{size.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-pink-800 text-white rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Comfy Undies</h3>
                <p className="mb-4">Bringing comfort and style to your everyday essentials.</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-pink-300">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover:text-pink-300">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-pink-300">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-pink-300">About Us</a></li>
                  <li><a href="#" className="hover:text-pink-300">FAQs</a></li>
                  <li><a href="#" className="hover:text-pink-300">Shipping & Returns</a></li>
                  <li><a href="#" className="hover:text-pink-300">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail size={20} className="mr-2" />
                    <a href="mailto:info@comfyundies.com" className="hover:text-pink-300">info@comfyundies.com</a>
                  </li>
                  <li className="flex items-center">
                    <Phone size={20} className="mr-2" />
                    <a href="tel:+1234567890" className="hover:text-pink-300">+1 (234) 567-890</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin size={20} className="mr-2" />
                    <span>123 Comfort St, Cozy City, 12345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-pink-900 py-4 text-center">
            <p>&copy; 2023 Comfy Undies. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}