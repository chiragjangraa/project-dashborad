import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, Eye, X, CheckCircle, XCircle, Clock, Video, MapPin, Sparkles } from 'lucide-react';
import { bookings } from '../../data/dummyData';
import { CalendarIllustration } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

export default function ManageBookings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingsList, setBookingsList] = useState(bookings);

  const filtered = bookingsList.filter((b) => {
    const matchesSearch = b.student.toLowerCase().includes(searchQuery.toLowerCase()) || b.counsellor.toLowerCase().includes(searchQuery.toLowerCase()) || b.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const statusColors = {
    confirmed: 'bg-gradient-to-r from-success/20 to-primary/20 text-success border-success/30',
    pending: 'bg-gradient-to-r from-warning/20 to-accent/20 text-warning border-warning/30',
    completed: 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30',
    cancelled: 'bg-gradient-to-r from-danger/20 to-danger/20 text-danger border-danger/30',
  };

  const statusIcons = {
    confirmed: CheckCircle,
    pending: Clock,
    completed: CheckCircle,
    cancelled: XCircle,
  };

  const handleStatusChange = (id, newStatus) => {
    setBookingsList(bookingsList.map(b => b.id === id ? { ...b, status: newStatus } : b));
    setSelectedBooking(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-danger via-secondary to-primary p-6 text-white shadow-glow">
        <div className="absolute top-4 right-4 opacity-20">
          <CalendarIllustration className="w-24 h-24" />
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-warning/30 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Session Bookings
          </h1>
          <p className="text-white/80 text-sm font-medium">
            Keep track of all your counselling sessions!
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary transition-colors group-focus-within:text-primary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find a booking..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-2 border-secondary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-secondary focus:shadow-glow transition-all"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-2 border-secondary/20 text-sm font-bold text-text-secondary dark:text-text-muted hover:border-secondary hover:shadow-glow transition-all"
        >
          <Filter className="w-4 h-4 text-secondary" />
          Filter
          <ChevronDown className={cn('w-4 h-4 transition-transform text-secondary', showFilters && 'rotate-180')} />
        </button>
      </div>

      {/* Filter Chips */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-4 flex flex-wrap gap-3 overflow-hidden border border-border/50"
          >
            {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all capitalize',
                  filterStatus === status
                    ? 'bg-gradient-to-r from-secondary to-primary text-white border-transparent shadow-glow scale-105'
                    : 'bg-white/60 dark:bg-dark-surface/60 border-secondary/20 text-text-secondary dark:text-text-muted hover:border-secondary hover:scale-105'
                )}
              >
                {status === 'all' ? 'All' : status === 'confirmed' ? 'Confirmed' : status === 'pending' ? 'Pending' : status === 'completed' ? 'Completed' : 'Cancelled'}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bookings Table */}
      <div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-border/50 shadow-soft-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-b border-border/50">
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">ID</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Student</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Type</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Counsellor</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Date</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Time</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Mode</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Status</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((booking, index) => {
                const StatusIcon = statusIcons[booking.status];
                return (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm font-bold text-primary dark:text-secondary">#{booking.id}</td>
                    <td className="px-4 py-3 text-sm font-bold text-text dark:text-white">{booking.student}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">
                        <Sparkles className="w-3 h-3" />
                        {booking.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{booking.counsellor}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary font-medium">{booking.date}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{booking.time}</td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-lg",
                        booking.mode === 'Online'
                          ? "bg-secondary/10 text-secondary"
                          : "bg-warning/10 text-warning"
                      )}>
                        {booking.mode === 'Online' ? <Video className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                        {booking.mode}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn('inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold capitalize border', statusColors[booking.status])}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="p-2 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 hover:from-secondary/20 hover:to-primary/20 hover:scale-110 transition-all"
                      >
                        <Eye className="w-4 h-4 text-secondary" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-text-muted text-sm font-medium">No bookings found</p>
            <p className="text-text-muted text-xs mt-1">Try adjusting your filters!</p>
          </div>
        )}
      </div>

      {/* Booking Detail Modal */}
      <AnimatePresence>
        {selectedBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={() => setSelectedBooking(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl rounded-3xl border-2 border-secondary/20 shadow-soft-lg w-full max-w-md p-6 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text dark:text-white">Booking Details</h3>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 rounded-xl hover:bg-secondary/10 transition-colors"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>

              {/* Booking Info */}
              <div className="space-y-3">
                {Object.entries(selectedBooking).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5"
                  >
                    <span className="text-sm text-text-muted font-bold capitalize">
                      {key}
                    </span>
                    <span className={cn(
                      'text-sm font-bold',
                      key === 'status' && value === 'confirmed' && 'text-success',
                      key === 'status' && value === 'pending' && 'text-warning',
                      key === 'status' && value === 'completed' && 'text-primary',
                      key === 'status' && value === 'cancelled' && 'text-danger',
                      key !== 'status' && 'text-text dark:text-white'
                    )}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-border/50 flex gap-3">
                {selectedBooking.status === 'pending' && (
                  <button
                    onClick={() => handleStatusChange(selectedBooking.id, 'confirmed')}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-success to-primary text-white font-bold text-sm shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Confirm
                  </button>
                )}
                {selectedBooking.status !== 'cancelled' && selectedBooking.status !== 'completed' && (
                  <button
                    onClick={() => handleStatusChange(selectedBooking.id, 'cancelled')}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-danger to-secondary text-white font-bold text-sm shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-4 h-4" />
                    Cancel
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
