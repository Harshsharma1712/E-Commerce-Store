import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-8">About Comfy Undies</h1>
      <div className="bg-pink-100 p-6 rounded-lg shadow-md">
        <p className="text-pink-700 mb-4">
          Comfy Undies is dedicated to providing comfortable, stylish, and high-quality undergarments for all body types. 
          Our mission is to make everyone feel confident and comfortable in their own skin.
        </p>
        <p className="text-pink-700 mb-4">
          Founded in 2023, we've quickly become a favorite among those who prioritize comfort without sacrificing style. 
          Our products are made from premium, sustainable materials and are designed to last.
        </p>
        <p className="text-pink-700">
          At Comfy Undies, we believe that the right undergarments can make a world of difference in how you feel throughout the day. 
          That's why we're committed to continuous innovation and improvement in our designs and materials.
        </p>
      </div>
    </div>
  )
}

export default About