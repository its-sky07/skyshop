import React from 'react'

const About = () => {
  return (
    <>
    
    <div className="container mt-36 mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
      <p className="mb-6">Welcome to our help page. Here you'll find answers to common questions and resources to help you with your shopping experience.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1">1. How do I place an order?</h3>
          <p>To place an order, browse our products, add them to your cart, and proceed to checkout. You'll need to provide your shipping information and payment details.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1">2. What payment methods do you accept?</h3>
          <p>We accept various payment methods including credit/debit cards, PayPal, and more.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1">3. How can I track my order?</h3>
          <p>Once your order is shipped, you'll receive a tracking number via email. You can use this number on our website to track your order's status.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any other questions, feel free to reach out to our support team.</p>
        <p>Email: <a href="mailto:support@ecommerce.com" className="text-blue-500">support@ecommerce.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Return Policy</h2>
        <p>We accept returns within 30 days of purchase. To initiate a return, please contact our support team with your order details.</p>
      </section>
    </div>
    
    </>
  )
}

export default About