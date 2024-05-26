import Link from 'next/link';
import "../css/style.css"
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 flex items-center justify-between shadow-md z-50">
      <div className="text-white text-xl font-bold">
          <a>MyLogo</a>
      </div>
      <ul className="flex space-x-6">
        <li>
            <a className="text-white flex items-center space-x-2 hover:text-orange-500 transition duration-300">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
        </li>
        <li>
            <a className="text-white flex items-center space-x-2 hover:text-orange-500 transition duration-300">
              <i className="fas fa-info-circle"></i>
              <span>About</span>
            </a>
        </li>
        <li>
            <a className="text-white flex items-center space-x-2 hover:text-orange-500 transition duration-300">
              <i className="fas fa-cogs"></i>
              <span>Services</span>
            </a>
        </li>
        <li>
            <a className="text-white flex items-center space-x-2 hover:text-orange-500 transition duration-300">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;