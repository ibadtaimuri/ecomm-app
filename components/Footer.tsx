// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-white py-12 px-6 lg:px-12 border-t border-gray-200">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Left Side - Logo and Address */}
                <div className="lg:w-1/4 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Funiro.</h2>
                    <p className="text-sm text-gray-500">
                        400 University Drive Suite 200 Coral Gables, <br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="lg:w-1/4 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-5">Links</h3>
                    <ul className="space-y-6">
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Shop</a></li>
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">About</a></li>
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Contact</a></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="lg:w-1/4 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-5">Help</h3>
                    <ul className="space-y-5">
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Payment Options</a></li>
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Returns</a></li>
                        <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Privacy Policies</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="lg:w-1/4 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
                    <p className="text-sm text-gray-500 mb-4">Enter Your Email Address</p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="border border-gray-300 p-3 rounded-md text-sm w-full"
                        />
                        <button className="bg-black text-white py-3 px-6 text-sm font-semibold rounded-md hover:bg-gray-800">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <br />
            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>2023 Funiro. All rights reserved</p>
            </div>
        </footer>
    );
}