
// Corrected the inner quotes for proper string syntax to fix TS1005 errors

import { Sentence } from "@/types/game";

// Futuro (Future Tense) and Condicional (Conditional Tense) sentences
export const futuroCondicionalSentences: Sentence[] = [
  // Futuro | Yo — esperar
  {
    id: 24,
    chinese: "明天我会耐心等待。",
    spanish: "Yo esperaré con paciencia mañana.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: "\"Yo\"表示\"我\"。",
            incorrectTip: ""
          },
          {
            text: "Tú",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为第一人称。",
          }
        ]
      },
      {
        correctWord: "esperaré",
        options: [
          {
            text: "esperaré",
            isCorrect: true,
            correctTip: "\"esperaré\" 是将来时：我将等待。",
            incorrectTip: ""
          },
          {
            text: "espero",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在时；应选将来时\"esperaré\"。"
          }
        ]
      },
      {
        correctWord: "con paciencia",
        options: [
          {
            text: "con paciencia",
            isCorrect: true,
            correctTip: "“耐心地”。",
            incorrectTip: ""
          },
          {
            text: "con prisa",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义相反：匆忙地。"
          },
          {
            text: "sin paciencia",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "否定含义，不符句意。"
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Tú — entrar
  {
    id: 25,
    chinese: "你明天会顺利进入。",
    spanish: "Tú entrarás sin problemas mañana.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "entrarás",
        options: [
          {
            text: "entrarás",
            isCorrect: true,
            correctTip: "将来时：你将进入。",
            incorrectTip: ""
          },
          {
            text: "entras",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在时，非将来。"
          }
        ]
      },
      {
        correctWord: "sin problemas",
        options: [
          { text: "sin problemas", isCorrect: true, correctTip: "“顺利地”。", incorrectTip: "" },
          { text: "con dificultad", isCorrect: false, correctTip: "", incorrectTip: "含义相反：有困难。" },
          { text: "con retraso", isCorrect: false, correctTip: "", incorrectTip: "表示“迟到”，不符句意。" }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Él — llegar
  {
    id: 26,
    chinese: "他明天会准时到达。",
    spanish: "Él llegará a tiempo mañana.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"＝他。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "llegará",
        options: [
          { text: "llegará", isCorrect: true, correctTip: "将来时：他将到达。", incorrectTip: "" },
          { text: "llega", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "a tiempo",
        options: [
          { text: "a tiempo", isCorrect: true, correctTip: "“准时”。", incorrectTip: "" },
          { text: "tarde", isCorrect: false, correctTip: "", incorrectTip: "含义相反：迟到。" },
          { text: "muy temprano", isCorrect: false, correctTip: "", incorrectTip: "时间含义不同。"}
        ]
      }
    ],
    completed: false
  },

  // Futuro | Nosotros — necesitar
  {
    id: 27,
    chinese: "我们明天将需要更多资源。",
    spanish: "Nosotros necesitaremos más recursos mañana.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "necesitaremos",
        options: [
          { text: "necesitaremos", isCorrect: true, correctTip: "将来时：我们将需要。", incorrectTip: "" },
          { text: "necesitamos", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "más recursos",
        options: [
          { text: "más recursos", isCorrect: true, correctTip: "“更多资源”。", incorrectTip: "" },
          { text: "menos recursos", isCorrect: false, correctTip: "", incorrectTip: "数量相反。" },
          { text: "los mismos recursos", isCorrect: false, correctTip: "", incorrectTip: "表示数量不变。" }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Vosotros — pagar
  {
    id: 28,
    chinese: "你们明天会付款。",
    spanish: "Vosotros pagaréis la factura mañana.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "pagaréis",
        options: [
          { text: "pagaréis", isCorrect: true, correctTip: "将来时：你们将付款。", incorrectTip: "" },
          { text: "pagáis", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "la factura",
        options: [
          { text: "la factura", isCorrect: true, correctTip: "“账单”。", incorrectTip: "" },
          { text: "el alquiler", isCorrect: false, correctTip: "", incorrectTip: "支付对象不同。" },
          { text: "la comida", isCorrect: false, correctTip: "", incorrectTip: "支付内容不同。" }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Ellos — preparar
  {
    id: 29,
    chinese: "他们明天会布置大厅。",
    spanish: "Ellos prepararán la sala mañana.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "prepararán",
        options: [
          { text: "prepararán", isCorrect: true, correctTip: "将来时：他们将准备。", incorrectTip: "" },
          { text: "preparan", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "la sala",
        options: [
          { text: "la sala", isCorrect: true, correctTip: "“大厅”。", incorrectTip: "" },
          { text: "el informe", isCorrect: false, correctTip: "", incorrectTip: "准备对象不同。" },
          { text: "la comida", isCorrect: false, correctTip: "", incorrectTip: "准备内容不同。" }
        ]
      }
    ],
    completed: false
  },

  // ------- Condicional -------
  // Yo — tocar
  {
    id: 30,
    chinese: "如果可以的话，我会把钢琴弹得更好。",
    spanish: "Yo tocaría el piano muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"＝我。", incorrectTip: "" },
          { text: "Tú", isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。" }
        ]
      },
      {
        correctWord: "tocaría",
        options: [
          { text: "tocaría", isCorrect: true, correctTip: "条件式：我会弹。", incorrectTip: "" },
          { text: "toco", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "el piano muy bien",
        options: [
          { text: "el piano muy bien", isCorrect: true, correctTip: "弹钢琴。", incorrectTip: "" },
          { text: "la guitarra muy bien", isCorrect: false, correctTip: "", incorrectTip: "乐器不同。" },
          { text: "el violín muy bien", isCorrect: false, correctTip: "", incorrectTip: "乐器不同。" }
        ]
      }
    ],
    completed: false
  },

  // Tú — sacar
  {
    id: 31,
    chinese: "如果可以的话，你会把照片拍得很好。",
    spanish: "Tú sacarías buenas fotos si pudieras.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "sacarías",
        options: [
          { text: "sacarías", isCorrect: true, correctTip: "条件式：你会拍。", incorrectTip: "" },
          { text: "sacas", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "buenas fotos",
        options: [
          { text: "buenas fotos", isCorrect: true, correctTip: "“好照片”。", incorrectTip: "" },
          { text: "malas fotos", isCorrect: false, correctTip: "", incorrectTip: "质量相反。" },
          { text: "pocas fotos", isCorrect: false, correctTip: "", incorrectTip: "数量限定，不符句意。" }
        ]
      }
    ],
    completed: false
  },

  // Él — buscar
  {
    id: 32,
    chinese: "如果可以的话，他会迅速找到解决方案。",
    spanish: "Él buscaría una solución rápida si pudiera.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"＝他。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "buscaría",
        options: [
          { text: "buscaría", isCorrect: true, correctTip: "条件式：他会找。", incorrectTip: "" },
          { text: "busca", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "una solución rápida",
        options: [
          { text: "una solución rápida", isCorrect: true, correctTip: "“快速解决方案”。", incorrectTip: "" },
          { text: "una excusa", isCorrect: false, correctTip: "", incorrectTip: "语义不同。" }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — lavar
  {
    id: 33,
    chinese: "如果可以的话，我们会把车洗得一尘不染。",
    spanish: "Nosotros lavaríamos el coche a fondo si pudiéramos.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "lavaríamos",
        options: [
          { text: "lavaríamos", isCorrect: true, correctTip: "条件式：我们会洗。", incorrectTip: "" },
          { text: "lavamos", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "el coche a fondo",
        options: [
          { text: "el coche a fondo", isCorrect: true, correctTip: "“彻底清洗汽车”。", incorrectTip: "" },
          { text: "las manos", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — ganar
  {
    id: 34,
    chinese: "如果可以的话，你们会轻松赢得比赛。",
    spanish: "Vosotros ganaríais el partido fácilmente si pudierais.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "ganaríais",
        options: [
          { text: "ganaríais", isCorrect: true, correctTip: "条件式：你们会赢。", incorrectTip: "" },
          { text: "ganáis", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "el partido fácilmente",
        options: [
          { text: "el partido fácilmente", isCorrect: true, correctTip: "“轻松赢得比赛”。", incorrectTip: "" },
          { text: "la carrera fácilmente", isCorrect: false, correctTip: "", incorrectTip: "项目不同。" }
        ]
      }
    ],
    completed: false
  },

  // Ellos — terminar
  {
    id: 35,
    chinese: "如果可以的话，他们会准时完成项目。",
    spanish: "Ellos terminarían el proyecto a tiempo si pudieran.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "terminarían",
        options: [
          { text: "terminarían", isCorrect: true, correctTip: "条件式：他们会完成。", incorrectTip: "" },
          { text: "terminan", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "el proyecto a tiempo",
        options: [
          { text: "el proyecto a tiempo", isCorrect: true, correctTip: "“按时完成项目”。", incorrectTip: "" },
          { text: "el informe tarde", isCorrect: false, correctTip: "", incorrectTip: "含义相反(迟交)。" }
        ]
      }
    ],
    completed: false
  }
];
