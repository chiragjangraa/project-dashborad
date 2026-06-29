import React from 'react';

// ======================================
// Modern, colorful, high-quality illustrations
// ======================================

export const GradientBlob = ({ className = "", color = "blue" }) => {
  const colors = {
    blue: 'bg-blue-400/30',
    purple: 'bg-purple-400/30',
    pink: 'bg-pink-400/30',
    mint: 'bg-teal-400/30',
    yellow: 'bg-yellow-400/30',
    coral: 'bg-red-400/30',
    orange: 'bg-orange-400/30',
  };
  return <div className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none ${colors[color] || colors.blue} ${className}`} />;
};

// ======================================
// HERO ILLUSTRATIONS - Large, detailed
// ======================================

export const HeroStudents = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background decorations */}
    <circle cx="300" cy="200" r="180" fill="url(#heroGrad)" opacity="0.15" />
    <circle cx="100" cy="80" r="40" fill="#FCD34D" opacity="0.3" />
    <circle cx="520" cy="100" r="30" fill="#6EE7B7" opacity="0.3" />
    <circle cx="50" cy="320" r="50" fill="#93C5FD" opacity="0.2" />
    <circle cx="550" cy="350" r="35" fill="#F9A8D4" opacity="0.2" />
    
    {/* Desk / Table */}
    <rect x="80" y="280" width="440" height="20" rx="8" fill="#E5E7EB" />
    <rect x="100" y="300" width="12" height="80" rx="4" fill="#D1D5DB" />
    <rect x="488" y="300" width="12" height="80" rx="4" fill="#D1D5DB" />
    
    {/* Laptop */}
    <rect x="220" y="225" width="160" height="100" rx="8" fill="#1E293B" />
    <rect x="230" y="235" width="140" height="80" rx="4" fill="#3B82F6" opacity="0.8" />
    <rect x="240" y="245" width="60" height="4" rx="2" fill="white" opacity="0.6" />
    <rect x="240" y="255" width="40" height="4" rx="2" fill="white" opacity="0.4" />
    <rect x="240" y="265" width="80" height="4" rx="2" fill="white" opacity="0.5" />
    <rect x="200" y="325" width="200" height="12" rx="4" fill="#374151" />
    <circle cx="300" cy="265" r="20" fill="#FBBF24" opacity="0.8" />
    <path d="M290 265 L298 273 L312 258" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Books on table */}
    <rect x="120" y="250" width="50" height="30" rx="4" fill="#EF4444" />
    <rect x="120" y="255" width="50" height="5" rx="2" fill="#B91C1C" opacity="0.3" />
    <rect x="125" y="220" width="45" height="30" rx="4" fill="#3B82F6" />
    <rect x="125" y="225" width="45" height="5" rx="2" fill="#1D4ED8" opacity="0.3" />
    <rect x="430" y="255" width="55" height="25" rx="4" fill="#10B981" />
    <rect x="430" y="260" width="55" height="5" rx="2" fill="#047857" opacity="0.3" />
    
    {/* Coffee mug */}
    <rect x="410" y="240" width="24" height="30" rx="4" fill="#FEF3C7" />
    <path d="M434 248 Q446 248 446 258 Q446 268 434 268" stroke="#FEF3C7" strokeWidth="3" fill="none" />
    <circle cx="410" cy="230" r="3" fill="#9CA3AF" opacity="0.5" />
    <circle cx="416" cy="225" r="4" fill="#9CA3AF" opacity="0.4" />
    
    {/* Student 1 - Left */}
    <circle cx="160" cy="180" r="35" fill="#FDBA74" /> {/* head */}
    <circle cx="150" cy="170" r="4" fill="#1E293B" /> {/* eye */}
    <circle cx="170" cy="170" r="4" fill="#1E293B" /> {/* eye */}
    <path d="M152 188 Q160 195 168 188" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" /> {/* smile */}
    <rect x="135" y="120" width="50" height="40" rx="20" fill="#1E293B" /> {/* hair */}
    <rect x="125" y="210" width="70" height="70" rx="12" fill="#60A5FA" /> {/* body */}
    <rect x="140" y="270" width="20" height="10" rx="5" fill="#1E293B" /> {/* collar */}
    
    {/* Student 2 - Center (behind laptop) */}
    <circle cx="300" cy="160" r="38" fill="#FDBA74" />
    <circle cx="288" cy="150" r="4" fill="#1E293B" />
    <circle cx="312" cy="150" r="4" fill="#1E293B" />
    <path d="M290 168 Q300 176 310 168" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="270" y="105" width="60" height="45" rx="25" fill="#7C3AED" /> {/* hair */}
    <rect x="260" y="190" width="80" height="90" rx="15" fill="#A78BFA" /> {/* body */}
    <rect x="285" y="260" width="30" height="20" rx="5" fill="white" opacity="0.3" /> {/* shirt detail */}
    
    {/* Student 3 - Right */}
    <circle cx="440" cy="175" r="33" fill="#FDBA74" />
    <circle cx="430" cy="165" r="4" fill="#1E293B" />
    <circle cx="450" cy="165" r="4" fill="#1E293B" />
    <path d="M432 183 Q440 190 448 183" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="415" y="120" width="55" height="40" rx="20" fill="#92400E" /> {/* hair */}
    <rect x="405" y="205" width="70" height="75" rx="12" fill="#F472B6" /> {/* body */}
    <rect x="425" y="255" width="30" height="25" rx="8" fill="#FDE68A" opacity="0.4" /> {/* pocket */}
    
    {/* Floating elements */}
    <circle cx="80" cy="150" r="15" fill="#FCD34D" opacity="0.8" />
    <text x="75" y="156" fontSize="14" fontWeight="bold" fill="#92400E">A+</text>
    <circle cx="520" cy="200" r="18" fill="#6EE7B7" opacity="0.8" />
    <text x="512" y="206" fontSize="14" fontWeight="bold" fill="#065F46">100</text>
    <circle cx="60" cy="250" r="12" fill="#93C5FD" opacity="0.8" />
    <circle cx="540" cy="280" r="14" fill="#F9A8D4" opacity="0.8" />
    
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#3B82F6" />
        <stop offset="0.5" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroCareer = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <circle cx="300" cy="200" r="170" fill="url(#careerGrad)" opacity="0.12" />
    
    {/* Path/road */}
    <path d="M100 340 Q300 320 500 340" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round" />
    <path d="M150 338 Q300 325 450 338" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10" />
    
    {/* Milestones on the path */}
    <circle cx="200" cy="332" r="8" fill="#3B82F6" />
    <circle cx="300" cy="328" r="8" fill="#8B5CF6" />
    <circle cx="400" cy="332" r="8" fill="#EC4899" />
    <circle cx="480" cy="338" r="10" fill="#FCD34D" />
    <path d="M475 333 L480 338 L487 331" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Student at center, looking up */}
    <circle cx="300" cy="230" r="45" fill="#FDBA74" />
    <circle cx="285" cy="215" r="5" fill="#1E293B" />
    <circle cx="315" cy="215" r="5" fill="#1E293B" />
    <path d="M285 240 Q300 255 315 240" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="270" y="160" width="60" height="50" rx="28" fill="#4B5563" /> {/* hair */}
    <rect x="255" y="270" width="90" height="60" rx="15" fill="#3B82F6" /> {/* body */}
    <rect x="285" y="300" width="30" height="25" rx="8" fill="#FDE68A" opacity="0.4" /> {/* pocket */}
    <circle cx="255" cy="300" r="8" fill="#FDBA74" /> {/* hand */}
    <circle cx="345" cy="300" r="8" fill="#FDBA74" /> {/* hand */}
    
    {/* Career icons floating above */}
    {/* Doctor icon */}
    <circle cx="180" cy="100" r="30" fill="#FEE2E2" />
    <rect x="165" y="85" width="30" height="20" rx="4" fill="#EF4444" />
    <rect x="176" y="78" width="8" height="12" rx="2" fill="white" />
    <rect x="172" y="82" width="16" height="4" rx="2" fill="white" />
    <circle cx="180" cy="105" r="12" fill="#FDBA74" />
    <text x="165" y="145" fontSize="11" fontWeight="bold" fill="#991B1B">Doctor</text>
    
    {/* Engineer icon */}
    <circle cx="260" cy="60" r="30" fill="#DBEAFE" />
    <rect x="245" y="45" width="30" height="20" rx="3" fill="#3B82F6" />
    <circle cx="252" cy="52" r="3" fill="white" />
    <circle cx="268" cy="52" r="3" fill="white" />
    <path d="M250 65 L260 55 L270 65" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="260" cy="65" r="12" fill="#FDBA74" />
    <text x="240" y="105" fontSize="11" fontWeight="bold" fill="#1E3A8A">Engineer</text>
    
    {/* Designer icon */}
    <circle cx="340" cy="60" r="30" fill="#FCE7F3" />
    <rect x="325" y="48" width="30" height="18" rx="3" fill="#EC4899" />
    <circle cx="335" cy="55" r="4" fill="#FDE68A" />
    <circle cx="345" cy="58" r="3" fill="#6EE7B7" />
    <circle cx="340" cy="65" r="12" fill="#FDBA74" />
    <text x="320" y="105" fontSize="11" fontWeight="bold" fill="#831843">Designer</text>
    
    {/* Developer icon */}
    <circle cx="420" cy="100" r="30" fill="#D1FAE5" />
    <rect x="405" y="45" width="30" height="20" rx="3" fill="#10B981" />
    <text x="408" y="58" fontSize="10" fontWeight="bold" fill="white">{`</>`}</text>
    <circle cx="420" cy="105" r="12" fill="#FDBA74" />
    <text x="400" y="145" fontSize="11" fontWeight="bold" fill="#065F46">Developer</text>
    
    {/* Teacher icon */}
    <circle cx="130" cy="180" r="30" fill="#FEF3C7" />
    <path d="M115 165 L145 165 L130 150 Z" fill="#F59E0B" />
    <rect x="115" y="165" width="30" height="15" rx="3" fill="#FCD34D" />
    <circle cx="130" cy="185" r="12" fill="#FDBA74" />
    <text x="115" y="225" fontSize="11" fontWeight="bold" fill="#92400E">Teacher</text>
    
    {/* Business icon */}
    <circle cx="470" cy="180" r="30" fill="#E0E7FF" />
    <rect x="455" y="160" width="30" height="22" rx="3" fill="#6366F1" />
    <rect x="460" y="165" width="20" height="3" rx="1" fill="white" />
    <rect x="460" y="172" width="15" height="3" rx="1" fill="white" />
    <circle cx="470" cy="185" r="12" fill="#FDBA74" />
    <text x="455" y="225" fontSize="11" fontWeight="bold" fill="#3730A3">Business</text>
    
    {/* Connecting lines from student to careers */}
    <path d="M275 220 Q200 180 180 130" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" fill="none" />
    <path d="M290 210 Q260 150 260 90" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" fill="none" />
    <path d="M310 210 Q340 150 340 90" stroke="#EC4899" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" fill="none" />
    <path d="M325 220 Q400 180 420 130" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" fill="none" />
    
    {/* Floating stars */}
    <path d="M80 80 L83 88 L91 88 L85 93 L87 101 L80 96 L73 101 L75 93 L69 88 L77 88 Z" fill="#FCD34D" opacity="0.6" />
    <path d="M520 60 L522 66 L528 66 L523 70 L525 76 L520 72 L515 76 L517 70 L512 66 L518 66 Z" fill="#FCD34D" opacity="0.6" />
    <path d="M550 140 L552 146 L558 146 L553 150 L555 156 L550 152 L545 156 L547 150 L542 146 L548 146 Z" fill="#FCD34D" opacity="0.6" />
    
    <defs>
      <linearGradient id="careerGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#3B82F6" />
        <stop offset="0.5" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroOnlineLearning = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <circle cx="300" cy="200" r="160" fill="url(#onlineGrad)" opacity="0.12" />
    
    {/* Large screen/monitor */}
    <rect x="150" y="80" width="300" height="200" rx="16" fill="#1E293B" />
    <rect x="165" y="95" width="270" height="170" rx="10" fill="url(#screenGrad)" />
    
    {/* Screen content - video call */}
    {/* Main video (teacher) */}
    <rect x="180" y="110" width="140" height="100" rx="8" fill="#3B82F6" opacity="0.7" />
    <circle cx="250" cy="150" r="25" fill="#FDBA74" />
    <circle cx="242" cy="142" r="3" fill="#1E293B" />
    <circle cx="258" cy="142" r="3" fill="#1E293B" />
    <path d="M243 158 Q250 164 257 158" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="225" y="120" width="50" height="20" rx="10" fill="#374151" />
    <text x="230" y="133" fontSize="8" fill="white" fontWeight="bold">Teacher</text>
    
    {/* Side videos (students) */}
    <rect x="330" y="110" width="90" height="60" rx="8" fill="#10B981" opacity="0.6" />
    <circle cx="375" cy="140" r="18" fill="#FDBA74" />
    <circle cx="370" cy="135" r="2" fill="#1E293B" />
    <circle cx="380" cy="135" r="2" fill="#1E293B" />
    <rect x="340" y="120" width="40" height="14" rx="7" fill="#374151" opacity="0.7" />
    <text x="345" y="130" fontSize="7" fill="white" fontWeight="bold">Student 1</text>
    
    <rect x="330" y="180" width="90" height="60" rx="8" fill="#F59E0B" opacity="0.6" />
    <circle cx="375" cy="210" r="18" fill="#FDBA74" />
    <circle cx="370" cy="205" r="2" fill="#1E293B" />
    <circle cx="380" cy="205" r="2" fill="#1E293B" />
    <rect x="340" y="190" width="40" height="14" rx="7" fill="#374151" opacity="0.7" />
    <text x="345" y="200" fontSize="7" fill="white" fontWeight="bold">Student 2</text>
    
    {/* Chat sidebar */}
    <rect x="180" y="220" width="140" height="30" rx="6" fill="white" opacity="0.15" />
    <rect x="190" y="228" width="80" height="6" rx="3" fill="white" opacity="0.3" />
    <rect x="190" y="238" width="60" height="4" rx="2" fill="white" opacity="0.2" />
    
    {/* Screen bottom bar */}
    <rect x="180" y="260" width="240" height="20" rx="6" fill="white" opacity="0.1" />
    <circle cx="230" cy="270" r="6" fill="#EF4444" opacity="0.6" />
    <circle cx="260" cy="270" r="6" fill="#6B7280" opacity="0.5" />
    <circle cx="290" cy="270" r="6" fill="#6B7280" opacity="0.5" />
    <circle cx="320" cy="270" r="6" fill="#6B7280" opacity="0.5" />
    <circle cx="350" cy="270" r="6" fill="#EF4444" opacity="0.6" />
    
    {/* Monitor stand */}
    <rect x="270" y="280" width="60" height="20" rx="4" fill="#374151" />
    <rect x="250" y="300" width="100" height="12" rx="4" fill="#4B5563" />
    
    {/* Student at desk - foreground left */}
    <circle cx="120" cy="280" r="40" fill="#FDBA74" />
    <circle cx="108" cy="268" r="5" fill="#1E293B" />
    <circle cx="132" cy="268" r="5" fill="#1E293B" />
    <path d="M110 290 Q120 298 130 290" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="105" y="245" width="45" height="30" rx="15" fill="#4B5563" />
    <rect x="80" y="315" width="80" height="60" rx="15" fill="#8B5CF6" />
    <circle cx="80" cy="340" r="10" fill="#FDBA74" />
    <circle cx="160" cy="340" r="10" fill="#FDBA74" />
    
    {/* Student at desk - foreground right */}
    <circle cx="480" cy="280" r="40" fill="#FDBA74" />
    <circle cx="468" cy="268" r="5" fill="#1E293B" />
    <circle cx="492" cy="268" r="5" fill="#1E293B" />
    <path d="M470 290 Q480 298 490 290" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="465" y="245" width="45" height="30" rx="15" fill="#92400E" />
    <rect x="440" y="315" width="80" height="60" rx="15" fill="#EC4899" />
    <circle cx="440" cy="340" r="10" fill="#FDBA74" />
    <circle cx="520" cy="340" r="10" fill="#FDBA74" />
    
    {/* Floating elements */}
    <circle cx="80" cy="120" r="20" fill="#FCD34D" opacity="0.6" />
    <text x="70" y="127" fontSize="14" fontWeight="bold" fill="#92400E">Live</text>
    <circle cx="520" cy="120" r="18" fill="#6EE7B7" opacity="0.6" />
    <text x="512" y="127" fontSize="12" fontWeight="bold" fill="#065F46">HD</text>
    <circle cx="60" cy="200" r="12" fill="#93C5FD" opacity="0.6" />
    <circle cx="540" cy="200" r="14" fill="#F9A8D4" opacity="0.6" />
    
    <defs>
      <linearGradient id="onlineGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#3B82F6" />
        <stop offset="0.5" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="165" y1="95" x2="435" y2="265">
        <stop stopColor="#1E40AF" />
        <stop offset="1" stopColor="#312E81" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroMentorship = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="160" fill="url(#mentorGrad)" opacity="0.12" />
    
    {/* Mentor figure - adult */}
    <circle cx="220" cy="150" r="35" fill="#FDBA74" />
    <circle cx="210" cy="142" r="4" fill="#1E293B" />
    <circle cx="230" cy="142" r="4" fill="#1E293B" />
    <path d="M212 158 Q220 165 228 158" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <rect x="200" y="115" width="40" height="25" rx="12" fill="#374151" />
    <rect x="185" y="185" width="70" height="70" rx="12" fill="#4B5563" />
    <rect x="205" y="240" width="30" height="15" rx="7" fill="white" opacity="0.2" />
    
    {/* Student figure - teen */}
    <circle cx="380" cy="180" r="30" fill="#FDBA74" />
    <circle cx="372" cy="173" r="3.5" fill="#1E293B" />
    <circle cx="388" cy="173" r="3.5" fill="#1E293B" />
    <path d="M374 188 Q380 193 386 188" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="365" y="150" width="35" height="20" rx="10" fill="#8B5CF6" />
    <rect x="355" y="210" width="50" height="55" rx="10" fill="#3B82F6" />
    
    {/* Connection arrow between them */}
    <path d="M260 180 Q300 160 340 180" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" fill="none" />
    <path d="M330 170 L340 180 L330 190" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    
    {/* Lightbulb above connection */}
    <ellipse cx="300" cy="120" rx="20" ry="25" fill="url(#bulbGrad)" />
    <rect x="290" y="140" width="20" height="8" rx="3" fill="#F59E0B" />
    <rect x="293" y="146" width="14" height="5" rx="2" fill="#D97706" />
    <path d="M285 100 Q280 95 285 90" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
    <path d="M315 100 Q320 95 315 90" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
    <path d="M275 110 Q270 105 275 100" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
    <path d="M325 110 Q330 105 325 100" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
    
    {/* Speech bubbles */}
    <rect x="80" y="100" width="100" height="50" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M150 150 L160 165 L170 150" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="95" y="115" width="70" height="6" rx="3" fill="#E5E7EB" />
    <rect x="95" y="128" width="50" height="6" rx="3" fill="#E5E7EB" />
    
    <rect x="420" y="130" width="100" height="50" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M430 180 L420 195 L450 180" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="435" y="145" width="70" height="6" rx="3" fill="#E5E7EB" />
    <rect x="435" y="158" width="50" height="6" rx="3" fill="#E5E7EB" />
    
    {/* Books and plants decoration */}
    <rect x="100" y="260" width="40" height="30" rx="4" fill="#EF4444" opacity="0.8" />
    <rect x="100" y="265" width="40" height="5" rx="2" fill="#B91C1C" opacity="0.3" />
    <rect x="105" y="235" width="35" height="25" rx="4" fill="#3B82F6" opacity="0.8" />
    
    <rect x="460" y="250" width="40" height="35" rx="4" fill="#10B981" opacity="0.8" />
    <rect x="465" y="240" width="8" height="15" rx="4" fill="#047857" opacity="0.5" />
    <rect x="475" y="235" width="8" height="20" rx="4" fill="#059669" opacity="0.5" />
    <rect x="485" y="245" width="8" height="10" rx="4" fill="#10B981" opacity="0.5" />
    
    {/* Stars */}
    <path d="M70 70 L73 78 L81 78 L75 83 L77 91 L70 86 L63 91 L65 83 L59 78 L67 78 Z" fill="#FCD34D" opacity="0.7" />
    <path d="M530 60 L533 68 L541 68 L535 73 L537 81 L530 76 L523 81 L525 73 L519 68 L527 68 Z" fill="#FCD34D" opacity="0.7" />
    
    <defs>
      <linearGradient id="mentorGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="bulbGrad" x1="280" y1="95" x2="320" y2="145">
        <stop stopColor="#FCD34D" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroSuccess = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="170" fill="url(#successGrad)" opacity="0.12" />
    
    {/* Trophy center */}
    <path d="M260 140 L340 140 L330 220 L310 240 L290 240 L270 220 Z" fill="url(#trophyGrad)" />
    <path d="M250 140 L250 125 L270 125" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M350 140 L350 125 L330 125" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
    <rect x="285" y="240" width="30" height="15" rx="5" fill="#F59E0B" />
    <path d="M280 255 L320 255 L310 280 L290 280 Z" fill="#F59E0B" />
    <circle cx="300" cy="190" r="15" fill="#FCD34D" opacity="0.5" />
    <path d="M292 190 L298 196 L310 184" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Celebrating students */}
    {/* Left student */}
    <circle cx="150" cy="240" r="35" fill="#FDBA74" />
    <circle cx="140" cy="230" r="4" fill="#1E293B" />
    <circle cx="160" cy="230" r="4" fill="#1E293B" />
    <path d="M142 248 Q150 255 158 248" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="135" y="210" width="40" height="22" rx="10" fill="#4B5563" />
    <rect x="125" y="270" width="50" height="55" rx="10" fill="#3B82F6" />
    <circle cx="120" cy="290" r="10" fill="#FDBA74" />
    <path d="M120 290 L100 260" stroke="#FDBA74" strokeWidth="8" strokeLinecap="round" />
    
    {/* Right student */}
    <circle cx="450" cy="240" r="35" fill="#FDBA74" />
    <circle cx="440" cy="230" r="4" fill="#1E293B" />
    <circle cx="460" cy="230" r="4" fill="#1E293B" />
    <path d="M442 248 Q450 255 458 248" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="435" y="210" width="40" height="22" rx="10" fill="#92400E" />
    <rect x="425" y="270" width="50" height="55" rx="10" fill="#EC4899" />
    <circle cx="480" cy="290" r="10" fill="#FDBA74" />
    <path d="M480 290 L500 260" stroke="#FDBA74" strokeWidth="8" strokeLinecap="round" />
    
    {/* Confetti */}
    <rect x="100" y="120" width="8" height="15" rx="2" fill="#3B82F6" transform="rotate(15 104 127)" />
    <rect x="180" y="80" width="8" height="15" rx="2" fill="#EC4899" transform="rotate(-20 184 87)" />
    <rect x="400" y="90" width="8" height="15" rx="2" fill="#10B981" transform="rotate(30 404 97)" />
    <rect x="480" y="120" width="8" height="15" rx="2" fill="#F59E0B" transform="rotate(-10 484 127)" />
    <rect x="120" y="180" width="8" height="15" rx="2" fill="#8B5CF6" transform="rotate(45 124 187)" />
    <rect x="460" y="170" width="8" height="15" rx="2" fill="#EF4444" transform="rotate(-35 464 177)" />
    
    <circle cx="90" cy="100" r="6" fill="#3B82F6" opacity="0.6" />
    <circle cx="520" cy="95" r="5" fill="#EC4899" opacity="0.6" />
    <circle cx="140" y="70" r="7" fill="#FCD34D" opacity="0.6" />
    <circle cx="450" cy="70" r="6" fill="#10B981" opacity="0.6" />
    <circle cx="80" cy="160" r="5" fill="#8B5CF6" opacity="0.6" />
    <circle cx="520" cy="160" r="7" fill="#F59E0B" opacity="0.6" />
    
    {/* Star sparkles */}
    <path d="M70 80 L73 88 L81 88 L75 93 L77 101 L70 96 L63 101 L65 93 L59 88 L67 88 Z" fill="#FCD34D" opacity="0.8" />
    <path d="M530 75 L533 83 L541 83 L535 88 L537 96 L530 91 L523 96 L525 88 L519 83 L527 83 Z" fill="#FCD34D" opacity="0.8" />
    
    <defs>
      <linearGradient id="successGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#F59E0B" />
        <stop offset="0.5" stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="trophyGrad" x1="260" y1="140" x2="340" y2="240">
        <stop stopColor="#FCD34D" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroRelaxation = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="160" fill="url(#relaxGrad)" opacity="0.12" />
    
    {/* Student meditating */}
    <circle cx="300" cy="180" r="30" fill="#FDBA74" />
    <circle cx="290" cy="172" r="3" fill="#1E293B" />
    <circle cx="310" cy="172" r="3" fill="#1E293B" />
    <path d="M292 185 Q300 190 308 185" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="285" y="150" width="35" height="22" rx="10" fill="#4B5563" />
    
    {/* Body in lotus position */}
    <ellipse cx="300" cy="250" rx="45" ry="25" fill="#6EE7B7" />
    <ellipse cx="300" cy="240" rx="30" ry="18" fill="#34D399" />
    <rect x="280" y="215" width="40" height="30" rx="15" fill="#10B981" />
    
    {/* Legs crossed */}
    <ellipse cx="255" cy="260" rx="20" ry="12" fill="#059669" />
    <ellipse cx="345" cy="260" rx="20" ry="12" fill="#059669" />
    
    {/* Hands in meditation position */}
    <circle cx="275" cy="225" r="8" fill="#FDBA74" />
    <circle cx="325" cy="225" r="8" fill="#FDBA74" />
    
    {/* Zen aura */}
    <circle cx="300" cy="200" r="50" stroke="#6EE7B7" strokeWidth="2" opacity="0.3" fill="none" />
    <circle cx="300" cy="200" r="65" stroke="#6EE7B7" strokeWidth="1" opacity="0.2" fill="none" />
    <circle cx="300" cy="200" r="80" stroke="#6EE7B7" strokeWidth="1" opacity="0.1" fill="none" />
    
    {/* Floating zen elements */}
    <circle cx="200" cy="120" r="15" fill="#FCD34D" opacity="0.4" />
    <circle cx="200" cy="120" r="8" fill="#FCD34D" opacity="0.6" />
    <circle cx="400" cy="120" r="15" fill="#FCD34D" opacity="0.4" />
    <circle cx="400" cy="120" r="8" fill="#FCD34D" opacity="0.6" />
    <circle cx="150" cy="200" r="12" fill="#93C5FD" opacity="0.4" />
    <circle cx="450" cy="200" r="12" fill="#93C5FD" opacity="0.4" />
    <circle cx="180" cy="280" r="10" fill="#F9A8D4" opacity="0.4" />
    <circle cx="420" cy="280" r="10" fill="#F9A8D4" opacity="0.4" />
    
    {/* Plants */}
    <rect x="80" y="280" width="20" height="40" rx="8" fill="#A16207" opacity="0.6" />
    <ellipse cx="90" cy="270" rx="25" ry="35" fill="#10B981" opacity="0.5" />
    <ellipse cx="75" cy="260" rx="15" ry="25" fill="#059669" opacity="0.4" />
    <ellipse cx="105" cy="260" rx="15" ry="25" fill="#34D399" opacity="0.4" />
    
    <rect x="500" y="280" width="20" height="40" rx="8" fill="#A16207" opacity="0.6" />
    <ellipse cx="510" cy="270" rx="25" ry="35" fill="#10B981" opacity="0.5" />
    <ellipse cx="495" cy="260" rx="15" ry="25" fill="#059669" opacity="0.4" />
    <ellipse cx="525" cy="260" rx="15" ry="25" fill="#34D399" opacity="0.4" />
    
    {/* Clouds */}
    <ellipse cx="120" cy="100" rx="40" ry="20" fill="white" opacity="0.4" />
    <ellipse cx="140" cy="95" rx="30" ry="15" fill="white" opacity="0.3" />
    <ellipse cx="480" cy="110" rx="45" ry="22" fill="white" opacity="0.4" />
    <ellipse cx="500" cy="105" rx="35" ry="18" fill="white" opacity="0.3" />
    
    <defs>
      <linearGradient id="relaxGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#6EE7B7" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroContact = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="160" fill="url(#contactGrad)" opacity="0.12" />
    
    {/* Support team member - center */}
    <circle cx="300" cy="160" r="45" fill="#FDBA74" />
    <circle cx="285" cy="148" r="5" fill="#1E293B" />
    <circle cx="315" cy="148" r="5" fill="#1E293B" />
    <path d="M288 165 Q300 175 312 165" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="275" y="120" width="55" height="30" rx="15" fill="#4B5563" />
    <rect x="260" y="200" width="80" height="65" rx="15" fill="#3B82F6" />
    <rect x="285" y="240" width="30" height="25" rx="8" fill="#FDE68A" opacity="0.4" />
    <circle cx="260" cy="230" r="10" fill="#FDBA74" />
    <circle cx="340" cy="230" r="10" fill="#FDBA74" />
    
    {/* Headset */}
    <path d="M255 145 Q255 110 300 105 Q345 110 345 145" stroke="#374151" strokeWidth="6" fill="none" strokeLinecap="round" />
    <rect x="245" y="140" width="20" height="25" rx="8" fill="#374151" />
    <rect x="335" y="140" width="20" height="25" rx="8" fill="#374151" />
    
    {/* Chat bubbles floating */}
    <rect x="100" y="100" width="120" height="60" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M180 160 L195 175 L200 160" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="120" y="118" width="80" height="8" rx="4" fill="#E5E7EB" />
    <rect x="120" y="134" width="60" height="8" rx="4" fill="#E5E7EB" />
    <circle cx="115" cy="115" r="8" fill="#3B82F6" />
    <text x="111" y="119" fontSize="8" fill="white" fontWeight="bold">?</text>
    
    <rect x="380" y="120" width="120" height="60" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M400 180 L385 195 L420 180" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="400" y="138" width="80" height="8" rx="4" fill="#E5E7EB" />
    <rect x="400" y="154" width="60" height="8" rx="4" fill="#E5E7EB" />
    <circle cx="485" cy="135" r="8" fill="#10B981" />
    <text x="480" y="139" fontSize="8" fill="white" fontWeight="bold">!</text>
    
    <rect x="120" y="260" width="110" height="50" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M150 310 L135 325 L170 310" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="140" y="276" width="70" height="8" rx="4" fill="#E5E7EB" />
    <rect x="140" y="290" width="50" height="8" rx="4" fill="#E5E7EB" />
    
    <rect x="370" y="250" width="110" height="50" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M430 300 L445 315 L450 300" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="390" y="266" width="70" height="8" rx="4" fill="#E5E7EB" />
    <rect x="390" y="280" width="50" height="8" rx="4" fill="#E5E7EB" />
    
    {/* Floating icons */}
    <circle cx="80" cy="200" r="18" fill="#FCD34D" opacity="0.5" />
    <circle cx="80" cy="200" r="10" fill="#FCD34D" opacity="0.7" />
    <circle cx="520" cy="200" r="18" fill="#6EE7B7" opacity="0.5" />
    <circle cx="520" cy="200" r="10" fill="#6EE7B7" opacity="0.7" />
    <circle cx="100" cy="320" r="15" fill="#93C5FD" opacity="0.5" />
    <circle cx="500" cy="320" r="15" fill="#F9A8D4" opacity="0.5" />
    
    <defs>
      <linearGradient id="contactGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeroStudySolo = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="160" fill="url(#studySoloGrad)" opacity="0.12" />
    
    {/* Desk */}
    <rect x="80" y="280" width="440" height="15" rx="7" fill="#E5E7EB" />
    <rect x="100" y="295" width="15" height="60" rx="4" fill="#D1D5DB" />
    <rect x="485" y="295" width="15" height="60" rx="4" fill="#D1D5DB" />
    
    {/* Student focused */}
    <circle cx="300" cy="200" r="40" fill="#FDBA74" />
    <circle cx="288" cy="190" r="5" fill="#1E293B" />
    <circle cx="312" cy="190" r="5" fill="#1E293B" />
    <path d="M290 208 Q300 215 310 208" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="280" y="160" width="45" height="25" rx="12" fill="#4B5563" />
    <rect x="260" y="235" width="80" height="55" rx="15" fill="#8B5CF6" />
    <circle cx="260" cy="260" r="10" fill="#FDBA74" />
    <circle cx="340" cy="260" r="10" fill="#FDBA74" />
    
    {/* Headphones */}
    <path d="M260 175 Q260 140 300 135 Q340 140 340 175" stroke="#374151" strokeWidth="5" fill="none" strokeLinecap="round" />
    <rect x="250" y="170" width="18" height="28" rx="8" fill="#374151" />
    <rect x="332" y="170" width="18" height="28" rx="8" fill="#374151" />
    
    {/* Laptop on desk */}
    <rect x="220" y="230" width="160" height="100" rx="8" fill="#1E293B" />
    <rect x="230" y="240" width="140" height="80" rx="4" fill="#3B82F6" opacity="0.7" />
    <rect x="240" y="250" width="60" height="4" rx="2" fill="white" opacity="0.5" />
    <rect x="240" y="260" width="40" height="4" rx="2" fill="white" opacity="0.3" />
    <rect x="240" y="270" width="80" height="4" rx="2" fill="white" opacity="0.4" />
    <rect x="200" y="330" width="200" height="12" rx="4" fill="#374151" />
    
    {/* Books on desk */}
    <rect x="120" y="250" width="50" height="30" rx="4" fill="#EF4444" />
    <rect x="120" y="255" width="50" height="5" rx="2" fill="#B91C1C" opacity="0.3" />
    <rect x="125" y="220" width="45" height="30" rx="4" fill="#3B82F6" />
    <rect x="125" y="225" width="45" height="5" rx="2" fill="#1D4ED8" opacity="0.3" />
    <rect x="430" y="255" width="55" height="25" rx="4" fill="#10B981" />
    <rect x="430" y="260" width="55" height="5" rx="2" fill="#047857" opacity="0.3" />
    
    {/* Coffee */}
    <rect x="410" y="240" width="24" height="30" rx="4" fill="#FEF3C7" />
    <path d="M434 248 Q446 248 446 258 Q446 268 434 268" stroke="#FEF3C7" strokeWidth="3" fill="none" />
    <circle cx="410" cy="230" r="3" fill="#9CA3AF" opacity="0.5" />
    <circle cx="416" cy="225" r="4" fill="#9CA3AF" opacity="0.4" />
    
    {/* Floating notes */}
    <circle cx="80" cy="150" r="20" fill="#FCD34D" opacity="0.5" />
    <text x="73" y="157" fontSize="14" fontWeight="bold" fill="#92400E">A+</text>
    <circle cx="520" cy="140" r="18" fill="#6EE7B7" opacity="0.5" />
    <text x="512" y="146" fontSize="12" fontWeight="bold" fill="#065F46">100</text>
    <circle cx="100" cy="320" r="12" fill="#93C5FD" opacity="0.4" />
    <circle cx="500" cy="310" r="14" fill="#F9A8D4" opacity="0.4" />
    
    <defs>
      <linearGradient id="studySoloGrad" x1="0" y1="0" x2="600" y2="400">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export const EmptyIllustration = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="150" r="100" fill="url(#emptyGrad)" opacity="0.15" />
    
    {/* Box */}
    <rect x="150" y="120" width="100" height="80" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="150" y="120" width="100" height="25" rx="12" fill="#F3F4F6" />
    <rect x="150" y="138" width="100" height="5" fill="#E5E7EB" />
    
    {/* Search icon */}
    <circle cx="200" cy="170" r="25" fill="#E5E7EB" opacity="0.5" />
    <circle cx="200" cy="170" r="15" stroke="#9CA3AF" strokeWidth="3" fill="none" />
    <path d="M210 180 L220 190" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
    
    {/* Floating question marks */}
    <text x="130" y="100" fontSize="24" fill="#E5E7EB" fontWeight="bold">?</text>
    <text x="270" y="110" fontSize="20" fill="#E5E7EB" fontWeight="bold">?</text>
    <text x="120" y="200" fontSize="18" fill="#E5E7EB" fontWeight="bold">?</text>
    <text x="280" y="210" fontSize="22" fill="#E5E7EB" fontWeight="bold">?</text>
    
    <defs>
      <linearGradient id="emptyGrad" x1="100" y1="50" x2="300" y2="250">
        <stop stopColor="#93C5FD" />
        <stop offset="1" stopColor="#C4B5FD" />
      </linearGradient>
    </defs>
  </svg>
);

export const StudyGirl = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="80" fill="url(#studyGrad1)" opacity="0.3" />
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="#E8F4FF" />
    <rect x="60" y="120" width="80" height="50" rx="8" fill="#4F8CFF" />
    <rect x="65" y="125" width="70" height="40" rx="5" fill="white" />
    <line x1="75" y1="135" x2="125" y2="135" stroke="#CBD5E1" strokeWidth="2" />
    <line x1="75" y1="145" x2="115" y2="145" stroke="#CBD5E1" strokeWidth="2" />
    <line x1="75" y1="155" x2="105" y2="155" stroke="#CBD5E1" strokeWidth="2" />
    <circle cx="100" cy="85" r="30" fill="#FFD6A5" />
    <circle cx="90" cy="80" r="3" fill="#1A1A2E" />
    <circle cx="110" cy="80" r="3" fill="#1A1A2E" />
    <path d="M95 88 Q100 92 105 88" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M70 85 Q65 75 70 65" stroke="#4F8CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M130 85 Q135 75 130 65" stroke="#4F8CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="85" cy="60" r="15" fill="#9B5DE5" opacity="0.8" />
    <circle cx="115" cy="60" r="15" fill="#F15BB5" opacity="0.8" />
    <circle cx="100" cy="50" r="12" fill="#00F5D4" opacity="0.8" />
    <defs>
      <linearGradient id="studyGrad1" x1="20" y1="20" x2="180" y2="180">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#F15BB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const StudyBoy = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="80" fill="url(#studyGrad2)" opacity="0.3" />
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="#E8F4FF" />
    <rect x="55" y="115" width="90" height="55" rx="10" fill="#00F5D4" />
    <rect x="60" y="120" width="80" height="45" rx="8" fill="white" />
    <circle cx="85" cy="140" r="8" fill="#FF6B6B" />
    <circle cx="115" cy="140" r="8" fill="#9B5DE5" />
    <circle cx="100" cy="155" r="8" fill="#FEE440" />
    <circle cx="100" cy="80" r="32" fill="#FFD6A5" />
    <circle cx="88" cy="75" r="3" fill="#1A1A2E" />
    <circle cx="112" cy="75" r="3" fill="#1A1A2E" />
    <path d="M92 85 Q100 90 108 85" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M68 78 Q60 70 68 60" stroke="#00F5D4" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M132 78 Q140 70 132 60" stroke="#00F5D4" strokeWidth="3" fill="none" strokeLinecap="round" />
    <rect x="65" y="45" width="70" height="20" rx="10" fill="#4F8CFF" opacity="0.3" />
    <defs>
      <linearGradient id="studyGrad2" x1="20" y1="20" x2="180" y2="180">
        <stop stopColor="#00F5D4" />
        <stop offset="1" stopColor="#4F8CFF" />
      </linearGradient>
    </defs>
  </svg>
);

export const RocketLaunch = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#rocketGrad)" opacity="0.2" />
    <ellipse cx="100" cy="170" rx="40" ry="8" fill="#FFE8F0" />
    <path d="M100 40 L115 100 L100 90 L85 100 Z" fill="url(#rocketGrad)" />
    <circle cx="100" cy="65" r="8" fill="white" />
    <path d="M85 100 L75 130 L85 125 L95 130 L85 100" fill="#FF6B6B" />
    <path d="M115 100 L125 130 L115 125 L105 130 L115 100" fill="#FF6B6B" />
    <path d="M95 100 L100 140 L105 100" fill="#FEE440" opacity="0.6" />
    <circle cx="70" cy="50" r="5" fill="#FEE440" />
    <circle cx="130" cy="60" r="4" fill="#00F5D4" />
    <circle cx="140" cy="40" r="3" fill="#F15BB5" />
    <circle cx="60" cy="70" r="3" fill="#9B5DE5" />
    <defs>
      <linearGradient id="rocketGrad" x1="80" y1="40" x2="120" y2="100">
        <stop stopColor="#F15BB5" />
        <stop offset="1" stopColor="#FF6B6B" />
      </linearGradient>
    </defs>
  </svg>
);

export const BooksStack = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#bookGrad)" opacity="0.2" />
    <rect x="60" y="130" width="80" height="15" rx="3" fill="#FF6B6B" />
    <rect x="55" y="112" width="90" height="15" rx="3" fill="#FEE440" />
    <rect x="65" y="94" width="70" height="15" rx="3" fill="#00F5D4" />
    <rect x="60" y="76" width="80" height="15" rx="3" fill="#4F8CFF" />
    <rect x="70" y="58" width="60" height="15" rx="3" fill="#9B5DE5" />
    <rect x="55" y="112" width="8" height="15" rx="2" fill="#FF9F1C" opacity="0.5" />
    <rect x="65" y="94" width="8" height="15" rx="2" fill="#00D4AA" opacity="0.5" />
    <rect x="60" y="76" width="8" height="15" rx="2" fill="#3D7AE5" opacity="0.5" />
    <rect x="70" y="58" width="8" height="15" rx="2" fill="#7B3DB5" opacity="0.5" />
    <circle cx="140" cy="50" r="12" fill="#F15BB5" opacity="0.3" />
    <defs>
      <linearGradient id="bookGrad" x1="30" y1="30" x2="170" y2="170">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#00F5D4" />
      </linearGradient>
    </defs>
  </svg>
);

export const Trophy = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#trophyGrad)" opacity="0.2" />
    <path d="M70 60 L130 60 L120 110 L80 110 Z" fill="url(#trophyGrad)" />
    <path d="M70 60 L60 50 L70 40" stroke="#FEE440" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M130 60 L140 50 L130 40" stroke="#FEE440" strokeWidth="4" fill="none" strokeLinecap="round" />
    <rect x="85" y="110" width="30" height="12" rx="3" fill="#FF9F1C" />
    <path d="M80 125 L120 125 L110 140 L90 140 Z" fill="#FF9F1C" />
    <circle cx="100" cy="85" r="15" fill="#FEE440" opacity="0.5" />
    <circle cx="100" cy="85" r="8" fill="#FEE440" />
    <defs>
      <linearGradient id="trophyGrad" x1="70" y1="40" x2="130" y2="110">
        <stop stopColor="#FEE440" />
        <stop offset="1" stopColor="#FF9F1C" />
      </linearGradient>
    </defs>
  </svg>
);

export const StarSparkle = ({ className = "w-6 h-6", color = "#FEE440" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill={color} />
  </svg>
);

export const Lightbulb = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="#FEE440" opacity="0.15" />
    <ellipse cx="100" cy="75" rx="25" ry="30" fill="url(#bulbGrad)" />
    <rect x="85" y="100" width="30" height="12" rx="3" fill="#FF9F1C" />
    <rect x="88" y="112" width="24" height="8" rx="2" fill="#FF9F1C" opacity="0.7" />
    <path d="M75 55 Q70 50 75 45" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <path d="M125 55 Q130 50 125 45" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <path d="M65 70 Q60 65 65 60" stroke="#FEE440" strokeWidth="2" strokeLinecap="round" />
    <path d="M135 70 Q140 65 135 60" stroke="#FEE440" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="bulbGrad" x1="75" y1="45" x2="125" y2="105">
        <stop stopColor="#FEE440" />
        <stop offset="1" stopColor="#FF9F1C" />
      </linearGradient>
    </defs>
  </svg>
);

export const OnlineLearning = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#onlineGrad)" opacity="0.2" />
    <rect x="45" y="55" width="110" height="75" rx="12" fill="#4F8CFF" />
    <rect x="50" y="60" width="100" height="65" rx="8" fill="white" />
    <circle cx="85" cy="92" r="15" fill="#FFD6A5" />
    <circle cx="80" cy="88" r="2" fill="#1A1A2E" />
    <circle cx="90" cy="88" r="2" fill="#1A1A2E" />
    <path d="M83 95 Q85 97 87 95" stroke="#1A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <rect x="105" y="82" width="35" height="4" rx="2" fill="#E2E8F0" />
    <rect x="105" y="90" width="25" height="4" rx="2" fill="#E2E8F0" />
    <rect x="105" y="98" width="30" height="4" rx="2" fill="#E2E8F0" />
    <circle cx="100" cy="145" r="8" fill="#00F5D4" opacity="0.6" />
    <circle cx="115" cy="148" r="6" fill="#F15BB5" opacity="0.6" />
    <circle cx="85" cy="148" r="6" fill="#9B5DE5" opacity="0.6" />
    <defs>
      <linearGradient id="onlineGrad" x1="30" y1="30" x2="170" y2="170">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#00F5D4" />
      </linearGradient>
    </defs>
  </svg>
);

export const CalendarIllustration = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#calGrad)" opacity="0.2" />
    <rect x="55" y="55" width="90" height="85" rx="12" fill="white" stroke="#4F8CFF" strokeWidth="3" />
    <rect x="55" y="55" width="90" height="25" rx="8" fill="#4F8CFF" />
    <circle cx="75" cy="67" r="4" fill="white" />
    <circle cx="125" cy="67" r="4" fill="white" />
    <rect x="65" y="95" width="15" height="15" rx="4" fill="#F15BB5" opacity="0.3" />
    <rect x="90" y="95" width="15" height="15" rx="4" fill="#00F5D4" opacity="0.3" />
    <rect x="115" y="95" width="15" height="15" rx="4" fill="#FEE440" opacity="0.3" />
    <rect x="65" y="120" width="15" height="15" rx="4" fill="#9B5DE5" opacity="0.3" />
    <rect x="90" y="120" width="15" height="15" rx="4" fill="#FF6B6B" opacity="0.3" />
    <rect x="65" y="95" width="15" height="15" rx="4" fill="#F15BB5" opacity="0.6" />
    <defs>
      <linearGradient id="calGrad" x1="30" y1="30" x2="170" y2="170">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#F15BB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const Teamwork = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#teamGrad)" opacity="0.2" />
    <circle cx="75" cy="95" r="18" fill="#FFD6A5" />
    <circle cx="125" cy="95" r="18" fill="#FFD6A5" />
    <circle cx="100" cy="75" r="18" fill="#FFD6A5" />
    <circle cx="70" cy="90" r="3" fill="#1A1A2E" />
    <circle cx="80" cy="90" r="3" fill="#1A1A2E" />
    <circle cx="95" cy="70" r="3" fill="#1A1A2E" />
    <circle cx="105" cy="70" r="3" fill="#1A1A2E" />
    <circle cx="120" cy="90" r="3" fill="#1A1A2E" />
    <circle cx="130" cy="90" r="3" fill="#1A1A2E" />
    <path d="M73 98 Q75 101 77 98" stroke="#1A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M98 78 Q100 81 102 78" stroke="#1A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M123 98 Q125 101 127 98" stroke="#1A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M75 115 L100 130 L125 115" stroke="#4F8CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="100" cy="130" r="8" fill="#F15BB5" />
    <defs>
      <linearGradient id="teamGrad" x1="30" y1="30" x2="170" y2="170">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#00F5D4" />
      </linearGradient>
    </defs>
  </svg>
);

export const GoalTarget = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="url(#goalGrad)" opacity="0.2" />
    <circle cx="100" cy="100" r="45" stroke="#4F8CFF" strokeWidth="4" fill="none" opacity="0.3" />
    <circle cx="100" cy="100" r="30" stroke="#9B5DE5" strokeWidth="4" fill="none" opacity="0.5" />
    <circle cx="100" cy="100" r="15" stroke="#F15BB5" strokeWidth="4" fill="none" />
    <circle cx="100" cy="100" r="5" fill="#FF6B6B" />
    <path d="M100 55 L100 70" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <path d="M100 130 L100 145" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <path d="M55 100 L70 100" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <path d="M130 100 L145 100" stroke="#FEE440" strokeWidth="3" strokeLinecap="round" />
    <defs>
      <linearGradient id="goalGrad" x1="30" y1="30" x2="170" y2="170">
        <stop stopColor="#4F8CFF" />
        <stop offset="1" stopColor="#F15BB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const EmptyState = ({ className = "w-40 h-40" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" fill="#E8F4FF" opacity="0.5" />
    <rect x="60" y="80" width="80" height="50" rx="8" fill="white" stroke="#CBD5E1" strokeWidth="2" />
    <line x1="70" y1="95" x2="130" y2="95" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="105" x2="110" y2="105" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="115" x2="120" y2="115" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="55" r="15" fill="#FFD6A5" />
    <circle cx="94" cy="52" r="2" fill="#1A1A2E" />
    <circle cx="106" cy="52" r="2" fill="#1A1A2E" />
    <path d="M97 58 Q100 60 103 58" stroke="#1A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M85 60 Q75 65 85 70" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="140" cy="60" r="5" fill="#F15BB5" opacity="0.5" />
    <circle cx="55" cy="70" r="4" fill="#00F5D4" opacity="0.5" />
    <circle cx="150" cy="140" r="6" fill="#FEE440" opacity="0.5" />
  </svg>
);

export const Confetti = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="8" fill="#F15BB5" />
    <rect x="80" y="70" width="8" height="15" rx="2" fill="#4F8CFF" transform="rotate(15 84 77)" />
    <rect x="120" y="60" width="8" height="15" rx="2" fill="#00F5D4" transform="rotate(-20 124 67)" />
    <rect x="60" y="110" width="8" height="15" rx="2" fill="#FEE440" transform="rotate(30 64 117)" />
    <rect x="140" y="120" width="8" height="15" rx="2" fill="#FF6B6B" transform="rotate(-10 144 127)" />
    <rect x="90" y="140" width="8" height="15" rx="2" fill="#9B5DE5" transform="rotate(45 94 147)" />
    <circle cx="70" cy="80" r="5" fill="#F15BB5" opacity="0.6" />
    <circle cx="130" cy="90" r="4" fill="#00F5D4" opacity="0.6" />
    <circle cx="110" cy="60" r="6" fill="#FEE440" opacity="0.6" />
    <circle cx="60" cy="130" r="4" fill="#FF6B6B" opacity="0.6" />
    <circle cx="150" cy="100" r="5" fill="#9B5DE5" opacity="0.6" />
  </svg>
);
