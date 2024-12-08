'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <section
                className="bg-cover bg-center py-32 px-6 text-white"
                style={{
                    backgroundImage: 'url("/s1.png")', // Your banner image
                }}
            >
                <div className="text-center text-black">
                    <h1 className="text-5xl font-bold">Blog</h1>
                    <p className="mt-2 text-lg">Our latest thoughts, ideas, and stories</p>
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="py-16 px-6 lg:px-12 bg-[#F8F4EC]">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Blog Section */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 gap-12">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                <img
                                    src="/blog1.jpg" // Replace with your actual image path
                                    alt="Blog Post"
                                    className="w-full h-60 object-cover rounded-lg mb-4"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mb-4">
                                    <span>Admin</span>
                                    <span>14 Oct 2022</span>
                                    <span>Wood</span>
                                </div>
                                <h2 className="text-2xl font-semibold mt-2 mb-4">
                                    Going all-in with millennial design
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="mt-4 text-[#F9D756] font-semibold">Read more</a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                <img
                                    src="/blog2.jpg" // Replace with your actual image path
                                    alt="Blog Post"
                                    className="w-full h-60 object-cover rounded-lg mb-4"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mb-4">
                                    <span>Admin</span>
                                    <span>03 Aug 2022</span>
                                    <span>Handmade</span>
                                </div>
                                <h2 className="text-2xl font-semibold mt-2 mb-4">
                                    Exploring new ways of decorating
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="mt-4 text-[#F9D756] font-semibold">Read more</a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                <img
                                    src="/blog3.jpg" // Replace with your actual image path
                                    alt="Blog Post"
                                    className="w-full h-60 object-cover rounded-lg mb-4"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mb-4">
                                    <span>Admin</span>
                                    <span>03 Aug 2022</span>
                                    <span>Design</span>
                                </div>
                                <h2 className="text-2xl font-semibold mt-2 mb-4">
                                    Handmade pieces that took time to make
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="mt-4 text-[#F9D756] font-semibold">Read more</a>
                            </div>
                        </div>

                        {/* Pagination Section */}
                        <div className="mt-8 text-center mb-12">
                            <button className="text-[#F9D756] py-2 px-4 font-semibold mx-2">1</button>
                            <button className="py-2 px-4 text-gray-600 font-semibold mx-2">2</button>
                            <button className="py-2 px-4 text-gray-600 font-semibold mx-2">3</button>
                            <button className="py-2 px-4 text-gray-600 font-semibold mx-2">Next</button>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                            <h3 className="text-xl font-semibold mb-6">Categories</h3>
                            <ul className="space-y-6"> {/* Increased spacing here */}
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Crafts</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Design</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Handmade</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Interior</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Wood</a></li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-12">
                            <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
                            <ul className="space-y-6"> {/* Increased spacing here */}
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Going all-in with millennial design</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Exploring new ways of decorating</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Handmade pieces that took time to make</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Modern home in Milan</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#F9D756]">Colorful office redesign</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}