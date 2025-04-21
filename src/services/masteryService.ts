import { WordMasteryData } from "@/types/game";

const MASTERY_STORAGE_KEY = 'spanish-sentence-fiesta-mastery';

// 初始掌握度
const INITIAL_MASTERY_LEVEL = 10;
// 正确回答增加的掌握度
const CORRECT_ANSWER_INCREASE = 15;
// 错误回答减少的掌握度
const INCORRECT_ANSWER_DECREASE = 10;
// 一段时间未练习后的掌握度衰减率（每天）
const DECAY_RATE_PER_DAY = 5;

/**
 * 从本地存储加载单词掌握度数据
 */
export const loadMasteryData = (): WordMasteryData[] => {
  try {
    const data = localStorage.getItem(MASTERY_STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to load mastery data:', error);
    return [];
  }
};

/**
 * 保存单词掌握度数据到本地存储
 */
export const saveMasteryData = (data: WordMasteryData[]): void => {
  try {
    localStorage.setItem(MASTERY_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save mastery data:', error);
  }
};

/**
 * 获取单词的当前掌握度
 */
export const getWordMasteryLevel = (wordText: string): number => {
  const masteryData = loadMasteryData();
  const wordData = masteryData.find(item => item.wordText === wordText);
  
  if (!wordData) return INITIAL_MASTERY_LEVEL;
  
  // 计算自上次练习以来的天数，并应用衰减
  const lastPracticed = new Date(wordData.lastPracticed);
  const now = new Date();
  const daysSinceLastPractice = Math.floor((now.getTime() - lastPracticed.getTime()) / (1000 * 60 * 60 * 24));
  
  // 应用衰减
  let decayedMastery = wordData.masteryLevel;
  if (daysSinceLastPractice > 0) {
    decayedMastery = Math.max(INITIAL_MASTERY_LEVEL, 
      wordData.masteryLevel - (daysSinceLastPractice * DECAY_RATE_PER_DAY));
  }
  
  return decayedMastery;
};

/**
 * 更新单词掌握度
 */
export const updateWordMastery = (wordText: string, isCorrect: boolean): number => {
  const masteryData = loadMasteryData();
  const now = new Date().toISOString();
  
  const existingIndex = masteryData.findIndex(item => item.wordText === wordText);
  let currentMastery = existingIndex >= 0 
    ? getWordMasteryLevel(wordText) // 获取计算了衰减后的掌握度
    : INITIAL_MASTERY_LEVEL;
  
  // 根据回答正确与否更新掌握度
  if (isCorrect) {
    currentMastery = Math.min(100, currentMastery + CORRECT_ANSWER_INCREASE);
  } else {
    currentMastery = Math.max(0, currentMastery - INCORRECT_ANSWER_DECREASE);
  }
  
  // 更新数据
  if (existingIndex >= 0) {
    masteryData[existingIndex] = {
      ...masteryData[existingIndex],
      masteryLevel: currentMastery,
      lastPracticed: now
    };
  } else {
    masteryData.push({
      wordText,
      masteryLevel: currentMastery,
      lastPracticed: now
    });
  }
  
  saveMasteryData(masteryData);
  return currentMastery;
};

/**
 * 计算单词掌握度对应的CSS类名
 */
export const getMasteryColorClass = (masteryLevel: number): string => {
  if (masteryLevel >= 90) return 'bg-green-500'; // 高度掌握
  if (masteryLevel >= 70) return 'bg-green-300'; // 较好掌握
  if (masteryLevel >= 50) return 'bg-yellow-300'; // 中等掌握
  if (masteryLevel >= 30) return 'bg-orange-300'; // 初步掌握
  return 'bg-red-300'; // 需要加强
};
