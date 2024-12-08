import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Checkout() {
    return (
        <div>
            <Navbar />

            {/* Checkout Banner Section */}
            <section
                className="bg-cover bg-center text-white py-32 px-6 lg:px-12 opacity-40"
                style={{
                    backgroundImage: 'url("/s1.png");', // Replace with your image if needed
                }}
            >
                <div className="container mx-auto text-center">
                    {/* Add Image to the Banner */}
                    {/* <img
                        src="/s1.png"  // Replace with your image path
                        alt="Checkout Banner"
                        className="mx-auto mb-4 w-1/2 md:w-1/4 lg:w-1/6"
                    /> */}
                    <h1 className="text-4xl font-bold mb-2 text-black">Checkout</h1>
                    <p className="text-lg text-black">Home &gt; Checkout</p>
                </div>
            </section>

            {/* Checkout Form Section */}
            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* Billing Details */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold text-[#333] mb-8">Billing details</h2>
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label htmlFor="first_name" className="block text-lg font-semibold text-[#333]">First Name</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label htmlFor="last_name" className="block text-lg font-semibold text-[#333]">Last Name</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="company" className="block text-lg font-semibold text-[#333]">Company Name (Optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="country" className="block text-lg font-semibold text-[#333]">Country / Region</label>
                                <select
                                    id="country"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                >
                                    <option>Sri Lanka</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="address" className="block text-lg font-semibold text-[#333]">Street address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Street Address"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="town" className="block text-lg font-semibold text-[#333]">Town / City</label>
                                <input
                                    type="text"
                                    id="town"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Town / City"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="province" className="block text-lg font-semibold text-[#333]">Province</label>
                                <select
                                    id="province"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                >
                                    <option>Western Province</option>
                                    <option>Central Province</option>
                                    <option>Eastern Province</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="zip_code" className="block text-lg font-semibold text-[#333]">ZIP Code</label>
                                <input
                                    type="text"
                                    id="zip_code"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="ZIP Code"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="phone" className="block text-lg font-semibold text-[#333]">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Phone"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="email" className="block text-lg font-semibold text-[#333]">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="additional_info" className="block text-lg font-semibold text-[#333]">Additional Information</label>
                                <textarea
                                    id="additional_info"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Any Additional Information"
                                    rows={4}
                                ></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">Your Order</h3>

                        <div className="flex justify-between mb-2">
                            <span>Product</span>
                            <span className="font-semibold">Rs 250,000.00</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span className="font-semibold">Rs 250,000.00</span>
                        </div>

                        <div className="flex justify-between mb-4">
                            <span>Total</span>
                            <span className="font-semibold text-[#F9C747]">Rs 250,000.00</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold text-[#333]">Payment Methods</h4>
                            <div className="mt-2">
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="radio"
                                        id="direct_bank"
                                        name="payment_method"
                                        className="form-radio"
                                    />
                                    <label htmlFor="direct_bank" className="text-lg text-[#333]">Direct Bank Transfer</label>
                                </div>
                                <p className="mt-2 text-sm text-[#666]">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                    Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="radio"
                                        id="cash_on_delivery"
                                        name="payment_method"
                                        className="form-radio"
                                    />
                                    <label htmlFor="cash_on_delivery" className="text-lg text-[#333]">Cash On Delivery</label>
                                </div>
                                <p className="mt-2 text-sm text-[#666]">
                                    Pay when the product is delivered to your doorstep.
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#F9D756] text-white py-3 mt-4 text-lg font-semibold hover:bg-[#F9C747] rounded-md"
                        >
                            Place Order
                        </button>
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