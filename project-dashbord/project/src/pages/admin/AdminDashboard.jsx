import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Briefcase, ClipboardList, TrendingUp, DollarSign, Star, ChevronRight, Activity, Calendar, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { statistics, weeklyData, monthlyData, sessionTypes, students, bookings } from '../../data/dummyData';
import { cn } from '../../lib/utils';

const adminStats = [
  { name: 'Total Students', value: statistics.totalStudents, icon: Users, change: '+12%', trend: 'up', color: 'primary' },
  { name: 'Total Bookings', value: statistics.totalBookings, icon: ClipboardList, change: '+8%', trend: 'up', color: 'accent' },
  { name: 'Active Counsellors', value: statistics.activeCounsellors, icon: Briefcase, change: '+2', trend: 'up', color: 'success' },
  { name: 'Revenue', value: `Rs.${(statistics.revenue / 1000).toFixed(0)}K`, icon: DollarSign, change: '+18%', trend: 'up', color: 'warning' },
];

const recentActivity = [
  { action: 'New student registered', user: 'Rahul Mehta', time: '2 mins ago', type: 'success' },
  { action: 'Booking completed', user: 'Aisha Sharma', time: '15 mins ago', type: 'info' },
  { action: 'New counsellor added', user: 'Dr. Priya', time: '1 hour ago', type: 'success' },
  { action: 'Session cancelled', user: 'Arjun Kumar', time: '2 hours ago', type: 'warning' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-6 lg:p-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-white/80">Welcome back! Here's your platform overview.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl text-white text-sm font-medium">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            primary: 'from-primary to-secondary text-primary bg-primary/10',
            accent: 'from-accent to-primary text-accent bg-accent/10',
            success: 'from-success to-accent text-success bg-success/10',
            warning: 'from-warning to-danger text-warning bg-warning/10',
          };
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={cn(
                  'w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center',
                  colorClasses[stat.color].split(' ')[0]
                )}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={cn(
                  'flex items-center gap-1 text-xs font-medium',
                  stat.trend === 'up' ? 'text-success' : 'text-danger'
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-text">{stat.value}</p>
              <p className="text-sm text-text-muted mt-0.5">{stat.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bookings Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-text">Bookings Trend</h3>
              <p className="text-sm text-text-muted">Platform activity over time</p>
            </div>
            <select className="text-sm bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg px-3 py-1.5 text-text focus:outline-none focus:border-primary transition-colors">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="adminBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
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
                <Area type="monotone" dataKey="bookings" stroke="#4F46E5" fill="url(#adminBookings)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Session Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <h3 className="text-lg font-semibold text-text mb-4">Session Distribution</h3>
          <div className="flex justify-center mb-4">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie
                  data={sessionTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {sessionTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {sessionTypes.map((type) => (
              <div key={type.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                  <span className="text-text-secondary">{type.name}</span>
                </div>
                <span className="font-medium text-text">{type.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Growth & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <h3 className="text-lg font-semibold text-text mb-4">Student Growth</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" strokeOpacity={0.5} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                />
                <Bar dataKey="students" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                <Bar dataKey="sessions" fill="#06B6D4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Students', path: '/admin/students', icon: Users, color: 'primary' },
              { name: 'Counsellors', path: '/admin/counsellors', icon: Briefcase, color: 'accent' },
              { name: 'Bookings', path: '/admin/bookings', icon: ClipboardList, color: 'success' },
              { name: 'Reports', path: '/admin/reports', icon: TrendingUp, color: 'warning' },
            ].map((item) => {
              const Icon = item.icon;
              const colorClasses = {
                primary: 'bg-primary/10 text-primary hover:bg-primary/20',
                accent: 'bg-accent/10 text-accent hover:bg-accent/20',
                success: 'bg-success/10 text-success hover:bg-success/20',
                warning: 'bg-warning/10 text-warning hover:bg-warning/20',
              };
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all',
                    colorClasses[item.color]
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <h4 className="text-sm font-semibold text-text mb-3">Recent Activity</h4>
            <div className="space-y-2">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full',
                      item.type === 'success' && 'bg-success',
                      item.type === 'info' && 'bg-primary',
                      item.type === 'warning' && 'bg-warning'
                    )} />
                    <span className="text-text-secondary">{item.action}</span>
                  </div>
                  <span className="text-xs text-text-muted">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
