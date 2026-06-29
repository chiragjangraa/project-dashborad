import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, ChevronDown, Edit2, Trash2, Eye, X, Mail, Phone, GraduationCap, School } from 'lucide-react';
import { students } from '../../data/dummyData';
import { StudyBoy } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

export default function ManageStudents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [studentsList, setStudentsList] = useState(students);
  const [formData, setFormData] = useState({ name: '', email: '', grade: '', school: '', phone: '', status: 'active' });

  const filtered = studentsList.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase()) || s.school.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAdd = (e) => { e.preventDefault(); const newStudent = { id: studentsList.length + 1, ...formData, joined: new Date().toISOString().split('T')[0] }; setStudentsList([newStudent, ...studentsList]); setShowAddModal(false); setFormData({ name: '', email: '', grade: '', school: '', phone: '', status: 'active' }); };
  const handleEdit = (e) => { e.preventDefault(); setStudentsList(studentsList.map(s => s.id === selectedStudent.id ? { ...selectedStudent, ...formData } : s)); setShowEditModal(false); setSelectedStudent(null); };
  const handleDelete = (id) => { setStudentsList(studentsList.filter(s => s.id !== id)); setSelectedStudent(null); };
  const openEdit = (student) => { setSelectedStudent(student); setFormData({ name: student.name, email: student.email, grade: student.grade, school: student.school, phone: student.phone, status: student.status }); setShowEditModal(true); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 text-white shadow-glow flex-1 mr-4">
          <div className="absolute top-4 right-4 opacity-20"><StudyBoy className="w-20 h-20" /></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold mb-1">Students</h1>
            <p className="text-white/80 text-sm">Manage all your amazing students</p>
          </div>
        </div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-glow hover:scale-105 transition-all"><Plus className="w-5 h-5" />Add Student</button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search students..." className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-sm font-bold text-text-secondary dark:text-text-muted hover:border-primary transition-all"><Filter className="w-4 h-4" />Filter <ChevronDown className={cn('w-4 h-4 transition-transform', showFilters && 'rotate-180')} /></button>
      </div>
      {showFilters && (
        <div className="bg-white dark:bg-dark-card rounded-2xl p-4 flex flex-wrap gap-3 border border-border/50">
          {['all', 'active', 'inactive'].map((status) => (<button key={status} onClick={() => setFilterStatus(status)} className={cn('px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all capitalize', filterStatus === status ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-glow' : 'bg-white dark:bg-dark-surface border-primary/20 text-text-secondary dark:text-text-muted hover:border-primary')}>{status}</button>))}
        </div>
      )}
      <div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border/50">
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Student</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Grade</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">School</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Contact</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Status</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Joined</th>
                <th className="text-left text-xs font-bold text-text-muted uppercase px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student, index) => (
                <motion.tr key={student.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow"><span className="text-white text-xs font-bold">{student.name.split(' ').map(n => n[0]).join('')}</span></div>
                      <div><p className="text-sm font-bold text-text dark:text-white">{student.name}</p><p className="text-xs text-text-muted">{student.email}</p></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{student.grade}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{student.school}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{student.phone}</td>
                  <td className="px-4 py-3"><span className={cn('px-3 py-1 rounded-full text-xs font-bold capitalize', student.status === 'active' ? 'bg-success/20 text-success' : 'bg-gray-100 dark:bg-dark-surface text-text-muted')}>{student.status}</span></td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{student.joined}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelectedStudent(student)} className="p-2 rounded-xl hover:bg-primary/10 transition-colors"><Eye className="w-4 h-4 text-primary" /></button>
                      <button onClick={() => openEdit(student)} className="p-2 rounded-xl hover:bg-secondary/10 transition-colors"><Edit2 className="w-4 h-4 text-secondary" /></button>
                      <button onClick={() => handleDelete(student.id)} className="p-2 rounded-xl hover:bg-danger/10 transition-colors"><Trash2 className="w-4 h-4 text-danger" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AnimatePresence>
        {selectedStudent && !showEditModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setSelectedStudent(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Student Details</h3><button onClick={() => setSelectedStudent(null)} className="p-2 rounded-xl hover:bg-primary/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow"><span className="text-white font-bold">{selectedStudent.name.split(' ').map(n => n[0]).join('')}</span></div>
                <div><p className="text-sm font-bold text-text dark:text-white">{selectedStudent.name}</p><span className={cn('px-2 py-0.5 rounded-full text-xs font-bold', selectedStudent.status === 'active' ? 'bg-success/20 text-success' : 'bg-gray-100 dark:bg-dark-surface text-text-muted')}>{selectedStudent.status}</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Mail className="w-4 h-4 text-primary" />{selectedStudent.email}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><Phone className="w-4 h-4 text-secondary" />{selectedStudent.phone}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><GraduationCap className="w-4 h-4 text-success" />{selectedStudent.grade}</div>
                <div className="flex items-center gap-2 text-sm text-text-secondary"><School className="w-4 h-4 text-warning" />{selectedStudent.school}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAddModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setShowAddModal(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Add Student</h3><button onClick={() => setShowAddModal(false)} className="p-2 rounded-xl hover:bg-primary/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <form onSubmit={handleAdd} className="space-y-4">
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Grade</label><select value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary"><option>9th</option><option>10th</option><option>11th</option><option>12th</option></select></div>
                  <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Status</label><select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary"><option value="active">Active</option><option value="inactive">Inactive</option></select></div>
                </div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">School</label><input type="text" value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-glow hover:scale-[1.02] transition-all">Add Student</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showEditModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" onClick={() => setShowEditModal(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-dark-card rounded-3xl border border-border/50 shadow-soft-lg w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold text-text dark:text-white">Edit Student</h3><button onClick={() => setShowEditModal(false)} className="p-2 rounded-xl hover:bg-primary/10 transition-colors"><X className="w-5 h-5" /></button></div>
              <form onSubmit={handleEdit} className="space-y-4">
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Grade</label><select value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary"><option>9th</option><option>10th</option><option>11th</option><option>12th</option></select></div>
                  <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Status</label><select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary"><option value="active">Active</option><option value="inactive">Inactive</option></select></div>
                </div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">School</label><input type="text" value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white focus:outline-none focus:border-primary" /></div>
                <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-glow hover:scale-[1.02] transition-all">Save Changes</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
