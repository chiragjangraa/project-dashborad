import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, ChevronDown, Edit2, Trash2, Eye, Star, X, Mail, Phone, Briefcase, Sparkles } from 'lucide-react';
import { counsellors } from '../../data/dummyData';
import { Lightbulb } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

export default function ManageCounsellors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [counsellorsList, setCounsellorsList] = useState(counsellors);
  const [formData, setFormData] = useState({ name: '', email: '', specialization: '', experience: '', phone: '', status: 'active' });

  const filtered = counsellorsList.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAdd = (e) => { e.preventDefault(); const newCounsellor = { id: counsellorsList.length + 1, ...formData, rating: 0, students: 0, avatar: formData.name.split(' ').map(n => n[0]).join('') }; setCounsellorsList([newCounsellor, ...counsellorsList]); setShowAddModal(false); setFormData({ name: '', email: '', specialization: '', experience: '', phone: '', status: 'active' }); };
  const handleEdit = (e) => { e.preventDefault(); setCounsellorsList(counsellorsList.map(c => c.id === selectedCounsellor.id ? { ...selectedCounsellor, ...formData } : c)); setShowEditModal(false); setSelectedCounsellor(null); };
  const handleDelete = (id) => { setCounsellorsList(counsellorsList.filter(c => c.id !== id)); setSelectedCounsellor(null); };
  const openEdit = (counsellor) => { setSelectedCounsellor(counsellor); setFormData({ name: counsellor.name, email: counsellor.email, specialization: counsellor.specialization, experience: counsellor.experience, phone: counsellor.phone, status: counsellor.status }); setShowEditModal(true); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-success to-primary p-6 text-white shadow-glow flex-1 mr-4">
          <div className="absolute top-4 right-4 opacity-20"><Lightbulb className="w-20 h-20" /></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold mb-1">Counsellors</h1>
            <p className="text-white/80 text-sm">Manage your expert guides</p>
          </div>
        </div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-r from-success to-primary text-white font-bold text-sm shadow-glow hover:scale-105 transition-all"><Plus className="w-5 h-5" />Add Counsellor</button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search counsellors..." className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-success" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-sm font-bold text-text-secondary dark:text-text-muted hover:border-success transition-all"><Filter className="w-4 h-4" />Filter <ChevronDown className={cn('w-4 h-4 transition-transform', showFilters && 'rotate-180')} /></button>
      </div>
      {showFilters && (
        <div className="bg-white dark:bg-dark-card rounded-2xl p-4 flex flex-wrap gap-3 border border-border/50">
          {['all', 'active', 'inactive'].map((status) => (<button key={status} onClick={() => setFilterStatus(status)} className={cn('px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all capitalize', filterStatus === status ? 'bg-gradient-to-r from-success to-primary text-white border-transparent shadow-glow' : 'bg-white dark:bg-dark-surface border-success/20 text-text-secondary dark:text-text-muted hover:border-success')}>{status}</button>))}
        </div>
      )}
      <div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-success/10 to-primary/10 border-b border-border/50">
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Counsellor</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Specialization</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Experience</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Rating</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Students</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Status</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((counsellor, index) => (
                <motion.tr key={counsellor.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }} className="border-b border-border/30 hover:bg-success/5 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center shadow-glow"><span className="text-white text-xs font-bold">{counsellor.avatar}</span></div>
                      <div><p className="text-sm font-bold text-text dark:text-white">{counsellor.name}</p><p className="text-xs text-text-muted">{counsellor.email}</p></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{counsellor.specialization}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{counsellor.experience}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-warning fill-warning" /><span className="text-sm font-bold text-text">{counsellor.rating}</span></div></td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{counsellor.students}</td>
                  <td className="px-4 py-3"><span className={cn('px-3 py-1 rounded-full text-xs font-bold capitalize', counsellor.status === 'active' ? 'bg-success/20 text-success' : 'bg-gray-100 dark:bg-dark-surface text-text-muted')}>{counsellor.status}</span></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelectedCounsellor(counsellor)} className="p-2 rounded-xl hover:bg-success/10 transition-colors"><Eye className="w-4 h-4 text-success" /></button>
                      <button onClick={() => openEdit(counsellor)} className="p-2 rounded-xl hover:bg-primary/10 transition-colors"><Edit2 className="w-4 h-4 text-primary" /></button>
                      <button onClick={() => handleDelete(counsellor.id)} className="p-2 rounded-xl hover:bg-danger/10 transition-colors"><Trash2 className="w-4 h-4 text-danger" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AnimatePresence>
        {selectedCounsellor && !showEditModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setSelectedCounsellor(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Counsellor Details</h3><button onClick={() => setSelectedCounsellor(null)} className="p-2 rounded-xl hover:bg-success/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center shadow-glow"><span className="text-white font-bold">{selectedCounsellor.avatar}</span></div>
                <div><p className="text-sm font-bold text-text dark:text-white">{selectedCounsellor.name}</p><span className={cn('px-2 py-0.5 rounded-full text-xs font-bold', selectedCounsellor.status === 'active' ? 'bg-success/20 text-success' : 'bg-gray-100 dark:bg-dark-surface text-text-muted')}>{selectedCounsellor.status}</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Mail className="w-4 h-4 text-primary" />{selectedCounsellor.email}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Briefcase className="w-4 h-4 text-secondary" />{selectedCounsellor.specialization}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Phone className="w-4 h-4 text-success" />{selectedCounsellor.phone}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Star className="w-4 h-4 text-warning" />{selectedCounsellor.rating} / 5.0 ({selectedCounsellor.students} students)</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAddModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setShowAddModal(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Add Counsellor</h3><button onClick={() => setShowAddModal(false)} className="p-2 rounded-xl hover:bg-success/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <form onSubmit={handleAdd} className="space-y-4">
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Specialization</label><input type="text" required value={formData.specialization} onChange={(e) => setFormData({ ...formData, specialization: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Experience</label><input type="text" required value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-success to-primary text-white font-bold shadow-glow hover:scale-[1.02] transition-all">Add Counsellor</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showEditModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setShowEditModal(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Edit Counsellor</h3><button onClick={() => setShowEditModal(false)} className="p-2 rounded-xl hover:bg-success/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <form onSubmit={handleEdit} className="space-y-4">
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Specialization</label><input type="text" required value={formData.specialization} onChange={(e) => setFormData({ ...formData, specialization: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Experience</label><input type="text" required value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-success/20 text-text dark:text-white focus:outline-none focus:border-success" /></div>
                <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-success to-primary text-white font-bold shadow-glow hover:scale-[1.02] transition-all">Save Changes</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
