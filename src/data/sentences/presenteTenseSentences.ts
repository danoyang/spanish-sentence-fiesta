
import { Sentence } from "@/types/game";

// 一般现在时动词变位句子 (6-11)
export const presenteTenseSentences: Sentence[] = [
  // Yo — hablar
{
  id: 6,
  chinese: "我今天说话很有自信。",
  spanish: "Yo hablo con confianza hoy.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称 \"Yo\"，不是第二人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称 \"Yo\"，不是第三人称。"}
      ]
    },
    {
      correctWord: "hablo",
      options: [
        { text: "hablo",  isCorrect: true,  correctTip: "\"hablar\" 第一人称现在时变位。", incorrectTip: "" },
        { text: "habla",  isCorrect: false, correctTip: "", incorrectTip: "第三人称或 Usted 形式，与主语不符。" },
        { text: "hablas", isCorrect: false, correctTip: "", incorrectTip: "第二人称形式，与主语不符。" }
      ]
    },
    {
      correctWord: "con confianza hoy",
      options: [
        { text: "con confianza hoy",  isCorrect: true,  correctTip: "自然表达：今天说话很有自信。", incorrectTip: "" },
        { text: "hoy con confianza",  isCorrect: false, correctTip: "", incorrectTip: "时间状语放在末尾更自然，原顺序不常用。" },
        { text: "con confianza mañana",isCorrect: false, correctTip: "", incorrectTip: "时间状语应为 \"hoy\"（今天），不是 \"mañana\"（明天）。"}
      ]
    }
  ],
  completed: false
},

// Tú — trabajar
{
  id: 7,
  chinese: "你今天在家办公。",
  spanish: "Tú trabajas desde casa hoy.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",  isCorrect: true,  correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" },
        { text: "Yo",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称 \"Tú\"，不是第一人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称 \"Tú\"，不是第三人称。"}
      ]
    },
    {
      correctWord: "trabajas",
      options: [
        { text: "trabajas",   isCorrect: true,  correctTip: "\"trabajar\" 第二人称现在时。", incorrectTip: "" },
        { text: "trabajamos", isCorrect: false, correctTip: "", incorrectTip: "第一人称复数，与主语不符。" },
        { text: "trabaja",    isCorrect: false, correctTip: "", incorrectTip: "第三人称形式，与主语不符。" }
      ]
    },
    {
      correctWord: "desde casa hoy",
      options: [
        { text: "desde casa hoy", isCorrect: true,  correctTip: "常见表达：在家工作。", incorrectTip: "" },
        { text: "en la casa hoy", isCorrect: false, correctTip: "", incorrectTip: "应使用介词 \"desde\" 表示从家里工作，而非 \"en\"。"},
        { text: "desde casa ayer",isCorrect: false, correctTip: "", incorrectTip: "时间状语应为 \"hoy\"（今天），不是 \"ayer\"（昨天）。"}
      ]
    }
  ],
  completed: false
},

// Él — estudiar
{
  id: 8,
  chinese: "他今天在备考。",
  spanish: "Él estudia para el examen hoy.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",  isCorrect: true,  correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" },
        { text: "Ella",isCorrect: false, correctTip: "", incorrectTip: "句子主语为男性 \"Él\"，不是 \"Ella\"。" },
        { text: "Yo",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第三人称 \"Él\"，不是第一人称。"}
      ]
    },
    {
      correctWord: "estudia",
      options: [
        { text: "estudia",  isCorrect: true,  correctTip: "\"estudiar\" 第三人称现在时。", incorrectTip: "" },
        { text: "estudio",  isCorrect: false, correctTip: "", incorrectTip: "第一人称形式，与主语不符。" },
        { text: "estudias", isCorrect: false, correctTip: "", incorrectTip: "第二人称形式，与主语不符。" }
      ]
    },
    {
      correctWord: "para el examen hoy",
      options: [
        { text: "para el examen hoy",  isCorrect: true,  correctTip: "说明学习目的：备考。", incorrectTip: "" },
        { text: "hoy para el examen",  isCorrect: false, correctTip: "", incorrectTip: "语序不自然，时间状语通常放句末。" },
        { text: "para un examen mañana",isCorrect: false, correctTip: "", incorrectTip: "时间与原句 \"hoy\" 不符；且不定冠词改变了含义。"}
      ]
    }
  ],
  completed: false
},

// Nosotros — caminar
{
  id: 9,
  chinese: "我们今天在公园散步。",
  spanish: "Nosotros caminamos por el parque hoy.",
  wordChoices: [
    {
      correctWord: "Nosotros",
      options: [
        { text: "Nosotros", isCorrect: true,  correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" },
        { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称复数 \"Nosotros\"，不是 \"Vosotros\"。" },
        { text: "Ellos",    isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称复数 \"Nosotros\"，不是第三人称复数。"}
      ]
    },
    {
      correctWord: "caminamos",
      options: [
        { text: "caminamos", isCorrect: true,  correctTip: "\"caminar\" 第一人称复数现在时。", incorrectTip: "" },
        { text: "camina",    isCorrect: false, correctTip: "", incorrectTip: "第三人称单数，与主语不符。" },
        { text: "camináis",  isCorrect: false, correctTip: "", incorrectTip: "第二人称复数，与主语不符。" }
      ]
    },
    {
      correctWord: "por el parque hoy",
      options: [
        { text: "por el parque hoy", isCorrect: true,  correctTip: "自然表达：在公园散步。", incorrectTip: "" },
        { text: "en el parque hoy",  isCorrect: false, correctTip: "", incorrectTip: "介词应为 \"por\"（穿行范围），而不是 \"en\"。"},
        { text: "por el parque ayer",isCorrect: false, correctTip: "", incorrectTip: "时间状语应为 \"hoy\"，不是 \"ayer\"。"}
      ]
    }
  ],
  completed: false
},

// Vosotros — mirar
{
  id: 10,
  chinese: "你们今天在看日落。",
  spanish: "Vosotros miráis la puesta de sol hoy.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称复数 \"Vosotros\"，不是 \"Nosotros\"。" },
        { text: "Ellos",    isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称复数 \"Vosotros\"，不是第三人称复数。"}
      ]
    },
    {
      correctWord: "miráis",
      options: [
        { text: "miráis",  isCorrect: true,  correctTip: "\"mirar\" 第二人称复数现在时。", incorrectTip: "" },
        { text: "miras",   isCorrect: false, correctTip: "", incorrectTip: "第二人称单数，与主语不符。" },
        { text: "miramos", isCorrect: false, correctTip: "", incorrectTip: "第一人称复数，与主语不符。" }
      ]
    },
    {
      correctWord: "la puesta de sol hoy",
      options: [
        { text: "la puesta de sol hoy", isCorrect: true,  correctTip: "正在观赏日落。", incorrectTip: "" },
        { text: "el puesta de sol hoy", isCorrect: false, correctTip: "", incorrectTip: "冠词性别应为阴性 \"la\"，不是阳性 \"el\"。" },
        { text: "la puesta de sol mañana", isCorrect: false, correctTip: "", incorrectTip: "时间状语应为 \"hoy\"（今天），不是 \"mañana\"。"}
      ]
    }
  ],
  completed: false
},

// Ellos — escuchar
{
  id: 11,
  chinese: "他们今天在课堂上听音乐。",
  spanish: "Ellos escuchan música en clase hoy.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",   isCorrect: true,  correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
        { text: "Ellas",   isCorrect: false, correctTip: "", incorrectTip: "原句主语包含男性，应使用 \"Ellos\" 而非 \"Ellas\"。"},
        { text: "Nosotros",isCorrect: false, correctTip: "", incorrectTip: "主语应为第三人称复数 \"Ellos\"，不是第一人称复数。"}
      ]
    },
    {
      correctWord: "escuchan",
      options: [
        { text: "escuchan",  isCorrect: true,  correctTip: "\"escuchar\" 第三人称复数现在时。", incorrectTip: "" },
        { text: "escucho",   isCorrect: false, correctTip: "", incorrectTip: "第一人称形式，与主语不符。" },
        { text: "escucháis", isCorrect: false, correctTip: "", incorrectTip: "第二人称复数形式，与主语不符。" }
      ]
    },
    {
      correctWord: "música en clase hoy",
      options: [
        { text: "música en clase hoy",     isCorrect: true,  correctTip: "更贴近生活：课堂上听音乐。", incorrectTip: "" },
        { text: "música en la clase hoy",  isCorrect: false, correctTip: "", incorrectTip: "西班牙语口语通常省略 \"la\"，加定冠词显得累赘。" },
        { text: "música en clase ayer",    isCorrect: false, correctTip: "", incorrectTip: "时间状语应为 \"hoy\"，不是 \"ayer\"。"}
      ]
    }
  ],
  completed: false
}
];