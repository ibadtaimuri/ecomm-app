// components/Hero.tsx
export default function Hero() {
    return (
        <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-end" style={{ backgroundImage: "url('/banner.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Square Text Box on the Right Half with Padding */}
            <div className="z-10 w-full lg:w-1/2 h-96 bg-[#f4d6b0] flex items-center justify-center pr-8">
                <div className="max-w-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#9C7B3F] mb-4">New Arrival</h2>
                    <h1 className="text-4xl font-extrabold text-[#333] mb-4">Discover Our New Collection</h1>
                    <p className="text-lg text-[#333] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <a href="#shop" className="bg-[#9C7B3F] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#80602d] transition-all">BUY NOW</a>
                </div>
            </div>
        </section>
    );
}
