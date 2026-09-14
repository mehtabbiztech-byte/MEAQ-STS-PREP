import { MCQ } from '../types';

export interface CurrentAffairsSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  checkedOn: string;
}

export const CURRENT_AFFAIRS_SOURCES: CurrentAffairsSource[] = [
  { id: 'pakistan-census', title: '7th Population and Housing Census 2023', publisher: 'Pakistan Bureau of Statistics', url: 'https://www.pbs.gov.pk/sites/default/files/population/2023/reports/National%20Census%20Report-2023.pdf', checkedOn: '2026-09-13' },
  { id: 'pakistan-survey', title: 'Pakistan Economic Survey 2025–26', publisher: 'Finance Division, Government of Pakistan', url: 'https://finance.gov.pk/survey/chapter_26/Complete_PES2025_26.pdf', checkedOn: '2026-09-13' },
  { id: 'pakistan-na', title: 'National Assembly of Pakistan', publisher: 'National Assembly of Pakistan', url: 'https://na.gov.pk/', checkedOn: '2026-09-13' },
  { id: 'pakistan-ecp', title: 'General Elections 2024', publisher: 'Election Commission of Pakistan', url: 'https://www.ecp.gov.pk/general-elections-2024', checkedOn: '2026-09-13' },
  { id: 'pakistan-sbp', title: 'Economic Data', publisher: 'State Bank of Pakistan', url: 'https://www.sbp.org.pk/ecodata/index2.asp', checkedOn: '2026-09-13' },
  { id: 'pakistan-mofa', title: 'Pakistan and the United Nations', publisher: 'Ministry of Foreign Affairs, Pakistan', url: 'https://mofa.gov.pk/', checkedOn: '2026-09-13' },
  { id: 'un', title: 'About the United Nations', publisher: 'United Nations', url: 'https://www.un.org/en/about-us', checkedOn: '2026-09-13' },
  { id: 'unsc', title: 'Security Council membership', publisher: 'United Nations Security Council', url: 'https://main.un.org/securitycouncil/en/content/current-members', checkedOn: '2026-09-13' },
  { id: 'olympics', title: 'Paris 2024 results', publisher: 'International Olympic Committee', url: 'https://olympics.com/en/olympic-games/paris-2024/results', checkedOn: '2026-09-13' },
  { id: 'unfccc', title: 'UN Climate Change Conferences', publisher: 'UNFCCC', url: 'https://unfccc.int/process-and-meetings/conferences/past-conferences', checkedOn: '2026-09-13' },
  { id: 'g20', title: 'G20 members and presidencies', publisher: 'Group of Twenty', url: 'https://www.g20.org/en/about-the-g20/', checkedOn: '2026-09-13' },
  { id: 'who', title: 'WHO Member States and headquarters', publisher: 'World Health Organization', url: 'https://www.who.int/about', checkedOn: '2026-09-13' },
  { id: 'worldbank', title: 'World Bank Data', publisher: 'World Bank', url: 'https://data.worldbank.org/', checkedOn: '2026-09-13' },
  { id: 'imf', title: 'IMF member countries and institutional facts', publisher: 'International Monetary Fund', url: 'https://www.imf.org/en/About/Factsheets/IMF-at-a-Glance', checkedOn: '2026-09-13' },
];

type Fact = { prompt: string; answer: string; distractors: string[]; explanation: string; topic: string; sourceId: string; year: number };

const pakistanFacts: Fact[] = [
  { prompt: 'Which body conducted Pakistan’s 7th Population and Housing Census?', answer: 'Pakistan Bureau of Statistics', distractors: ['Election Commission of Pakistan', 'State Bank of Pakistan', 'National Database and Registration Authority'], explanation: 'Pakistan Bureau of Statistics conducted the 7th Population and Housing Census.', topic: 'Population & Census', sourceId: 'pakistan-census', year: 2023 },
  { prompt: 'What population was approved for Pakistan in the final results of the 2023 digital census?', answer: '241.49 million', distractors: ['207.68 million', '231.40 million', '251.49 million'], explanation: 'The approved national total, including the four provinces and Islamabad Capital Territory, was 241.49 million.', topic: 'Population & Census', sourceId: 'pakistan-census', year: 2023 },
  { prompt: 'Pakistan’s 2023 population count was the country’s which national census?', answer: '7th census', distractors: ['5th census', '6th census', '8th census'], explanation: 'The 2023 exercise was Pakistan’s seventh Population and Housing Census.', topic: 'Population & Census', sourceId: 'pakistan-census', year: 2023 },
  { prompt: 'On what date did polling take place for Pakistan’s 2024 general elections?', answer: '8 February 2024', distractors: ['8 January 2024', '18 February 2024', '8 March 2024'], explanation: 'The Election Commission held general-election polling on 8 February 2024.', topic: 'Elections & Governance', sourceId: 'pakistan-ecp', year: 2024 },
  { prompt: 'Who was elected Prime Minister of Pakistan in March 2024?', answer: 'Shehbaz Sharif', distractors: ['Arif Alvi', 'Yousaf Raza Gillani', 'Sadiq Sanjrani'], explanation: 'The National Assembly elected Shehbaz Sharif as prime minister in March 2024.', topic: 'Elections & Governance', sourceId: 'pakistan-na', year: 2024 },
  { prompt: 'Who was elected President of Pakistan in March 2024?', answer: 'Asif Ali Zardari', distractors: ['Arif Alvi', 'Shehbaz Sharif', 'Yousaf Raza Gillani'], explanation: 'Asif Ali Zardari was elected president for a second term in March 2024.', topic: 'Elections & Governance', sourceId: 'pakistan-na', year: 2024 },
  { prompt: 'Which city hosted the SCO Council of Heads of Government meeting in October 2024?', answer: 'Islamabad', distractors: ['Karachi', 'Lahore', 'Astana'], explanation: 'Pakistan hosted the SCO Council of Heads of Government meeting in Islamabad on 15–16 October 2024.', topic: 'Diplomacy & Organizations', sourceId: 'pakistan-mofa', year: 2024 },
  { prompt: 'Pakistan’s elected term on the UN Security Council covers which years?', answer: '2025–2026', distractors: ['2024–2025', '2026–2027', '2023–2024'], explanation: 'Pakistan was elected as a non-permanent Security Council member for 2025–2026.', topic: 'Diplomacy & Organizations', sourceId: 'unsc', year: 2025 },
  { prompt: 'How many UN General Assembly votes did Pakistan receive for its 2025–2026 Security Council term?', answer: '182 votes', distractors: ['172 votes', '180 votes', '193 votes'], explanation: 'Pakistan received 182 votes in the UN General Assembly election held in June 2024.', topic: 'Diplomacy & Organizations', sourceId: 'pakistan-mofa', year: 2024 },
  { prompt: 'Pakistan’s 2025–2026 UN Security Council term is its which term on the Council?', answer: 'Eighth term', distractors: ['Sixth term', 'Seventh term', 'Ninth term'], explanation: 'The 2025–2026 membership is Pakistan’s eighth Security Council term.', topic: 'Diplomacy & Organizations', sourceId: 'pakistan-mofa', year: 2025 },
  { prompt: 'Which Pakistani athlete won Olympic gold in the men’s javelin at Paris 2024?', answer: 'Arshad Nadeem', distractors: ['Nooh Dastgir Butt', 'Talha Talib', 'Haider Ali'], explanation: 'Arshad Nadeem won the Paris 2024 men’s javelin gold medal.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2024 },
  { prompt: 'What Olympic-record distance did Arshad Nadeem throw at Paris 2024?', answer: '92.97 metres', distractors: ['90.57 metres', '91.97 metres', '93.90 metres'], explanation: 'His 92.97-metre throw established an Olympic record in the men’s javelin final.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2024 },
  { prompt: 'Which medal did Pakistan win at the Paris 2024 Olympic Games?', answer: 'Gold', distractors: ['Silver', 'Bronze', 'No medal'], explanation: 'Pakistan’s medal at Paris 2024 was Arshad Nadeem’s gold in men’s javelin.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2024 },
  { prompt: 'Which institution publishes the annual Pakistan Economic Survey?', answer: 'Finance Division', distractors: ['Election Commission', 'Supreme Court', 'Senate Secretariat'], explanation: 'The Finance Division of the Government of Pakistan publishes the Pakistan Economic Survey.', topic: 'Economy & Budget', sourceId: 'pakistan-survey', year: 2026 },
  { prompt: 'The Pakistan Economic Survey 2025–26 primarily reviews which area?', answer: 'Pakistan’s economic performance', distractors: ['Election constituencies', 'Criminal court appeals', 'Foreign visa applications'], explanation: 'The survey is the government’s annual review of national economic performance and sectoral trends.', topic: 'Economy & Budget', sourceId: 'pakistan-survey', year: 2026 },
  { prompt: 'Which institution is Pakistan’s central bank?', answer: 'State Bank of Pakistan', distractors: ['National Bank of Pakistan', 'Pakistan Stock Exchange', 'Federal Board of Revenue'], explanation: 'The State Bank of Pakistan is the country’s central bank.', topic: 'Economy & Budget', sourceId: 'pakistan-sbp', year: 2026 },
  { prompt: 'Which institution manages Pakistan’s monetary policy?', answer: 'State Bank of Pakistan', distractors: ['Ministry of Commerce', 'Pakistan Bureau of Statistics', 'Planning Commission'], explanation: 'Monetary policy is a core responsibility of the State Bank of Pakistan.', topic: 'Economy & Budget', sourceId: 'pakistan-sbp', year: 2026 },
  { prompt: 'Pakistan’s 2023 census was notable for using which method nationwide?', answer: 'Digital enumeration', distractors: ['Postal ballots', 'Satellite voting', 'Paper-only enumeration'], explanation: 'The 2023 census was presented as Pakistan’s first digital population and housing census.', topic: 'Science, Technology & Society', sourceId: 'pakistan-census', year: 2023 },
  { prompt: 'Which territory is included with Pakistan’s four provinces in the approved national census total?', answer: 'Islamabad Capital Territory', distractors: ['Gilgit city only', 'Delhi Capital Territory', 'Muscat Governorate'], explanation: 'The cited national census total includes Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan and Islamabad Capital Territory.', topic: 'Population & Census', sourceId: 'pakistan-census', year: 2023 },
  { prompt: 'Which house elected Pakistan’s prime minister after the 2024 general election?', answer: 'National Assembly', distractors: ['Senate', 'Supreme Court', 'Council of Common Interests'], explanation: 'Under Pakistan’s parliamentary system, the National Assembly elects the prime minister.', topic: 'Elections & Governance', sourceId: 'pakistan-na', year: 2024 },
  { prompt: 'The SCO meeting hosted by Pakistan in 2024 was a council of whom?', answer: 'Heads of Government', distractors: ['Central-bank governors', 'Supreme-court judges', 'Olympic committees'], explanation: 'Islamabad hosted the SCO Council of Heads of Government meeting.', topic: 'Diplomacy & Organizations', sourceId: 'pakistan-mofa', year: 2024 },
  { prompt: 'In which month of 2024 did Pakistan host the SCO Heads of Government meeting?', answer: 'October', distractors: ['February', 'June', 'December'], explanation: 'The meeting took place on 15–16 October 2024.', topic: 'Diplomacy & Organizations', sourceId: 'pakistan-mofa', year: 2024 },
  { prompt: 'Pakistan joined the UN Security Council in January 2025 in which capacity?', answer: 'Non-permanent member', distractors: ['Permanent member', 'Observer state', 'Secretariat member'], explanation: 'Pakistan serves as one of the Council’s elected non-permanent members.', topic: 'Diplomacy & Organizations', sourceId: 'unsc', year: 2025 },
  { prompt: 'Arshad Nadeem’s Paris 2024 title came in which athletics event?', answer: 'Men’s javelin throw', distractors: ['Men’s discus throw', 'Men’s shot put', 'Men’s high jump'], explanation: 'He became Olympic champion in the men’s javelin throw.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2024 },
  { prompt: 'Which official document summarizes Pakistan’s sector-wise economic trends before the federal budget?', answer: 'Pakistan Economic Survey', distractors: ['Electoral Rolls', 'National Judicial Policy', 'Foreign Trade Ordinance'], explanation: 'The Pakistan Economic Survey provides the government’s pre-budget review of economic sectors and indicators.', topic: 'Economy & Budget', sourceId: 'pakistan-survey', year: 2026 },
];

const worldFacts: Fact[] = [
  { prompt: 'How many Member States does the United Nations have?', answer: '193', distractors: ['191', '195', '203'], explanation: 'The United Nations has 193 Member States.', topic: 'United Nations', sourceId: 'un', year: 2026 },
  { prompt: 'Where is the headquarters of the United Nations?', answer: 'New York City', distractors: ['Geneva', 'Paris', 'Vienna'], explanation: 'The principal UN headquarters is in New York City.', topic: 'United Nations', sourceId: 'un', year: 2026 },
  { prompt: 'Who is the ninth Secretary-General of the United Nations?', answer: 'António Guterres', distractors: ['Ban Ki-moon', 'Kofi Annan', 'Tedros Adhanom Ghebreyesus'], explanation: 'António Guterres is the ninth UN Secretary-General.', topic: 'United Nations', sourceId: 'un', year: 2026 },
  { prompt: 'How many permanent members are on the UN Security Council?', answer: 'Five', distractors: ['Four', 'Six', 'Ten'], explanation: 'The Security Council has five permanent members.', topic: 'United Nations', sourceId: 'unsc', year: 2026 },
  { prompt: 'How many elected non-permanent seats are on the UN Security Council?', answer: 'Ten', distractors: ['Five', 'Eight', 'Fifteen'], explanation: 'Ten non-permanent members are elected for two-year terms.', topic: 'United Nations', sourceId: 'unsc', year: 2026 },
  { prompt: 'Which country held the G20 presidency in 2024?', answer: 'Brazil', distractors: ['India', 'South Africa', 'Indonesia'], explanation: 'Brazil held the G20 presidency during 2024.', topic: 'G20 & Global Economy', sourceId: 'g20', year: 2024 },
  { prompt: 'Which country held the G20 presidency in 2025?', answer: 'South Africa', distractors: ['Brazil', 'India', 'Japan'], explanation: 'South Africa held the G20 presidency during 2025.', topic: 'G20 & Global Economy', sourceId: 'g20', year: 2025 },
  { prompt: 'Which organization became a permanent member of the G20 in 2023?', answer: 'African Union', distractors: ['ASEAN', 'SAARC', 'Arab League'], explanation: 'The African Union was admitted as a permanent G20 member in 2023.', topic: 'G20 & Global Economy', sourceId: 'g20', year: 2023 },
  { prompt: 'Which city hosted the 2024 Summer Olympic Games?', answer: 'Paris', distractors: ['Los Angeles', 'Tokyo', 'Brisbane'], explanation: 'Paris hosted the 2024 Summer Olympic Games.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2024 },
  { prompt: 'Which city is scheduled to host the 2028 Summer Olympic Games?', answer: 'Los Angeles', distractors: ['Paris', 'Brisbane', 'Rome'], explanation: 'Los Angeles is the host city for the 2028 Summer Olympics.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2028 },
  { prompt: 'Which city is scheduled to host the 2032 Summer Olympic Games?', answer: 'Brisbane', distractors: ['Sydney', 'Melbourne', 'Auckland'], explanation: 'Brisbane is scheduled to host the 2032 Summer Olympics.', topic: 'Sports & Awards', sourceId: 'olympics', year: 2032 },
  { prompt: 'Which country hosted COP29 in 2024?', answer: 'Azerbaijan', distractors: ['Brazil', 'Egypt', 'United Arab Emirates'], explanation: 'Azerbaijan hosted COP29 in Baku in November 2024.', topic: 'Climate & Environment', sourceId: 'unfccc', year: 2024 },
  { prompt: 'Which city hosted COP29?', answer: 'Baku', distractors: ['Dubai', 'Belém', 'Sharm el-Sheikh'], explanation: 'COP29 was held in Baku, Azerbaijan.', topic: 'Climate & Environment', sourceId: 'unfccc', year: 2024 },
  { prompt: 'Which country hosted COP30 in 2025?', answer: 'Brazil', distractors: ['Azerbaijan', 'India', 'South Africa'], explanation: 'Brazil hosted COP30 in 2025.', topic: 'Climate & Environment', sourceId: 'unfccc', year: 2025 },
  { prompt: 'Which Brazilian city hosted COP30?', answer: 'Belém', distractors: ['Rio de Janeiro', 'Brasília', 'São Paulo'], explanation: 'COP30 was hosted in Belém, Brazil.', topic: 'Climate & Environment', sourceId: 'unfccc', year: 2025 },
  { prompt: 'What does COP stand for in UN climate negotiations?', answer: 'Conference of the Parties', distractors: ['Council of Presidents', 'Committee on Pollution', 'Conference of Parliaments'], explanation: 'COP means Conference of the Parties to the UN climate convention.', topic: 'Climate & Environment', sourceId: 'unfccc', year: 2026 },
  { prompt: 'Where is the World Health Organization headquartered?', answer: 'Geneva', distractors: ['New York City', 'Paris', 'Rome'], explanation: 'WHO is headquartered in Geneva, Switzerland.', topic: 'International Organizations', sourceId: 'who', year: 2026 },
  { prompt: 'Which UN specialized agency leads international public-health work?', answer: 'World Health Organization', distractors: ['UNESCO', 'ICAO', 'UPU'], explanation: 'The World Health Organization is the UN specialized agency for international public health.', topic: 'International Organizations', sourceId: 'who', year: 2026 },
  { prompt: 'Where is the International Monetary Fund headquartered?', answer: 'Washington, D.C.', distractors: ['Geneva', 'New York City', 'London'], explanation: 'The IMF headquarters is in Washington, D.C.', topic: 'G20 & Global Economy', sourceId: 'imf', year: 2026 },
  { prompt: 'Which institution publishes the World Economic Outlook?', answer: 'International Monetary Fund', distractors: ['World Health Organization', 'UNESCO', 'International Olympic Committee'], explanation: 'The IMF publishes its World Economic Outlook reports.', topic: 'G20 & Global Economy', sourceId: 'imf', year: 2026 },
  { prompt: 'Where is the World Bank Group headquartered?', answer: 'Washington, D.C.', distractors: ['Geneva', 'Paris', 'Brussels'], explanation: 'The World Bank Group is headquartered in Washington, D.C.', topic: 'G20 & Global Economy', sourceId: 'worldbank', year: 2026 },
  { prompt: 'Which international institution maintains World Development Indicators?', answer: 'World Bank', distractors: ['World Trade Organization', 'International Labour Organization', 'UN Security Council'], explanation: 'World Development Indicators is the World Bank’s development-data collection.', topic: 'G20 & Global Economy', sourceId: 'worldbank', year: 2026 },
  { prompt: 'Non-permanent UN Security Council members normally serve for how long?', answer: 'Two years', distractors: ['One year', 'Three years', 'Five years'], explanation: 'Elected non-permanent Security Council members serve two-year terms.', topic: 'United Nations', sourceId: 'unsc', year: 2026 },
  { prompt: 'Which body elects the non-permanent members of the UN Security Council?', answer: 'UN General Assembly', distractors: ['International Court of Justice', 'UN Secretariat', 'World Bank Board'], explanation: 'The UN General Assembly elects non-permanent members of the Security Council.', topic: 'United Nations', sourceId: 'unsc', year: 2026 },
  { prompt: 'The G20 primarily brings together major economies to coordinate on what?', answer: 'Global economic cooperation', distractors: ['Olympic qualification', 'Postal services', 'International criminal trials'], explanation: 'The G20 is the principal forum for international economic cooperation among its members.', topic: 'G20 & Global Economy', sourceId: 'g20', year: 2026 },
];

const sources = Object.fromEntries(CURRENT_AFFAIRS_SOURCES.map(item => [item.id, item]));
const examTags = ['STS', 'STS IBA', 'SPSC', 'FPSC', 'NTS', 'PTS'];
function createBank(scope: 'Pakistan' | 'World', facts: Fact[]): MCQ[] {
  return facts.map((fact, index) => {
    const options = rotate([fact.answer, ...fact.distractors], index % 4);
    const source = sources[fact.sourceId];
    return {
      id: `${scope === 'Pakistan' ? 'pca' : 'wca'}-${String(index + 1).padStart(4, '0')}`,
      question: fact.prompt,
      options,
      correctIndex: options.indexOf(fact.answer),
      explanation: `${fact.explanation} Verified against ${source.publisher}; source checked ${source.checkedOn}.`,
      category: 'current-affairs',
      subtopic: `${scope}: ${fact.topic}`,
      examTags,
      year: fact.year,
      difficulty: index % 7 === 0 ? 'Hard' : index % 3 === 0 ? 'Medium' : 'Easy',
      sourceId: fact.sourceId,
      sourceUrl: source.url,
      verificationStatus: 'source-aligned',
      verificationMethod: 'Answer mapped to one distinct curated fact checked against the linked official or intergovernmental source.',
      submittedBy: 'MEQSA Current Affairs Research Desk',
    };
  });
}

/**
 * Compatibility aliases retained for existing imports.
 * These arrays now contain distinct source-aligned questions only. Their
 * lengths must never be padded with paraphrased duplicates.
 */
export const PAKISTAN_CURRENT_AFFAIRS_1000 = createBank('Pakistan', pakistanFacts);
export const WORLD_CURRENT_AFFAIRS_1000 = createBank('World', worldFacts);
export const CURRENT_AFFAIRS_2000 = [...PAKISTAN_CURRENT_AFFAIRS_1000, ...WORLD_CURRENT_AFFAIRS_1000];

export function validateCurrentAffairsBank() {
  const errors: string[] = [];
  const ids = new Set<string>();
  const questions = new Set<string>();
  for (const item of CURRENT_AFFAIRS_2000) {
    if (ids.has(item.id)) errors.push(`Duplicate id: ${item.id}`);
    if (questions.has(item.question)) errors.push(`Duplicate question: ${item.id}`);
    ids.add(item.id); questions.add(item.question);
    if (item.options.length !== 4 || new Set(item.options).size !== 4) errors.push(`Invalid options: ${item.id}`);
    if (item.correctIndex < 0 || item.correctIndex > 3) errors.push(`Invalid answer: ${item.id}`);
    if (!item.sourceId || !item.sourceUrl || item.verificationStatus !== 'source-aligned') errors.push(`Missing provenance: ${item.id}`);
    for (const exam of ['STS', 'SPSC', 'FPSC', 'NTS', 'PTS']) if (!item.examTags?.includes(exam)) errors.push(`Missing ${exam} tag: ${item.id}`);
  }
  return { total: CURRENT_AFFAIRS_2000.length, pakistan: PAKISTAN_CURRENT_AFFAIRS_1000.length, world: WORLD_CURRENT_AFFAIRS_1000.length, sources: CURRENT_AFFAIRS_SOURCES.length, errors };
}
