// components/OurProducts.tsx
export default function OurProducts() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-[#f9f9f9]">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#333] mb-8">Our Products</h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product Card 1 */}
                    <div className="relative bg-white p-6 rounded-lg hover:shadow-lg transition-all group">
                        <img src="./slytherine.png" alt="Syltherine" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <div className="absolute top-4 right-4 bg-[#ff3b3b] text-white px-3 py-1 text-sm font-semibold rounded-full">
                            -30%
                        </div>

                        {/* Add to Cart Button - Visible on Hover */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-[#F9D756] text-[#333] py-2 px-6 text-sm font-semibold hover:bg-[#F9C747]">
                                Add to cart
                            </button>
                        </div>

                        <h3 className="text-xl font-semibold text-[#333] mb-2">Syltherine</h3>
                        <p className="text-[#666] mb-4">Stylish cafe chair</p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-[#333]">Rp 2.500.000</span>
                            <span className="line-through text-[#999]">Rp 3.500.000</span>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2 text-[#9C7B3F]">
                                <button>Share</button>
                                <button>Compare</button>
                                <button>Like</button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group">
                        <img src="./leviosa.png" alt="Leviosa" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <div className="absolute top-4 right-4 bg-[#7f7f7f] text-white px-3 py-1 text-sm font-semibold rounded-full">
                            New
                        </div>

                        {/* Add to Cart Button - Visible on Hover */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-[#F9D756] text-[#333] py-2 px-6 text-sm font-semibold hover:bg-[#F9C747]">
                                Add to cart
                            </button>
                        </div>

                        <h3 className="text-xl font-semibold text-[#333] mb-2">Leviosa</h3>
                        <p className="text-[#666] mb-4">Luxury big sofa</p>
                        <span className="text-lg font-bold text-[#333]">Rp 7.000.000</span>

                        {/* Action Buttons */}
                        <div className="flex justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2 text-[#9C7B3F]">
                                <button>Share</button>
                                <button>Compare</button>
                                <button>Like</button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group">
                        <img src="./lolito.png" alt="Lolito" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <div className="absolute top-4 right-4 bg-[#ff3b3b] text-white px-3 py-1 text-sm font-semibold rounded-full">
                            -50%
                        </div>

                        {/* Add to Cart Button - Visible on Hover */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-[#F9D756] text-[#333] py-2 px-6 text-sm font-semibold hover:bg-[#F9C747]">
                                Add to cart
                            </button>
                        </div>

                        <h3 className="text-xl font-semibold text-[#333] mb-2">Lolito</h3>
                        <p className="text-[#666] mb-4">Luxury big sofa</p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-[#333]">Rp 7.000.000</span>
                            <span className="line-through text-[#999]">Rp 14.000.000</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2 text-[#9C7B3F]">
                                <button>Share</button>
                                <button>Compare</button>
                                <button>Like</button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 4 */}
                    <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group">
                        <img src="./respira.jpg" alt="Respira" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <div className="absolute top-4 right-4 bg-[#00b200] text-white px-3 py-1 text-sm font-semibold rounded-full">
                            New
                        </div>

                        {/* Add to Cart Button - Visible on Hover */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-[#F9D756] text-[#333] py-2 px-6 text-sm font-semibold hover:bg-[#F9C747]">
                                Add to cart
                            </button>
                        </div>

                        <h3 className="text-xl font-semibold text-[#333] mb-2">Respira</h3>
                        <p className="text-[#666] mb-4">Outdoor bar table and stool</p>
                        <span className="text-lg font-bold text-[#333]">Rp 500.000</span>

                        {/* Action Buttons */}
                        <div className="flex justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2 text-[#9C7B3F]">
                                <button>Share</button>
                                <button>Compare</button>
                                <button>Like</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Show More Button */}
                <div className="mt-12">
                    <button className="bg-[#9C7B3F] text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-[#80602d] transition-all">
                        Show More
                    </button>
                </div>
            </div>
        </section>
    );
}