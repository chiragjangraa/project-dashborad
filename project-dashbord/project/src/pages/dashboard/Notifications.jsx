import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, Trash2, CheckCheck, AlertCircle, CheckCircle, Info, XCircle, ChevronLeft } from 'lucide-react';
import { notifications as initialNotifications } from '../../data/dummyData';
import { cn } from '../../lib/utils';

const typeIcons = {
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
  info: Info,
};

const typeColors = {
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-danger/10 text-danger',
  info: 'bg-primary/10 text-primary',
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all');

  const filtered = notifications.filter((n) => {
    if (filter === 'unread') return !n.read;
    if (filter === 'read') return n.read;
    return true;
  });

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-warning via-accent to-primary p-6"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Notifications</h1>
            <p className="text-white/80">
              {unreadCount > 0 ? `${unreadCount} unread notifications` : 'You are all caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/30 transition-colors"
            >
              <CheckCheck className="w-4 h-4" />
              Mark all read
            </button>
          )}
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {['all', 'unread', 'read'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-4 py-2.5 rounded-xl text-sm font-medium capitalize transition-all',
              filter === f
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary hover:border-primary/50'
            )}
          >
            {f}
            {f === 'unread' && unreadCount > 0 && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-danger text-white text-xs">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-12 border border-border/50 text-center"
          >
            <Bell className="w-12 h-12 text-text-muted/30 mx-auto mb-4" />
            <p className="text-sm text-text-muted">No notifications to show</p>
          </motion.div>
        ) : (
          filtered.map((notif, index) => {
            const Icon = typeIcons[notif.type];
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'bg-white dark:bg-dark-card rounded-2xl p-5 border transition-all',
                  !notif.read ? 'border-primary/30 bg-primary/5' : 'border-border/50'
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                    typeColors[notif.type]
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-text mb-1">{notif.title}</h3>
                        <p className="text-sm text-text-muted">{notif.message}</p>
                      </div>
                      <span className="text-xs text-text-muted shrink-0">{notif.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="p-2 rounded-lg hover:bg-primary/10 text-text-muted hover:text-primary transition-colors"
                        title="Mark as read"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="p-2 rounded-lg hover:bg-danger/10 text-text-muted hover:text-danger transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
