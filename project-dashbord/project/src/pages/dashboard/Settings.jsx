import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Lock, Globe, Moon, Sun, Shield, Save, CheckCircle, Eye, EyeOff, ChevronRight, Monitor, Mail, Smartphone, Key, User, CreditCard, HelpCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../lib/utils';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [generalSettings, setGeneralSettings] = useState({
    language: 'English',
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD/MM/YYYY',
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'general', name: 'General', icon: Globe, desc: 'Basic preferences' },
    { id: 'notifications', name: 'Notifications', icon: Bell, desc: 'Alert preferences' },
    { id: 'security', name: 'Security', icon: Shield, desc: 'Password & 2FA' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-6 lg:p-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-white/80">Manage your account preferences and configurations.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-dark-card rounded-2xl border border-border/50 overflow-hidden">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'w-full flex items-center gap-3 p-4 text-left border-l-2 transition-all',
                    isActive
                      ? 'bg-primary/5 border-l-primary'
                      : 'border-l-transparent hover:bg-gray-50 dark:hover:bg-dark-surface'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center',
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-surface text-text-muted'
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      'text-sm font-medium truncate',
                      isActive ? 'text-text' : 'text-text-muted'
                    )}>
                      {tab.name}
                    </p>
                    <p className="text-xs text-text-muted truncate">{tab.desc}</p>
                  </div>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-primary" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="mt-4 bg-white dark:bg-dark-card rounded-2xl border border-border/50 p-4 space-y-1">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors text-left">
              <User className="w-5 h-5 text-text-muted" />
              <span className="text-sm text-text-secondary">Edit Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors text-left">
              <CreditCard className="w-5 h-5 text-text-muted" />
              <span className="text-sm text-text-secondary">Billing</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors text-left">
              <HelpCircle className="w-5 h-5 text-text-muted" />
              <span className="text-sm text-text-secondary">Help Center</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-dark-card rounded-2xl border border-border/50 overflow-hidden"
            >
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="divide-y divide-border/50">
                  {/* Appearance */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-1">Appearance</h3>
                    <p className="text-sm text-text-muted mb-4">Customize how the app looks</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {theme === 'dark' ? <Moon className="w-5 h-5 text-text-muted" /> : <Sun className="w-5 h-5 text-warning" />}
                        <div>
                          <p className="text-sm font-medium text-text">Theme</p>
                          <p className="text-xs text-text-muted">Select your preferred theme</p>
                        </div>
                      </div>
                      <div className="flex rounded-xl overflow-hidden border border-border/50">
                        <button
                          onClick={() => theme === 'dark' && toggleTheme()}
                          className={cn(
                            'px-4 py-2.5 text-sm font-medium flex items-center gap-2 transition-colors',
                            theme === 'light' ? 'bg-primary text-white' : 'bg-white dark:bg-dark-surface text-text-muted hover:bg-gray-50'
                          )}
                        >
                          <Sun className="w-4 h-4" />
                          Light
                        </button>
                        <button
                          onClick={() => theme === 'light' && toggleTheme()}
                          className={cn(
                            'px-4 py-2.5 text-sm font-medium flex items-center gap-2 transition-colors',
                            theme === 'dark' ? 'bg-primary text-white' : 'bg-white dark:bg-dark-surface text-text-muted hover:bg-gray-50'
                          )}
                        >
                          <Moon className="w-4 h-4" />
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Locale */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-text mb-1">Locale & Region</h3>
                    <p className="text-sm text-text-muted mb-4">Set your language and regional preferences</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Language</label>
                        <select
                          value={generalSettings.language}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, language: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Marathi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Timezone</label>
                        <select
                          value={generalSettings.timezone}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>Asia/Kolkata</option>
                          <option>Asia/Dubai</option>
                          <option>America/New_York</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Date Format</label>
                        <select
                          value={generalSettings.dateFormat}
                          onChange={(e) => setGeneralSettings({ ...generalSettings, dateFormat: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>DD/MM/YYYY</option>
                          <option>MM/DD/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-1">Notification Preferences</h3>
                  <p className="text-sm text-text-muted mb-6">Manage how you receive notifications</p>

                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email', icon: Mail },
                      { key: 'pushNotifications', label: 'Push Notifications', desc: 'Real-time browser notifications', icon: Bell },
                      { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Text message alerts', icon: Smartphone },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.key} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-text">{item.label}</p>
                              <p className="text-xs text-text-muted">{item.desc}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setGeneralSettings({ ...generalSettings, [item.key]: !generalSettings[item.key] })}
                            className={cn(
                              'relative w-12 h-7 rounded-full transition-colors',
                              generalSettings[item.key] ? 'bg-primary' : 'bg-gray-200 dark:bg-dark-border'
                            )}
                          >
                            <span className={cn(
                              'absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-all',
                              generalSettings[item.key] ? 'left-[22px]' : 'left-0.5'
                            )} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="divide-y divide-border/50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-1">Change Password</h3>
                    <p className="text-sm text-text-muted mb-6">Update your password regularly for better security</p>

                    <div className="space-y-4 max-w-md">
                      {[
                        { label: 'Current Password', value: passwordData.currentPassword, set: (v) => setPasswordData({ ...passwordData, currentPassword: v }), show: showCurrentPassword, setShow: setShowCurrentPassword },
                        { label: 'New Password', value: passwordData.newPassword, set: (v) => setPasswordData({ ...passwordData, newPassword: v }), show: showNewPassword, setShow: setShowNewPassword },
                        { label: 'Confirm New Password', value: passwordData.confirmPassword, set: (v) => setPasswordData({ ...passwordData, confirmPassword: v }), show: showConfirmPassword, setShow: setShowConfirmPassword },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-sm font-medium text-text mb-2">{field.label}</label>
                          <div className="relative">
                            <input
                              type={field.show ? 'text' : 'password'}
                              value={field.value}
                              onChange={(e) => field.set(e.target.value)}
                              placeholder={`Enter ${field.label.toLowerCase()}`}
                              className="w-full px-4 py-2.5 pr-10 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border dark:border-dark-border text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                              type="button"
                              onClick={() => field.setShow(!field.show)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
                            >
                              {field.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      ))}

                      <button className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-1">Two-Factor Authentication</h3>
                    <p className="text-sm text-text-muted mb-4">Add an extra layer of security to your account</p>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-surface border border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Key className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text">Enable 2FA</p>
                          <p className="text-xs text-text-muted">Use an authenticator app for verification</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-border/50 bg-gray-50/50 dark:bg-dark-surface/50">
                {saved && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-sm text-success font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Saved successfully
                  </motion.span>
                )}
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-secondary transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
