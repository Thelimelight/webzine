export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <img
            src="https://i.ibb.co/qsPcZ5r/download-5.png" // <-- Change to your logo path
            alt="WEBZINE Logo"
            className="h-10 w-auto"
          />
        </div>

        <div>
          <h2 className="text-white font-medium mb-2">About</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-medium mb-2">Topics</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Article</a></li>
            <li><a href="#" className="hover:text-white">Essay</a></li>
            <li><a href="#" className="hover:text-white">Litgarden</a></li>
            <li><a href="#" className="hover:text-white">Business</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-medium mb-2">Social Medias</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Website</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-white font-medium mb-2">Subscribe to our newsletter</h2>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-l bg-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-700 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-start md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="fas fa-rss"></i>
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2024 Webzine. All rights reserved.
      </div>
    </footer>
  );
}
