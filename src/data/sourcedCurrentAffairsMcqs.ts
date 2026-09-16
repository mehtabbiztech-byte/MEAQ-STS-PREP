import type { MCQ } from '../types';

// Dated, source-linked events. Do not turn these into open-ended "current" officeholder claims.
type Fact = { question: string; options: string[]; correctIndex: number; explanation: string; sourceUrl: string; year: number; subtopic: string };
const climate = 'https://unfccc.int/process/bodies/supreme-bodies/conference-of-the-parties-cop';
const cricket25 = 'https://www.icc-cricket.com/media-releases/rohit-leads-india-to-icc-men-s-champions-trophy-glory';
const cricket24 = 'https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/live-india-and-south-africa-face-off-in-t20-world-cup-final';
const fifa = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-2026-hosts-cities-dates-usa-mexico-canada';
const un = 'https://main.un.org/securitycouncil/en/content/current-members';
const peace24 = 'https://www.nobelprize.org/prizes/peace/2024/summary/';
const peace25 = 'https://www.nobelprize.org/prizes/peace/2025/summary/';
const lit24 = 'https://www.nobelprize.org/prizes/literature/2024/summary/';
const lit25 = 'https://www.nobelprize.org/prizes/literature/2025/summary/';

const facts: Fact[] = [
  { question: 'Which city hosted the UN climate conference COP29 in 2024?', options: ['Dubai', 'Baku', 'Belém', 'Paris'], correctIndex: 1, explanation: 'COP29 took place in Baku, Azerbaijan, in November 2024.', sourceUrl: climate, year: 2024, subtopic: 'Climate summits' },
  { question: 'Which country hosted COP29 in 2024?', options: ['Brazil', 'Azerbaijan', 'United Arab Emirates', 'Egypt'], correctIndex: 1, explanation: 'Azerbaijan hosted COP29 in Baku.', sourceUrl: climate, year: 2024, subtopic: 'Climate summits' },
  { question: 'Which city hosted COP30 in 2025?', options: ['Baku', 'Belém', 'Dubai', 'Glasgow'], correctIndex: 1, explanation: 'The 2025 conference took place in Belém, Brazil.', sourceUrl: climate, year: 2025, subtopic: 'Climate summits' },
  { question: 'Which country hosted COP30 in 2025?', options: ['Brazil', 'Azerbaijan', 'Egypt', 'Germany'], correctIndex: 0, explanation: 'Brazil hosted COP30 in the city of Belém.', sourceUrl: climate, year: 2025, subtopic: 'Climate summits' },
  { question: 'Which city hosted COP28 in 2023?', options: ['Dubai', 'Baku', 'Belém', 'Sharm el-Sheikh'], correctIndex: 0, explanation: 'The 2023 UN climate conference COP28 was held in Dubai, United Arab Emirates.', sourceUrl: climate, year: 2023, subtopic: 'Climate summits' },
  { question: 'Which team won the ICC Men’s Champions Trophy in 2025?', options: ['India', 'Pakistan', 'New Zealand', 'Australia'], correctIndex: 0, explanation: 'India defeated New Zealand in the 2025 final.', sourceUrl: cricket25, year: 2025, subtopic: 'Sports & awards' },
  { question: 'Which team did India defeat in the 2025 Champions Trophy final?', options: ['Pakistan', 'Australia', 'New Zealand', 'South Africa'], correctIndex: 2, explanation: 'India won the final against New Zealand.', sourceUrl: cricket25, year: 2025, subtopic: 'Sports & awards' },
  { question: 'Who captained India to the 2025 ICC Champions Trophy title?', options: ['Virat Kohli', 'Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah'], correctIndex: 1, explanation: 'Rohit Sharma led India to the 2025 title.', sourceUrl: cricket25, year: 2025, subtopic: 'Sports & awards' },
  { question: 'Which team won the ICC Men’s T20 World Cup in 2024?', options: ['South Africa', 'England', 'India', 'Australia'], correctIndex: 2, explanation: 'India won the 2024 final against South Africa.', sourceUrl: cricket24, year: 2024, subtopic: 'Sports & awards' },
  { question: 'Which team was runner-up in the 2024 Men’s T20 World Cup?', options: ['New Zealand', 'South Africa', 'England', 'Pakistan'], correctIndex: 1, explanation: 'South Africa lost the final to India in Barbados.', sourceUrl: cricket24, year: 2024, subtopic: 'Sports & awards' },
  { question: 'Where was the 2024 Men’s T20 World Cup final played?', options: ['Dubai', 'Barbados', 'Lahore', 'London'], correctIndex: 1, explanation: 'India played South Africa in the final in Barbados.', sourceUrl: cricket24, year: 2024, subtopic: 'Sports & awards' },
  { question: 'Which three countries co-hosted the FIFA World Cup in 2026?', options: ['Canada, Mexico and United States', 'Spain, Portugal and Morocco', 'France, Germany and Italy', 'Brazil, Argentina and Uruguay'], correctIndex: 0, explanation: 'Canada, Mexico and the United States were the three 2026 hosts.', sourceUrl: fifa, year: 2026, subtopic: 'Sports & awards' },
  { question: 'How many national teams participated in the 2026 FIFA World Cup?', options: ['24', '32', '40', '48'], correctIndex: 3, explanation: 'The 2026 World Cup expanded to 48 participating teams.', sourceUrl: fifa, year: 2026, subtopic: 'Sports & awards' },
  { question: 'Which country held a non-permanent seat on the UN Security Council for the 2025–26 term?', options: ['Pakistan', 'Nepal', 'Bangladesh', 'Sri Lanka'], correctIndex: 0, explanation: 'Pakistan’s two-year Security Council term ran through the end of 2026.', sourceUrl: un, year: 2025, subtopic: 'Pakistan & international organisations' },
  { question: 'How long is a standard elected term for a non-permanent UN Security Council member?', options: ['One year', 'Two years', 'Three years', 'Five years'], correctIndex: 1, explanation: 'The UN Security Council lists ten non-permanent members elected for two-year terms.', sourceUrl: un, year: 2025, subtopic: 'Pakistan & international organisations' },
  { question: 'Which Japanese organisation received the Nobel Peace Prize in 2024?', options: ['Nihon Hidankyo', 'JICA', 'UNESCO', 'Red Cross Japan'], correctIndex: 0, explanation: 'Nihon Hidankyo, a Japanese survivors’ organisation, received the 2024 Nobel Peace Prize.', sourceUrl: peace24, year: 2024, subtopic: 'Sports & awards' },
  { question: 'Who received the Nobel Peace Prize in 2025?', options: ['Han Kang', 'Maria Corina Machado', 'Nihon Hidankyo', 'László Krasznahorkai'], correctIndex: 1, explanation: 'The 2025 Nobel Peace Prize was awarded to Maria Corina Machado.', sourceUrl: peace25, year: 2025, subtopic: 'Sports & awards' },
  { question: 'For the people of which country was the 2025 Nobel Peace Prize laureate Maria Corina Machado recognised?', options: ['Chile', 'Venezuela', 'Colombia', 'Peru'], correctIndex: 1, explanation: 'The Nobel committee recognised her work for democratic rights in Venezuela.', sourceUrl: peace25, year: 2025, subtopic: 'Sports & awards' },
  { question: 'Who won the Nobel Prize in Literature in 2024?', options: ['Han Kang', 'Jon Fosse', 'Annie Ernaux', 'László Krasznahorkai'], correctIndex: 0, explanation: 'South Korean author Han Kang received the 2024 literature prize.', sourceUrl: lit24, year: 2024, subtopic: 'Sports & awards' },
  { question: 'Who won the Nobel Prize in Literature in 2025?', options: ['Han Kang', 'Abdulrazak Gurnah', 'László Krasznahorkai', 'Jon Fosse'], correctIndex: 2, explanation: 'Hungarian writer László Krasznahorkai received the 2025 literature prize.', sourceUrl: lit25, year: 2025, subtopic: 'Sports & awards' },
];

export const SOURCED_CURRENT_AFFAIRS_MCQS: MCQ[] = facts.map((fact, index) => ({
  ...fact, id: `sourced-ca-${String(index + 1).padStart(3, '0')}`,
  category: 'current-affairs', examTags: ['STS', 'CSS', 'SPSC'], difficulty: 'Medium',
  sourceCheckedOn: '2026-09-12',
}));
