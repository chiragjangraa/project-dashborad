import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, School, GraduationCap, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const steps = [
  { id: 1, title: 'Personal', description: 'Your basic info' },
  { id: 2, title: 'Academic', description: 'School details' },
  { id: 3, title: 'Security', description: 'Set password' },
];

const grades = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];

export default function Register() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    school: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/dashboard';
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email;
    if (step === 2) return formData.grade;
    if (step === 3) return formData.password && formData.password === formData.confirmPassword;
    return false;
  };

  return (
    <div className="w-full">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center justify-center mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-success flex items-center justify-center shadow-glow-accent"
        >
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>
      </div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          {steps.map((s, index) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all',
                    step >= s.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                      : 'bg-gray-100 dark:bg-dark-surface text-text-muted'
                  )}
                >
                  {step > s.id ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    s.id
                  )}
                </div>
                <div className="mt-2 text-center hidden sm:block">
                  <p className={cn(
                    'text-xs font-medium',
                    step >= s.id ? 'text-text' : 'text-text-muted'
                  )}>
                    {s.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  'w-12 sm:w-20 h-0.5 mx-2 transition-colors',
                  step > s.id ? 'bg-primary' : 'bg-border dark:bg-dark-border'
                )} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Header */}
      <div className="mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h2 className="text-2xl font-bold text-text mb-2">
              {step === 1 && 'Create your account'}
              {step === 2 && 'Tell us about your school'}
              {step === 3 && 'Secure your account'}
            </h2>
            <p className="text-text-secondary">
              {step === 1 && 'Enter your basic information to get started'}
              {step === 2 && 'Help us personalize your experience'}
              {step === 3 && 'Create a strong password for your account'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    focused === 'name' ? 'text-primary' : 'text-text-muted'
                  )}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your full name"
                    className={cn(
                      "w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      focused === 'name' ? "border-primary" : "border-border dark:border-dark-border"
                    )}
                  />
                </div>
              </div>

              <div>
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
                      "w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      focused === 'email' ? "border-primary" : "border-border dark:border-dark-border"
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Academic Info */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Grade
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <select
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className={cn(
                      "w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200 appearance-none",
                      "text-text",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      formData.grade ? "border-primary" : "border-border dark:border-dark-border"
                    )}
                  >
                    <option value="">Select your grade</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  School (Optional)
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    focused === 'school' ? 'text-primary' : 'text-text-muted'
                  )}>
                    <School className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    onFocus={() => setFocused('school')}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your school name"
                    className={cn(
                      "w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      focused === 'school' ? "border-primary" : "border-border dark:border-dark-border"
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Password */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Password
                </label>
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
                    placeholder="Create a password"
                    className={cn(
                      "w-full pl-12 pr-12 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      focused === 'password' ? "border-primary" : "border-border dark:border-dark-border"
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
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                    focused === 'confirm' ? 'text-primary' : 'text-text-muted'
                  )}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    onFocus={() => setFocused('confirm')}
                    onBlur={() => setFocused(null)}
                    placeholder="Confirm your password"
                    className={cn(
                      "w-full pl-12 pr-12 py-3.5 rounded-xl bg-white dark:bg-dark-surface",
                      "border-2 transition-all duration-200",
                      "text-text placeholder:text-text-muted",
                      "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? "border-danger"
                        : focused === 'confirm' ? "border-primary" : "border-border dark:border-dark-border"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-danger mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Password Strength Indicator */}
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={cn(
                        'flex-1 h-1 rounded-full transition-colors',
                        formData.password.length >= level * 3
                          ? level <= 1 ? 'bg-danger' : level <= 2 ? 'bg-warning' : level <= 3 ? 'bg-success' : 'bg-success'
                          : 'bg-gray-100 dark:bg-dark-surface'
                      )}
                    />
                  ))}
                </div>
                <p className="text-xs text-text-muted">
                  Use 8+ characters with mix of letters, numbers & symbols
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Terms Checkbox (Step 3 only) */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2"
          >
            <input
              type="checkbox"
              required
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 mt-0.5"
            />
            <label className="text-sm text-text-secondary">
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">Privacy Policy</a>
            </label>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-2">
          {step > 1 && (
            <motion.button
              type="button"
              onClick={handleBack}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2 bg-gray-100 dark:bg-dark-surface text-text-secondary hover:bg-gray-200 dark:hover:bg-dark-card transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
          )}

          <button
            type="submit"
            disabled={!canProceed() || isLoading}
            className={cn(
              'flex-1 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2',
              'bg-gradient-to-r from-primary to-accent text-white',
              'shadow-glow hover:shadow-glow-lg hover:scale-[1.01] active:scale-[0.99]',
              'transition-all duration-200',
              (!canProceed() || isLoading) && 'opacity-60 cursor-not-allowed hover:scale-100'
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating account...
              </>
            ) : step === 3 ? (
              <>
                Create account
                <CheckCircle2 className="w-4 h-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Sign In Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center text-sm text-text-secondary"
      >
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold text-primary hover:text-secondary transition-colors"
        >
          Sign in
        </Link>
      </motion.p>
    </div>
  );
}
