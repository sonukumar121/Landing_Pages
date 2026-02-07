const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">GYMX</h2>
          <p className="mt-4 text-sm">
            Your ultimate fitness partner. Train hard, stay fit.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Plans</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>📍 Mumbai, India</p>
          <p className="mt-2">📞 9876543210</p>
          <p className="mt-2">✉️ gymx@gmail.com</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} GYMX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
