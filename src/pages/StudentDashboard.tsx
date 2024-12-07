import { useState } from 'react';
import { Book, Calendar, Clock, Settings, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import SessionCard from '../components/SessionCard';
import { Course, Session } from '../types';

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    description: 'Learn modern web development with React, Node.js, and more',
    instructor: 'John Doe',
    duration: '12 weeks',
    enrolled: false,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: '2',
    title: 'Python Full Stack Development',
    description: 'Master Python web development with Django and Flask',
    instructor: 'Jane Smith',
    duration: '16 weeks',
    enrolled: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  },
  {
    id: '3',
    title: 'Java Enterprise Development',
    description: 'Build enterprise applications with Java and Spring Boot',
    instructor: 'Mike Johnson',
    duration: '14 weeks',
    enrolled: false,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
];

const SESSIONS: Session[] = [
  {
    id: '1',
    title: 'Web Development Q&A',
    date: '2024-03-20',
    time: '10:00 AM',
    mentor: 'John Doe',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Python Project Review',
    date: '2024-03-22',
    time: '2:00 PM',
    mentor: 'Jane Smith',
    status: 'upcoming',
  },
];

export default function StudentDashboard() {
  const [courses, setCourses] = useState(COURSES);
  const [activeTab, setActiveTab] = useState('courses');
  const [name, setName] = useState('John Student');
  const [email, setEmail] = useState('john@student.com');
  const [track, setTrack] = useState('Web Development');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const navigate = useNavigate(); // Use React Router's navigate hook for redirection

  const handleEnroll = (courseId: string) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true } : course
    ));
  };

  const handleSignOut = () => {
    // Logic for sign out (e.g., clearing session, removing token)
    console.log('User signed out');
    navigate('/'); // Redirect to the home page
  };

  const handleSaveChanges = () => {
    // Logic to save the changes to name, email, and track
    console.log('Changes Saved:', { name, email, track });
  };

  const handleSaveSettings = () => {
    // Logic to save notification preferences
    console.log('Settings Saved:', { emailNotifications, smsNotifications });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{track}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'courses' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Book className="h-5 w-5" />
                <span>Courses</span>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'schedule' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule</span>
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'sessions' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Clock className="h-5 w-5" />
                <span>Sessions</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-2 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-50"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {courses.map(course => (
                    <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sessions' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Upcoming Sessions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {SESSIONS.map(session => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Schedule</h2>
                <div className="space-y-6">
                  <p className="text-gray-600">No upcoming sessions</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Track</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
                    >
                      <option>Web Development</option>
                      <option>Data Science</option>
                      <option>Python Full Stack</option>
                      <option>Student</option>
                    </select>
                  </div>
                  <button
                    onClick={handleSaveChanges}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                      />
                      <span className="ml-2">Email notifications</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        checked={smsNotifications}
                        onChange={() => setSmsNotifications(!smsNotifications)}
                      />
                      <span className="ml-2">SMS notifications</span>
                    </label>
                  </div>
                  <button
                    onClick={handleSaveSettings}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
