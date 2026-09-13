import React, { createContext, useContext, useEffect, useState } from 'react';
import { CmsLesson, CmsMcq, CmsPastPaper } from '../types';
import { subscribePublishedContent } from '../lib/cmsService';

const CmsContext = createContext<{ mcqs: CmsMcq[]; papers: CmsPastPaper[]; lessons: CmsLesson[] }>({ mcqs: [], papers: [], lessons: [] });

export const CmsContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [records, setRecords] = useState<Array<CmsMcq | CmsPastPaper | CmsLesson>>([]);
  useEffect(() => subscribePublishedContent(setRecords), []);
  return <CmsContext.Provider value={{
    mcqs: records.filter((item): item is CmsMcq => item.kind === 'mcq'),
    papers: records.filter((item): item is CmsPastPaper => item.kind === 'past-paper'),
    lessons: records.filter((item): item is CmsLesson => item.kind === 'lesson'),
  }}>{children}</CmsContext.Provider>;
};

export const useCmsContent = () => useContext(CmsContext);
