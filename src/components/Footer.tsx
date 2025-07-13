
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo in the footer */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/WhatsApp Image 2025-07-10 at 13.35.01_7e375db3.jpg"
              alt="CyberGhar Logo"
              className="h-14 w-auto mb-4 rounded-full shadow-md"
              style={{ background: '#fff' }}
            />
            <span className="text-lg font-bold text-white">CyberGhar</span>
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              CyberGhar
            </div>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of cybersecurity professionals through practical, hands-on learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#programs" className="hover:text-white transition-colors">Elementary (Grade 4-7)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Intermediate (Grade 8-10)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Advanced (Grade 11-12)</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Cybersecurity Training</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">FYP Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Coursework Assistance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: cyberghar20@gmail.com</li>
              <li>Phone: +977 9814745103</li>
              <li>Location: Mid Baneshwor, Kathmandu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CyberGhar. All rights reserved. Building tomorrow's digital defenders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
