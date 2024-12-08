import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Compare() {
    return (
        <div>
            <Navbar />

            {/* Product Comparison Banner */}
            <section
                className="bg-cover bg-center text-white py-32 px-6 lg:px-12"
                style={{
                    backgroundImage: 'url("/s1.png")', // Update with actual background image
                }}
            >
                <div className="container mx-auto text-center text-black">
                    <h1 className="text-4xl font-bold mb-2">Product Comparison</h1>
                    <p className="text-lg">Home &gt; Comparison</p>
                </div>
            </section>

            {/* Product Comparison Section */}
            <section className="bg-[#F8F4EC] py-8 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="flex justify-between mb-8">
                        <div className="ml-[470px] flex space-x-[300px]">
                            {/* Product 1 - Asgaard Sofa */}
                            <div className="w-48">
                                <img
                                    src="./s2.png" // Replace with actual image path
                                    alt="Asgaard Sofa"
                                    className="w-full mb-2"
                                />
                                <p className="text-center font-semibold">Asgaard Sofa</p>
                                <p className="text-center text-lg">Rs. 250,000.00</p>
                                <p className="text-center">4.7 Stars</p>
                                <p className="text-center">204 Reviews</p>
                            </div>

                            {/* Product 2 - Outdoor Sofa Set */}
                            <div className="w-48">
                                <img
                                    src="./s4.png" // Replace with actual image path
                                    alt="Outdoor Sofa Set"
                                    className="w-full mb-2"
                                />
                                <p className="text-center font-semibold">Outdoor Sofa Set</p>
                                <p className="text-center text-lg">Rs. 224,000.00</p>
                                <p className="text-center">4.2 Stars</p>
                                <p className="text-center">145 Reviews</p>
                            </div>
                        </div>
                        <Link href="#" className="self-center text-[#F9C747] text-lg font-semibold">Add A Product</Link>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-sm text-left">
                            <thead>
                                <tr className="bg-[#F9D756]">
                                    <th className="p-3">General</th>
                                    <th className="p-3">Asgaard Sofa</th>
                                    <th className="p-3">Outdoor Sofa Set</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Product</td>
                                    <td className="p-3">1 sectional sofa</td>
                                    <td className="p-3">1 Three Seater, 2 Single Seater</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Secondary Material</td>
                                    <td className="p-3">Solid Wood</td>
                                    <td className="p-3">Solid Wood</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Configuration</td>
                                    <td className="p-3">L-shaped</td>
                                    <td className="p-3">L-shaped</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Upholstery Material</td>
                                    <td className="p-3">Fabric + Cotton</td>
                                    <td className="p-3">Fabric + Cotton</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Product Filling Material</td>
                                    <td className="p-3">Foam</td>
                                    <td className="p-3">Matte</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Maximum Load Capacity</td>
                                    <td className="p-3">280 KG</td>
                                    <td className="p-3">300 KG</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-semibold">Warranty Summary</td>
                                    <td className="p-3">1 Year Manufacturing Warranty</td>
                                    <td className="p-3">1.2 Year Manufacturing Warranty</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}