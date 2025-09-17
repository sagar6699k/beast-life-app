import { Inter, Poppins } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // semi-bold to extra-bold
});


// Gallery images
const images = [
  "https://plus.unsplash.com/premium_photo-1661301057249-bd008eebd06a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
];


// Key features
const features = [
  {
    title: "Premium Supplements",
    desc: "Fuel your gains with science-backed, high-quality supplements.",
    img: "https://images.unsplash.com/photo-1595257842044-8f021a58c8a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hleSUyMHByb3RlaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Expert Training Plans",
    desc: "Customized workout programs to help you hit your fitness goals.",
    img: "https://plus.unsplash.com/premium_photo-1726328925629-0511220f27f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwZXJ0JTIwZ3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Nutrition Guidance",
    desc: "Personalized diet plans to match your body and performance needs.",
    img: "https://images.unsplash.com/photo-1738523686578-f18348c8292b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhwZXJ0JTIwZ3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// Popular products
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

export default function Home() {
  return (
  <div className={`flex flex-col min-h-screen ${inter.className}`}>
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-orange-50">
        <h1
          className={`${poppins.className} text-5xl font-extrabold text-orange-800 mb-4`}
        >
          Welcome to Beast Life
        </h1>
        <p className="text-lg text-orange-700 max-w-xl">
          Your one-stop destination for fitness, nutrition, and high-quality
          supplements. Train smart. Eat right. Live the Beast Life.
        </p>
        <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-full shadow hover:bg-orange-700 transition">
          Start Your Journey
        </button>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-800">
            Why Choose Beast Life
          </h2>
          <p className="text-orange-700 mt-2">
            Build strength, eat clean, and achieve your goals with expert-backed
            fitness solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-orange-800">
                  {feature.title}
                </h3>
                <p className="text-orange-700 mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-800">
            Popular Products
          </h2>
          <p className="text-orange-700 mt-2">
            Shop our best-selling supplements trusted by athletes and fitness
            enthusiasts.
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col items-center p-4"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-orange-800">
                {product.name}
              </h3>
              <p className="text-orange-600">{product.price}</p>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow hover:bg-orange-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */} 
      <section className="bg-orange-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-800">
            Beast Life Gallery
          </h2>
          <p className="text-orange-700 mt-2">
            A glimpse of the hard work, dedication, and results that define us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                src={img}
                alt={`Gallery ${idx}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
