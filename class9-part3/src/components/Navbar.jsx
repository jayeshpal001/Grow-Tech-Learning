import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* <div className="text-xl font-bold text-indigo-600">LOGO</div> */}
      <div></div>
      
      <div className="hidden md:flex space-x-20 ">
        <Link to="/" className="font-semibold text-black ">Home</Link>   
        <Link to="/category" className="text-gray-500 hover:text-black">Category</Link>
        <Link to="/cart" className="text-gray-500 hover:text-black">Cart</Link>
      
      </div>
      
      <div className="hidden md:flex space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded-md"><Link to="/login" >Login</Link></button>
        <button className="bg-black text-white px-4 py-2 rounded-md"><Link to="/signUp" >Sign Up</Link></button>

      </div>
      
      
      <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="font-semibold text-black">Home</a>
          <a href="#" className="text-gray-500 hover:text-black">Category</a>
          <a href="#" className="text-gray-500 hover:text-black">Cart</a>
          <button className="text-gray-600 hover:text-black">Sign In</button>
          <button className="bg-black text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      )}
    </nav>
  );
}