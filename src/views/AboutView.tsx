import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setTab } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Brand Mission Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>MATB STS PREP Vision</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
          “Practice Smart. Prepare Better. <br />
          <span className="text-emerald-600 dark:text-emerald-400">Crack Your Exam.”</span>
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          MATB STS PREP is an independent, state-of-the-art educational platform designed specifically for Pakistani students, civil service aspirants, and government job candidates.
        </p>
      </div>

      {/* 3 Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">
            Authentic & Verified Content
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every question undergoes multi-tier academic verification against authentic textbooks, official acts of Parliament, and historic Gazettes.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">
            Exact Commission Testing Schemes
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            From PPSC 0.25 negative penalties to STS IBA Sukkur screening patterns, our mock engines reproduce the exact environment of testing agencies.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">
            Mistake Review Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We believe true retention comes from understanding mistakes. Our automatic Mistake Notebook ensures you never repeat an incorrect answer twice.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Answers & Clarity
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Is MATB STS PREP free to use?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes, our MCQ practice banks, subject-wise quizzes, study notes, and solved past paper archives are completely accessible for all aspirants across Pakistan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              Are past papers authentic?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              All questions are compiled from official candidate memory transcripts, gazetted answer keys, and authentic past testing papers from FPSC, PPSC, SPSC, and STS.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              How does the negative marking feature work?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              In commissions like PPSC (Punjab Public Service Commission) and PMS screening, each incorrect answer deducts 0.25 marks. You can toggle this setting on or off in the Timed Quiz engine.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/40 text-center text-xs text-slate-500 dark:text-slate-400">
        <strong>Academic Disclaimer:</strong> MATB STS PREP is an independent educational preparatory resource. It is not officially affiliated with or endorsed by the Federal Public Service Commission (FPSC), Punjab Public Service Commission (PPSC), Sindh Public Service Commission (SPSC), or Sukkur IBA Testing Services (STS).
      </div>

    </div>
  );
};
