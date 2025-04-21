
import { Sentence } from "@/types/game";

// 未完成过去时动词变位句子 (18-23)
export const imperfectoTenseSentences: Sentence[] = [
  // Imperfecto | Yo | Yo cocinaba muy bien cuando era niño.
  {
    id: 18,
    chinese: "我小时候做饭做得很好。",
    spanish: "Yo cocinaba muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { 
            text: "Yo", 
            isCorrect: true, 
            correctTip: "\"Yo\"=\"我\"。", 
            incorrectTip: "" 
          }
        ]
      },
      { 
        correctWord: "cocinaba",
        options: [
          { 
            text: "cocinaba", 
            isCorrect: true, 
            correctTip: "动词\"cocinar\"未完成过去时：我。", 
            incorrectTip: "" 
          },
          { 
            text: "cocinabas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cocinabas\"是\"你\"未完成过去时。" 
          },
          { 
            text: "cociné", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cociné\"是\"我\"简单过去时。" 
          }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { 
            text: "muy bien cuando era niño", 
            isCorrect: true, 
            correctTip: "小时候，非常好。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Tú | Tú bailabas muy bien cuando era niño.
  {
    id: 19,
    chinese: "你小时候跳舞跳得很好。",
    spanish: "Tú bailabas muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: ""Tú"="你"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "bailabas",
        options: [
          { text: "bailabas", isCorrect: true, correctTip: "动词"bailar"未完成过去时：你。", incorrectTip: "" },
          { text: "bailaba", isCorrect: false, correctTip: "", incorrectTip: ""bailaba"本身也对，但指"我/他/她"，题干主语为你。" },
          { text: "bailaron", isCorrect: false, correctTip: "", incorrectTip: ""bailaron"是"他们"简单过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Él | Él cantaba muy bien cuando era niño.
  {
    id: 20,
    chinese: "他小时候唱歌唱得很好。",
    spanish: "Él cantaba muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: ""Él"="他"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "cantaba",
        options: [
          { text: "cantaba", isCorrect: true, correctTip: ""cantaba"动词未完成过去时：他。", incorrectTip: "" },
          { text: "cantabas", isCorrect: false, correctTip: "", incorrectTip: ""cantabas"是"你"未完成过去时。" },
          { text: "canto", isCorrect: false, correctTip: "", incorrectTip: ""canto"是现在时"我"变位。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Nosotros | Nosotros limpiábamos muy bien cuando era niño.
  {
    id: 21,
    chinese: "我们小时候打扫打得很好。",
    spanish: "Nosotros limpiábamos muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: ""Nosotros"="我们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "limpiábamos",
        options: [
          { text: "limpiábamos", isCorrect: true, correctTip: "动词"limpiar"未完成过去时：我们。", incorrectTip: "" },
          { text: "limpiaban", isCorrect: false, correctTip: "", incorrectTip: ""limpiaban"是"他们"未完成过去时。" },
          { text: "limpié", isCorrect: false, correctTip: "", incorrectTip: ""limpié"是"我"简单过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Vosotros | Vosotros tirabais muy bien cuando era niño.
  {
    id: 22,
    chinese: "你们小时候扔东西很厉害。",
    spanish: "Vosotros tirabais muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: ""Vosotros"="你们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "tirabais",
        options: [
          { text: "tirabais", isCorrect: true, correctTip: ""tirabais"未完成过去时：你们。", incorrectTip: "" },
          { text: "tirábamos", isCorrect: false, correctTip: "", incorrectTip: ""tirábamos"是"我们"未完成过去时。" },
          { text: "tiraba", isCorrect: false, correctTip: "", incorrectTip: ""tiraba"是"我/他/她"未完成过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Ellos | Ellos saltaban muy bien cuando era niño.
  {
    id: 23,
    chinese: "他们小时候跳得很好。",
    spanish: "Ellos saltaban muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: ""Ellos"="他们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "saltaban",
        options: [
          { text: "saltaban", isCorrect: true, correctTip: ""saltaban"未完成过去时：他们。", incorrectTip: "" },
          { text: "saltaba", isCorrect: false, correctTip: "", incorrectTip: ""saltaba"是"我/他/她"未完成过去时。" },
          { text: "saltábamos", isCorrect: false, correctTip: "", incorrectTip: ""saltábamos"是"我们"未完成过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  }
];
