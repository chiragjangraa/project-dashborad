import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import DashboardHome from './pages/dashboard/DashboardHome';
import Profile from './pages/dashboard/Profile';
import CareerCounselling from './pages/dashboard/CareerCounselling';
import GuidanceSessions from './pages/dashboard/GuidanceSessions';
import TuitionBooking from './pages/dashboard/TuitionBooking';
import AppointmentCalendar from './pages/dashboard/AppointmentCalendar';
import BookingHistory from './pages/dashboard/BookingHistory';
import Notifications from './pages/dashboard/Notifications';
import Settings from './pages/dashboard/Settings';
import HelpSupport from './pages/dashboard/HelpSupport';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStudents from './pages/admin/ManageStudents';
import ManageCounsellors from './pages/admin/ManageCounsellors';
import ManageBookings from './pages/admin/ManageBookings';
import Reports from './pages/admin/Reports';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/guidance-sessions" element={<GuidanceSessions />} />
          <Route path="/tuition" element={<TuitionBooking />} />
          <Route path="/calendar" element={<AppointmentCalendar />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpSupport />} />
        </Route>
        <Route element={<DashboardLayout isAdmin={true} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<ManageStudents />} />
          <Route path="/admin/counsellors" element={<ManageCounsellors />} />
          <Route path="/admin/bookings" element={<ManageBookings />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
