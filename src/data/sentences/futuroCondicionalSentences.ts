
import { Sentence } from "@/types/game";

// Futuro (Future Tense) and Condicional (Conditional Tense) sentences
export const futuroCondicionalSentences: Sentence[] = [
  // Futuro | Yo | Yo esperaré muy bien mañana.
  {
    id: 24,
    chinese: "我明天会非常好地等待。",
    spanish: "Yo esperaré muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: "“Yo” 表示“我”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "esperaré",
        options: [
          {
            text: "esperaré",
            isCorrect: true,
            correctTip: "“esperaré”是动词“esperar”的第一人称将来时，表示“我将会等待”。",
            incorrectTip: "",
          },
          {
            text: "espero",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“espero” 是现在时，这里要用“esperaré”表示将来时。",
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Futuro | Tú | Tú entrarás muy bien mañana.
  {
    id: 25,
    chinese: "你明天会非常好地进入。",
    spanish: "Tú entrarás muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: "“Tú” 表示“你”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "entrarás",
        options: [
          {
            text: "entrarás",
            isCorrect: true,
            correctTip: "“entrarás”是“你将进入”的将来时。",
            incorrectTip: "",
          },
          {
            text: "entras",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“entras”是现在时，这里要用“entrarás”表示将来。",
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Futuro | Él | Él llegará muy bien mañana.
  {
    id: 26,
    chinese: "他明天会非常好地到达。",
    spanish: "Él llegará muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: "“Él” 表示“他”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "llegará",
        options: [
          {
            text: "llegará",
            isCorrect: true,
            correctTip: "“llegará”是“他将到达”的将来时。",
            incorrectTip: "",
          },
          {
            text: "llega",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“llega”是现在时，这里应选“llegará”。"
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Futuro | Nosotros | Nosotros necesitaremos muy bien mañana.
  {
    id: 27,
    chinese: "我们明天会非常好地需要。",
    spanish: "Nosotros necesitaremos muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: "“Nosotros” 表示“我们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "necesitaremos",
        options: [
          {
            text: "necesitaremos",
            isCorrect: true,
            correctTip: "“necesitaremos”是“我们将需要”的将来时。",
            incorrectTip: "",
          },
          {
            text: "necesitamos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“necesitamos”是现在时，这里应选“necesitaremos”。"
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Futuro | Vosotros | Vosotros pagaréis muy bien mañana.
  {
    id: 28,
    chinese: "你们明天会非常好地付钱。",
    spanish: "Vosotros pagaréis muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: "“Vosotros” 表示“你们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "pagaréis",
        options: [
          {
            text: "pagaréis",
            isCorrect: true,
            correctTip: "“pagaréis”是“你们将付钱”的将来时。",
            incorrectTip: "",
          },
          {
            text: "pagáis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“pagáis”是现在时，这里应选“pagaréis”。"
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Futuro | Ellos | Ellos prepararán muy bien mañana.
  {
    id: 29,
    chinese: "他们明天会非常好地准备。",
    spanish: "Ellos prepararán muy bien mañana.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: "“Ellos” 表示“他们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "prepararán",
        options: [
          {
            text: "prepararán",
            isCorrect: true,
            correctTip: "“prepararán”是“他们将准备”的将来时。",
            incorrectTip: "",
          },
          {
            text: "preparan",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“preparan”是现在时，这里应选“prepararán”。"
          }
        ]
      },
      {
        correctWord: "muy bien mañana",
        options: [
          {
            text: "muy bien mañana",
            isCorrect: true,
            correctTip: "明天，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // ----- Condicional -----
  // Condicional | Yo | Yo tocaría muy bien si pudiera.
  {
    id: 30,
    chinese: "如果可以的话，我会弹得非常好。",
    spanish: "Yo tocaría muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: "“Yo” 表示“我”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "tocaría",
        options: [
          {
            text: "tocaría",
            isCorrect: true,
            correctTip: "“tocaría”是“我会弹”的条件式。",
            incorrectTip: "",
          },
          {
            text: "toco",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“toco”是现在时，这里应选“tocaría”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Condicional | Tú | Tú sacarías muy bien si pudiera.
  {
    id: 31,
    chinese: "如果可以的话，你会拿得非常好。",
    spanish: "Tú sacarías muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: "“Tú” 表示“你”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "sacarías",
        options: [
          {
            text: "sacarías",
            isCorrect: true,
            correctTip: "“sacarías”是“你会拿”的条件式。",
            incorrectTip: "",
          },
          {
            text: "sacas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“sacas”是现在时，这里应选“sacarías”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Condicional | Él | Él buscaría muy bien si pudiera.
  {
    id: 32,
    chinese: "如果可以的话，他会找得非常好。",
    spanish: "Él buscaría muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: "“Él” 表示“他”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "buscaría",
        options: [
          {
            text: "buscaría",
            isCorrect: true,
            correctTip: "“buscaría”是“他会找”的条件式。",
            incorrectTip: "",
          },
          {
            text: "busca",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“busca”是现在时，这里应选“buscaría”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Condicional | Nosotros | Nosotros lavaríamos muy bien si pudiera.
  {
    id: 33,
    chinese: "如果可以的话，我们会洗得非常好。",
    spanish: "Nosotros lavaríamos muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: "“Nosotros” 表示“我们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "lavaríamos",
        options: [
          {
            text: "lavaríamos",
            isCorrect: true,
            correctTip: "“lavaríamos”是“我们会洗”的条件式。",
            incorrectTip: "",
          },
          {
            text: "lavamos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“lavamos”是现在时，这里应选“lavaríamos”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Condicional | Vosotros | Vosotros ganaríais muy bien si pudiera.
  {
    id: 34,
    chinese: "如果可以的话，你们会赢得非常好。",
    spanish: "Vosotros ganaríais muy well si pudiera.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: "“Vosotros” 表示“你们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "ganaríais",
        options: [
          {
            text: "ganaríais",
            isCorrect: true,
            correctTip: "“ganaríais”是“你们会赢”的条件式。",
            incorrectTip: "",
          },
          {
            text: "ganáis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“ganáis”是现在时，这里应选“ganaríais”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  },

  // Condicional | Ellos | Ellos terminarían muy bien si pudiera.
  {
    id: 35,
    chinese: "如果可以的话，他们会非常好地完成。",
    spanish: "Ellos terminarían muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: "“Ellos” 表示“他们”。",
            incorrectTip: "",
          }
        ]
      },
      {
        correctWord: "terminarían",
        options: [
          {
            text: "terminarían",
            isCorrect: true,
            correctTip: "“terminarían”是“他们会完成”的条件式。",
            incorrectTip: "",
          },
          {
            text: "terminan",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“terminan”是现在时，这里应选“terminarían”。"
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false,
  }
];
