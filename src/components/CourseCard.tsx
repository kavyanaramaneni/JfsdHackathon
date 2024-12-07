import { Course } from '../types';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.instructor}</span>
          </div>
        </div>
        <button
          onClick={() => onEnroll(course.id)}
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
            course.enrolled
              ? 'bg-green-50 text-green-700 cursor-default'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
          disabled={course.enrolled}
        >
          {course.enrolled ? 'Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
}