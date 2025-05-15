import { Sentence } from "@/types/game";

// -IR动词 过去时句子
export const irVerbsPreteriteSentences: Sentence[] = [
  /* Pretérito | Yo */
  {
    id: 81,
    chinese: "我昨天慷慨地分享了。",
    spanish: "Yo compartí generosamente ayer.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "主语“我”。", incorrectTip: "" },
          { text: "Me", isCorrect: false, correctTip: "", incorrectTip: "“Me”是宾格形式，不作主语。" }
        ]
      },
      {
        correctWord: "compartí",
        options: [
          { text: "compartí", isCorrect: true, correctTip: "动词“compartir”第一人称单数简单过去时。", incorrectTip: "" },
          { text: "comparto", isCorrect: false, correctTip: "", incorrectTip: "现在时形式。" }
        ]
      },
      {
        correctWord: "generosamente",
        options: [
          { text: "generosamente", isCorrect: true, correctTip: "副词，表示“慷慨地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已改用更自然的副词表达。" },
          { text: "bien generoso", isCorrect: false, correctTip: "", incorrectTip: "结构不当，应使用副词形式。"}
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "“ayer”表示“昨天”，与过去时态对应。", incorrectTip: "" },
          { text: "hoy", isCorrect: false, correctTip: "", incorrectTip: "与过去时间不符。" }
        ]
      }
    ],
    completed: false
  },

  /* Pretérito | Tú */
  {
    id: 82,
    chinese: "你昨天顺利地完成了任务。",
    spanish: "Tú cumpliste con éxito ayer.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "主语“你”。", incorrectTip: "" },
          { text: "Te", isCorrect: false, correctTip: "", incorrectTip: "宾格形式，不作主语。" }
        ]
      },
      {
        correctWord: "cumpliste",
        options: [
          { text: "cumpliste", isCorrect: true, correctTip: "动词“cumplir”第二人称单数简单过去时。", incorrectTip: "" },
          { text: "cumples", isCorrect: false, correctTip: "", incorrectTip: "现在时形式。" }
        ]
      },
      {
        correctWord: "con éxito",
        options: [
          { text: "con éxito", isCorrect: true, correctTip: "短语，表示“成功地/顺利地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更具体表达。" },
          { text: "sin éxito", isCorrect: false, correctTip: "", incorrectTip: "含义相反。" }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "表示“昨天”，符合过去时。", incorrectTip: "" },
          { text: "hoy", isCorrect: false, correctTip: "", incorrectTip: "与过去时间不符。" }
        ]
      }
    ],
    completed: false
  },

  /* Pretérito | Él */
  {
    id: 83,
    chinese: "他昨天迅速地做出了决定。",
    spanish: "Él decidió rápidamente ayer.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "主语“他”。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "decidió",
        options: [
          { text: "decidió", isCorrect: true, correctTip: "动词“decidir”第三人称单数简单过去时。", incorrectTip: "" },
          { text: "decide", isCorrect: false, correctTip: "", incorrectTip: "现在时形式。" }
        ]
      },
      {
        correctWord: "rápidamente",
        options: [
          { text: "rápidamente", isCorrect: true, correctTip: "副词，表示“迅速地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更具体副词。"},
          { text: "con calma", isCorrect: false, correctTip: "", incorrectTip: "含义相反。" }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "时间状语“昨天”。", incorrectTip: "" },
          { text: "antes", isCorrect: false, correctTip: "", incorrectTip: "不够具体。" }
        ]
      }
    ],
    completed: false
  },

  /* Pretérito | Nosotros */
  {
    id: 84,
    chinese: "我们昨天详细地进行了描述。",
    spanish: "Nosotros describimos con detalle ayer.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "主语“我们”。", incorrectTip: "" },
          { text: "Nos", isCorrect: false, correctTip: "", incorrectTip: "宾格形式。" }
        ]
      },
      {
        correctWord: "describimos",
        options: [
          { text: "describimos", isCorrect: true, correctTip: "动词“describir”第一人称复数简单过去时。", incorrectTip: "" },
          { text: "describíamos", isCorrect: false, correctTip: "", incorrectTip: "未完成过去时形式。" }
        ]
      },
      {
        correctWord: "con detalle",
        options: [
          { text: "con detalle", isCorrect: true, correctTip: "短语，表示“详细地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已用更自然表达替换。" },
          { text: "brevemente", isCorrect: false, correctTip: "", incorrectTip: "含义不同。" }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "表示“昨天”，符合过去时。", incorrectTip: "" },
          { text: "hoy", isCorrect: false, correctTip: "", incorrectTip: "与过去时不符。" }
        ]
      }
    ],
    completed: false
  },

  /* Pretérito | Vosotros */
  {
    id: 85,
    chinese: "你们昨天偶然地发现了。",
    spanish: "Vosotros descubristeis por casualidad ayer.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "主语“你们”。", incorrectTip: "" },
          { text: "Ustedes", isCorrect: false, correctTip: "", incorrectTip: "变位不符。" }
        ]
      },
      {
        correctWord: "descubristeis",
        options: [
          { text: "descubristeis", isCorrect: true, correctTip: "动词“descubrir”第二人称复数简单过去时。", incorrectTip: "" },
          { text: "descubrieron", isCorrect: false, correctTip: "", incorrectTip: "第三人称形式。" }
        ]
      },
      {
        correctWord: "por casualidad",
        options: [
          { text: "por casualidad", isCorrect: true, correctTip: "短语，表示“偶然地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更口语表达。" },
          { text: "a propósito", isCorrect: false, correctTip: "", incorrectTip: "含义相反（故意）。" }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "时间状语“昨天”。", incorrectTip: "" },
          { text: "ahora", isCorrect: false, correctTip: "", incorrectTip: "与过去时不符。" }
        ]
      }
    ],
    completed: false
  },

  /* Pretérito | Ellos */
  {
    id: 86,
    chinese: "他们昨天平均地分配了。",
    spanish: "Ellos dividieron en partes iguales ayer.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "主语“他们”。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不同。" }
        ]
      },
      {
        correctWord: "dividieron",
        options: [
          { text: "dividieron", isCorrect: true, correctTip: "动词“dividir”第三人称复数简单过去时。", incorrectTip: "" },
          { text: "dividen", isCorrect: false, correctTip: "", incorrectTip: "现在时形式。" }
        ]
      },
      {
        correctWord: "en partes iguales",
        options: [
          { text: "en partes iguales", isCorrect: true, correctTip: "短语，表示“平均地”。", incorrectTip: "" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "已替换为更精确表达。" },
          { text: "al azar", isCorrect: false, correctTip: "", incorrectTip: "含义不同（随机）。" }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { text: "ayer", isCorrect: true, correctTip: "表示“昨天”，符合过去时。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "与过去时不符。" }
        ]
      }
    ],
    completed: false
  }
];
