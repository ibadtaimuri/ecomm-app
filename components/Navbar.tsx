// components/Navbar.tsx
import Link from 'next/link';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Furniro Logo" className="w-16 h-auto" />
                    <div className="text-2xl font-semibold text-black">
                        <span className="text-yellow-500">F</span>urniro
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-20 text-lg">
                    <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                    <li><Link href="/shop" className="hover:text-yellow-500">Shop</Link></li>
                    <li><Link href="/blog" className="hover:text-yellow-500">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
                </ul>

                {/* Icons Section */}
                <div className="flex space-x-6 text-xl text-gray-600">
                    <div><FaUser /></div>
                    <div><FaSearch /></div>
                    <div><FaHeart /></div>
                    <div><FaShoppingCart /></div>
                </div>
            </div>
        </nav>
    );
}