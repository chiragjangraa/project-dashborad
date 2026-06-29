import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Bell, Sun, Moon, Search, ChevronDown, LogOut, User, Settings, Plus, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { notifications } from '../data/dummyData';
import { cn } from '../lib/utils';

export default function Navbar({ onMenuClick, isAdmin }) {
  const { theme, toggleTheme } = useTheme();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Command palette shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen(true);
      }
      if (e.key === 'Escape') {
        setCommandOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-4 lg:px-6 h-16">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              <Menu className="w-5 h-5 text-text-secondary" />
            </button>

            {/* Search - Desktop */}
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border hover:border-primary/50 transition-all group"
            >
              <Search className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
              <span className="text-sm text-text-muted">Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text-muted">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* Search - Mobile */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Quick Add Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-medium shadow-glow hover:shadow-glow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Book Session</span>
            </motion.button>

            {/* XP Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-warning/10 to-accent/10 border border-warning/20"
            >
              <Zap className="w-4 h-4 text-warning fill-warning" />
              <span className="text-xs font-semibold text-warning">1,250 XP</span>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-warning" />
              ) : (
                <Moon className="w-5 h-5 text-secondary" />
              )}
            </motion.button>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <Bell className="w-5 h-5 text-text-secondary" />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-danger text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </motion.button>

              <AnimatePresence>
                {notifOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setNotifOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-card rounded-2xl border border-border dark:border-dark-border shadow-soft-xl overflow-hidden z-50"
                    >
                      <div className="flex items-center justify-between px-4 py-3 border-b border-border dark:border-dark-border">
                        <span className="font-semibold text-sm text-text">Notifications</span>
                        <Link
                          to="/notifications"
                          onClick={() => setNotifOpen(false)}
                          className="text-xs font-medium text-primary hover:text-secondary transition-colors"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.slice(0, 5).map((notif) => (
                          <div
                            key={notif.id}
                            className={cn(
                              'flex gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-surface border-b border-border/50 last:border-0 transition-colors cursor-pointer',
                              !notif.read && 'bg-primary/5'
                            )}
                          >
                            <div
                              className={cn(
                                'w-2 h-2 rounded-full mt-1.5 shrink-0',
                                notif.type === 'success' && 'bg-success',
                                notif.type === 'warning' && 'bg-warning',
                                notif.type === 'error' && 'bg-danger',
                                notif.type === 'info' && 'bg-primary'
                              )}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-text truncate">{notif.title}</p>
                              <p className="text-xs text-text-muted mt-0.5 line-clamp-2">{notif.message}</p>
                              <p className="text-[10px] text-text-muted mt-1">{notif.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">AS</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-text leading-tight">Aisha</p>
                  <p className="text-xs text-text-muted">Level 5</p>
                </div>
                <ChevronDown className="w-4 h-4 text-text-muted hidden md:block" />
              </motion.button>

              <AnimatePresence>
                {profileOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white dark:bg-dark-card rounded-2xl border border-border dark:border-dark-border shadow-soft-xl overflow-hidden z-50"
                    >
                      <div className="px-4 py-3 border-b border-border dark:border-dark-border">
                        <p className="text-sm font-semibold text-text">Aisha Sharma</p>
                        <p className="text-xs text-text-muted">aisha@example.com</p>
                      </div>
                      <div className="p-1.5">
                        <Link
                          to="/profile"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-text-secondary hover:text-text hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                        >
                          <User className="w-4 h-4" />
                          My Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-text-secondary hover:text-text hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          Settings
                        </Link>
                        <Link
                          to="/login"
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-danger hover:bg-danger/10 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border dark:border-dark-border overflow-hidden"
            >
              <div className="p-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Palette */}
      <AnimatePresence>
        {commandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setCommandOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-white dark:bg-dark-card rounded-2xl border border-border dark:border-dark-border shadow-soft-xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border dark:border-dark-border">
                <Search className="w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  autoFocus
                  className="flex-1 bg-transparent text-text placeholder:text-text-muted outline-none"
                />
                <kbd
                  onClick={() => setCommandOpen(false)}
                  className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-dark-surface border border-border dark:border-dark-border text-xs font-medium text-text-muted cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  ESC
                </kbd>
              </div>
              <div className="py-2">
                <p className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">Quick Actions</p>
                {[
                  { label: 'Book Career Counselling', path: '/career-counselling' },
                  { label: 'Schedule Tuition', path: '/tuition' },
                  { label: 'View Calendar', path: '/calendar' },
                  { label: 'My Profile', path: '/profile' },
                  { label: 'Settings', path: '/settings' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setCommandOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                  >
                    <span className="text-sm font-medium text-text">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
