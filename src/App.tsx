/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { CustomDomainModal } from './components/CustomDomainModal';
import { CertificateModal } from './components/CertificateModal';
import { AttractiveBackground } from './components/AttractiveBackground';

import { HomeView } from './views/HomeView';
import { McqsView } from './views/McqsView';
import { QuizView } from './views/QuizView';
import { PastPapersView } from './views/PastPapersView';
import { CurrentAffairsView } from './views/CurrentAffairsView';
import { ExamsView } from './views/ExamsView';
import { JobsView } from './views/JobsView';
import { StudyNotesView } from './views/StudyNotesView';
import { RankingsView } from './views/RankingsView';
import { AboutView } from './views/AboutView';
import { SavedMcqsView } from './views/SavedMcqsView';

const MainContent: React.FC = () => {
  const { 
    tab, 
    domainModalOpen, 
    setDomainModalOpen,
    activeCertificate,
    isCertificateModalOpen,
    closeCertificateModal,
    updateCertificateCandidateName,
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/80 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative selection:bg-emerald-500 selection:text-white">
      {/* Eye-catching ambient background lighting & patterns */}
      <AttractiveBackground />

      <Navbar />
      
      <main className="flex-1 relative z-10">
        {tab === 'home' && <HomeView />}
        {tab === 'mcqs' && <McqsView />}
        {tab === 'quiz' && <QuizView />}
        {tab === 'past-papers' && <PastPapersView />}
        {tab === 'current-affairs' && <CurrentAffairsView />}
        {tab === 'exams' && <ExamsView />}
        {tab === 'jobs' && <JobsView />}
        {tab === 'study-notes' && <StudyNotesView />}
        {tab === 'rankings' && <RankingsView />}
        {tab === 'about' && <AboutView />}
        {tab === 'bookmarks' && <SavedMcqsView initialSubTab="bookmarks" />}
        {tab === 'mistakes' && <SavedMcqsView initialSubTab="mistakes" />}
      </main>

      <Footer />
      <SearchModal />
      <AuthModal />
      <CustomDomainModal 
        isOpen={domainModalOpen} 
        onClose={() => setDomainModalOpen(false)} 
      />
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          isOpen={isCertificateModalOpen}
          onClose={closeCertificateModal}
          onUpdateCandidateName={updateCertificateCandidateName}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
