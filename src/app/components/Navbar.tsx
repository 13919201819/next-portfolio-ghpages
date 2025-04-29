"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-content">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          <Link href="/">CLUMOSS</Link>
        </h1>

        {/* Nav Links */}
        <ul className="nav-menu">
          <li className="nav-item"><Link href="/">Home</Link></li>
          <li className="nav-item"><Link href="/portfolio">Portfolio</Link></li>
          <li className="nav-item"><Link href="/hierarchy">Hierarchy</Link></li>
          <li className="nav-item"><Link href="/explore">Projects</Link></li>
          <li className="nav-item"><Link href="/services">Services</Link></li>
          <li className="nav-item"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
