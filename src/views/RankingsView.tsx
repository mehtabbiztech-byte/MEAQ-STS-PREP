import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Trophy, 
  Flame, 
  Award, 
  Star, 
  ArrowRight, 
  Search, 
  Filter, 
  CheckCircle2, 
  Printer, 
  Share2, 
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { QuizCertificate, RankTier } from '../types';
import { getRankTierBadge } from '../lib/certificateService';

interface RankedLeaderboardUser {
  rank: number;
  name: string;
  city: string;
  targetExam: string;
  points: number;
  quizzesTaken: number;
  accuracy: string;
  streak: number;
  tier: RankTier;
  percentile: number;
  certificate: QuizCertificate;
}

const PRESET_TOPPERS: RankedLeaderboardUser[] = [
  {
    rank: 1,
    name: 'Farhan Ali Buriro',
    city: 'Sukkur',
    targetExam: 'SPSC CCE / STS BPS-16',
    points: 4850,
    quizzesTaken: 142,
    accuracy: '94.2%',
    streak: 28,
    tier: 'Gold Distinction',
    percentile: 99.8,
    certificate: {
      id: 'MATB-CERT-2026-TOP01',
      quizId: 'quiz-top-1',
      candidateName: 'Farhan Ali Buriro',
      quizTitle: 'SPSC CCE Combined Competitive Mock',
      category: 'Pakistan Affairs & General Knowledge',
      score: 47,
      totalQuestions: 50,
      percentage: 94,
      grade: 'A+',
      rankTier: 'Gold Distinction',
      rankPosition: 1,
      percentile: 99.8,
      timeSpentSeconds: 1180,
      issuedDate: '10 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP01',
    },
  },
  {
    rank: 2,
    name: 'Ayesha Siddiqui',
    city: 'Lahore',
    targetExam: 'PPSC Tehsildar & PMS',
    points: 4620,
    quizzesTaken: 135,
    accuracy: '92.8%',
    streak: 24,
    tier: 'Gold Distinction',
    percentile: 99.2,
    certificate: {
      id: 'MATB-CERT-2026-TOP02',
      quizId: 'quiz-top-2',
      candidateName: 'Ayesha Siddiqui',
      quizTitle: 'PPSC Revenue & General Ability Mock',
      category: 'Everyday Science & Math',
      score: 46,
      totalQuestions: 50,
      percentage: 92,
      grade: 'A+',
      rankTier: 'Gold Distinction',
      rankPosition: 2,
      percentile: 99.2,
      timeSpentSeconds: 1240,
      issuedDate: '10 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP02',
    },
  },
  {
    rank: 3,
    name: 'Zohaib Hassan Jamali',
    city: 'Hyderabad',
    targetExam: 'CSS MPT 2026',
    points: 4310,
    quizzesTaken: 120,
    accuracy: '91.5%',
    streak: 19,
    tier: 'Gold Distinction',
    percentile: 98.6,
    certificate: {
      id: 'MATB-CERT-2026-TOP03',
      quizId: 'quiz-top-3',
      candidateName: 'Zohaib Hassan Jamali',
      quizTitle: 'CSS Screening (MPT) Comprehensive',
      category: 'Islamic Studies & English',
      score: 45,
      totalQuestions: 50,
      percentage: 90,
      grade: 'A+',
      rankTier: 'Gold Distinction',
      rankPosition: 3,
      percentile: 98.6,
      timeSpentSeconds: 1310,
      issuedDate: '09 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP03',
    },
  },
  {
    rank: 4,
    name: 'Muhammad Usman Khan',
    city: 'Peshawar',
    targetExam: 'KPPSC PMS & ETEA',
    points: 3980,
    quizzesTaken: 108,
    accuracy: '89.4%',
    streak: 15,
    tier: 'Silver Merit',
    percentile: 96.5,
    certificate: {
      id: 'MATB-CERT-2026-TOP04',
      quizId: 'quiz-top-4',
      candidateName: 'Muhammad Usman Khan',
      quizTitle: 'KPPSC General Ability Speed Mock',
      category: 'Current Affairs',
      score: 44,
      totalQuestions: 50,
      percentage: 88,
      grade: 'A',
      rankTier: 'Silver Merit',
      rankPosition: 4,
      percentile: 96.5,
      timeSpentSeconds: 1390,
      issuedDate: '08 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP04',
    },
  },
  {
    rank: 5,
    name: 'Mehwish Tariq',
    city: 'Karachi',
    targetExam: 'FPSC Inspector Customs',
    points: 3740,
    quizzesTaken: 98,
    accuracy: '88.1%',
    streak: 12,
    tier: 'Silver Merit',
    percentile: 94.8,
    certificate: {
      id: 'MATB-CERT-2026-TOP05',
      quizId: 'quiz-top-5',
      candidateName: 'Mehwish Tariq',
      quizTitle: 'FPSC Inspector Customs & Intelligence Mock',
      category: 'Customs Act & GK',
      score: 43,
      totalQuestions: 50,
      percentage: 86,
      grade: 'A',
      rankTier: 'Silver Merit',
      rankPosition: 5,
      percentile: 94.8,
      timeSpentSeconds: 1420,
      issuedDate: '08 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP05',
    },
  },
  {
    rank: 6,
    name: 'Bilal Ahmed Mengal',
    city: 'Quetta',
    targetExam: 'BPSC Assistant Commissioner',
    points: 3520,
    quizzesTaken: 92,
    accuracy: '87.5%',
    streak: 11,
    tier: 'Silver Merit',
    percentile: 93.1,
    certificate: {
      id: 'MATB-CERT-2026-TOP06',
      quizId: 'quiz-top-6',
      candidateName: 'Bilal Ahmed Mengal',
      quizTitle: 'BPSC Provincial Civil Services Prelims',
      category: 'Balochistan & Pakistan Studies',
      score: 42,
      totalQuestions: 50,
      percentage: 84,
      grade: 'A',
      rankTier: 'Silver Merit',
      rankPosition: 6,
      percentile: 93.1,
      timeSpentSeconds: 1450,
      issuedDate: '07 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP06',
    },
  },
  {
    rank: 7,
    name: 'Sarmad Nawaz',
    city: 'Multan',
    targetExam: 'PPSC Sub Inspector',
    points: 3310,
    quizzesTaken: 85,
    accuracy: '86.2%',
    streak: 9,
    tier: 'Silver Merit',
    percentile: 91.4,
    certificate: {
      id: 'MATB-CERT-2026-TOP07',
      quizId: 'quiz-top-7',
      candidateName: 'Sarmad Nawaz',
      quizTitle: 'Punjab Police Sub Inspector Aptitude',
      category: 'General Knowledge & Law',
      score: 41,
      totalQuestions: 50,
      percentage: 82,
      grade: 'A',
      rankTier: 'Silver Merit',
      rankPosition: 7,
      percentile: 91.4,
      timeSpentSeconds: 1480,
      issuedDate: '06 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP07',
    },
  },
  {
    rank: 8,
    name: 'Kinza Fatima',
    city: 'Rawalpindi',
    targetExam: 'FPSC AD FIA',
    points: 3180,
    quizzesTaken: 80,
    accuracy: '85.9%',
    streak: 8,
    tier: 'Silver Merit',
    percentile: 90.2,
    certificate: {
      id: 'MATB-CERT-2026-TOP08',
      quizId: 'quiz-top-8',
      candidateName: 'Kinza Fatima',
      quizTitle: 'FIA Assistant Director Investigation Mock',
      category: 'FIA Act 1974 & Aptitude',
      score: 40,
      totalQuestions: 50,
      percentage: 80,
      grade: 'A',
      rankTier: 'Silver Merit',
      rankPosition: 8,
      percentile: 90.2,
      timeSpentSeconds: 1510,
      issuedDate: '05 Sep 2026',
      verificationCode: 'MATB-CERT-2026-TOP08',
    },
  },
];

export const RankingsView: React.FC = () => {
  const { userProfile, setTab, openCertificateModal } = useApp();
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'certificates' | 'criteria'>('leaderboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExamFilter, setSelectedExamFilter] = useState('all');

  // Compute user's highest certification
  const userCertificates = useMemo(() => {
    return userProfile.certificates || [];
  }, [userProfile.certificates]);

  const highestCert = useMemo(() => {
    if (!userCertificates.length) return null;
    const gold = userCertificates.find((c) => c.rankTier === 'Gold Distinction');
    if (gold) return gold;
    const silver = userCertificates.find((c) => c.rankTier === 'Silver Merit');
    if (silver) return silver;
    const bronze = userCertificates.find((c) => c.rankTier === 'Bronze Honor');
    if (bronze) return bronze;
    return userCertificates[0];
  }, [userCertificates]);

  // Estimated user rank position based on points
  const userEstimatedRank = useMemo(() => {
    const pts = userProfile.points;
    if (pts > 4800) return 1;
    if (pts > 4500) return 2;
    if (pts > 4200) return 3;
    if (pts > 3900) return 4;
    if (pts > 3600) return 5;
    if (pts > 3400) return 6;
    if (pts > 3200) return 7;
    if (pts > 3000) return 8;
    if (pts > 2000) return 14;
    if (pts > 1000) return 28;
    if (pts > 400) return 48;
    return 72;
  }, [userProfile.points]);

  // Filtered leaderboard
  const filteredUsers = useMemo(() => {
    return PRESET_TOPPERS.filter((u) => {
      const matchesSearch = 
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.targetExam.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesExam = 
        selectedExamFilter === 'all' ||
        u.targetExam.toLowerCase().includes(selectedExamFilter.toLowerCase());

      return matchesSearch && matchesExam;
    });
  }, [searchQuery, selectedExamFilter]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/80 shadow-2xl relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>National Aspirant Hall of Fame & Quiz Certification Registry</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              National Rankings & Quiz Certifications
            </h1>
            
            <p className="text-emerald-100/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Every competitive quiz attempt is assessed, graded, and certified. High scorers earn verifiable National Rank Credentials for CSS, PMS, FPSC, PPSC, and STS IBA Sukkur exams.
            </p>

            {/* Quick stats pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200">
                ⭐ <strong>1,840+</strong> Ranked Candidates
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200">
                📜 <strong>4,920+</strong> Issued Certificates
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-300">
                🔒 Cryptographic QR Verification
              </span>
            </div>
          </div>

          {/* User's Live Standing Card */}
          <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center w-full lg:w-72 shrink-0 shadow-lg">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
              Your Current National Standing
            </div>
            
            <div className="text-3xl font-black font-display text-white mt-1">
              Rank #{userEstimatedRank}
            </div>

            <div className="mt-1 flex items-center justify-center gap-2 text-xs text-emerald-100">
              <span className="font-bold text-amber-300">{userProfile.points} PTS</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                {userProfile.streakDays}d Streak
              </span>
            </div>

            {/* User's Highest Certificate Badge */}
            {highestCert ? (
              <div className="mt-3 pt-3 border-t border-white/15">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>{highestCert.rankTier}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openCertificateModal(highestCert)}
                  className="mt-2 w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 text-xs font-black transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Inspect My Certificate</span>
                </button>
              </div>
            ) : (
              <div className="mt-3 pt-3 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => {
                    setTab('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Take Quiz to Get Certified</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-6 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`pb-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition whitespace-nowrap ${
            activeTab === 'leaderboard'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>National Leaderboard & Standings</span>
        </button>

        <button
          onClick={() => setActiveTab('certificates')}
          className={`pb-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition whitespace-nowrap ${
            activeTab === 'certificates'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Award className="w-4 h-4 text-amber-500" />
          <span>My Earned Certificates ({userCertificates.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('criteria')}
          className={`pb-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition whitespace-nowrap ${
            activeTab === 'criteria'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-teal-500" />
          <span>Certification & Ranking Criteria</span>
        </button>
      </div>

      {/* TAB 1: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRESET_TOPPERS.slice(0, 3).map((u, i) => {
              const medalStyles = [
                {
                  card: 'bg-gradient-to-b from-amber-500/10 to-amber-500/5 border-amber-400/60 dark:from-amber-950/40 dark:to-slate-900',
                  badge: 'bg-amber-400 text-amber-950 border-amber-300',
                  rankIcon: '🥇',
                  title: 'National Rank #1',
                  color: 'text-amber-500',
                },
                {
                  card: 'bg-gradient-to-b from-slate-300/15 to-slate-200/5 border-slate-300 dark:from-slate-800/50 dark:to-slate-900',
                  badge: 'bg-slate-300 text-slate-900 border-slate-200',
                  rankIcon: '🥈',
                  title: 'National Rank #2',
                  color: 'text-slate-400',
                },
                {
                  card: 'bg-gradient-to-b from-amber-700/10 to-amber-700/5 border-amber-600/50 dark:from-amber-950/20 dark:to-slate-900',
                  badge: 'bg-amber-600 text-white border-amber-500',
                  rankIcon: '🥉',
                  title: 'National Rank #3',
                  color: 'text-amber-600',
                },
              ][i];

              return (
                <div
                  key={u.rank}
                  className={`p-6 rounded-3xl border relative overflow-hidden shadow-sm flex flex-col justify-between ${medalStyles.card}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl">{medalStyles.rankIcon}</div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {medalStyles.title}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-snug">
                      {u.name}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {u.city} • <strong className="text-emerald-700 dark:text-emerald-400">{u.targetExam}</strong>
                    </div>

                    {/* Badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-700 dark:text-amber-300 text-xs font-bold">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>{u.tier}</span>
                      <span className="text-[10px] opacity-75">({u.percentile}th %ile)</span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="font-black text-base text-emerald-700 dark:text-emerald-400">
                          {u.points}
                        </div>
                        <div className="text-[10px] uppercase text-slate-400">Total Points</div>
                      </div>
                      <div>
                        <div className="font-black text-base text-slate-800 dark:text-slate-200">
                          {u.accuracy}
                        </div>
                        <div className="text-[10px] uppercase text-slate-400">Quiz Accuracy</div>
                      </div>
                    </div>
                  </div>

                  {/* View Certificate Action */}
                  <button
                    type="button"
                    onClick={() => openCertificateModal(u.certificate)}
                    className="mt-5 w-full py-2.5 px-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700 transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>View Ranked Certificate</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search aspirant or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
              <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-xs text-slate-500 font-medium shrink-0">Filter:</span>
              <div className="flex gap-1.5">
                {[
                  { id: 'all', label: 'All Exams' },
                  { id: 'SPSC', label: 'SPSC' },
                  { id: 'CSS', label: 'CSS MPT' },
                  { id: 'PPSC', label: 'PPSC' },
                  { id: 'FPSC', label: 'FPSC' },
                  { id: 'STS', label: 'STS IBA' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedExamFilter(f.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      selectedExamFilter === f.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Table with Certified Rank Badges */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
            <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">
                  National Competitive Merit Roll
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verified quiz rankings calculated from mock accuracy, time, and syllabus coverage
                </p>
              </div>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Live Active Roster
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 uppercase font-bold text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Rank</th>
                    <th className="py-3.5 px-4">Aspirant Name</th>
                    <th className="py-3.5 px-4">Exam & City</th>
                    <th className="py-3.5 px-4">Certified Tier</th>
                    <th className="py-3.5 px-4 text-right">Quizzes</th>
                    <th className="py-3.5 px-4 text-right">Accuracy</th>
                    <th className="py-3.5 px-4 text-right">Points</th>
                    <th className="py-3.5 px-4 text-center">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  {filteredUsers.map((u) => {
                    const badge = getRankTierBadge(u.tier);

                    return (
                      <tr key={u.rank} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center justify-center font-black text-slate-900 dark:text-white">
                            {u.rank <= 3 ? (
                              u.rank === 1 ? '🥇 #1' : u.rank === 2 ? '🥈 #2' : '🥉 #3'
                            ) : (
                              `#${u.rank}`
                            )}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                          <div className="flex items-center gap-2">
                            <span>{u.name}</span>
                            {u.streak >= 10 && (
                              <span className="inline-flex items-center gap-0.5 text-[10px] text-amber-600 dark:text-amber-400 font-bold">
                                <Flame className="w-3 h-3" />
                                {u.streak}d
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                            {u.targetExam}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {u.city}, Pakistan
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${badge.badgeBg}`}>
                            <span>{badge.medal}</span>
                            <span>{u.tier}</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right text-slate-600 dark:text-slate-400">
                          {u.quizzesTaken}
                        </td>
                        <td className="py-3.5 px-4 text-right text-slate-600 dark:text-slate-400 font-semibold">
                          {u.accuracy}
                        </td>
                        <td className="py-3.5 px-4 text-right font-black text-emerald-600 dark:text-emerald-400">
                          {u.points} pts
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => openCertificateModal(u.certificate)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 dark:bg-slate-800 dark:hover:bg-amber-950/60 dark:text-slate-300 dark:hover:text-amber-200 border border-slate-200 dark:border-slate-700 transition font-bold text-[11px] cursor-pointer"
                          >
                            <Award className="w-3 h-3 text-amber-500" />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {/* Highlight current user in list */}
                  <tr className="bg-emerald-50/70 dark:bg-emerald-950/40 border-t-2 border-b-2 border-emerald-500/40">
                    <td className="py-3.5 px-4 font-black text-emerald-800 dark:text-emerald-300">
                      #{userEstimatedRank}
                    </td>
                    <td className="py-3.5 px-4 font-black text-emerald-900 dark:text-emerald-200">
                      <div className="flex items-center gap-2">
                        <span>{userProfile.name} (You)</span>
                        <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          Your Position
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300">
                        {userProfile.targetExam}
                      </div>
                      <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                        {userProfile.province}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      {highestCert ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-900 dark:text-amber-200 text-[11px] font-bold">
                          <span>🥇</span>
                          <span>{highestCert.rankTier}</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500 font-medium italic">
                          Attempt a quiz to certify
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-700 dark:text-slate-300 font-bold">
                      {userProfile.quizHistory.length}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-700 dark:text-slate-300 font-bold">
                      {highestCert ? `${highestCert.percentage}%` : '80.0%'}
                    </td>
                    <td className="py-3.5 px-4 text-right font-black text-emerald-700 dark:text-emerald-300">
                      {userProfile.points} pts
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {highestCert ? (
                        <button
                          type="button"
                          onClick={() => openCertificateModal(highestCert)}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-[11px] shadow-xs transition cursor-pointer"
                        >
                          <Award className="w-3 h-3" />
                          <span>My Cert</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setTab('quiz');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold underline cursor-pointer"
                        >
                          Earn Now
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MY EARNED CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
                Your Official Competitive Credentials
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Certificates awarded from your quiz performance with cryptographic verification IDs
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take New Quiz to Earn Higher Tier</span>
            </button>
          </div>

          {userCertificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userCertificates.map((cert) => {
                const badge = getRankTierBadge(cert.rankTier);

                return (
                  <div
                    key={cert.id}
                    className="bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-500/40 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top banner */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black ${badge.badgeBg}`}>
                          <span>{badge.medal}</span>
                          <span>{cert.rankTier}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cert.verificationCode}
                        </span>
                      </div>

                      <h4 className="text-lg font-black text-slate-900 dark:text-white font-display">
                        {cert.quizTitle}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Awarded to: <strong className="text-slate-800 dark:text-slate-200">{cert.candidateName}</strong>
                      </p>

                      <div className="mt-4 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400">Rank</div>
                          <div className="text-base font-black text-amber-600 dark:text-amber-400 mt-0.5">
                            #{cert.rankPosition}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400">Score</div>
                          <div className="text-base font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {cert.score}/{cert.totalQuestions} ({cert.percentage}%)
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400">Percentile</div>
                          <div className="text-base font-black text-teal-600 dark:text-teal-400 mt-0.5">
                            {cert.percentile.toFixed(1)}%
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <span>Issued: {cert.issuedDate}</span>
                        <span>Grade: <strong className="text-slate-800 dark:text-slate-200">{cert.grade}</strong></span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openCertificateModal(cert)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black text-xs transition shadow-xs cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Award className="w-4 h-4" />
                        <span>View & Print Official Certificate</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center mx-auto mb-4 text-3xl">
                🎖️
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                No Certificates Earned Yet
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
                Take any timed quiz mock on MATB Prep. Once you score 50% or above, your official ranked certificate will be issued instantly!
              </p>
              <button
                type="button"
                onClick={() => {
                  setTab('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <span>Launch Competitive Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CERTIFICATION & RANKING CRITERIA */}
      {activeTab === 'criteria' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Standardized Merit Framework</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                How Quiz Rankings & Certificate Tiers Work
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                Our ranking algorithm mirrors the competitive standards of Federal Public Service Commission (FPSC) and Provincial Commissions (SPSC, PPSC, KPPSC, BPSC).
              </p>
            </div>

            {/* 4 Tiers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/50 text-amber-950 dark:text-amber-200">
                <div className="text-3xl mb-2">🥇</div>
                <h4 className="font-extrabold text-base text-amber-900 dark:text-amber-300">
                  Gold Distinction
                </h4>
                <div className="text-xs font-bold text-amber-800 dark:text-amber-400 mt-0.5">
                  90% – 100% Marks
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Reserved for the top 1–5% aspirants nationwide. Qualifies for high-merit interviews and honors roll.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-300/20 border border-slate-400/40 text-slate-900 dark:text-slate-200">
                <div className="text-3xl mb-2">🥈</div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Silver Merit
                </h4>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  80% – 89% Marks
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Reflects top 10% national percentile performance. Strong command across Pakistan Affairs and general syllabus.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-700/10 border border-amber-600/40 text-amber-950 dark:text-amber-200">
                <div className="text-3xl mb-2">🥉</div>
                <h4 className="font-extrabold text-base text-amber-900 dark:text-amber-300">
                  Bronze Honor
                </h4>
                <div className="text-xs font-bold text-amber-800 dark:text-amber-400 mt-0.5">
                  70% – 79% Marks
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Top 20% national standing. Demonstrates competitive readiness for BPS-16 and BPS-17 tests.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-400/40 text-teal-950 dark:text-teal-200">
                <div className="text-3xl mb-2">🎖️</div>
                <h4 className="font-extrabold text-base text-teal-900 dark:text-teal-300">
                  Certified Candidate
                </h4>
                <div className="text-xs font-bold text-teal-800 dark:text-teal-400 mt-0.5">
                  50% – 69% Marks
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Qualifying pass mark. Validates foundational grasp of the competitive testing requirements.
                </p>
              </div>
            </div>

            {/* Rules list */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <h5 className="font-bold text-slate-900 dark:text-white">
                Exam Evaluation Policies
              </h5>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Negative Marking:</strong> By default, -0.25 marks penalty applies per wrong answer to prevent speculative guessing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Anti-Cheating & Integrity:</strong> Verification codes (e.g. <code>MATB-CERT-2026-XXXXX</code>) are embedded with test metadata and verifiable online.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Printable & Portable:</strong> All certificates feature high-resolution print formatting ready for CV portfolios and interview showcases.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
