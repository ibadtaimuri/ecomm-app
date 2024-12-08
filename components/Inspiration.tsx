// components/BeautifulRooms.tsx
export default function Inspiration() {
    return (
        <section className="bg-white py-20 px-6 lg:px-12">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* Text Section */}
                <div className="lg:w-1/3">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">50+ Beautiful rooms inspiration</h2>
                    <p className="text-gray-600 mb-6">
                        Our designer already made a lot of beautiful prototype of rooms that inspire you
                    </p>
                    <button className="bg-yellow-600 text-white font-semibold py-3 px-8 rounded-none hover:bg-yellow-700 transition-colors">
                        Explore More
                    </button>
                </div>

                {/* Image Carousel */}
                <div className="lg:w-2/3 flex justify-end">
                    <div className="relative w-full max-w-lg">
                        {/* Static Image for Example */}
                        <img src="./inspire.png" alt="Room Inspiration" className="w-full h-full object-cover rounded-lg shadow-lg" />

                        {/* Overlay Text */}
                        <div className="absolute bottom-10 left-10 bg-white p-4">
                            <p className="text-lg font-semibold">01 — Bed Room</p>
                            <p className="text-xl font-bold">Inner Peace</p>
                        </div>

                        {/* Carousel Controls */}
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                            <span className="text-gray-800 text-xl">{'>'}</span>
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <span className="block w-3 h-3 bg-yellow-600 rounded-full"></span>
                            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
                            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
                            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}