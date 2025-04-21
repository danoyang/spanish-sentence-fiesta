import { Sentence } from "@/types/game";

// 过去时动词变位句子 (12-17)
export const preteritoTenseSentences: Sentence[] = [
  // Pretérito | Yo | Yo compré muy bien ayer.
  {
    id: 12,
    chinese: "我昨天买得非常好。",
    spanish: "Yo compré muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { 
            text: "Yo", 
            isCorrect: true, 
            correctTip: ""Yo"="我"。", 
            incorrectTip: "" 
          }
        ]
      },
      { 
        correctWord: "compré",
        options: [
          { 
            text: "compré", 
            isCorrect: true, 
            correctTip: ""compré"是"comprar"动词过去时"我"的变位。", 
            incorrectTip: "" 
          },
          { 
            text: "compró", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: ""compró"是"他/她"的过去时变位。" 
          },
          { 
            text: "compraste", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: ""compraste"是"你"的过去��变位。" 
          }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { 
            text: "muy bien ayer", 
            isCorrect: true, 
            correctTip: "昨天，非常好。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Tú | Tú tomaste muy bien ayer.
  {
    id: 13,
    chinese: "你昨天拿得非常好。",
    spanish: "Tú tomaste muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: ""Tú"="你"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "tomaste",
        options: [
          { text: "tomaste", isCorrect: true, correctTip: ""tomaste"是"你"的过去时变位。", incorrectTip: "" },
          { text: "tomé", isCorrect: false, correctTip: "", incorrectTip: ""tomé"是"我"的过去时变位。" },
          { text: "toma", isCorrect: false, correctTip: "", incorrectTip: ""toma"为一般现在时第三人称。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Él | Él llamó muy bien ayer.
  {
    id: 14,
    chinese: "他昨天打电话打得非常好。",
    spanish: "Él llamó muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: ""Él"="他"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "llamó",
        options: [
          { text: "llamó", isCorrect: true, correctTip: ""llamó"是"他"的过去时变位。", incorrectTip: "" },
          { text: "llamé", isCorrect: false, correctTip: "", incorrectTip: ""llamé"是"我"的过去时变位。" },
          { text: "llamaste", isCorrect: false, correctTip: "", incorrectTip: ""llamaste"是"你"的过去式。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Nosotros | Nosotros usamos muy bien ayer.
  {
    id: 15,
    chinese: "我们昨天用得非常好。",
    spanish: "Nosotros usamos muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: ""Nosotros"="我们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "usamos",
        options: [
          { text: "usamos", isCorrect: true, correctTip: ""usamos"是"我们"��一般过去时变位。", incorrectTip: "" },
          { text: "usaste", isCorrect: false, correctTip: "", incorrectTip: ""usaste"是"你"的过去时变位。" },
          { text: "usó", isCorrect: false, correctTip: "", incorrectTip: ""usó"是"他/她"的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Vosotros | Vosotros viajasteis muy bien ayer.
  {
    id: 16,
    chinese: "你们昨天旅行得非常好。",
    spanish: "Vosotros viajasteis muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: ""Vosotros"="你们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "viajasteis",
        options: [
          { text: "viajasteis", isCorrect: true, correctTip: ""viajasteis"是"你们"的过去时变位。", incorrectTip: "" },
          { text: "viajamos", isCorrect: false, correctTip: "", incorrectTip: ""viajamos"是"我们"的过去时变位。" },
          { text: "viajaron", isCorrect: false, correctTip: "", incorrectTip: ""viajaron"是"他们"的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Ellos | Ellos ayudaron muy bien ayer.
  {
    id: 17,
    chinese: "他们昨天帮助得非常好。",
    spanish: "Ellos ayudaron muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: ""Ellos"="他们"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "ayudaron",
        options: [
          { text: "ayudaron", isCorrect: true, correctTip: ""ayudaron"是"他们"过去时变位。", incorrectTip: "" },
          { text: "ayudé", isCorrect: false, correctTip: "", incorrectTip: ""ayudé"是"我"的过去时变位。" },
          { text: "ayudaste", isCorrect: false, correctTip: "", incorrectTip: ""ayudaste"是"你"的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  }
];
