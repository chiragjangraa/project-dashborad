import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2, Compass, Users, BookOpen, TrendingUp, Sparkles } from 'lucide-react';
import { HeroStudents } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 1500);
  };

  const features = [
    { icon: Compass, label: 'Career Guidance', color: 'from-amber-400 to-orange-500' },
    { icon: Users, label: 'Mentorship', color: 'from-violet-400 to-purple-500' },
    { icon: BookOpen, label: 'Tuition Classes', color: 'from-cyan-400 to-blue-500' },
    { icon: TrendingUp, label: 'Progress Tracking', color: 'from-emerald-400 to-green-500' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1350px] h-auto md:h-[780px] mx-auto my-10 bg-white rounded-[32px] shadow-[0_25px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Panel - Branding */}
        <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] p-8 md:p-12 lg:p-16 flex flex-col min-h-[400px] md:min-h-0 overflow-hidden">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-40 right-40 w-12 h-12 bg-white/5 rounded-xl hidden lg:block"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-40 left-10 w-16 h-16 bg-white/5 rounded-full hidden lg:block"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Welcome Back!
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
              Continue your learning journey, manage your bookings and achieve your goals with TeenEase.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10 grid grid-cols-2 gap-3 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
              >
                <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br', feature.color)}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative z-10 mt-auto hidden md:block"
          >
            <div className="relative w-full max-w-[400px] mx-auto">
              <HeroStudents className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
                Sign in to your account
              </h2>
              <p className="text-text-secondary">
                Welcome back! Please enter your details.
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-text mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    focused === 'email' ? 'text-primary' : 'text-text-muted'
                  )}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your email"
                    className={cn(
                      "w-full h-14 pl-12 pr-4 rounded-xl bg-gray-50 dark:bg-gray-100",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white",
                      focused === 'email'
                        ? "border-primary bg-white"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-text">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    focused === 'password' ? 'text-primary' : 'text-text-muted'
                  )}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your password"
                    className={cn(
                      "w-full h-14 pl-12 pr-12 rounded-xl bg-gray-50 dark:bg-gray-100",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white",
                      focused === 'password'
                        ? "border-primary bg-white"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <label htmlFor="remember" className="ml-2.5 text-sm text-text-secondary cursor-pointer">
                  Remember me for 30 days
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    'w-full h-14 rounded-xl font-semibold text-base flex items-center justify-center gap-2',
                    'bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white',
                    'shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99]',
                    'transition-all duration-200',
                    isLoading && 'opacity-80 cursor-not-allowed hover:scale-100'
                  )}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-text-muted">Or continue with</span>
                </div>
              </motion.div>

              {/* Google Sign In */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  type="button"
                  className="w-full h-14 rounded-xl font-medium text-base flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-text hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in with Google
                </button>
              </motion.div>
            </form>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-text-secondary">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Create an account
                </Link>
              </p>
            </motion.div>

            {/* Terms */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 text-center text-xs text-text-muted"
            >
              By signing in, you agree to our{' '}
              <a href="#" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-2">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-text-secondary hover:text-primary transition-colors underline underline-offset-2">Privacy Policy</a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
