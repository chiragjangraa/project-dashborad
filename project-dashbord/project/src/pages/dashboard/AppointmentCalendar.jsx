import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Video, MapPin, CalendarDays, Plus } from 'lucide-react';
import { upcomingAppointments } from '../../data/dummyData';
import { cn } from '../../lib/utils';

export default function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const today = new Date();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const isToday = (day) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const hasEvent = (day) => {
    return upcomingAppointments.some(a => {
      const d = new Date(a.date);
      return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
    });
  };

  const getEventsForDay = (day) => {
    return upcomingAppointments.filter(a => {
      const d = new Date(a.date);
      return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
    });
  };

  const selectedEvents = selectedDay ? getEventsForDay(selectedDay) : [];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-6"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Calendar</h1>
            <p className="text-white/80">Manage your upcoming sessions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/30 transition-colors">
            <Plus className="w-4 h-4" />
            New Session
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-text">
              {monthNames[month]} {year}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-text-muted" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:bg-secondary transition-colors"
              >
                Today
              </button>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-text-muted" />
              </button>
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(d => (
              <div key={d} className="text-center text-xs font-medium text-text-muted py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    'aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all relative',
                    isToday(day)
                      ? 'bg-primary text-white'
                      : isSelected
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-gray-100 dark:hover:bg-dark-surface'
                  )}
                >
                  {day}
                  {hasEvent(day) && !isToday(day) && !isSelected && (
                    <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                  {hasEvent(day) && (isToday(day) || isSelected) && (
                    <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Day Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border/50"
        >
          <h3 className="text-lg font-semibold text-text mb-4">
            {selectedDay ? `${selectedDay} ${monthNames[month]}` : 'Select a day'}
          </h3>

          {selectedEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedEvents.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {apt.counsellor.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">{apt.title}</p>
                      <p className="text-xs text-text-muted">{apt.counsellor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" />
                      {apt.time}
                    </div>
                    <div className="flex items-center gap-1">
                      {apt.mode === 'Online' ? (
                        <Video className="w-3 h-3 text-accent" />
                      ) : (
                        <MapPin className="w-3 h-3 text-warning" />
                      )}
                      {apt.mode}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedDay ? (
            <div className="text-center py-8">
              <CalendarDays className="w-12 h-12 text-text-muted/30 mx-auto mb-3" />
              <p className="text-sm text-text-muted">No sessions scheduled</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarDays className="w-12 h-12 text-text-muted/30 mx-auto mb-3" />
              <p className="text-sm text-text-muted">Click a day to view events</p>
            </div>
          )}

          {/* Upcoming Sessions Quick View */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <h4 className="text-sm font-medium text-text mb-3">Next Session</h4>
            {upcomingAppointments[0] && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-text-muted">{upcomingAppointments[0].title}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-text-muted" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
