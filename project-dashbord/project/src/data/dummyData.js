export const students = [
  { id: 1, name: 'Aisha Patel', email: 'aisha@example.com', grade: '10th', school: 'Sunrise High School', phone: '+91 98765 43210', status: 'active', joined: '2024-01-15' },
  { id: 2, name: 'Rohan Sharma', email: 'rohan@example.com', grade: '11th', school: 'Green Valley Academy', phone: '+91 98765 43211', status: 'active', joined: '2024-02-10' },
  { id: 3, name: 'Priya Singh', email: 'priya@example.com', grade: '12th', school: 'City Public School', phone: '+91 98765 43212', status: 'inactive', joined: '2023-12-05' },
  { id: 4, name: 'Arjun Kumar', email: 'arjun@example.com', grade: '10th', school: 'Sunrise High School', phone: '+91 98765 43213', status: 'active', joined: '2024-03-01' },
  { id: 5, name: 'Neha Gupta', email: 'neha@example.com', grade: '11th', school: 'Delhi Public School', phone: '+91 98765 43214', status: 'active', joined: '2024-01-20' },
  { id: 6, name: 'Vikram Rao', email: 'vikram@example.com', grade: '12th', school: 'Green Valley Academy', phone: '+91 98765 43215', status: 'active', joined: '2024-02-28' },
  { id: 7, name: 'Sanya Mehta', email: 'sanya@example.com', grade: '10th', school: 'City Public School', phone: '+91 98765 43216', status: 'inactive', joined: '2023-11-18' },
  { id: 8, name: 'Karan Malhotra', email: 'karan@example.com', grade: '11th', school: 'Sunrise High School', phone: '+91 98765 43217', status: 'active', joined: '2024-03-15' },
];

export const counsellors = [
  { id: 1, name: 'Dr. Ananya Desai', email: 'ananya.desai@example.com', specialization: 'Career Counselling', experience: '12 years', rating: 4.9, students: 142, status: 'active', avatar: 'AD' },
  { id: 2, name: 'Prof. Rajesh Iyer', email: 'rajesh.iyer@example.com', specialization: 'Engineering Guidance', experience: '15 years', rating: 4.8, students: 128, status: 'active', avatar: 'RI' },
  { id: 3, name: 'Ms. Priya Menon', email: 'priya.menon@example.com', specialization: 'Medical Guidance', experience: '10 years', rating: 4.7, students: 98, status: 'active', avatar: 'PM' },
  { id: 4, name: 'Dr. Sanjay Nair', email: 'sanjay.nair@example.com', specialization: 'Psychology & Mental Health', experience: '18 years', rating: 4.9, students: 156, status: 'active', avatar: 'SN' },
  { id: 5, name: 'Mrs. Kavita Reddy', email: 'kavita.reddy@example.com', specialization: 'Arts & Humanities', experience: '8 years', rating: 4.6, students: 76, status: 'inactive', avatar: 'KR' },
  { id: 6, name: 'Mr. Arun Joshi', email: 'arun.joshi@example.com', specialization: 'Commerce & Finance', experience: '14 years', rating: 4.8, students: 110, status: 'active', avatar: 'AJ' },
];

export const bookings = [
  { id: 'BK001', student: 'Aisha Patel', type: 'Career Counselling', counsellor: 'Dr. Ananya Desai', date: '2024-06-25', time: '10:00 AM', status: 'confirmed', mode: 'Online' },
  { id: 'BK002', student: 'Rohan Sharma', type: 'Guidance Session', counsellor: 'Prof. Rajesh Iyer', date: '2024-06-26', time: '02:00 PM', status: 'pending', mode: 'In-Person' },
  { id: 'BK003', student: 'Priya Singh', type: 'Tuition Class', counsellor: 'Ms. Priya Menon', date: '2024-06-24', time: '04:00 PM', status: 'completed', mode: 'Online' },
  { id: 'BK004', student: 'Arjun Kumar', type: 'Career Counselling', counsellor: 'Dr. Sanjay Nair', date: '2024-06-27', time: '11:00 AM', status: 'confirmed', mode: 'Online' },
  { id: 'BK005', student: 'Neha Gupta', type: 'Guidance Session', counsellor: 'Dr. Ananya Desai', date: '2024-06-28', time: '09:00 AM', status: 'pending', mode: 'In-Person' },
  { id: 'BK006', student: 'Vikram Rao', type: 'Tuition Class', counsellor: 'Mr. Arun Joshi', date: '2024-06-23', time: '03:00 PM', status: 'completed', mode: 'Online' },
  { id: 'BK007', student: 'Sanya Mehta', type: 'Career Counselling', counsellor: 'Prof. Rajesh Iyer', date: '2024-06-29', time: '01:00 PM', status: 'cancelled', mode: 'In-Person' },
  { id: 'BK008', student: 'Karan Malhotra', type: 'Guidance Session', counsellor: 'Dr. Sanjay Nair', date: '2024-06-30', time: '10:00 AM', status: 'confirmed', mode: 'Online' },
];

export const notifications = [
  { id: 1, title: 'Booking Confirmed', message: 'Your Career Counselling session with Dr. Ananya Desai has been confirmed for June 25 at 10:00 AM.', time: '2 hours ago', type: 'success', read: false },
  { id: 2, title: 'New Message', message: 'Prof. Rajesh Iyer sent you a message regarding your upcoming session.', time: '5 hours ago', type: 'info', read: false },
  { id: 3, title: 'Session Reminder', message: 'Your Tuition Class with Ms. Priya Menon is scheduled for tomorrow at 4:00 PM.', time: '1 day ago', type: 'warning', read: true },
  { id: 4, title: 'Payment Successful', message: 'Your payment of Rs.1,500 for Guidance Session has been received.', time: '2 days ago', type: 'success', read: true },
  { id: 5, title: 'Profile Update', message: 'Your profile information was successfully updated.', time: '3 days ago', type: 'info', read: true },
  { id: 6, title: 'New Resource Available', message: 'A new career guide for Engineering has been added to your dashboard.', time: '4 days ago', type: 'info', read: true },
  { id: 7, title: 'Session Cancelled', message: 'Your session on June 29 has been cancelled by the counsellor. Please reschedule.', time: '5 days ago', type: 'error', read: true },
];

export const statistics = {
  totalStudents: 248,
  totalBookings: 156,
  activeCounsellors: 12,
  completedSessions: 89,
  pendingBookings: 34,
  cancelledSessions: 8,
  revenue: 156000,
  satisfaction: 4.8,
};

export const weeklyData = [
  { name: 'Mon', bookings: 12, completed: 8 },
  { name: 'Tue', bookings: 18, completed: 14 },
  { name: 'Wed', bookings: 15, completed: 11 },
  { name: 'Thu', bookings: 22, completed: 17 },
  { name: 'Fri', bookings: 28, completed: 20 },
  { name: 'Sat', bookings: 35, completed: 28 },
  { name: 'Sun', bookings: 20, completed: 15 },
];

export const monthlyData = [
  { name: 'Jan', students: 45, sessions: 32 },
  { name: 'Feb', students: 58, sessions: 45 },
  { name: 'Mar', students: 72, sessions: 56 },
  { name: 'Apr', students: 85, sessions: 68 },
  { name: 'May', students: 98, sessions: 78 },
  { name: 'Jun', students: 112, sessions: 92 },
];

export const sessionTypes = [
  { name: 'Career Counselling', value: 45, color: '#3b82f6' },
  { name: 'Guidance Sessions', value: 30, color: '#10b981' },
  { name: 'Tuition Classes', value: 25, color: '#f59e0b' },
];

export const upcomingAppointments = [
  { id: 1, title: 'Career Counselling', counsellor: 'Dr. Ananya Desai', date: '2024-06-25', time: '10:00 AM', mode: 'Online', duration: '45 min' },
  { id: 2, title: 'Engineering Guidance', counsellor: 'Prof. Rajesh Iyer', date: '2024-06-26', time: '02:00 PM', mode: 'In-Person', duration: '60 min' },
  { id: 3, title: 'Medical Entrance Prep', counsellor: 'Ms. Priya Menon', date: '2024-06-28', time: '09:00 AM', mode: 'Online', duration: '90 min' },
  { id: 4, title: 'Psychology Session', counsellor: 'Dr. Sanjay Nair', date: '2024-06-30', time: '11:00 AM', mode: 'Online', duration: '45 min' },
];

export const bookingHistory = [
  { id: 'BK001', type: 'Career Counselling', counsellor: 'Dr. Ananya Desai', date: '2024-06-15', time: '10:00 AM', status: 'completed', amount: 1500, mode: 'Online' },
  { id: 'BK002', type: 'Guidance Session', counsellor: 'Prof. Rajesh Iyer', date: '2024-06-10', time: '02:00 PM', status: 'completed', amount: 2000, mode: 'In-Person' },
  { id: 'BK003', type: 'Tuition Class', counsellor: 'Ms. Priya Menon', date: '2024-06-05', time: '04:00 PM', status: 'completed', amount: 1200, mode: 'Online' },
  { id: 'BK004', type: 'Career Counselling', counsellor: 'Dr. Sanjay Nair', date: '2024-05-28', time: '11:00 AM', status: 'completed', amount: 1500, mode: 'Online' },
  { id: 'BK005', type: 'Guidance Session', counsellor: 'Dr. Ananya Desai', date: '2024-05-20', time: '09:00 AM', status: 'cancelled', amount: 0, mode: 'In-Person' },
  { id: 'BK006', type: 'Tuition Class', counsellor: 'Mr. Arun Joshi', date: '2024-05-15', time: '03:00 PM', status: 'completed', amount: 1200, mode: 'Online' },
  { id: 'BK007', type: 'Career Counselling', counsellor: 'Prof. Rajesh Iyer', date: '2024-05-10', time: '01:00 PM', status: 'completed', amount: 1500, mode: 'In-Person' },
  { id: 'BK008', type: 'Guidance Session', counsellor: 'Dr. Sanjay Nair', date: '2024-05-05', time: '10:00 AM', status: 'completed', amount: 2000, mode: 'Online' },
];

export const faqs = [
  { question: 'How do I book a session?', answer: 'You can book a session by navigating to the relevant booking page, selecting a counsellor, and choosing a preferred date and time.' },
  { question: 'Can I reschedule my booking?', answer: 'Yes, you can reschedule your booking up to 24 hours before the scheduled session.' },
  { question: 'What are the payment options?', answer: 'We accept all major credit/debit cards, UPI, and net banking.' },
  { question: 'How do I join an online session?', answer: 'Once your booking is confirmed, you will receive a link to join the session.' },
  { question: 'What if I need to cancel?', answer: 'You can cancel your booking up to 24 hours before the session for a full refund.' },
  { question: 'How do I contact support?', answer: 'You can reach our support team through the Help & Support page.' },
];

export const helpTopics = [
  { id: 1, title: 'Getting Started', description: 'Learn how to set up your account and navigate the dashboard.' },
  { id: 2, title: 'Booking Sessions', description: 'Step-by-step guide to booking different types of sessions.' },
  { id: 3, title: 'Payments & Billing', description: 'Information about payment methods, refunds, and invoices.' },
  { id: 4, title: 'Technical Issues', description: 'Troubleshooting common technical problems and solutions.' },
  { id: 5, title: 'Account Settings', description: 'How to manage your profile, notifications, and preferences.' },
  { id: 6, title: 'Contact Us', description: 'Get in touch with our support team for personalized assistance.' },
];
