import { Sentence } from "@/types/game";

// -IR动词 现在时句子
export const irVerbsPresenteSentences: Sentence[] = [
  /* Presente | Yo */
  {
    id: 75,
    chinese: "我今天过得很平静。",
    spanish: "Yo vivo con tranquilidad hoy.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "主语“我”。", incorrectTip: "" },
          { text: "Me", isCorrect: false, correctTip: "", incorrectTip: "宾格形式，不作主语。" }
        ]
      },
      {
        correctWord: "vivo",
        options: [
          { text: "vivo", isCorrect: true, correctTip: "\"vivir\"第一人称单数现在时。", incorrectTip: "" },
          { text: "vive", isCorrect: false, correctTip: "", incorrectTip: "第三人称变位，与主语不符。" }
        ]
      },
      {
        correctWord: "con tranquilidad",
        options: [
          { text: "con tranquilidad", isCorrect: true, correctTip: "表示“平静地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "换成更自然的表达。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语“今天”。", incorrectTip: "" },
          { text: "ayer", isCorrect: false, correctTip: "", incorrectTip: "与现在时不符。"}
        ]
      }
    ],
    completed: false
  },

  /* Presente | Tú */
  {
    id: 76,
    chinese: "你今天写得很清楚。",
    spanish: "Tú escribes con claridad hoy.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "主语“你”。", incorrectTip: "" },
          { text: "Te", isCorrect: false, correctTip: "", incorrectTip: "宾格形式，不作主语。"}
        ]
      },
      {
        correctWord: "escribes",
        options: [
          { text: "escribes", isCorrect: true, correctTip: "\"escribir\"第二人称单数现在时。", incorrectTip: "" },
          { text: "escribiste", isCorrect: false, correctTip: "", incorrectTip: "过去时。"}
        ]
      },
      {
        correctWord: "con claridad",
        options: [
          { text: "con claridad", isCorrect: true, correctTip: "表示“清晰地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更日常的表达。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语“今天”。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "将来时才用。"}
        ]
      }
    ],
    completed: false
  },

  /* Presente | Él */
  {
    id: 77,
    chinese: "他今天顺利地开门。",
    spanish: "Él abre sin problemas hoy.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "主语“他”。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。"}
        ]
      },
      {
        correctWord: "abre",
        options: [
          { text: "abre", isCorrect: true, correctTip: "\"abrir\"第三人称单数现在时。", incorrectTip: "" },
          { text: "abro", isCorrect: false, correctTip: "", incorrectTip: "第一人称变位。"}
        ]
      },
      {
        correctWord: "sin problemas",
        options: [
          { text: "sin problemas", isCorrect: true, correctTip: "表示“顺利地、毫无问题”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更自然表达。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语。", incorrectTip: "" },
          { text: "ayer", isCorrect: false, correctTip: "", incorrectTip: "与现在时不符。"}
        ]
      }
    ],
    completed: false
  },

  /* Presente | Nosotros */
  {
    id: 78,
    chinese: "我们今天热情地接待。",
    spanish: "Nosotros recibimos con entusiasmo hoy.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "主语“我们”。", incorrectTip: "" },
          { text: "Nos", isCorrect: false, correctTip: "", incorrectTip: "宾格形式。"}
        ]
      },
      {
        correctWord: "recibimos",
        options: [
          { text: "recibimos", isCorrect: true, correctTip: "\"recibir\"第一人称复数现在时。", incorrectTip: "" },
          { text: "recibimos", isCorrect: false, correctTip: "", incorrectTip: "" }
        ]
      },
      {
        correctWord: "con entusiasmo",
        options: [
          { text: "con entusiasmo", isCorrect: true, correctTip: "表示“热情地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已用更贴近日常的短语替换。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "将来时才用。"}
        ]
      }
    ],
    completed: false
  },

  /* Presente | Vosotros */
  {
    id: 79,
    chinese: "你们今天准时出席。",
    spanish: "Vosotros asistís con puntualidad hoy.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "主语“你们”。", incorrectTip: "" },
          { text: "Ustedes", isCorrect: false, correctTip: "", incorrectTip: "与动词变位不符。"}
        ]
      },
      {
        correctWord: "asistís",
        options: [
          { text: "asistís", isCorrect: true, correctTip: "\"asistir\"第二人称复数现在时。", incorrectTip: "" },
          { text: "asisten", isCorrect: false, correctTip: "", incorrectTip: "第三人称变位。"}
        ]
      },
      {
        correctWord: "con puntualidad",
        options: [
          { text: "con puntualidad", isCorrect: true, correctTip: "表示“准时”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更具体的副词短语。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语。", incorrectTip: "" },
          { text: "siempre", isCorrect: false, correctTip: "", incorrectTip: "含义不同。"}
        ]
      }
    ],
    completed: false
  },

  /* Presente | Ellos */
  {
    id: 80,
    chinese: "他们今天轻松上升。",
    spanish: "Ellos suben sin dificultad hoy.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "主语“他们”。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别信息不同。" }
        ]
      },
      {
        correctWord: "suben",
        options: [
          { text: "suben", isCorrect: true, correctTip: "\"subir\"第三人称复数现在时。", incorrectTip: "" },
          { text: "subieron", isCorrect: false, correctTip: "", incorrectTip: "过去时。"}
        ]
      },
      {
        correctWord: "sin dificultad",
        options: [
          { text: "sin dificultad", isCorrect: true, correctTip: "表示“没有难度地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更自然表达。"}
        ]
      },
      {
        correctWord: "hoy",
        options: [
          { text: "hoy", isCorrect: true, correctTip: "时间状语。", incorrectTip: "" },
          { text: "ayer", isCorrect: false, correctTip: "", incorrectTip: "与现在时不符。"}
        ]
      }
    ],
    completed: false
  }
];
