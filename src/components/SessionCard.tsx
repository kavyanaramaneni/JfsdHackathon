import { Calendar, Clock, User } from 'lucide-react';
import { Session } from '../types';

export default function SessionCard({ session }: { session: Session }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          session.status === 'upcoming' ? 'bg-blue-50 text-blue-700' :
          session.status === 'completed' ? 'bg-green-50 text-green-700' :
          'bg-red-50 text-red-700'
        }`}>
          {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{session.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{session.time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <User className="w-4 h-4 mr-2" />
          <span>{session.mentor}</span>
        </div>
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
        View Details
      </button>
    </div>
  );
}