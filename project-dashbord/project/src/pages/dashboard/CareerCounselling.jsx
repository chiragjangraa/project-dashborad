import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Calendar, Clock, Video, MapPin, ChevronDown, X, CheckCircle2, Grid, List, Users, Target, BookOpen, Zap } from 'lucide-react';
import { counsellors } from '../../data/dummyData';
import { cn } from '../../lib/utils';

export default function CareerCounselling() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [filters, setFilters] = useState({ specialization: 'all' });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMode, setSelectedMode] = useState('Online');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = counsellors.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpec = filters.specialization === 'all' || c.specialization === filters.specialization;
    return matchesSearch && matchesSpec;
  });

  const specializations = ['all', ...new Set(counsellors.map((c) => c.specialization))];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleBook = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedCounsellor(null);
      setSelectedSlot(null);
      setSelectedDate('');
    }, 2500);
  };

  const categories = [
    { name: 'Engineering', count: 12, icon: Zap, color: 'primary' },
    { name: 'Medical', count: 8, icon: Target, color: 'danger' },
    { name: 'Business', count: 15, icon: BookOpen, color: 'warning' },
    { name: 'Arts', count: 6, icon: Users, color: 'accent' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-6 lg:p-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Career Counselling</h1>
          <p className="text-white/80 max-w-xl">
            Discover your dream career with expert guidance from top professionals in every field.
          </p>
        </div>
      </motion.div>

      {/* Career Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const colorClasses = {
            primary: 'from-primary to-secondary text-primary bg-primary/10',
            danger: 'from-danger to-warning text-danger bg-danger/10',
            warning: 'from-warning to-accent text-warning bg-warning/10',
            accent: 'from-accent to-primary text-accent bg-accent/10',
          };
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all cursor-pointer group"
            >
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center mb-3',
                colorClasses[cat.color].split(' ')[2]
              )}>
                <Icon className={cn('w-5 h-5', colorClasses[cat.color].split(' ')[1])} />
              </div>
              <h3 className="font-semibold text-text mb-1">{cat.name}</h3>
              <p className="text-sm text-text-muted">{cat.count} counsellors</p>
            </motion.div>
          );
        })}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search career counsellors..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              'flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-card border font-medium text-sm transition-all',
              showFilters ? 'border-primary text-primary' : 'border-border dark:border-dark-border text-text-secondary hover:border-primary/50'
            )}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="flex rounded-xl overflow-hidden border border-border dark:border-dark-border">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'px-3 py-2.5 transition-colors',
                viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white dark:bg-dark-card text-text-muted hover:bg-gray-50'
              )}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'px-3 py-2.5 transition-colors',
                viewMode === 'list' ? 'bg-primary text-white' : 'bg-white dark:bg-dark-card text-text-muted hover:bg-gray-50'
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-dark-card rounded-xl p-4 border border-border/50 flex flex-wrap gap-4">
              <div>
                <label className="block text-xs font-medium text-text-muted mb-1.5">Specialization</label>
                <select
                  value={filters.specialization}
                  onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
                  className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-sm text-text focus:outline-none focus:border-primary"
                >
                  {specializations.map((s) => (
                    <option key={s} value={s}>{s === 'all' ? 'All Specializations' : s}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <p className="text-sm text-text-muted">
        Showing {filtered.length} counsellors
      </p>

      {/* Counsellor Cards */}
      <div className={cn(
        'gap-4',
        viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'
      )}>
        {filtered.map((counsellor, index) => (
          <motion.div
            key={counsellor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              'group bg-white dark:bg-dark-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300',
              viewMode === 'grid' ? 'p-5' : 'p-4 flex items-center gap-4'
            )}
          >
            {viewMode === 'grid' ? (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{counsellor.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{counsellor.name}</h3>
                      <p className="text-xs text-primary font-medium">{counsellor.specialization}</p>
                    </div>
                  </div>
                  <span className={cn(
                    'px-2.5 py-1 rounded-lg text-xs font-medium',
                    counsellor.status === 'active' ? 'bg-success/10 text-success' : 'bg-gray-100 text-text-muted'
                  )}>
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span className="text-sm font-medium text-text">{counsellor.rating}</span>
                  <span className="text-xs text-text-muted ml-1">({counsellor.students} students)</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-text-muted">{counsellor.experience}</span>
                  <button
                    onClick={() => setSelectedCounsellor(counsellor)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-secondary transition-colors"
                  >
                    Book Session
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold text-sm">{counsellor.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text truncate">{counsellor.name}</h3>
                  <p className="text-xs text-primary font-medium">{counsellor.specialization}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span className="text-sm font-medium text-text">{counsellor.rating}</span>
                </div>
                <span className="text-xs text-text-muted hidden md:block">{counsellor.experience}</span>
                <button
                  onClick={() => setSelectedCounsellor(counsellor)}
                  className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  Book
                </button>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedCounsellor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => { setSelectedCounsellor(null); setBookingSuccess(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-card rounded-2xl border border-border/50 shadow-soft-xl w-full max-w-md overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <h3 className="text-lg font-semibold text-text">
                  {bookingSuccess ? 'Booking Confirmed' : 'Book Session'}
                </h3>
                <button
                  onClick={() => { setSelectedCounsellor(null); setBookingSuccess(false); }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>

              <div className="p-5">
                {bookingSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-success" />
                    </div>
                    <h4 className="text-lg font-semibold text-text mb-2">Session Booked!</h4>
                    <p className="text-sm text-text-muted">
                      Your session with {selectedCounsellor.name} is confirmed.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{selectedCounsellor.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-text">{selectedCounsellor.name}</p>
                        <p className="text-xs text-text-muted">{selectedCounsellor.specialization}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Select Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Select Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={cn(
                              'px-3 py-2.5 rounded-lg text-sm font-medium border transition-all',
                              selectedSlot === slot
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-primary'
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Session Type</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedMode('Online')}
                          className={cn(
                            'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border transition-all',
                            selectedMode === 'Online'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-primary'
                          )}
                        >
                          <Video className="w-4 h-4" />
                          Online
                        </button>
                        <button
                          onClick={() => setSelectedMode('In-Person')}
                          className={cn(
                            'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border transition-all',
                            selectedMode === 'In-Person'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-primary'
                          )}
                        >
                          <MapPin className="w-4 h-4" />
                          In-Person
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleBook}
                      disabled={!selectedDate || !selectedSlot}
                      className={cn(
                        'w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity',
                        (!selectedDate || !selectedSlot) && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
