import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, DollarSign, Download, Sparkles, BarChart3, Star, Zap, Heart, CheckCircle, Clock, XCircle } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { weeklyData, monthlyData, sessionTypes, statistics } from '../../data/dummyData';
import { Trophy } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

const reportCards = [
  { name: 'Students', value: statistics.totalStudents, icon: Users, change: '+12%', color: 'from-primary to-secondary', glow: 'shadow-glow', iconBg: 'from-primary/20 to-secondary/20' },
  { name: 'Bookings', value: statistics.totalBookings, icon: Calendar, change: '+8%', color: 'from-success to-primary', glow: 'shadow-glow', iconBg: 'from-success/20 to-primary/20' },
  { name: 'Revenue', value: `Rs.${(statistics.revenue / 1000).toFixed(0)}K`, icon: DollarSign, change: '+18%', color: 'from-warning to-accent', glow: 'shadow-glow-accent', iconBg: 'from-warning/20 to-accent/20' },
  { name: 'Satisfaction', value: statistics.satisfaction, icon: Star, change: '+0.2', color: 'from-danger to-secondary', glow: 'shadow-glow', iconBg: 'from-danger/20 to-secondary/20' },
];

const chartColors = {
  grid: '#E2E8F0',
  axis: '#94A3B8',
  bar1: '#4F46E5',
  bar2: '#06B6D4',
  line1: '#6366F1',
  line2: '#EF4444',
  tooltip: { borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid rgba(79, 70, 229, 0.2)', boxShadow: '0 8px 32px rgba(79, 70, 229, 0.15)' },
};

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-warning via-accent to-success p-6 text-white shadow-glow-accent">
        <div className="absolute top-4 right-4 opacity-20">
          <Trophy className="w-24 h-24" />
        </div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
              Reports & Analytics
            </h1>
            <p className="text-white/80 text-sm font-medium">
              Here's how you're crushing it!
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold hover:bg-white/30 hover:scale-105 transition-all shadow-glow">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "bg-white dark:bg-dark-card rounded-3xl p-5 border border-border/50 hover:scale-105 transition-all duration-300",
                card.glow
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={cn('w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg', card.color)}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-success flex items-center gap-1 bg-success/10 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  {card.change}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-text dark:text-white">{card.value}</p>
                <p className="text-xs text-text-muted font-bold mt-1 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-warning" />
                  {card.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Growth Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-dark-card rounded-3xl p-5 border border-secondary/10 shadow-soft-lg hover:shadow-glow transition-shadow"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-text dark:text-white">Monthly Growth</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="name" stroke={chartColors.axis} fontSize={12} tickLine={false} />
                <YAxis stroke={chartColors.axis} fontSize={12} tickLine={false} />
                <Tooltip contentStyle={chartColors.tooltip} />
                <Bar dataKey="students" fill="url(#barGradient1)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="sessions" fill="url(#barGradient2)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Weekly Bookings Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-dark-card rounded-3xl p-5 border border-danger/10 shadow-soft-lg hover:shadow-glow transition-shadow"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-danger to-secondary flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-text dark:text-white">Weekly Bookings</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="name" stroke={chartColors.axis} fontSize={12} tickLine={false} />
                <YAxis stroke={chartColors.axis} fontSize={12} tickLine={false} />
                <Tooltip contentStyle={chartColors.tooltip} />
                <Line type="monotone" dataKey="bookings" stroke="url(#lineGradient1)" strokeWidth={3} dot={{ fill: '#6366F1', strokeWidth: 2, stroke: '#fff', r: 5 }} activeDot={{ r: 7, fill: '#EF4444' }} />
                <Line type="monotone" dataKey="completed" stroke="url(#lineGradient2)" strokeWidth={3} dot={{ fill: '#EF4444', strokeWidth: 2, stroke: '#fff', r: 5 }} activeDot={{ r: 7, fill: '#6366F1' }} />
                <defs>
                  <linearGradient id="lineGradient1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Pie Chart + Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-1 bg-white dark:bg-dark-card rounded-3xl p-5 border border-success/10 shadow-soft-lg hover:shadow-glow-success transition-shadow"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-text dark:text-white">Session Types</h3>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sessionTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  paddingAngle={4}
                >
                  {sessionTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={chartColors.tooltip} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {sessionTypes.map((type) => (
              <div key={type.name} className="flex items-center justify-between text-sm p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: type.color }} />
                  <span className="text-text-secondary dark:text-text-muted font-medium">{type.name}</span>
                </div>
                <span className="font-bold text-text dark:text-white bg-gray-50 dark:bg-dark-surface px-2 py-0.5 rounded-lg text-xs">
                  {type.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-5 border border-primary/10 shadow-soft-lg hover:shadow-glow transition-shadow"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-warning to-accent flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-text dark:text-white">Performance Summary</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/10 hover:scale-105 transition-all">
              <p className="text-sm text-primary font-bold mb-1 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Total Sessions
              </p>
              <p className="text-2xl font-bold text-text dark:text-white">{statistics.completedSessions}</p>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-success" /> +15% from last month
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-success/10 to-primary/10 border border-success/10 hover:scale-105 transition-all">
              <p className="text-sm text-success font-bold mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Pending
              </p>
              <p className="text-2xl font-bold text-text dark:text-white">{statistics.pendingBookings}</p>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                <Sparkles className="w-3 h-3 text-warning" /> Awaiting confirmation
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-warning/10 to-accent/10 border border-warning/10 hover:scale-105 transition-all">
              <p className="text-sm text-accent font-bold mb-1 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> Cancelled
              </p>
              <p className="text-2xl font-bold text-text dark:text-white">{statistics.cancelledSessions}</p>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-danger" /> -2% from last month
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-danger/10 to-secondary/10 border border-danger/10 hover:scale-105 transition-all">
              <p className="text-sm text-danger font-bold mb-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5" /> Avg. Rating
              </p>
              <p className="text-2xl font-bold text-text dark:text-white">{statistics.satisfaction}</p>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                <Heart className="w-3 h-3 text-danger" /> Out of 5.0
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
