import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, Mail, Phone, Clock, CheckCircle, HelpCircle, Zap, Heart, BookOpen, Sparkles } from 'lucide-react';
import { faqs, helpTopics } from '../../data/dummyData';
import { Lightbulb } from '../../components/illustrations/IllustrationLibrary';
import { cn } from '../../lib/utils';

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter((f) => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setContactForm({ name: '', email: '', subject: '', message: '' }); }, 3000);
  };

  const topicIcons = {
    'Getting Started': Sparkles,
    'Booking Sessions': BookOpen,
    'Payments & Billing': Zap,
    'Technical Issues': HelpCircle,
    'Account Settings': MessageCircle,
    'Contact Us': Heart,
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-success via-primary to-secondary p-6 text-white shadow-glow">
        <div className="absolute top-4 right-4 opacity-20"><Lightbulb className="w-24 h-24" /></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Help Center</h1>
          <p className="text-white/80">We are here to help you succeed!</p>
        </div>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search help articles..." className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {helpTopics.map((topic, index) => {
          const Icon = topicIcons[topic.title] || MessageCircle;
          return (
            <motion.div key={topic.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-white dark:bg-dark-card rounded-3xl p-5 border border-border/50 hover:shadow-card-hover cursor-pointer transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 shadow-glow">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-text dark:text-white mb-1">{topic.title}</h3>
              <p className="text-xs text-text-muted">{topic.description}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-3xl p-6 border border-border/50">
          <h3 className="text-lg font-bold text-text dark:text-white mb-4">FAQ</h3>
          <div className="space-y-2">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border-2 border-primary/10 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/5 transition-colors">
                  <span className="text-sm font-bold text-text dark:text-white">{faq.question}</span>
                  <ChevronDown className={cn('w-4 h-4 text-primary transition-transform', openFaq === index && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-4 pb-3 text-sm text-text-secondary dark:text-text-muted leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-3xl p-6 border border-border/50">
          <h3 className="text-lg font-bold text-text dark:text-white mb-4">Contact Us</h3>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-success to-primary flex items-center justify-center mx-auto mb-4 shadow-glow"><CheckCircle className="w-10 h-10 text-white" /></div>
              <h4 className="text-xl font-bold text-text dark:text-white mb-2">Message Sent!</h4>
              <p className="text-sm text-text-muted">We will get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1.5">Name</label><input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary" /></div>
                <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1.5">Email</label><input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="Your email" className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary" /></div>
              </div>
              <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1.5">Subject</label><input type="text" required value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} placeholder="How can we help?" className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary" /></div>
              <div><label className="block text-sm font-bold text-text dark:text-text-secondary mb-1.5">Message</label><textarea rows={4} required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Tell us more..." className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-dark-surface border-2 border-primary/20 text-text dark:text-white placeholder:text-text-muted focus:outline-none focus:border-primary resize-none" /></div>
              <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-glow hover:scale-[1.02] transition-all">Send Message</button>
            </form>
          )}
          <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
            <div className="flex items-center gap-3 text-sm text-text-secondary"><Mail className="w-4 h-4 text-primary" />support@teenease.com</div>
            <div className="flex items-center gap-3 text-sm text-text-secondary"><Phone className="w-4 h-4 text-secondary" />+91 1800 123 4567</div>
            <div className="flex items-center gap-3 text-sm text-text-secondary"><Clock className="w-4 h-4 text-success" />Mon - Sat, 9AM - 6PM IST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
