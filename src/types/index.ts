export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor';
  profilePicture?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  enrolled: boolean;
  image: string;
}

export interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  mentor: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}