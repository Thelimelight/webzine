import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategories } from '../api/hooks/useCategories'

export default function Header() {
  const { data: categories = [] } = useCategories()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img
          src="https://i.ibb.co/qsPcZ5r/download-5.png"
          alt="Logo"
          className="h-10"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-semibold text-[#a01446]">
            Home
          </Link>

          {categories.map(cat => (
            <div key={cat._id} className="relative group">
              <span className="font-semibold text-[#a01446] cursor-pointer">
                {cat.name}
              </span>

              {cat.children?.length > 0 && (
                <div className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block z-10 min-w-max">
                  {cat.children.map(sub => (
                    <Link
                      key={sub._id}
                      to={`/category/${sub.slug || sub._id}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/about" className="font-semibold text-[#a01446]">
            About Us
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#a01446]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-64 bg-white h-full p-5"
            onClick={e => e.stopPropagation()}
          >
            {categories.map(cat => (
              <div key={cat._id} className="mb-3">
                <p className="font-semibold text-[#a01446]">{cat.name}</p>

                {cat.children?.map(sub => (
                  <Link
                    key={sub._id}
                    to={`/category/${sub.slug || sub._id}`}
                    className="block ml-4 text-sm text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
