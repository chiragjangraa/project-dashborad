import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye, CheckCircle, XCircle, Clock, Video, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookingHistory } from '../../data/dummyData';
import { cn } from '../../lib/utils';

export default function BookingHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = bookingHistory.filter((b) => {
    const matchesSearch = b.type.toLowerCase().includes(searchQuery.toLowerCase()) || b.counsellor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const statusColors = {
    completed: 'bg-success/10 text-success',
    cancelled: 'bg-danger/10 text-danger',
    pending: 'bg-warning/10 text-warning',
  };

  const statusIcons = {
    completed: CheckCircle,
    cancelled: XCircle,
    pending: Clock,
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-primary to-accent p-6"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-1">Booking History</h1>
          <p className="text-white/80">View all your past and upcoming sessions</p>
        </div>
      </motion.div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bookings..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'completed', 'pending', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={cn(
                'px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all',
                filterStatus === status
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary hover:border-primary/50'
              )}
            >
              {status}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-border dark:border-dark-border text-sm text-text-secondary hover:border-primary/50 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-text-muted">
        Showing {paginated.length} of {filtered.length} bookings
      </p>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-dark-card rounded-2xl border border-border/50 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-dark-surface border-b border-border/50">
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">ID</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Type</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Counsellor</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Date</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Mode</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Status</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4">Amount</th>
                <th className="text-left text-xs font-medium text-text-muted uppercase px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((booking, index) => {
                const StatusIcon = statusIcons[booking.status];
                return (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/30 hover:bg-gray-50 dark:hover:bg-dark-surface/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-text">{booking.id}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{booking.type}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{booking.counsellor}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{booking.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                        {booking.mode === 'Online' ? (
                          <Video className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <MapPin className="w-3.5 h-3.5 text-warning" />
                        )}
                        {booking.mode}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium', statusColors[booking.status])}>
                        <StatusIcon className="w-3 h-3" />
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-text">
                      {booking.amount > 0 ? `Rs.${booking.amount}` : '-'}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface text-text-muted hover:text-primary transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-border/50">
            <p className="text-sm text-text-muted">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface disabled:opacity-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-text-muted" />
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface disabled:opacity-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-text-muted" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Detail Modal */}
      {selectedBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedBooking(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-dark-card rounded-2xl border border-border/50 shadow-soft-xl w-full max-w-md"
          >
            <div className="flex items-center justify-between p-5 border-b border-border/50">
              <h3 className="text-lg font-semibold text-text">Booking Details</h3>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              {Object.entries(selectedBooking).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                  <span className="text-sm text-text-muted capitalize">{key}</span>
                  <span className={cn(
                    'text-sm font-medium',
                    key === 'status' && value === 'completed' && 'text-success',
                    key === 'status' && value === 'cancelled' && 'text-danger',
                    key === 'status' && value === 'pending' && 'text-warning'
                  )}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
