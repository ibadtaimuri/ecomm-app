'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const products = [
    { id: 1, img: "/slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Embodying the raw, wayward spirit of rock 'n' roll...", additionalInfo: "Weighing in under 7 pounds...", reviews: [{ rating: 4, comment: "Great product!" }] },
    { id: 2, img: "/leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Stylish and comfortable chair for your home...", additionalInfo: "Perfect for modern living spaces...", reviews: [{ rating: 5, comment: "Excellent comfort!" }] },
    { id: 3, img: "/lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%", description: "This luxury big sofa offers maximum comfort...", additionalInfo: "Made from durable fabric and wooden frame...", reviews: [{ rating: 4, comment: "Very comfortable, but a bit pricey." }] },
    { id: 4, img: "/respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New", description: "Modern outdoor furniture for your garden...", additionalInfo: "Weather-resistant and durable materials...", reviews: [{ rating: 5, comment: "Perfect for outdoor settings!" }] },
    { id: 5, img: "/slytherine.png", name: "Syltherine", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Stylish and comfortable chair for your home...", additionalInfo: "Perfect for modern living spaces...", reviews: [{ rating: 5, comment: "Excellent comfort!" }] },
    { id: 6, img: "/leviosa.png", name: "Leviosa", desc: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: "-30%", description: "Stylish and comfortable chair for your home...", additionalInfo: "Perfect for modern living spaces...", reviews: [{ rating: 5, comment: "Excellent comfort!" }] },
    { id: 7, img: "/lolito.png", name: "Lolito", desc: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: "-50%", description: "This luxury big sofa offers maximum comfort...", additionalInfo: "Made from durable fabric and wooden frame...", reviews: [{ rating: 4, comment: "Very comfortable, but a bit pricey." }] },
    { id: 8, img: "/respira.jpg", name: "Respira", desc: "Outdoor bar table and stool", price: "500,000", oldPrice: null, discount: "New", description: "Modern outdoor furniture for your garden...", additionalInfo: "Weather-resistant and durable materials...", reviews: [{ rating: 5, comment: "Perfect for outdoor settings!" }] },
];

interface CartItem {
    name: string;
    price: string;
    quantity: number;
}

export default function ProductDetail() {
    const pathname = usePathname();
    const id = pathname?.split("/")[2]; // Extract the product ID from the URL

    // Find the product by ID
    const product = products.find((product) => product.id === parseInt(id as string));

    // If no product found, show an error message
    if (!product) return <p>Product not found</p>;

    // State to handle the visibility of the cart sidebar
    const [cartOpen, setCartOpen] = useState(false);

    // State for cart items with an explicit type
    const [cartItems, setCartItems] = useState<CartItem[]>([]); // Define the type here

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        setCartItems((prev) => {
            const updatedCart = [...prev];
            const existingProductIndex = updatedCart.findIndex(item => item.name === product.name);

            if (existingProductIndex >= 0) {
                // If product already exists, update the quantity
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                // Otherwise, add the new product
                updatedCart.push({ name: product.name, price: product.price, quantity: 1 });
            }
            return updatedCart;
        });
        setCartOpen(true); // Open the sidebar after adding the product
    };

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
                            <button
                                onClick={handleAddToCart}
                                className="bg-[#F9D756] text-[#333] py-3 px-6 text-sm font-semibold hover:bg-[#F9C747] rounded-none"
                            >
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

            {/* Cart Sidebar */}
            {cartOpen && (
                <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-bold">Shopping Cart</h2>
                        <button
                            onClick={() => setCartOpen(false)}
                            className="text-xl font-semibold text-gray-500"
                        >
                            X
                        </button>
                    </div>
                    <div className="px-4 py-2">
                        <div className="mb-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex justify-between mb-2">
                                    <span>{item.name}</span>
                                    <span>{`Rs. ${item.price}`}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Subtotal</span>
                            <span>Rs. {cartItems.reduce((acc, item) => acc + parseInt(item.price), 0)}</span>
                        </div>
                        <div className="flex space-x-4">
                            <button className="w-1/2 bg-gray-300 py-2 rounded-md">Cart</button>
                            <button className="w-1/2 bg-[#F9D756] py-2 rounded-md">Checkout</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
