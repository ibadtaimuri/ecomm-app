import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <div>
            <Navbar />

            {/* Contact Banner Section */}
            <section
                className="bg-cover bg-center text-white py-32 px-6 lg:px-12"
                style={{
                    backgroundImage: 'url("/s1.png")', // Replace with your image
                }}
            >
                <div className="container mx-auto text-center text-black">
                    <h1 className="text-4xl font-bold mb-2">Contact</h1>
                    <p className="text-lg">Home &gt; Contact</p>
                </div>
            </section>

            {/* Contact Information and Form Section */}
            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* Contact Information */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold text-[#333] mb-8">Get In Touch With Us</h2>
                        <p className="mt-4 text-lg text-[#666] mr-16">
                            For more information about our products & services, please feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
                        </p>

                        <div className="mt-8">
                            <div className="flex items-center space-x-4 mb-6">
                                <i className="fas fa-map-marker-alt text-3xl text-[#F9C747]"></i>
                                <div>
                                    <h3 className="font-semibold text-xl text-[#333]">Address</h3>
                                    <p className="text-[#666]">236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 mb-6">
                                <i className="fas fa-phone-alt text-3xl text-[#F9C747]"></i>
                                <div>
                                    <h3 className="font-semibold text-xl text-[#333]">Phone</h3>
                                    <p className="text-[#666]">Mobile: +(84) 546-6789</p>
                                    <p className="text-[#666]">Hotline: +(84) 456-6789</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 mb-6">
                                <i className="fas fa-clock text-3xl text-[#F9C747]"></i>
                                <div>
                                    <h3 className="font-semibold text-xl text-[#333]">Working Time</h3>
                                    <p className="text-[#666]">Monday-Friday: 9:00 - 22:00</p>
                                    <p className="text-[#666]">Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold text-[#333] mb-8">Send Us a Message</h2>
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label htmlFor="name" className="block text-lg font-semibold text-[#333]">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label htmlFor="email" className="block text-lg font-semibold text-[#333]">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="subject" className="block text-lg font-semibold text-[#333]">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="This is an optional field"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="block text-lg font-semibold text-[#333]">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                    placeholder="Hi! I'd like to ask about"
                                    rows={4}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#F9D756] text-white py-3 mt-6 text-lg font-semibold hover:bg-[#F9C747] rounded-md"
                            >
                                Submit
                            </button>
                        </form>
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