export default function MangoFarmWebsite() {
  const mangoes = [
    {
      name: "Banganapalli",
      price: "₹120/kg",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Rasalu",
      price: "₹150/kg",
      image:
        "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Totapuri",
      price: "₹100/kg",
      image:
  "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-yellow-700">
          PA Mango Farm
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-yellow-700">
            Home
          </a>
          <a href="#products" className="hover:text-yellow-700">
            Mangoes
          </a>
          <a href="#about" className="hover:text-yellow-700">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-700">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[85vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Fresh Mangoes Direct From Our Farm
          </h1>

          <p className="text-lg md:text-2xl mb-8">
            Naturally grown premium mangoes delivered fresh to your doorstep.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Explore Mangoes
            </a>

            <a
              href="https://wa.me/918106819899"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-100 rounded-3xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Farm Fresh</h3>
            <p>
              Mangoes are harvested directly from our farm and packed carefully.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-3xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Natural Farming</h3>
            <p>
              We focus on healthy cultivation methods and premium fruit quality.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-3xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p>
              Fresh mangoes delivered safely across cities with secure packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-yellow-700 mb-4">
              Our Mango Varieties
            </h2>

            <p className="text-lg text-gray-600">
              Freshly harvested premium mangoes available this season.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {mangoes.map((mango, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >
                <img
                  src={mango.image}
                  alt={mango.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-2">{mango.name}</h3>

                  <p className="text-yellow-700 text-2xl font-semibold mb-4">
                    {mango.price}
                  </p>

                  <a
                    href="https://wa.me/918106819899"
                    target="_blank"
                    className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-semibold"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop"
              alt="Farm"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-700 mb-6">
              About Our Farm
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
  Our mango farm was started with passion and dedication to provide naturally ripened, farm-fresh mangoes directly to customers. We believe in maintaining authentic taste and freshness without using harmful carbides or artificial chemicals.
</p>

<p className="text-lg leading-8 text-gray-700">
  Every mango is carefully grown, handpicked, and packed with care to ensure premium quality and rich natural flavor. Our goal is to bring healthy and delicious mangoes from our farm to your family.
</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-yellow-700 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 text-lg">
              Place your order directly through WhatsApp or contact us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Farm Details</h3>

              <p className="mb-3">📍 Pullalacheruvu, <br />  Markapuram (dt),<br /> Andhra Pradesh,<br /> 523328</p>
              <p className="mb-3">📞 +91 8106819899</p>
              <p className="mb-3">✉️ pamangofarm@gmail.com</p>
            </div>

            <form action="https://formsubmit.co/pamangofarm@gmail.com" method="POST">

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full border border-gray-300 rounded-xl p-4 mb-4"
    required
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    className="w-full border border-gray-300 rounded-xl p-4 mb-4"
    required
  />

  <input
    type="text"
    name="quantity"
    placeholder="Quantity"
    className="w-full border border-gray-300 rounded-xl p-4 mb-4"
    required
  />

  <textarea
    name="address"
    placeholder="Delivery Address"
    rows="5"
    className="w-full border border-gray-300 rounded-xl p-4 mb-4"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-2xl text-lg font-semibold"
  >
    Place Order
  </button>

</form>
<div className="mt-8 bg-yellow-50 p-6 rounded-2xl shadow-md">
  <h3 className="text-2xl font-bold mb-4">Payment</h3>

  <p className="text-lg mb-2">
    Pay using UPI:
  </p>

  <p className="text-xl font-semibold text-green-600">
    8106819899@ybl
  </p>

  <p className="mt-4 text-gray-600">
    After payment, please share payment screenshot on WhatsApp for order confirmation.
  </p>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-700 text-white text-center py-6 mt-10">
        <p>
          © 2026 Golden Mango Farms. Fresh Mangoes Direct From Farm.
        </p>
      </footer>
    </div>
  );
}

/*
========================
END-TO-END GUIDE
========================

1. Install Node.js
https://nodejs.org

2. Create React App
Open terminal:

npm create vite@latest mango-website -- --template react

3. Open project
cd mango-website

4. Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

5. Replace App.jsx with this file.

6. Run project
npm install
npm run dev

7. Deploy FREE
Use:
https://vercel.com
OR
https://netlify.com

8. Buy Domain
Examples:
www.goldenmangofarms.com

9. Connect WhatsApp
Replace:
https://wa.me/919999999999
with your actual number.

10. Add Payments Later
Use Razorpay.

========================
NEXT IMPROVEMENTS
========================

- Admin panel
- Real checkout
- Cart system
- Order tracking
- Delivery charges
- Customer login
- Mango inventory
- Reviews section
- Instagram integration
- SEO optimization
- Google Maps integration
- Dark mode
- Multi-language support

*/
