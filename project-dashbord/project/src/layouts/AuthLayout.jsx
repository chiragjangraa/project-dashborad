import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, GraduationCap, Target, CalendarDays, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: Target, title: 'Career Guidance', desc: 'Expert career counselling to help you discover your path' },
  { icon: Users, title: 'Personal Mentorship', desc: 'One-on-one guidance from industry professionals' },
  { icon: GraduationCap, title: 'Learning Progress', desc: 'Track your goals and achievements in real-time' },
  { icon: CalendarDays, title: 'Easy Booking', desc: 'Schedule sessions with just a few clicks' },
];

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Visual Panel */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/10"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/20"
          />
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          {/* Logo */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TeenEase</span>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                Welcome Back
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-md">
                Manage your counselling sessions, mentorship, tuition classes and learning journey from one beautiful dashboard.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{feature.title}</p>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Illustration Area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="relative">
              {/* Floating illustration elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 left-1/4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 right-0"
              >
                <div className="w-20 h-20 rounded-2xl bg-accent/30 backdrop-blur-xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 left-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </motion.div>

              {/* Central illustration container */}
              <div className="w-full h-48 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {/* Student illustration simplified as geometric shapes */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center"
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-warning to-danger flex items-center justify-center"
                  >
                    <CalendarDays className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50">
              Trusted by 10,000+ students across 100+ schools
            </p>
            <div className="flex items-center gap-2 mt-3">
              {[...Array(5)].map((_, i) => (
                <CheckCircle2 key={i} className="w-4 h-4 text-success" />
              ))}
              <span className="text-sm text-white/70 ml-2">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 gradient-hero opacity-50 dark:opacity-0" />
        <div className="absolute inset-0 gradient-mesh-dark opacity-0 dark:opacity-100" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md relative z-10"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}
