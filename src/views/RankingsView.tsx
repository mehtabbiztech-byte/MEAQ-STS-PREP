import React from 'react';
import { useApp } from '../context/AppContext';
import { Trophy, Medal, Flame, Award, Target, Star, ArrowRight } from 'lucide-react';

interface LeaderboardUser {
  rank: number;
  name: string;
  city: string;
  targetExam: string;
  points: number;
  quizzesTaken: number;
  accuracy: string;
  streak: number;
}

const LEADERBOARD_USERS: LeaderboardUser[] = [
  { rank: 1, name: 'Farhan Ali Buriro', city: 'Sukkur', targetExam: 'SPSC CCE / STS BPS-16', points: 4850, quizzesTaken: 142, accuracy: '94.2%', streak: 28 },
  { rank: 2, name: 'Ayesha Siddiqui', city: 'Lahore', targetExam: 'PPSC Tehsildar & PMS', points: 4620, quizzesTaken: 135, accuracy: '92.8%', streak: 24 },
  { rank: 3, name: 'Zohaib Hassan Jamali', city: 'Hyderabad', targetExam: 'CSS MPT 2026', points: 4310, quizzesTaken: 120, accuracy: '91.5%', streak: 19 },
  { rank: 4, name: 'Muhammad Usman Khan', city: 'Peshawar', targetExam: 'KPPSC PMS & ETEA', points: 3980, quizzesTaken: 108, accuracy: '89.4%', streak: 15 },
  { rank: 5, name: 'Mehwish Tariq', city: 'Karachi', targetExam: 'FPSC Inspector Customs', points: 3740, quizzesTaken: 98, accuracy: '88.1%', streak: 12 },
  { rank: 6, name: 'Bilal Ahmed Mengal', city: 'Quetta', targetExam: 'BPSC Assistant Commissioner', points: 3520, quizzesTaken: 92, accuracy: '87.5%', streak: 11 },
  { rank: 7, name: 'Sarmad Nawaz', city: 'Multan', targetExam: 'PPSC Sub Inspector', points: 3310, quizzesTaken: 85, accuracy: '86.2%', streak: 9 },
  { rank: 8, name: 'Kinza Fatima', city: 'Rawalpindi', targetExam: 'FPSC AD FIA', points: 3180, quizzesTaken: 80, accuracy: '85.9%', streak: 8 },
];

export const RankingsView: React.FC = () => {
  const { userProfile, setTab } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>National Aspirant Hall of Fame</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-display">
              Top Aspirants & Study Leaderboard
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Compete with thousands of candidates preparing for CSS, PMS, FPSC, PPSC, and STS IBA Sukkur exams across Pakistan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-center min-w-[200px]">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Your Current Standing
            </div>
            <div className="text-3xl font-black font-display text-white mt-1">
              {userProfile.points} <span className="text-xs font-normal text-emerald-200">PTS</span>
            </div>
            <div className="text-xs text-emerald-200 mt-0.5 flex items-center justify-center gap-1">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>{userProfile.streakDays} Days Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {LEADERBOARD_USERS.slice(0, 3).map((u, i) => {
          const medalColors = [
            'bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200',
            'bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-200',
            'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
          ];

          return (
            <div
              key={u.rank}
              className={`p-6 rounded-3xl border text-center relative overflow-hidden shadow-xs ${medalColors[i]}`}
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center mx-auto mb-3 font-extrabold text-lg">
                {u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : '🥉'}
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {u.name}
              </h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {u.city} • {u.targetExam}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="font-extrabold text-base text-emerald-700 dark:text-emerald-400">
                    {u.points}
                  </div>
                  <div className="text-[10px] uppercase text-slate-500">Points</div>
                </div>
                <div>
                  <div className="font-extrabold text-base text-slate-800 dark:text-slate-200">
                    {u.accuracy}
                  </div>
                  <div className="text-[10px] uppercase text-slate-500">Accuracy</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Complete Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">
            Overall National Rankings
          </h3>
          <span className="text-xs text-slate-500">Updated Daily</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 uppercase font-bold text-[10px]">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Aspirant Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Target Exam</th>
                <th className="py-3 px-4 text-right">Quizzes</th>
                <th className="py-3 px-4 text-right">Accuracy</th>
                <th className="py-3 px-4 text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {LEADERBOARD_USERS.map((u) => (
                <tr key={u.rank} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4 font-extrabold text-slate-700 dark:text-slate-300">
                    #{u.rank}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    {u.name}
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {u.city}
                  </td>
                  <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-semibold">
                    {u.targetExam}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">
                    {u.quizzesTaken}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">
                    {u.accuracy}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400">
                    {u.points} pts
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
