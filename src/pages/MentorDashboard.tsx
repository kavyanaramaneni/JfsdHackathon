import { useState } from 'react';
import { Book, Calendar, Clock, Settings, User } from 'lucide-react';
import { FaUserAlt } from 'react-icons/fa'; // Importing a random icon (user icon)
import CourseCard from '../components/CourseCard';
import SessionCard from '../components/SessionCard';
import { Course, Session } from '../types';

const MENTOR_COURSES: Course[] = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    description: 'Teaching modern web development with React, Node.js, and more',
    instructor: 'You',
    duration: '12 weeks',
    enrolled: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into advanced JavaScript programming concepts',
    instructor: 'You',
    duration: '8 weeks',
    enrolled: true,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
  },
];

const MENTOR_SESSIONS: Session[] = [
  {
    id: '1',
    title: 'Web Development Q&A',
    date: '2024-03-20',
    time: '10:00 AM',
    mentor: 'You',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'JavaScript Workshop',
    date: '2024-03-22',
    time: '2:00 PM',
    mentor: 'You',
    status: 'upcoming',
  },
];

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('courses');

  // Profile state
  const [fullName, setFullName] = useState('John Mentor');
  const [email, setEmail] = useState('john.mentor@example.com');
  const [expertise, setExpertise] = useState('Web Development, JavaScript, React');
  const [bio, setBio] = useState('Senior web developer with 10+ years of experience in building modern web applications.');

  const handleSaveChanges = () => {
    // Handle save changes logic here
    console.log('Changes saved:', { fullName, email, expertise, bio });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                {/* Random icon */}
                <FaUserAlt className="text-4xl text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold">{fullName}</h2>
              <p className="text-gray-600">Senior Web Developer</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeTab === 'courses' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Book className="h-5 w-5" />
                <span>My Courses</span>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeTab === 'schedule' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule</span>
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeTab === 'sessions' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Clock className="h-5 w-5" />
                <span>Sessions</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                  activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'courses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Create New Course
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {MENTOR_COURSES.map(course => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onEnroll={() => {}}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sessions' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Schedule New Session
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {MENTOR_SESSIONS.map(session => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </div>
            )}

{activeTab === 'schedule' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Schedule</h2>
                <div className="space-y-6">
                  <p className="text-gray-600">You Have 2 Upcoming Sessions</p>
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                    <label className="block text-sm font-medium text-gray-700">Expertise</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      rows={4}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
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
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                      <span className="ml-2">Email notifications for new session bookings</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                      <span className="ml-2">Email notifications for course enrollments</span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Availability</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600">Start Time</label>
                        <input
                          type="time"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          defaultValue="09:00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600">End Time</label>
                        <input
                          type="time"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          defaultValue="17:00"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
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
