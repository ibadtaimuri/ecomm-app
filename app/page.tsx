import Footer from "@/components/Footer";
import Group from "@/components/Group";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProduct";
import Share from "@/components/Share";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <Group />
      <OurProducts />
      <Inspiration />
      <Share />
      <Footer />
    </div>
  );
}
