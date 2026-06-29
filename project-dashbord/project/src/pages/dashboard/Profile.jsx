import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, School, Calendar, Edit2, Save, X, Award, BookOpen, GraduationCap, TrendingUp, Zap, Target, ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Aisha Sharma',
    email: 'aisha@example.com',
    phone: '+91 98765 43210',
    grade: '11th',
    school: 'Sunrise High School',
    location: 'Mumbai, Maharashtra',
    bio: 'Passionate about science and tech! Aspiring to pursue Computer Engineering at a top university.',
    interests: ['Programming', 'Robotics', 'Math', 'Physics'],
    goals: ['Crack JEE', 'Build a startup', 'Learn AI/ML'],
  });
  const [editData, setEditData] = useState({ ...profile });

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  const completionPercentage = 85;

  const stats = [
    { label: 'Sessions', value: 24, icon: BookOpen, color: 'primary' },
    { label: 'Counsellors', value: 8, icon: GraduationCap, color: 'accent' },
    { label: 'Rating', value: 4.8, icon: Award, color: 'warning' },
    { label: 'Streak', value: '5d', icon: TrendingUp, color: 'success' },
  ];

  const badges = [
    { name: 'First Session', achieved: true, color: 'primary' },
    { name: '5 Day Streak', achieved: true, color: 'warning' },
    { name: 'Top Student', achieved: true, color: 'success' },
    { name: 'Quick Learner', achieved: false, color: 'accent' },
    { name: 'Mentor', achieved: false, color: 'secondary' },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-6 lg:p-8"
      >
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border-2 border-white/30">
                <span className="text-white text-2xl font-bold">AS</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl bg-white text-primary flex items-center justify-center shadow-soft hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
              <p className="text-white/80 text-sm mb-2">{profile.grade} Student at {profile.school}</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xl text-xs font-medium">
                  Level 5
                </span>
                <span className="px-3 py-1 rounded-lg bg-warning/30 text-xs font-medium">
                  1,250 XP
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-primary text-sm font-semibold hover:scale-105 transition-transform"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/30 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Profile Completion */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/80">Profile Completion</span>
            <span className="text-sm font-semibold text-white">{completionPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-white/80 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorMap = {
            primary: 'text-primary bg-primary/10',
            accent: 'text-accent bg-accent/10',
            warning: 'text-warning bg-warning/10',
            success: 'text-success bg-success/10',
          };
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl p-4 border border-border/50"
            >
              <div className="flex items-center justify-between">
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  colorMap[stat.color]
                )}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-bold text-text mt-3">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="text-lg font-semibold text-text mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Full Name', key: 'name', icon: Zap },
                { label: 'Email', key: 'email', icon: Mail },
                { label: 'Phone', key: 'phone', icon: Phone },
                { label: 'Grade', key: 'grade', icon: Calendar },
                { label: 'School', key: 'school', icon: School },
                { label: 'Location', key: 'location', icon: MapPin },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-medium text-text-muted mb-2">{field.label}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData[field.key]}
                      onChange={(e) => setEditData({ ...editData, [field.key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-text">
                      <field.icon className="w-4 h-4 text-text-muted" />
                      <span>{profile[field.key]}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="text-lg font-semibold text-text mb-4">About Me</h2>
            {isEditing ? (
              <textarea
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text text-sm resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            ) : (
              <p className="text-sm text-text-muted leading-relaxed">{profile.bio}</p>
            )}
          </motion.div>

          {/* Interests & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
            >
              <h2 className="text-lg font-semibold text-text mb-4">Interests</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.interests.join(', ')}
                  onChange={(e) => setEditData({ ...editData, interests: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text text-sm focus:outline-none focus:border-primary"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
            >
              <h2 className="text-lg font-semibold text-text mb-4">Goals</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.goals.join(', ')}
                  onChange={(e) => setEditData({ ...editData, goals: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text text-sm focus:outline-none focus:border-primary"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.goals.map((goal, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium">
                      {goal}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-text">Badges</h2>
              <span className="text-xs text-text-muted">3/5 earned</span>
            </div>
            <div className="space-y-2">
              {badges.map((badge, i) => (
                <div
                  key={badge.name}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-xl transition-colors',
                    badge.achieved
                      ? 'bg-gray-50 dark:bg-dark-surface'
                      : 'opacity-50'
                  )}
                >
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center',
                    badge.achieved
                      ? `bg-${badge.color}/10 text-${badge.color}`
                      : 'bg-gray-100 dark:bg-dark-border text-text-muted'
                  )}>
                    {badge.achieved ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-current" />
                    )}
                  </div>
                  <span className={cn(
                    'text-sm font-medium',
                    badge.achieved ? 'text-text' : 'text-text-muted'
                  )}>
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-white dark:to-dark-card rounded-2xl p-6 border border-primary/20"
          >
            <h2 className="text-lg font-semibold text-text mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { action: 'Completed Career Session', time: 'Today' },
                { action: 'Earned 50 XP', time: 'Yesterday' },
                { action: '5 Day Streak!', time: '2 days ago' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">{item.action}</span>
                  <span className="text-xs text-text-muted">{item.time}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
              View all activity
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
