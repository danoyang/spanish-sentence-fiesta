import { Sentence } from "@/types/game";

// -IR动词 将来时句子
export const irVerbsFuturoSentences: Sentence[] = [
  // Yo — unir
  {
    id: 93,
    chinese: "我明天将顺利联合。",
    spanish: "Yo uniré sin problemas mañana.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"＝我。", incorrectTip: "" },
          { text: "Me", isCorrect: false, correctTip: "", incorrectTip: "宾格代词，不能作主语。" }
        ]
      },
      {
        correctWord: "uniré",
        options: [
          { text: "uniré", isCorrect: true, correctTip: "将来时：yo uniré。", incorrectTip: "" },
          { text: "uno", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "sin problemas",
        options: [
          { text: "sin problemas", isCorrect: true, correctTip: "“顺利地”。", incorrectTip: "" },
          { text: "con dificultad", isCorrect: false, correctTip: "", incorrectTip: "含义相反：有困难。" },
          { text: "a medias", isCorrect: false, correctTip: "", incorrectTip: "表示“做一半”。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "时间状语：明天。", incorrectTip: "" },
          { text: "hoy", isCorrect: false, correctTip: "", incorrectTip: "表示今天。" }
        ]
      }
    ],
    completed: false
  },

  // Tú — admitir
  {
    id: 94,
    chinese: "你明天将毫不犹豫地承认错误。",
    spanish: "Tú admitirás el error sin dudar mañana.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Usted", isCorrect: false, correctTip: "", incorrectTip: "主语人称不符。" }
        ]
      },
      {
        correctWord: "admitirás",
        options: [
          { text: "admitirás", isCorrect: true, correctTip: "将来时：tú admitirás。", incorrectTip: "" },
          { text: "admites", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "el error sin dudar",
        options: [
          { text: "el error sin dudar", isCorrect: true, correctTip: "“毫不犹豫地承认错误”。", incorrectTip: "" },
          { text: "la verdad con dudas", isCorrect: false, correctTip: "", incorrectTip: "含义不同。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "pasado mañana", isCorrect: false, correctTip: "", incorrectTip: "表示后天。" }
        ]
      }
    ],
    completed: false
  },

  // Él — añadir
  {
    id: 95,
    chinese: "他明天将正确地添加数据。",
    spanish: "Él añadirá los datos correctamente mañana.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"＝他。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "añadirá",
        options: [
          { text: "añadirá", isCorrect: true, correctTip: "将来时：él añadirá。", incorrectTip: "" },
          { text: "añade", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "los datos correctamente",
        options: [
          { text: "los datos correctamente", isCorrect: true, correctTip: "“正确地添加数据”。", incorrectTip: "" },
          { text: "el título al azar", isCorrect: false, correctTip: "", incorrectTip: "内容与句意不符。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "pronto", isCorrect: false, correctTip: "", incorrectTip: "时间不够具体。" }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — consumir
  {
    id: 96,
    chinese: "我们明天将减少能量消耗。",
    spanish: "Nosotros consumiremos menos energía mañana.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "主语不符。" }
        ]
      },
      {
        correctWord: "consumiremos",
        options: [
          { text: "consumiremos", isCorrect: true, correctTip: "将来时：nosotros consumiremos。", incorrectTip: "" },
          { text: "consumimos", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "menos energía",
        options: [
          { text: "menos energía", isCorrect: true, correctTip: "“更少的能量”。", incorrectTip: "" },
          { text: "más agua", isCorrect: false, correctTip: "", incorrectTip: "对象与句意不符。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "luego", isCorrect: false, correctTip: "", incorrectTip: "时间不够具体。" }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — discutir
  {
    id: 97,
    chinese: "你们明天将深入讨论提案。",
    spanish: "Vosotros discutiréis la propuesta a fondo mañana.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
          { text: "Ustedes", isCorrect: false, correctTip: "", incorrectTip: "动词变位不符。" }
        ]
      },
      {
        correctWord: "discutiréis",
        options: [
          { text: "discutiréis", isCorrect: true, correctTip: "将来时：vosotros discutiréis。", incorrectTip: "" },
          { text: "discutís", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "la propuesta a fondo",
        options: [
          { text: "la propuesta a fondo", isCorrect: true, correctTip: "“深入讨论提案”。", incorrectTip: "" },
          { text: "el viaje por encima", isCorrect: false, correctTip: "", incorrectTip: "内容与句意不符。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "pasado mañana", isCorrect: false, correctTip: "", incorrectTip: "表示后天。" }
        ]
      }
    ],
    completed: false
  },

  // Ellos — exigir
  {
    id: 98,
    chinese: "他们明天将要求更好的条件。",
    spanish: "Ellos exigirán mejores condiciones mañana.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "exigirán",
        options: [
          { text: "exigirán", isCorrect: true, correctTip: "将来时：ellos exigirán。", incorrectTip: "" },
          { text: "exigen", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "mejores condiciones",
        options: [
          { text: "mejores condiciones", isCorrect: true, correctTip: "“更好的条件”。", incorrectTip: "" },
          { text: "menos trabajo", isCorrect: false, correctTip: "", incorrectTip: "要求内容不同。" }
        ]
      },
      {
        correctWord: "mañana",
        options: [
          { text: "mañana", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "ayer", isCorrect: false, correctTip: "", incorrectTip: "表示过去时间。" }
        ]
      }
    ],
    completed: false
  }
];
