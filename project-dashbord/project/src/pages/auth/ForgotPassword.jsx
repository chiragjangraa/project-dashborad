import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsSent(true); }, 1500);
  };

  return (
    <div className="w-full">
      <div className="lg:hidden flex items-center justify-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-warning to-accent flex items-center justify-center shadow-glow">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text dark:text-white mb-2">Forgot Password?</h2>
        <p className="text-text-secondary dark:text-text-muted">No worries, we have got your back!</p>
      </div>
      {isSent ? (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-success to-primary flex items-center justify-center mx-auto shadow-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text dark:text-white mb-1">Check your email!</h3>
            <p className="text-sm text-text-secondary dark:text-text-muted">We sent a password reset link to {email}</p>
          </div>
          <Link to="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to login
          </Link>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-text dark:text-text-secondary mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 dark:border-white/10 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
            </div>
            <button type="submit" disabled={isLoading} className={cn('w-full py-3.5 rounded-2xl bg-gradient-to-r from-warning to-accent text-white font-bold text-sm shadow-glow transition-all hover:scale-[1.02]', isLoading && 'opacity-70 cursor-not-allowed')}>
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  Sending...
                </span>
              ) : 'Send Reset Link'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm text-text-secondary dark:text-text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
