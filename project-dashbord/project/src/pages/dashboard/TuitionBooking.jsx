import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Video, MapPin, ChevronDown, X, CheckCircle2, Grid, List, BookOpen, Calculator, Atom, FlaskConical } from 'lucide-react';
import { counsellors } from '../../data/dummyData';
import { cn } from '../../lib/utils';

export default function TuitionBooking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMode, setSelectedMode] = useState('Online');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [viewMode, setViewMode] = useState('grid');

  const tuitionTutors = counsellors.filter(c =>
    c.specialization.includes('Medical') ||
    c.specialization.includes('Engineering') ||
    c.specialization.includes('Commerce')
  );

  const filtered = tuitionTutors.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const subjects = [
    { name: 'Mathematics', icon: Calculator, color: 'from-primary to-secondary' },
    { name: 'Physics', icon: Atom, color: 'from-accent to-primary' },
    { name: 'Chemistry', icon: FlaskConical, color: 'from-success to-accent' },
    { name: 'Biology', icon: BookOpen, color: 'from-warning to-danger' },
  ];

  const handleBook = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedTutor(null);
      setSelectedSlot(null);
      setSelectedDate('');
    }, 2500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-warning via-danger to-secondary p-6 lg:p-8"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-warning/20 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Tuition Classes</h1>
          <p className="text-white/80 max-w-xl">
            Get personalized tutoring in Math, Science, and more from expert teachers.
          </p>
        </div>
      </motion.div>

      {/* Subject Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {subjects.map((subject, index) => {
          const Icon = subject.icon;
          return (
            <motion.button
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSubject(subject.name)}
              className={cn(
                'group bg-white dark:bg-dark-card rounded-xl p-4 border transition-all text-left',
                selectedSubject === subject.name
                  ? 'border-warning shadow-soft'
                  : 'border-border/50 hover:border-warning/50'
              )}
            >
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br',
                subject.color
              )}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-medium text-text text-sm">{subject.name}</h3>
              <p className="text-xs text-text-muted mt-1">{filtered.length} tutors</p>
            </motion.button>
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
            placeholder="Search tutors..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-border dark:border-dark-border text-text placeholder:text-text-muted focus:outline-none focus:border-warning focus:ring-2 focus:ring-warning/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              'flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-card border font-medium text-sm transition-all',
              showFilters ? 'border-warning text-warning' : 'border-border dark:border-dark-border text-text-secondary hover:border-warning/50'
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
                viewMode === 'grid' ? 'bg-warning text-white' : 'bg-white dark:bg-dark-card text-text-muted'
              )}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'px-3 py-2.5 transition-colors',
                viewMode === 'list' ? 'bg-warning text-white' : 'bg-white dark:bg-dark-card text-text-muted'
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-text-muted">Showing {filtered.length} tutors for {selectedSubject}</p>

      {/* Tutor Cards */}
      <div className={cn(
        'gap-4',
        viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'
      )}>
        {filtered.map((tutor, index) => (
          <motion.div
            key={tutor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              'group bg-white dark:bg-dark-card rounded-2xl border border-border/50 hover:border-warning/30 hover:shadow-card-hover transition-all duration-300',
              viewMode === 'grid' ? 'p-5' : 'p-4 flex items-center gap-4'
            )}
          >
            {viewMode === 'grid' ? (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-danger flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{tutor.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{tutor.name}</h3>
                      <p className="text-xs text-warning font-medium">{tutor.specialization}</p>
                    </div>
                  </div>
                  <span className={cn(
                    'px-2.5 py-1 rounded-lg text-xs font-medium',
                    tutor.status === 'active' ? 'bg-success/10 text-success' : 'bg-gray-100 text-text-muted'
                  )}>
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span className="text-sm font-medium text-text">{tutor.rating}</span>
                  <span className="text-xs text-text-muted ml-1">({tutor.students} students)</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-text-muted">{tutor.experience}</span>
                  <button
                    onClick={() => setSelectedTutor(tutor)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-warning to-danger text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Class
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-danger flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold text-sm">{tutor.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text truncate">{tutor.name}</h3>
                  <p className="text-xs text-warning font-medium">{tutor.specialization}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span className="text-sm font-medium text-text">{tutor.rating}</span>
                </div>
                <span className="text-xs text-text-muted hidden md:block">{tutor.experience}</span>
                <button
                  onClick={() => setSelectedTutor(tutor)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-warning to-danger text-white text-xs font-semibold hover:opacity-90 transition-opacity"
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
        {selectedTutor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => { setSelectedTutor(null); setBookingSuccess(false); }}
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
                  {bookingSuccess ? 'Class Booked' : 'Book Tuition Class'}
                </h3>
                <button
                  onClick={() => { setSelectedTutor(null); setBookingSuccess(false); }}
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
                    <h4 className="text-lg font-semibold text-text mb-2">Success!</h4>
                    <p className="text-sm text-text-muted">
                      Your {selectedSubject} class with {selectedTutor.name} is confirmed.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-danger flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{selectedTutor.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-text">{selectedTutor.name}</p>
                        <p className="text-xs text-text-muted">{selectedTutor.specialization}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Subject</label>
                      <div className="grid grid-cols-2 gap-2">
                        {subjects.map((s) => (
                          <button
                            key={s.name}
                            onClick={() => setSelectedSubject(s.name)}
                            className={cn(
                              'px-3 py-2.5 rounded-lg text-sm font-medium border transition-all',
                              selectedSubject === s.name
                                ? 'bg-gradient-to-r from-warning to-danger text-white border-warning'
                                : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-warning'
                            )}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Select Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text focus:outline-none focus:border-warning transition-colors"
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
                                ? 'bg-gradient-to-r from-warning to-danger text-white border-warning'
                                : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-warning'
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Mode</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedMode('Online')}
                          className={cn(
                            'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border transition-all',
                            selectedMode === 'Online'
                              ? 'bg-gradient-to-r from-warning to-danger text-white border-warning'
                              : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-warning'
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
                              ? 'bg-gradient-to-r from-warning to-danger text-white border-warning'
                              : 'bg-white dark:bg-dark-surface border-border dark:border-dark-border text-text-muted hover:border-warning'
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
                        'w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-warning to-danger hover:opacity-90 transition-opacity',
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
