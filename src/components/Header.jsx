import { useState, useEffect } from "react"
import { fetchCategories } from "../services/api"
// import { Menu, X} from 'lucide-react'
import { Link } from "react-router-dom"

export default function Header() {
    const [ categories, setCategories ] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchCategories().then((data) => {
            console.log('Fetched data: ', data)
            const rawCategories = Array.isArray(data)
            ? data
            : Array.isArray(data?.categories)
            ? data.categories
            : []

            if(!Array.isArray(rawCategories)) {
                console.error('Expected an array but got: ', rawCategories);
                setCategories([]);
                return;
            }

            const main = data.filter((cat) => cat.parent == null);
            const sub = data.filter((cat) => cat.parent !== null);

            const structured = main.map((parent) => ({
                ...parent, 
                children: sub.filter((child) => child.parent.id == parent.id)
            }))
            setCategories(structured)
        })
    }, [])

    return (
<header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/qsPcZ5r/download-5.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to='/' className="font-semibold text-[#a01446] hover:underline" >
            Home
          </Link>
          {categories.map((cat) => (
            <div key={cat.id} className="relative group">
              <span className="font-semibold text-[#a01446] cursor-pointer">
                {cat.name}
              </span>
              {cat.children.length > 0 && (
                <div className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block z-10 min-w-max">

                  {cat.children.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${sub.id}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to='/about' className="font-semibold text-[#a01446] hover:underline">
            About Us
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#a01446] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="w-64 bg-white h-full shadow-lg p-5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#a01446] focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="space-y-4">
            <Link to='/' className="font-semibold text-[#a01446] hover:underline" >
              Home
            </Link>
            {categories.map((cat) => (
              <div key={cat.id}>
                <p className="font-semibold text-[#a01446]">{cat.name}</p>
                {cat.children.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {cat.children.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/category/${sub.id}`}
                        className="block text-gray-700 text-sm hover:underline"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to='/about' className="font-semibold text-[#a01446] hover:underline">
            About Us
          </Link>
          </nav>
        </div>
      </div>
    </header>
    )
}


        // <nav>
        //     {categories.map((cat) => (
        //         <div key={cat.id} className="relative group">
        //             <span className="font-semibold cursor-pointer">{cat.name}</span>
        //             {cat.children.length > 0 && (
        //                 <div className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block z-10">
        //                     {cat.children.map((sub) => (
        //                         <Link
        //                         key={sub.id}
        //                         to={`/category/${sub.id}`}
        //                         className="block px-4 py-2 hover:bg-gray-200"
        //                         >
        //                             {sub.name}
        //                         </Link>
        //                     ))}
        //                 </div>
        //             )}
        //         </div>
        //     ))}
        // </nav>
