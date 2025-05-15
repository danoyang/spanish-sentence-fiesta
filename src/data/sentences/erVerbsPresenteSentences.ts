import { Sentence } from "@/types/game";

// -ER动词 现在时句子
export const erVerbsPresenteSentences: Sentence[] = [
  // Presente | Yo | Yo como muy bien hoy.
  {
    id: 63,
    chinese: "我今天吃了一顿很丰盛的早餐。",
    spanish: "Yo he comido un desayuno abundante hoy.",
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
            incorrectTip: "主语应为第一人称 \"Yo\"。"
          }
        ]
      },
      {
        correctWord: "he comido",
        options: [
          {
            text: "he comido",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (he) + comido。",
            incorrectTip: ""
          },
          {
            text: "has comido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第二人称单数，与主语不符。"
          },
          {
            text: "comí",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是简单过去时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "un desayuno abundante",
        options: [
          {
            text: "un desayuno abundante",
            isCorrect: true,
            correctTip: "“丰盛的早餐”符合句意。",
            incorrectTip: ""
          },
          {
            text: "una cena ligera",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“轻食晚餐”时间不符。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "\"hoy\"表示\"今天\"。",
            incorrectTip: ""
          },
          {
            text: "ayer",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"ayer\"是\"昨天\"，与句意不符。"
          }
        ]
      }
    ],
    completed: false
  },

  // Tú — beber
  {
    id: 64,
    chinese: "你今天喝了很多水。",
    spanish: "Tú has bebido mucha agua hoy.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: "\"Tú\"表示\"你\"。",
            incorrectTip: ""
          },
          {
            text: "Yo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为第二人称 \"Tú\"。"
          }
        ]
      },
      {
        correctWord: "has bebido",
        options: [
          {
            text: "has bebido",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (has) + bebido。",
            incorrectTip: ""
          },
          {
            text: "bebo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "mucha agua",
        options: [
          {
            text: "mucha agua",
            isCorrect: true,
            correctTip: "表示喝了很多水。",
            incorrectTip: ""
          },
          {
            text: "mucho café",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "句子说的是水 (agua)，不是咖啡。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "\"hoy\"＝今天。",
            incorrectTip: ""
          },
          {
            text: "mañana",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“mañana”是明天。"
          }
        ]
      }
    ],
    completed: false
  },

  // Él — leer
  {
    id: 65,
    chinese: "他今天已经读完了三章。",
    spanish: "Él ha leído tres capítulos hoy.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: "\"Él\"表示\"他\"。",
            incorrectTip: ""
          },
          {
            text: "Ella",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "应为男性主语 \"Él\"。"
          }
        ]
      },
      {
        correctWord: "ha leído",
        options: [
          {
            text: "ha leído",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (ha) + leído。",
            incorrectTip: ""
          },
          {
            text: "lee",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "tres capítulos",
        options: [
          {
            text: "tres capítulos",
            isCorrect: true,
            correctTip: "阅读量“3 章”。",
            incorrectTip: ""
          },
          {
            text: "treinta capítulos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "数量明显不符。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "时间状语“今天”。",
            incorrectTip: ""
          },
          {
            text: "ahora",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“ahora”是“现在”，范围更小。"
          }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — aprender
  {
    id: 66,
    chinese: "我们今天学会了很多新词。",
    spanish: "Nosotros hemos aprendido muchas palabras nuevas hoy.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: "\"Nosotros\"＝我们。",
            incorrectTip: ""
          },
          {
            text: "Vosotros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为第一人称复数 \"Nosotros\"。"
          }
        ]
      },
      {
        correctWord: "hemos aprendido",
        options: [
          {
            text: "hemos aprendido",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (hemos) + aprendido。",
            incorrectTip: ""
          },
          {
            text: "aprendemos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "muchas palabras nuevas",
        options: [
          {
            text: "muchas palabras nuevas",
            isCorrect: true,
            correctTip: "符合“学了很多新词”。",
            incorrectTip: ""
          },
          {
            text: "pocas palabras",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“pocas”表示很少，与句意相反。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "时间状语“今天”。",
            incorrectTip: ""
          },
          {
            text: "cada día",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“cada día”＝每天，不等于今天。"
          }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — correr
  {
    id: 67,
    chinese: "你们今天跑了五公里。",
    spanish: "Vosotros habéis corrido cinco kilómetros hoy.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: "\"Vosotros\"＝你们。",
            incorrectTip: ""
          },
          {
            text: "Ellos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为第二人称复数 “Vosotros”。"
          }
        ]
      },
      {
        correctWord: "habéis corrido",
        options: [
          {
            text: "habéis corrido",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (habéis) + corrido。",
            incorrectTip: ""
          },
          {
            text: "corréis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "cinco kilómetros",
        options: [
          {
            text: "cinco kilómetros",
            isCorrect: true,
            correctTip: "跑了 5 公里。",
            incorrectTip: ""
          },
          {
            text: "quince kilómetros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "数量不符。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "说明发生在今天。",
            incorrectTip: ""
          },
          {
            text: "mañana",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“mañana”是明天。"
          }
        ]
      }
    ],
    completed: false
  },

  // Ellos — vender
  {
    id: 68,
    chinese: "他们今天卖出了很多票。",
    spanish: "Ellos han vendido muchas entradas hoy.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: "\"Ellos\"＝他们。",
            incorrectTip: ""
          },
          {
            text: "Ellas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语要求男性或混合性别 “Ellos”。"
          }
        ]
      },
      {
        correctWord: "han vendido",
        options: [
          {
            text: "han vendido",
            isCorrect: true,
            correctTip: "Presente perfecto：haber (han) + vendido。",
            incorrectTip: ""
          },
          {
            text: "venden",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时，不是现在完成时。"
          }
        ]
      },
      {
        correctWord: "muchas entradas",
        options: [
          {
            text: "muchas entradas",
            isCorrect: true,
            correctTip: "“卖出了很多票”。",
            incorrectTip: ""
          },
          {
            text: "pocas entradas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“pocas”表示很少，与句意相反。"
          }
        ]
      },
      {
        correctWord: "hoy",
        options: [
          {
            text: "hoy",
            isCorrect: true,
            correctTip: "时间状语“今天”。",
            incorrectTip: ""
          },
          {
            text: "este mes",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“这个月”范围大于今天。"
          }
        ]
      }
    ],
    completed: false
  }
];
