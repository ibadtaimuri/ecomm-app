import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cart() {
    return (
        <div>
            <Navbar />

            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-[#333] mb-8">Cart</h1>
                    <div className="flex justify-between">
                        {/* Cart Table */}
                        <div className="w-3/4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="text-lg font-semibold">Product</div>
                                    <div className="text-lg font-semibold">Price</div>
                                    <div className="text-lg font-semibold">Quantity</div>
                                    <div className="text-lg font-semibold">Subtotal</div>
                                </div>
                                <div className="border-b-2 my-4"></div>

                                {/* Cart Item */}
                                <div key={1} className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/lolito.png"
                                            alt="Asgaard Sofa"
                                            className="w-20 h-20 object-cover rounded-md mr-4"
                                        />
                                        <span className="text-lg font-semibold">Asgaard Sofa</span>
                                    </div>
                                    <span className="text-lg font-semibold">Rs 250,000.00</span>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            value="1"
                                            min="1"
                                            className="border border-gray-300 p-2 rounded-md w-16 text-center"
                                        />
                                    </div>
                                    <span className="text-lg font-semibold">Rs 250,000.00</span>
                                    <button className="text-red-500 ml-4 cursor-pointer hover:text-red-700">
                                        {/* Remove icon (just text for now) */}
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Cart Totals */}
                        <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg ml-2">
                            <h3 className="text-xl font-semibold mb-4 ">Cart Totals</h3>
                            <div className="flex justify-between mb-4">
                                <span>Subtotal</span>
                                <span className="font-semibold">Rs 250,000.00</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Total</span>
                                <span className="font-semibold text-[#F9C747]">Rs 250,000.00</span>
                            </div>
                            <Link href="/checkout">
                                <button className="w-full bg-[#F9D756] py-3 text-lg font-semibold text-white hover:bg-[#F9C747] rounded-md">
                                    Check Out
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Quality, Warranty Protection, Free Shipping, 24/7 Support Section */}
            <section className="bg-[#F9F6F1] py-8 px-6 lg:px-12">
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div className="flex items-center">
                        <span className="text-2xl text-[#F9C747] mr-2">🔧</span> {/* Placeholder for High Quality Icon */}
                        <span>High Quality crafted from top materials</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-2xl text-[#F9C747] mr-2">🛡️</span> {/* Placeholder for Warranty Icon */}
                        <span>Warranty Protection Over 2 years</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-2xl text-[#F9C747] mr-2">🚚</span> {/* Placeholder for Delivery Icon */}
                        <span>Free Shipping Order over 150 $</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-2xl text-[#F9C747] mr-2">💬</span> {/* Placeholder for Support Icon */}
                        <span>24 / 7 Support Dedicated support</span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
