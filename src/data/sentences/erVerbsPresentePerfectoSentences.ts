import { Sentence } from "@/types/game";

// -ER Verbs in Presente Perfecto (Present Perfect) Tense
export const erVerbsPresentePerfectoSentences: Sentence[] = [
  // Presente perfecto | Yo | Yo he movido muy bien esta semana.
  {
    id: 99,
    chinese: "这周我把自己房间的家具搬动了。",
    spanish: "Yo he movido los muebles de mi habitación esta semana.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: "\"Yo\"表示\"我\"，此句主语。",
            incorrectTip: ""
          },
          {
            text: "Tú",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Tú\"表示\"你\"，主语应为\"Yo\"。"
          }
        ]
      },
      {
        correctWord: "he movido",
        options: [
          {
            text: "he movido",
            isCorrect: true,
            correctTip: "第一人称单数的现在完成时：haber (he) + movido。",
            incorrectTip: ""
          },
          {
            text: "has movido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第二人称单数，与主语不符。"
          },
          {
            text: "ha movido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第三人称单数，与主语不符。"
          }
        ]
      },
      {
        correctWord: "los muebles",
        options: [
          {
            text: "los muebles",
            isCorrect: true,
            correctTip: "“los muebles”表示家具，符合句意。",
            incorrectTip: ""
          },
          {
            text: "las ventanas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“las ventanas”是窗户，不符合句意。"
          }
        ]
      }
    ],
    completed: false
  },

  // Tú — volver
  {
    id: 100,
    chinese: "你这周总是早早回家。",
    spanish: "Tú has vuelto a casa temprano esta semana.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称\"Tú\"。" }
        ]
      },
      {
        correctWord: "has vuelto",
        options: [
          {
            text: "has vuelto",
            isCorrect: true,
            correctTip: "第二人称单数的现在完成时：haber (has) + vuelto。",
            incorrectTip: ""
          },
          {
            text: "he vuelto",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第一人称单数，与主语不符。"
          },
          {
            text: "has volvido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "过去分词应为不规则形式“vuelto”。"
          }
        ]
      },
      {
        correctWord: "a casa",
        options: [
          {
            text: "a casa",
            isCorrect: true,
            correctTip: "表示回家，符合句意。",
            incorrectTip: ""
          },
          {
            text: "al cine",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "句子表达回家而非去电影院。"
          }
        ]
      }
    ],
    completed: false
  },

  // Él — correr
  {
    id: 101,
    chinese: "他这周每天跑了五公里。",
    spanish: "Él ha corrido cinco kilómetros cada día esta semana.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "主语应为男性\"Él\"。" }
        ]
      },
      {
        correctWord: "ha corrido",
        options: [
          {
            text: "ha corrido",
            isCorrect: true,
            correctTip: "第三人称单数的现在完成时：haber (ha) + corrido。",
            incorrectTip: ""
          },
          { text: "he corrido", isCorrect: false, correctTip: "", incorrectTip: "第一人称单数，与主语不符。" },
          { text: "has corrido", isCorrect: false, correctTip: "", incorrectTip: "第二人称单数，与主语不符。" }
        ]
      },
      {
        correctWord: "cinco kilómetros",
        options: [
          {
            text: "cinco kilómetros",
            isCorrect: true,
            correctTip: "“五公里”符合句意。",
            incorrectTip: ""
          },
          {
            text: "cincuenta kilómetros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“五十公里”数量不符。"
          }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — morder
  {
    id: 102,
    chinese: "这周我们小心地咬苹果。",
    spanish: "Nosotros hemos mordido la manzana con cuidado esta semana.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称复数\"Nosotros\"。" }
        ]
      },
      {
        correctWord: "hemos mordido",
        options: [
          {
            text: "hemos mordido",
            isCorrect: true,
            correctTip: "第一人称复数的现在完成时：haber (hemos) + mordido。",
            incorrectTip: ""
          },
          { text: "han mordido", isCorrect: false, correctTip: "", incorrectTip: "第三人称复数，与主语不符。" },
          { text: "habéis mordido", isCorrect: false, correctTip: "", incorrectTip: "第二人称复数，与主语不符。" }
        ]
      },
      {
        correctWord: "la manzana",
        options: [
          {
            text: "la manzana",
            isCorrect: true,
            correctTip: "表示苹果，符合句意。",
            incorrectTip: ""
          },
          {
            text: "la mesa",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“la mesa”是桌子，语境不符。"
          }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — extender
  {
    id: 103,
    chinese: "你们这周把比萨面团擀开了。",
    spanish: "Vosotros habéis extendido la masa para la pizza esta semana.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"。", incorrectTip: "" },
          { text: "Nosotros", isCorrect: false, correctTip: "", incorrectTip: "主语应为\"Vosotros\"。" }
        ]
      },
      {
        correctWord: "habéis extendido",
        options: [
          {
            text: "habéis extendido",
            isCorrect: true,
            correctTip: "第二人称复数的现在完成时：haber (habéis) + extendido。",
            incorrectTip: ""
          },
          { text: "hemos extendido", isCorrect: false, correctTip: "", incorrectTip: "第一人称复数，与主语不符。" },
          { text: "han extendido", isCorrect: false, correctTip: "", incorrectTip: "第三人称复数，与主语不符。" }
        ]
      },
      {
        correctWord: "la masa",
        options: [
          {
            text: "la masa",
            isCorrect: true,
            correctTip: "“la masa”指面团，符合句意。",
            incorrectTip: ""
          },
          {
            text: "la taza",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“la taza”是杯子，语境不符。"
          }
        ]
      }
    ],
    completed: false
  },

  // Ellos — crecer
  {
    id: 104,
    chinese: "他们这周长高了几厘米。",
    spanish: "Ellos han crecido varios centímetros esta semana.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "主语应为阳性/混合性“Ellos”。" }
        ]
      },
      {
        correctWord: "han crecido",
        options: [
          {
            text: "han crecido",
            isCorrect: true,
            correctTip: "第三人称复数的现在完成时：haber (han) + crecido。",
            incorrectTip: ""
          },
          { text: "hemos crecido", isCorrect: false, correctTip: "", incorrectTip: "第一人称复数，与主语不符。" },
          { text: "habéis crecido", isCorrect: false, correctTip: "", incorrectTip: "第二人称复数，与主语不符。" }
        ]
      },
      {
        correctWord: "varios centímetros",
        options: [
          {
            text: "varios centímetros",
            isCorrect: true,
            correctTip: "“几厘米”符合句意。",
            incorrectTip: ""
          },
          {
            text: "muchos metros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“很多米”明显夸大，不符合常理。"
          }
        ]
      }
    ],
    completed: false
  }
];