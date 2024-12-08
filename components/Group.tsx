// components/Group115.tsx
export default function Group115() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-[#f9f9f9]">
            <div className="container mx-auto text-center">
                {/* Title and Description */}
                <h2 className="text-4xl font-bold text-[#333] mb-4">Browse The Range</h2>
                <p className="text-lg text-[#666] mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Dining Image */}
                    <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all">
                        <img src="./g1.png" alt="Dining" className="w-full h-[500px] object-cover mb-20" />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-black p-7 text-center">
                            <h3 className="text-xl font-semibold">Dining</h3>
                        </div>
                    </div>

                    {/* Living Image */}
                    <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all">
                        <img src="./g2.png" alt="Living" className="w-full h-[500px] object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-black p-7 text-center">
                            <h3 className="text-xl font-semibold">Living</h3>
                        </div>
                    </div>

                    {/* Bedroom Image */}
                    <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all">
                        <img src="./g3.png" alt="Bedroom" className="w-full h-[500px] object-cover" />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 text-black p-7 text-center">
                            <h3 className="text-xl font-semibold">Bedroom</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}