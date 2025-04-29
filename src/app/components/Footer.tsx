import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import AgenticAIButton from "./AgenticAIButton"; // Import the new component

const Footer = () => {
  return (
    <footer className="px-6 py-12 text-white bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3 md:text-left">
        {/* Brand & Description */}
        <div>
          <h1 className="text-3xl font-extrabold">CLUMOSS</h1>
          <p className="max-w-md mt-2 text-gray-400">
            Transforming Industries with AI-powered SaaS Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/#about" className="transition hover:text-white">About</Link></li>
            <li><Link href="/#services" className="transition hover:text-white">Services</Link></li>
            <li><Link href="/#projects" className="transition hover:text-white">Projects</Link></li>
            <li><Link href="/#careers" className="transition hover:text-white">Careers</Link></li>
            <li><Link href="/#blog" className="transition hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Social Links */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">Legal</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/disclaimer" className="transition hover:text-white">Disclaimer</Link></li>
            <li><Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="transition hover:text-white">Terms & Conditions</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center mt-4 space-x-4 md:justify-start">
            <Link href="#" className="text-gray-400 transition hover:text-white"><FaFacebook size={22} /></Link>
            <Link href="#" className="text-gray-400 transition hover:text-white"><FaTwitter size={22} /></Link>
            <Link href="#" className="text-gray-400 transition hover:text-white"><FaLinkedin size={22} /></Link>
            <Link href="#" className="text-gray-400 transition hover:text-white"><FaInstagram size={22} /></Link>
            <Link href="#" className="text-gray-400 transition hover:text-white"><FaGithub size={22} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright Section with Agentic AI Button */}
      <div className="flex flex-col items-center justify-center gap-4 pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-700 sm:flex-row">
        <span>© {new Date().getFullYear()} CLUMOSS. All Rights Reserved.</span>
        <AgenticAIButton />
      </div>
    </footer>
  );
};

export default Footer;