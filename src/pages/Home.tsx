import { ArrowRight, BookOpen, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accelerate Your Career With Expert Mentorship
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with industry professionals and learn from their experience
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
            <p className="text-gray-600">
              Learn from industry professionals with years of experience
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1-on-1 Mentorship</h3>
            <p className="text-gray-600">
              Get personalized guidance tailored to your goals
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600">
              Learn at your own pace with flexible timing
            </p>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600">Start your journey with our most popular courses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
                description: 'Master modern web development',
              },
              {
                title: 'Python Full Stack',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
                description: 'Become a Python full-stack developer',
              },
              {
                title: 'Java Development',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
                description: 'Learn enterprise Java development',
              },
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to="/signup"
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}