/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { CmsContentProvider } from './context/CmsContentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AttractiveBackground } from './components/AttractiveBackground';

const HomeView = lazy(() => import('./views/HomeView').then(module => ({ default: module.HomeView })));
const McqsView = lazy(() => import('./views/McqsView').then(module => ({ default: module.McqsView })));
const QuizView = lazy(() => import('./views/QuizView').then(module => ({ default: module.QuizView })));
const PastPapersView = lazy(() => import('./views/PastPapersView').then(module => ({ default: module.PastPapersView })));
const CurrentAffairsView = lazy(() => import('./views/CurrentAffairsView').then(module => ({ default: module.CurrentAffairsView })));
const ExamsView = lazy(() => import('./views/ExamsView').then(module => ({ default: module.ExamsView })));
const JobsView = lazy(() => import('./views/JobsView').then(module => ({ default: module.JobsView })));
const StudyNotesView = lazy(() => import('./views/StudyNotesView').then(module => ({ default: module.StudyNotesView })));
const RankingsView = lazy(() => import('./views/RankingsView').then(module => ({ default: module.RankingsView })));
const AboutView = lazy(() => import('./views/AboutView').then(module => ({ default: module.AboutView })));
const SavedMcqsView = lazy(() => import('./views/SavedMcqsView').then(module => ({ default: module.SavedMcqsView })));
const AdminView = lazy(() => import('./views/AdminView').then(module => ({ default: module.AdminView })));
const LearningLabView = lazy(() => import('./views/LearningLabView').then(module => ({ default: module.LearningLabView })));
const SearchModal = lazy(() => import('./components/SearchModal').then(module => ({ default: module.SearchModal })));
const AuthModal = lazy(() => import('./components/AuthModal').then(module => ({ default: module.AuthModal })));
const CustomDomainModal = lazy(() => import('./components/CustomDomainModal').then(module => ({ default: module.CustomDomainModal })));
const CertificateModal = lazy(() => import('./components/CertificateModal').then(module => ({ default: module.CertificateModal })));

const MainContent: React.FC = () => {
  const { 
    tab, 
    searchOpen,
    authModalOpen,
    domainModalOpen, 
    setDomainModalOpen,
    activeCertificate,
    isCertificateModalOpen,
    closeCertificateModal,
    updateCertificateCandidateName,
  } = useApp();

  if (window.location.pathname.startsWith('/admin')) return <AdminView />;
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-500 relative selection:bg-purple-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Eye-catching ambient background lighting & patterns */}
      <AttractiveBackground />

      <Navbar />
      
      <main className="flex-1 relative z-10 w-full max-w-full pb-16 sm:pb-0">
        <Suspense fallback={<div className="min-h-[50vh] grid place-items-center text-slate-500">Loading MEQSA…</div>}>
        {tab === 'home' && <HomeView />}
        {tab === 'mcqs' && <McqsView />}
        {tab === 'quiz' && <QuizView />}
        {tab === 'past-papers' && <PastPapersView />}
        {tab === 'current-affairs' && <CurrentAffairsView />}
        {tab === 'exams' && <ExamsView />}
        {tab === 'jobs' && <JobsView />}
        {tab === 'study-notes' && <StudyNotesView />}
        {tab === 'rankings' && <RankingsView />}
        {tab === 'learning-lab' && <LearningLabView />}
        {tab === 'about' && <AboutView />}
        {tab === 'bookmarks' && <SavedMcqsView initialSubTab="bookmarks" />}
        {tab === 'mistakes' && <SavedMcqsView initialSubTab="mistakes" />}
        </Suspense>
      </main>

      <Footer />
      {searchOpen && <Suspense fallback={null}><SearchModal /></Suspense>}
      {authModalOpen && <Suspense fallback={null}><AuthModal /></Suspense>}
      {domainModalOpen && <Suspense fallback={null}><CustomDomainModal
        isOpen={domainModalOpen} 
        onClose={() => setDomainModalOpen(false)} 
      /></Suspense>}
      {activeCertificate && (
        <Suspense fallback={null}><CertificateModal
          certificate={activeCertificate}
          isOpen={isCertificateModalOpen}
          onClose={closeCertificateModal}
          onUpdateCandidateName={updateCertificateCandidateName}
        /></Suspense>
      )}
    </div>
  );
};

export default function App() {
  const isAdminPath = window.location.pathname.replace(/\/$/, '') === '/admin';
  return (
    <AppProvider>
      <CmsContentProvider><Suspense fallback={<div className="min-h-screen grid place-items-center">Loading MEQSA…</div>}>{isAdminPath ? <AdminView /> : <MainContent />}</Suspense></CmsContentProvider>
    </AppProvider>
  );
}
