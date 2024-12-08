import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

// components/Shop.tsx
export default function Shop() {
    const products = [
        { id: 1, img: "./slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 2, img: "./leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 3, img: "./lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%" },
        { id: 4, img: "./respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New" },
        { id: 5, img: "./slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 6, img: "./leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 7, img: "./lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%" },
        { id: 8, img: "./respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New" },
        { id: 9, img: "./slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 10, img: "./leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%" },
        { id: 11, img: "./lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%" },
        { id: 12, img: "./respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New" },
        // Add more products as needed
    ];

    return (
        <div>
            <Navbar />
            {/* Header Section */}
            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[#333]">Shop</h1>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                        {products.map((product) => (
                            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                {/* Corrected Image Path */}
                                <img
                                    src={product.img} // Use the updated image path
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />

                                {/* Discount Badge */}
                                {product.discount && (
                                    <div className={`absolute top-4 right-4 bg-${product.discount === "New" ? 'green' : 'red'}-500 text-white px-3 py-1 text-xs font-semibold rounded-full`}>
                                        {product.discount}
                                    </div>
                                )}

                                {/* Product Details */}
                                <h3 className="text-xl font-semibold text-[#333] mb-2">
                                    <Link href={`/product/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="text-sm text-[#666] mb-4">{product.desc}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-[#333]">Rp {product.price}</span>
                                    {product.oldPrice && <span className="text-sm text-[#999] line-through">Rp {product.oldPrice}</span>}
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <button className="bg-[#F9D756] text-[#333] py-2 px-6 text-sm font-semibold hover:bg-[#F9C747] rounded-none">Add to cart</button>
                                    <div className="flex space-x-2 text-[#9C7B3F]">
                                        <button>Share</button>
                                        <button>Compare</button>
                                        <button>Like</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="bg-[#F8F4EC] py-6 px-6 lg:px-12 mt-6">
                <div className="container mx-auto flex justify-between items-center text-[#9C7B3F] font-semibold">
                    <span className="text-lg">High Quality</span>
                    <span className="text-lg">Warranty Protection</span>
                    <span className="text-lg">Free Shipping</span>
                    <span className="text-lg">24 / 7 Support</span>
                </div>
            </section>
            <Footer />
        </div>
    );
}