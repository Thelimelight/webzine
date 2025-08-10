import './App.css';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Home from './pages/Home';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isCategoryPage = location.pathname.startsWith('/category');

  return (
 <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content fills available space */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>

  );
}

export default App;