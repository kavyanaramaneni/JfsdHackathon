import { Book, Users, Clock, Trophy } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
}

function StatsCard({ icon, title, value, change, isIncrease }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-indigo-50 p-3 rounded-lg">{icon}</div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
        <div className={`flex items-center ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardStats({ role }: { role: 'student' | 'mentor' }) {
  const stats = role === 'student' 
    ? [
        {
          icon: <Book className="h-6 w-6 text-indigo-600" />,
          title: 'Enrolled Courses',
          value: '3',
          change: '+2 this month',
          isIncrease: true,
        },
        {
          icon: <Clock className="h-6 w-6 text-indigo-600" />,
          title: 'Learning Hours',
          value: '24.5',
          change: '+5.2 hrs this week',
          isIncrease: true,
        },
        {
          icon: <Trophy className="h-6 w-6 text-indigo-600" />,
          title: 'Completed Courses',
          value: '2',
          change: '+1 this month',
          isIncrease: true,
        },
        {
          icon: <Users className="h-6 w-6 text-indigo-600" />,
          title: 'Active Sessions',
          value: '4',
          change: '+2 this week',
          isIncrease: true,
        },
      ]
    : [
        {
          icon: <Users className="h-6 w-6 text-indigo-600" />,
          title: 'Active Students',
          value: '156',
          change: '+12 this month',
          isIncrease: true,
        },
        {
          icon: <Book className="h-6 w-6 text-indigo-600" />,
          title: 'Active Courses',
          value: '8',
          change: '+2 this month',
          isIncrease: true,
        },
        {
          icon: <Clock className="h-6 w-6 text-indigo-600" />,
          title: 'Teaching Hours',
          value: '32.5',
          change: '+8.5 hrs this week',
          isIncrease: true,
        },
        {
          icon: <Trophy className="h-6 w-6 text-indigo-600" />,
          title: 'Course Rating',
          value: '4.8',
          change: '+0.2 this month',
          isIncrease: true,
        },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}