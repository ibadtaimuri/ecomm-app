'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
    { id: 1, img: "/slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Embodying the raw, wayward spirit of rock 'n' roll...", additionalInfo: "Weighing in under 7 pounds...", reviews: [{ rating: 4, comment: "Great product!" }] },
    { id: 2, img: "/leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Stylish and comfortable chair for your home...", additionalInfo: "Perfect for modern living spaces...", reviews: [{ rating: 5, comment: "Excellent comfort!" }] },
    { id: 3, img: "/lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%", description: "This luxury big sofa offers maximum comfort...", additionalInfo: "Made from durable fabric and wooden frame...", reviews: [{ rating: 4, comment: "Very comfortable, but a bit pricey." }] },
    { id: 4, img: "/respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New", description: "Modern outdoor furniture for your garden...", additionalInfo: "Weather-resistant and durable materials...", reviews: [{ rating: 5, comment: "Perfect for outdoor settings!" }] },
];

export default function ProductDetail() {
    const pathname = usePathname();
    const id = pathname?.split("/")[2]; // Extract the product ID from the URL

    // Find the product by ID
    const product = products.find((product) => product.id === parseInt(id as string));

    // If no product found, show an error message
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <Navbar />

            {/* Product Details Section */}
            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <div className="mt-4 grid grid-cols-5 gap-4">
                            <img
                                src="/s1.png"
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded-md shadow-sm"
                            />
                            <img
                                src="/s2.png"
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded-md shadow-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-[#333]">{product.name}</h2>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-yellow-500">
                                ★★★★☆ 5 Customer Reviews
                            </span>
                        </div>
                        <p className="text-xl font-semibold text-[#333] mt-2">Rs. {product.price}</p>

                        <p className="text-[#666] mt-4">{product.desc}</p>

                        {/* Size and Color Selection */}
                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-[#333]">Size</label>
                            <select className="border border-gray-300 p-2 mt-2 rounded-md">
                                <option>L</option>
                                <option>XL</option>
                                <option>XS</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold text-[#333]">Color</label>
                            <div className="flex space-x-4 mt-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                                <div className="w-6 h-6 rounded-full bg-brown-500"></div>
                            </div>
                        </div>

                        <div className="mt-6 flex space-x-6">
                            <button className="bg-[#F9D756] text-[#333] py-3 px-6 text-sm font-semibold hover:bg-[#F9C747] rounded-none">
                                Add to Cart
                            </button>
                            <button className="bg-[#F9D756] text-[#333] py-3 px-6 text-sm font-semibold hover:bg-[#F9C747] rounded-none">Compare</button>
                        </div>

                        <div className="mt-6">
                            <p><span className="font-semibold text-[#333]">SKU</span>: SS001</p>
                            <p><span className="font-semibold text-[#333]">Category</span>: Sofas</p>
                            <p><span className="font-semibold text-[#333]">Tags</span>: Sofa, Chair, Home, Shop</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs: Description, Additional Information, Reviews */}
            <section className="bg-white py-8 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="flex border-b-2 border-gray-300">
                        <button className="py-2 px-4 text-lg font-semibold text-[#333] hover:text-[#F9C747]">Description</button>
                        <button className="py-2 px-4 text-lg font-semibold text-[#333] hover:text-[#F9C747]">Additional Information</button>
                        <button className="py-2 px-4 text-lg font-semibold text-[#333] hover:text-[#F9C747]">Reviews [5]</button>
                    </div>

                    {/* Description Tab */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-[#333]">Description</h3>
                        <p className="text-[#666] mt-4">{product.description}</p>
                    </div>

                    {/* Additional Information Tab */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-[#333]">Additional Information</h3>
                        <p className="text-[#666] mt-4">{product.additionalInfo}</p>
                    </div>

                    {/* Reviews Tab */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-[#333]">Reviews</h3>
                        <div className="mt-4">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="border-b py-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-yellow-500">★★★★★</span>
                                        <span className="text-sm text-[#666]">{review.comment}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="bg-white py-8 px-6 lg:px-12">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-semibold text-[#333] mb-6">Related Products</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Related Products - You can loop through related products */}
                        <div>
                            <img src="/slytherine.png" alt="Syltherine" className="w-full h-52 object-cover rounded-lg mb-4" />
                            <p className="text-lg font-semibold">Syltherine</p>
                            <span className="text-sm text-[#666]">Rp 2,500,000</span>
                        </div>
                        <div>
                            <img src="/leviosa.png" alt="Leviosa" className="w-full h-52 object-cover rounded-lg mb-4" />
                            <p className="text-lg font-semibold">Leviosa</p>
                            <span className="text-sm text-[#666]">Rp 2,500,000</span>
                        </div>
                        <div>
                            <img src="/lolito.png" alt="Lolito" className="w-full h-52 object-cover rounded-lg mb-4" />
                            <p className="text-lg font-semibold">Lolito</p>
                            <span className="text-sm text-[#666]">Rp 7,000,000</span>
                        </div>
                        <div>
                            <img src="/respira.jpg" alt="Respira" className="w-full h-52 object-cover rounded-lg mb-4" />
                            <p className="text-lg font-semibold">Respira</p>
                            <span className="text-sm text-[#666]">Rp 500,000</span>
                        </div>
                    </div>
                    <button className="text-[#F9C747] py-2 px-4 font-semibold mt-4">Show More</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}