const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-400">
          GYM<span className="text-white">X</span>
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#plans" className="hover:text-yellow-400 transition">Plans</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="tel:9876543210"
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
};

export default Header;
