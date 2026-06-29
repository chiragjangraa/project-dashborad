import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, User, BookOpen, GraduationCap, CalendarDays, History,
  Bell, Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight, Shield,
  Users, Briefcase, ClipboardList, BarChart3, Menu, X, Search, Sparkles,
  Command,
} from 'lucide-react';
import { cn } from '../lib/utils';

const studentLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, color: 'primary' },
  { name: 'My Profile', path: '/profile', icon: User, color: 'secondary' },
  { name: 'Career Guide', path: '/career-counselling', icon: BookOpen, color: 'accent' },
  { name: 'Guidance', path: '/guidance-sessions', icon: GraduationCap, color: 'success' },
  { name: 'Tuition', path: '/tuition', icon: Briefcase, color: 'warning' },
  { name: 'Calendar', path: '/calendar', icon: CalendarDays, color: 'primary' },
  { name: 'History', path: '/history', icon: History, color: 'secondary' },
  { name: 'Notifications', path: '/notifications', icon: Bell, color: 'accent' },
  { name: 'Settings', path: '/settings', icon: Settings, color: 'success' },
  { name: 'Help', path: '/help', icon: HelpCircle, color: 'warning' },
];

const adminLinks = [
  { name: 'Dashboard', path: '/admin', icon: Shield, color: 'primary' },
  { name: 'Students', path: '/admin/students', icon: Users, color: 'secondary' },
  { name: 'Counsellors', path: '/admin/counsellors', icon: Briefcase, color: 'accent' },
  { name: 'Bookings', path: '/admin/bookings', icon: ClipboardList, color: 'success' },
  { name: 'Reports', path: '/admin/reports', icon: BarChart3, color: 'warning' },
];

export default function Sidebar({ isAdmin, mobileOpen, setMobileOpen }) {
  const [collapsed, setCollapsed] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.aside
        className={cn(
          'fixed top-0 left-0 z-50 h-screen w-[280px]',
          'bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl',
          'border-r border-border/50 dark:border-dark-border/50',
          'shadow-soft-xl lg:hidden'
        )}
        initial={false}
        animate={{ x: mobileOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gradient">TeenEase</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
          >
            <X className="w-5 h-5 text-text-muted" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4">
          <div className="relative">
            <Search className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors',
              searchFocused ? 'text-primary' : 'text-text-muted'
            )} />
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="px-3 pb-4 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {links.map((link, index) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all',
                    isActive
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-soft'
                      : 'text-text-secondary hover:text-text hover:bg-gray-100 dark:hover:bg-dark-surface'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </NavLink>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border/50">
          <NavLink
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-danger hover:bg-danger/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </NavLink>
        </div>
      </motion.aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden lg:flex flex-col h-screen fixed left-0 top-0 z-30',
          'transition-all duration-300 ease-in-out',
          collapsed ? 'w-[72px]' : 'w-[260px]'
        )}
      >
        {/* Floating Sidebar Container */}
        <div className="flex-1 flex flex-col m-3 rounded-2xl bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border border-border/50 dark:border-dark-border/50 shadow-soft-lg overflow-hidden">
          {/* Header */}
          <div className={cn(
            'flex items-center border-b border-border/50 dark:border-dark-border/50',
            collapsed ? 'justify-center p-4' : 'justify-between px-4 py-4'
          )}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              {!collapsed && (
                <span className="text-lg font-bold text-gradient">TeenEase</span>
              )}
            </div>
            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-text-muted" />
              </button>
            )}
            {collapsed && (
              <button
                onClick={() => setCollapsed(false)}
                className="absolute -right-3 top-4 w-6 h-6 rounded-full bg-white dark:bg-dark-card border border-border shadow-soft flex items-center justify-center hover:bg-gray-50 transition-all z-10"
              >
                <ChevronRight className="w-3 h-3 text-text-muted" />
              </button>
            )}
          </div>

          {/* Search */}
          {!collapsed && (
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text-muted">
                  ⌘K
                </kbd>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
            {links.map((link, index) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all relative group',
                    isActive
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-soft'
                      : 'text-text-secondary hover:text-text hover:bg-gray-100 dark:hover:bg-dark-surface',
                    collapsed && 'justify-center px-2'
                  )}
                  title={collapsed ? link.name : undefined}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!collapsed && <span className="truncate">{link.name}</span>}
                  {isActive && !collapsed && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-r-full"
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-3 border-t border-border/50 dark:border-dark-border/50">
            {!collapsed && (
              <div className="px-3 py-2 mb-1">
                <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">
                  Quick Actions
                </p>
              </div>
            )}
            <NavLink
              to="/login"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-danger hover:bg-danger/10 transition-colors',
                collapsed && 'justify-center px-2'
              )}
              title={collapsed ? 'Logout' : undefined}
            >
              <LogOut className="w-5 h-5 shrink-0" />
              {!collapsed && <span>Logout</span>}
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}
