
import { Sentence } from "@/types/game";

// 未完成过去时动词变位句子 (18-23)
export const imperfectoTenseSentences: Sentence[] = [
  // Imperfecto | Yo | Yo cocinaba muy bien cuando era niño.
  {
    id: 18,
    chinese: "我小时候很会做些简单的菜。",
    spanish: "Yo cocinaba platos sencillos de pequeño.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"＝我。", incorrectTip: "" },
          { text: "Tú", isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。" }
        ]
      },
      {
        correctWord: "cocinaba",
        options: [
          { text: "cocinaba", isCorrect: true, correctTip: "未完成过去时：yo cocinaba。", incorrectTip: "" },
          { text: "cociné", isCorrect: false, correctTip: "", incorrectTip: "简单过去时，不符时态。" }
        ]
      },
      {
        correctWord: "platos sencillos",
        options: [
          { text: "platos sencillos", isCorrect: true, correctTip: "“简单的菜”。", incorrectTip: "" },
          { text: "comida rápida", isCorrect: false, correctTip: "", incorrectTip: "含义不同。" },
          { text: "postres caros", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "de pequeño",
        options: [
          { text: "de pequeño", isCorrect: true, correctTip: "常用表达“小时候”。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "表示将来时间。" }
        ]
      }
    ],
    completed: false
  },

  // Tú — bailar
  {
    id: 19,
    chinese: "你小时候跳舞特别棒。",
    spanish: "Tú bailabas de maravilla de niño.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "bailabas",
        options: [
          { text: "bailabas", isCorrect: true, correctTip: "未完成过去时：tú bailabas。", incorrectTip: "" },
          { text: "bailaste", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "de maravilla",
        options: [
          { text: "de maravilla", isCorrect: true, correctTip: "“非常棒地”。", incorrectTip: "" },
          { text: "regular", isCorrect: false, correctTip: "", incorrectTip: "表示一般般。" }
        ]
      },
      {
        correctWord: "de niño",
        options: [
          { text: "de niño", isCorrect: true, correctTip: "“小时候”。", incorrectTip: "" },
          { text: "ahora", isCorrect: false, correctTip: "", incorrectTip: "表示现在。" }
        ]
      }
    ],
    completed: false
  },

  // Él — cantar
  {
    id: 20,
    chinese: "他小时候总是唱得很动听。",
    spanish: "Él cantaba muy bonito cuando era niño.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"＝他。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "cantaba",
        options: [
          { text: "cantaba", isCorrect: true, correctTip: "未完成过去时：él cantaba。", incorrectTip: "" },
          { text: "cantó", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "muy bonito",
        options: [
          { text: "muy bonito", isCorrect: true, correctTip: "“很动听”。", incorrectTip: "" },
          { text: "muy alto", isCorrect: false, correctTip: "", incorrectTip: "形容词不同。" }
        ]
      },
      {
        correctWord: "cuando era niño",
        options: [
          { text: "cuando era niño", isCorrect: true, correctTip: "时间背景。", incorrectTip: "" },
          { text: "mañana", isCorrect: false, correctTip: "", incorrectTip: "将来时间。" }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — limpiar
  {
    id: 21,
    chinese: "我们小时候打扫得很仔细。",
    spanish: "Nosotros limpiábamos a fondo cuando éramos niños.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "limpiábamos",
        options: [
          { text: "limpiábamos", isCorrect: true, correctTip: "未完成过去时：nosotros limpiábamos。", incorrectTip: "" },
          { text: "limpiamos", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "a fondo",
        options: [
          { text: "a fondo", isCorrect: true, correctTip: "“彻底地、仔细地”。", incorrectTip: "" },
          { text: "por encima", isCorrect: false, correctTip: "", incorrectTip: "意为“走马观花”，含义相反。" }
        ]
      },
      {
        correctWord: "cuando éramos niños",
        options: [
          { text: "cuando éramos niños", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "cuando seremos adultos", isCorrect: false, correctTip: "", incorrectTip: "时间不符。" }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — tirar
  {
    id: 22,
    chinese: "你们小时候投掷球非常准。",
    spanish: "Vosotros tirabais la pelota con precisión de pequeños.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "tirabais",
        options: [
          { text: "tirabais", isCorrect: true, correctTip: "未完成过去时：vosotros tirabais。", incorrectTip: "" },
          { text: "tirasteis", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "la pelota",
        options: [
          { text: "la pelota", isCorrect: true, correctTip: "投掷对象：球。", incorrectTip: "" },
          { text: "la piedra", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "con precisión",
        options: [
          { text: "con precisión", isCorrect: true, correctTip: "“很准地”。", incorrectTip: "" },
          { text: "sin fuerza", isCorrect: false, correctTip: "", incorrectTip: "含义不同。" }
        ]
      }
    ],
    completed: false
  },

  // Ellos — saltar
  {
    id: 23,
    chinese: "他们小时候跳得可高了。",
    spanish: "Ellos saltaban muy alto cuando eran niños.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "saltaban",
        options: [
          { text: "saltaban", isCorrect: true, correctTip: "未完成过去时：ellos saltaban。", incorrectTip: "" },
          { text: "saltaron", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "muy alto",
        options: [
          { text: "muy alto", isCorrect: true, correctTip: "“很高地”。", incorrectTip: "" },
          { text: "muy rápido", isCorrect: false, correctTip: "", incorrectTip: "形容词不同。" }
        ]
      },
      {
        correctWord: "cuando eran niños",
        options: [
          { text: "cuando eran niños", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "cuando sean mayores", isCorrect: false, correctTip: "", incorrectTip: "将来时背景，不符。" }
        ]
      }
    ],
    completed: false
  }
];
