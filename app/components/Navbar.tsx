import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-[#2F4F3A]">
  OF
</div>
          /&gt;

          <div>
            <h1 className="text-2xl font-bold text-[#2F4F3A]">
              Origin Field Solutions
            </h1>

            <p className="text-xs tracking-[0.18em] text-[#D4AF37] uppercase">
              Research & Field Operations
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <a
            href="/"
            className="hover:text-[#2F4F3A] transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-[#2F4F3A] transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-[#2F4F3A] transition duration-300"
          >
            Services
          </a>

          <a
            href="#sectors"
            className="hover:text-[#2F4F3A] transition duration-300"
          >
            Sectors
          </a>

          <a
            href="#contact"
            className="hover:text-[#2F4F3A] transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}