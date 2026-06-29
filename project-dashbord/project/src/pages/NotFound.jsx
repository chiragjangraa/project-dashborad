import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Sparkles, Rocket, Star } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-dark-bg dark:via-dark-card dark:to-dark-surface p-4 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        {/* Floating rocket */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-warning to-accent flex items-center justify-center mx-auto shadow-2xl shadow-warning/30">
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* 404 Badge */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-secondary/30"
        >
          <span className="text-5xl font-bold text-white">404</span>
        </motion.div>

        <h1 className="text-3xl font-bold text-text dark:text-white mb-3">
          Oops! Lost in Space?
        </h1>
        <p className="text-text-secondary dark:text-text-muted mb-8 max-w-md mx-auto">
          This page seems to have floated away into the galaxy. No worries, let's get you back to your awesome learning journey!
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-sm shadow-xl shadow-secondary/30 hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />Back Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-dark-card border-2 border-primary/20 text-text dark:text-text-secondary font-bold text-sm hover:bg-primary/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />Go Back
          </button>
        </div>

        {/* Decorative stars */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <Star className="w-5 h-5 text-warning fill-warning" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Star className="w-6 h-6 text-success fill-success" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <Star className="w-4 h-4 text-secondary fill-secondary" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
