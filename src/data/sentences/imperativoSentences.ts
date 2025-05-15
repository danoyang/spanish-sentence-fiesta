import { Sentence } from "@/types/game";

// Imperativo (Imperative) sentences
export const imperativoSentences: Sentence[] = [
  // Imperativo | Yo | Yo mostre muy bien ahora.
  {
    id: 57,
    chinese: "现在把设计展示出来。",
    spanish: "Tú muestra el diseño ahora mismo.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "命令针对第二人称单数。" }
        ]
      },
      {
        correctWord: "muestra",
        options: [
          { text: "muestra", isCorrect: true, correctTip: "肯定命令式：mostrar → muestra。", incorrectTip: "" },
          { text: "mostra", isCorrect: false, correctTip: "", incorrectTip: "拼写错误。"},
          { text: "muestro", isCorrect: false, correctTip: "", incorrectTip: "现在时，不是命令式。" }
        ]
      },
      {
        correctWord: "el diseño",
        options: [
          { text: "el diseño", isCorrect: true, correctTip: "展示对象。", incorrectTip: "" },
          { text: "la ventana", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "ahora mismo",
        options: [
          { text: "ahora mismo", isCorrect: true, correctTip: "“立刻、马上”。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "表示明天。" }
        ]
      }
    ],
    completed: false
  },

  // Imperativo | Tú — nadar
  {
    id: 58,
    chinese: "现在游二十米。",
    spanish: "Tú nada veinte metros ahora.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "Usted", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "nada",
        options: [
          { text: "nada", isCorrect: true, correctTip: "命令式：nadar → nada。", incorrectTip: "" },
          { text: "nades", isCorrect: false, correctTip: "", incorrectTip: "否定命令或虚拟式，不符肯定命令。"}
        ]
      },
      {
        correctWord: "veinte metros",
        options: [
          { text: "veinte metros", isCorrect: true, correctTip: "距离补语。", incorrectTip: "" },
          { text: "cincuenta metros", isCorrect: false, correctTip: "", incorrectTip: "距离不同。" }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { text: "ahora", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "luego", isCorrect: false, correctTip: "", incorrectTip: "表示随后。" }
        ]
      }
    ],
    completed: false
  },

  // Imperativo | Usted — presentar
  {
    id: 59,
    chinese: "现在请您提交报告。",
    spanish: "Usted presente el informe ahora.",
    wordChoices: [
      {
        correctWord: "Usted",
        options: [
          { text: "Usted", isCorrect: true, correctTip: "\"Usted\"＝您。", incorrectTip: "" },
          { text: "Él", isCorrect: false, correctTip: "", incorrectTip: "命令应对您(usted)。" }
        ]
      },
      {
        correctWord: "presente",
        options: [
          { text: "presente", isCorrect: true, correctTip: "命令式：presentar → presente (usted)。", incorrectTip: "" },
          { text: "presenta", isCorrect: false, correctTip: "", incorrectTip: "这是tú命令或 él 现在时。" }
        ]
      },
      {
        correctWord: "el informe",
        options: [
          { text: "el informe", isCorrect: true, correctTip: "对象：报告。", incorrectTip: "" },
          { text: "la factura", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { text: "ahora", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "时间不同。" }
        ]
      }
    ],
    completed: false
  },

  // Imperativo | Nosotros — quedar(se)
  {
    id: 60,
    chinese: "现在我们先待在这里。",
    spanish: "Quedémonos aquí un momento ahora.",
    wordChoices: [
      {
        correctWord: "quedémonos",
        options: [
          { text: "quedémonos", isCorrect: true, correctTip: "命令式第一人称复数：quedarse → quedémonos。", incorrectTip: "" },
          { text: "quedamos", isCorrect: false, correctTip: "", incorrectTip: "现在时，不是命令式。" },
          { text: "quedémonosnos", isCorrect: false, correctTip: "", incorrectTip: "拼写错误。"}
        ]
      },
      {
        correctWord: "aquí",
        options: [
          { text: "aquí", isCorrect: true, correctTip: "地点副词：这里。", incorrectTip: "" },
          { text: "allí", isCorrect: false, correctTip: "", incorrectTip: "那里，地点不同。" }
        ]
      },
      {
        correctWord: "un momento",
        options: [
          { text: "un momento", isCorrect: true, correctTip: "“一会儿”。", incorrectTip: "" },
          { text: "toda la noche", isCorrect: false, correctTip: "", incorrectTip: "时间长度不同。" }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { text: "ahora", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "luego", isCorrect: false, correctTip: "", incorrectTip: "随后。" }
        ]
      }
    ],
    completed: false
  },

  // Imperativo | Vosotros — recordar
  {
    id: 61,
    chinese: "现在你们记住密码。",
    spanish: "Vosotros recordad la contraseña ahora.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "recordad",
        options: [
          { text: "recordad", isCorrect: true, correctTip: "命令式二复：recordad。", incorrectTip: "" },
          { text: "recordáis", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "la contraseña",
        options: [
          { text: "la contraseña", isCorrect: true, correctTip: "“密码”。", incorrectTip: "" },
          { text: "el horario", isCorrect: false, correctTip: "", incorrectTip: "记忆对象不同。" }
        ]
      },
      {
        correctWord: "现在",
        options: [
          { text: "ahora", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "después", isCorrect: false, correctTip: "", incorrectTip: "之后。" }
        ]
      }
    ],
    completed: false
  },

  // Imperativo | Ustedes — tomar
  {
    id: 62,
    chinese: "现在请各位拿好文件。",
    spanish: "Ustedes tomen los documentos ahora.",
    wordChoices: [
      {
        correctWord: "Ustedes",
        options: [
          { text: "Ustedes", isCorrect: true, correctTip: "\"Ustedes\"＝各位/你们(拉美)。", incorrectTip: "" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "命令对象应为Ustedes。" }
        ]
      },
      {
        correctWord: "tomen",
        options: [
          { text: "tomen", isCorrect: true, correctTip: "命令式三复：tomar → tomen。", incorrectTip: "" },
          { text: "toman", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "los documentos",
        options: [
          { text: "los documentos", isCorrect: true, correctTip: "“文件”。", incorrectTip: "" },
          { text: "las llaves", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { text: "ahora", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "时间不同。" }
        ]
      }
    ],
    completed: false
  }
];
