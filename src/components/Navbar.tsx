import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isAuthenticated, userRole }: { isAuthenticated: boolean; userRole?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white">
              <BookOpen className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">MentorHub</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to={`/${userRole}-dashboard`} className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                    Login
                  </Link>
                  <Link to="/signup" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <Link
                  to={`/${userRole}-dashboard`}
                  className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white block w-full text-left px-3 py-2 rounded-md hover:bg-indigo-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}