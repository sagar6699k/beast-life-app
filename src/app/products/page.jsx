import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Whey Protein",
    price: "$49.99",
    img: "https://beastlife.in/cdn/shop/files/proseriesthumb.png?v=1720466031&width=900",
  },
  {
    name: "Pre-Workout Formula",
    price: "$29.99",
    img: "https://beastlife.in/cdn/shop/files/isorich_53628675-215f-448b-92d6-6c99e3b56777.png?v=1728979747&width=900",
  },
  {
    name: "Omega-3 Capsules",
    price: "$19.99",
    img: "https://beastlife.in/cdn/shop/files/isorich_53628675-215f-448b-92d6-6c99e3b56777.png?v=1728979747&width=900",
  },
  {
    name: "Creatine Monohydrate",
    price: "$24.99",
    img: "https://beastlife.in/cdn/shop/files/Creatine.png?v=1715159786&width=900",
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-500 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Beast Life Supplements</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Fuel your training and recovery with science-backed supplements
          trusted by fitness enthusiasts and athletes worldwide.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">Why Choose Us?</h2>
        <p className="text-orange-700 mb-8">
          At Beast Life, we prioritize quality, safety, and performance. Our
          supplements are formulated with premium ingredients to help you
          achieve your fitness goals — whether you're building muscle,
          increasing endurance, or maintaining overall health.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">
              💪 Premium Quality
            </h3>
            <p className="text-orange-600">
              All products are lab-tested to ensure maximum purity and
              effectiveness.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">
              🔬 Science-Backed Formulas
            </h3>
            <p className="text-orange-600">
              Developed with cutting-edge research to optimize results.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">
              🏋️ Trusted by Athletes
            </h3>
            <p className="text-orange-600">
              Endorsed by top athletes for consistent performance and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-800 text-center mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 text-center flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-orange-800">
                  {product.name}
                </h3>
                <p className="text-orange-600 font-medium mt-2">
                  {product.price}
                </p>
                <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-700 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Start Your Beast Journey Today</h2>
        <p className="mb-6">
          Take your fitness to the next level with our premium supplements.
        </p>
        <button className="bg-white text-orange-700 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default Product;
