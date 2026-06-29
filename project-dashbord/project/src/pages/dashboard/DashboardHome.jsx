import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, BookOpen, GraduationCap, Clock, Star, ChevronRight, Video, MapPin, TrendingUp, Award, Zap, Target, Users, ArrowRight, Sparkles } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { weeklyData, upcomingAppointments, statistics } from '../../data/dummyData';
import { cn } from '../../lib/utils';

const stats = [
  { name: 'Upcoming', value: 4, icon: CalendarDays, change: '+2 today', color: 'primary' },
  { name: 'Sessions', value: statistics.completedSessions, icon: BookOpen, change: '+12%', color: 'accent' },
  { name: 'Hours', value: '42', icon: Clock, change: 'This week', color: 'success' },
  { name: 'Rating', value: statistics.satisfaction, icon: Star, change: 'Excellent', color: 'warning' },
];

const quickActions = [
  { name: 'Career Counselling', desc: 'Book a session with career experts', icon: Target, path: '/career-counselling', gradient: 'from-primary to-secondary' },
  { name: 'Guidance Session', desc: 'Get personalized mentorship', icon: GraduationCap, path: '/guidance-sessions', gradient: 'from-accent to-primary' },
  { name: 'Tuition Class', desc: 'Schedule subject tutoring', icon: BookOpen, path: '/tuition', gradient: 'from-success to-accent' },
  { name: 'View Calendar', desc: 'Manage your schedule', icon: CalendarDays, path: '/calendar', gradient: 'from-warning to-danger' },
];

const achievements = [
  { name: 'First Steps', icon: Zap, achieved: true },
  { name: '5 Day Streak', icon: TrendingUp, achieved: true },
  { name: 'Top Student', icon: Award, achieved: true },
  { name: 'Career Ready', icon: Target, achieved: false },
];

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "Every expert was once a beginner. Keep going!",
  "Your potential is endless. Go do what you were created to do.",
];

export default function DashboardHome() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Hero Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-6 lg:p-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">{getGreeting()}</p>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">Welcome back, Aisha!</h1>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-lg">
              {randomQuote}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20">
                <TrendingUp className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-white">5 Day Streak</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20">
                <Zap className="w-4 h-4 text-warning fill-warning" />
                <span className="text-sm font-medium text-white">1,250 XP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20">
                <Award className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-white">Level 5</span>
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {[BookOpen, GraduationCap, Target, Users, CalendarDays, Award].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            primary: 'from-primary to-secondary text-primary',
            accent: 'from-accent to-primary text-accent',
            success: 'from-success to-accent text-success',
            warning: 'from-warning to-danger text-warning',
          };
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white dark:bg-dark-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={cn(
                'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-80 group-hover:opacity-100 transition-opacity',
                colorClasses[stat.color].split(' ')[0]
              )} />
              <div className="flex items-start justify-between mb-3">
                <div className={cn(
                  'w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center',
                  colorClasses[stat.color].split(' ')[0]
                )}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-success">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-text mb-0.5">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-text mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={action.path}
                  className="group relative overflow-hidden block bg-white dark:bg-dark-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={cn(
                    'w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                    action.gradient
                  )}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-text mb-1">{action.name}</h3>
                  <p className="text-xs text-text-muted">{action.desc}</p>
                  <ArrowRight className="absolute right-4 bottom-4 w-5 h-5 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-text">Learning Progress</h3>
              <p className="text-sm text-text-muted">Your weekly activity</p>
            </div>
            <select className="text-sm bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg px-3 py-1.5 text-text focus:outline-none focus:border-primary transition-colors">
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" strokeOpacity={0.5} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    background: 'rgba(255,255,255,0.95)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="bookings"
                  stroke="#4F46E5"
                  fill="url(#colorBookings)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#06B6D4"
                  fill="url(#colorCompleted)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-5 border border-border/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-text">Achievements</h3>
            <Link to="/profile" className="text-xs font-medium text-primary hover:text-secondary transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-xl transition-all',
                    badge.achieved
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20'
                      : 'bg-gray-50 dark:bg-dark-surface opacity-50'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center',
                    badge.achieved
                      ? 'bg-gradient-to-br from-primary to-accent'
                      : 'bg-gray-200 dark:bg-dark-border'
                  )}>
                    <Icon className={cn('w-5 h-5', badge.achieved ? 'text-white' : 'text-text-muted')} />
                  </div>
                  <span className="text-xs font-medium text-text text-center">{badge.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Daily Motivation */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-warning/10 to-accent/10">
              <Zap className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-warning mb-1">Daily Motivation</p>
                <p className="text-xs text-text-muted italic line-clamp-2">{randomQuote}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upcoming Appointments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-text">Upcoming Sessions</h3>
            <p className="text-sm text-text-muted">Your scheduled appointments</p>
          </div>
          <Link
            to="/calendar"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors"
          >
            View calendar
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingAppointments.slice(0, 4).map((appointment, index) => (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-dark-surface rounded-xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    {appointment.counsellor.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text truncate">{appointment.title}</p>
                  <p className="text-xs text-text-muted truncate">{appointment.counsellor}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <CalendarDays className="w-3.5 h-3.5 text-primary" />
                  {appointment.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  {appointment.time}
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  {appointment.mode === 'Online' ? (
                    <Video className="w-3.5 h-3.5 text-success" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5 text-warning" />
                  )}
                  {appointment.mode}
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border/50">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-success/10 text-success text-xs font-medium">
                  Confirmed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
