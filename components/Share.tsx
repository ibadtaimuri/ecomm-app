// components/Share.tsx
export default function Share() {
    return (
        <section className="bg-white py-20 px-6 lg:px-12">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Share your setup with <span className="text-yellow-600">#FuniroFurniture</span>
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Image 1 */}
                    <div className="relative">
                        <img src="./s1.png" alt="Room 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Image 2 */}
                    <div className="relative">
                        <img src="./s2.png" alt="Room 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Image 3 */}
                    <div className="relative">
                        <img src="./s3.png" alt="Room 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Image 4 */}
                    <div className="relative">
                        <img src="./s4.png" alt="Room 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Image 5 */}
                    <div className="relative">
                        <img src="./s5.png" alt="Room 5" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Image 6 */}
                    <div className="relative">
                        <img src="./s6.png" alt="Room 6" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}