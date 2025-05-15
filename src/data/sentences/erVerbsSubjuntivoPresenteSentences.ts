import { Sentence } from "@/types/game";

// -ER Verbs in Subjuntivo Presente (Present Subjunctive) Tense
export const erVerbsSubjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | Yo obedezca muy bien aunque sea necesario.
  {
    id: 123,
    chinese: "因为这是必要的，我会乖乖服从。",
    spanish: "Yo obedezca sin protestar porque es necesario.",
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
            incorrectTip: "主语应为\"Yo\"。"
          }
        ]
      },
      {
        correctWord: "obedezca",
        options: [
          {
            text: "obedezca",
            isCorrect: true,
            correctTip: "虚拟式一人称：obedecer → obedezca。",
            incorrectTip: ""
          },
          {
            text: "obedezco",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "陈述式现在时。"
          }
        ]
      },
      {
        correctWord: "sin protestar",
        options: [
          {
            text: "sin protestar",
            isCorrect: true,
            correctTip: "“毫无怨言”地。",
            incorrectTip: ""
          },
          {
            text: "con quejas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义相反。"
          },
          {
            text: "a medias",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "表示“半途而废”，不符句意。"
          }
        ]
      },
      {
        correctWord: "porque es necesario",
        options: [
          {
            text: "porque es necesario",
            isCorrect: true,
            correctTip: "因果连接，用陈述式 es。",
            incorrectTip: ""
          },
          {
            text: "aunque es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "让步逻辑，非因果。"
          },
          {
            text: "ya que es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "虽含因果，但本句需选\"porque\"。"
          }
        ]
      }
    ],
    completed: false
  },

  // Tú — emerger
  {
    id: 124,
    chinese: "因为这是必要的，你要及时现身。",
    spanish: "Tú emerjas a tiempo porque es necesario.",
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
            incorrectTip: "主语应为\"Tú\"。"
          }
        ]
      },
      {
        correctWord: "emerjas",
        options: [
          {
            text: "emerjas",
            isCorrect: true,
            correctTip: "虚拟式二人称：emerger → emerjas。",
            incorrectTip: ""
          },
          {
            text: "emerges",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "陈述式现在时。"
          }
        ]
      },
      {
        correctWord: "a tiempo",
        options: [
          {
            text: "a tiempo",
            isCorrect: true,
            correctTip: "“及时”。",
            incorrectTip: ""
          },
          {
            text: "demasiado tarde",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义相反。"
          },
          {
            text: "muy temprano",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "时间含义不同。"
          }
        ]
      },
      {
        correctWord: "porque es necesario",
        options: [
          {
            text: "porque es necesario",
            isCorrect: true,
            correctTip: "",
            incorrectTip: ""
          },
          {
            text: "si es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "条件而非因果。"
          }
        ]
      }
    ],
    completed: false
  },

  // Él — mantener (verbo en -er, subjuntivo presente)
{
  id: 125,
  chinese: "因为这是必要的，他要保持抬头挺胸。",
  spanish: "Él mantenga la cabeza en alto porque es necesario.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él", isCorrect: true, correctTip: "\"Él\"＝他。", incorrectTip: "" },
        { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
      ]
    },
    {
      correctWord: "mantenga",
      options: [
        { text: "mantenga", isCorrect: true, correctTip: "动词\"mantener\"在第三人称单数现在虚拟式：mantenga。", incorrectTip: "" },
        { text: "mantiene", isCorrect: false, correctTip: "", incorrectTip: "这是现在时陈述式。"},
        { text: "mantendría", isCorrect: false, correctTip: "", incorrectTip: "条件式，非现在虚拟式。" }
      ]
    },
    {
      correctWord: "la cabeza en alto",
      options: [
        { text: "la cabeza en alto", isCorrect: true, correctTip: "“抬头保持”。", incorrectTip: "" },
        { text: "los hombros caídos", isCorrect: false, correctTip: "", incorrectTip: "含义相反：垂肩。" }
      ]
    },
    {
      correctWord: "porque es necesario",
      options: [
        { text: "porque es necesario", isCorrect: true, correctTip: "因果连接：因为有必要。", incorrectTip: "" },
        { text: "aunque es necesario", isCorrect: false, correctTip: "", incorrectTip: "让步逻辑，不符合句意。" }
      ]
    }
  ],
  completed: false
},

  // Nosotros — encoger
  {
    id: 126,
    chinese: "因为这是必要的，我们要把项目缩到最小规模。",
    spanish: "Nosotros encojamos el proyecto al mínimo porque es necesario.",
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
            incorrectTip: "主语不符。"
          }
        ]
      },
      {
        correctWord: "encojamos",
        options: [
          {
            text: "encojamos",
            isCorrect: true,
            correctTip: "虚拟式一复：encoger → encojamos (g→j)。",
            incorrectTip: ""
          },
          {
            text: "encogemos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "陈述式现在时。"
          }
        ]
      },
      {
        correctWord: "el proyecto al mínimo",
        options: [
          {
            text: "el proyecto al mínimo",
            isCorrect: true,
            correctTip: "“最小规模”。",
            incorrectTip: ""
          },
          {
            text: "el proyecto al máximo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义相反(最大)。"
          }
        ]
      },
      {
        correctWord: "porque es necesario",
        options: [
          {
            text: "porque es necesario",
            isCorrect: true,
            correctTip: "",
            incorrectTip: ""
          },
          {
            text: "ya que es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "虽也表示因果，但需选\"porque\"。"
          }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — detener
  {
    id: 127,
    chinese: "因为这是必要的，你们要立即制止。",
    spanish: "Vosotros detengáis de inmediato porque es necesario.",
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
            incorrectTip: "主语不符。"
          }
        ]
      },
      {
        correctWord: "detengáis",
        options: [
          {
            text: "detengáis",
            isCorrect: true,
            correctTip: "虚拟式二复：detener → detengáis。",
            incorrectTip: ""
          },
          {
            text: "detenéis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "陈述式现在时。"
          }
        ]
      },
      {
        correctWord: "de inmediato",
        options: [
          {
            text: "de inmediato",
            isCorrect: true,
            correctTip: "“立即”。",
            incorrectTip: ""
          },
          {
            text: "después",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义不同。"
          }
        ]
      },
      {
        correctWord: "porque es necesario",
        options: [
          {
            text: "porque es necesario",
            isCorrect: true,
            correctTip: "",
            incorrectTip: ""
          },
          {
            text: "si es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "条件而非因果。"
          }
        ]
      }
    ],
    completed: false
  },

  // Ellos — recoger
  {
    id: 128,
    chinese: "因为这是必要的，他们要把所有证据收集齐。",
    spanish: "Ellos recojan todas las pruebas porque es necesario.",
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
            incorrectTip: "性别不符。"
          }
        ]
      },
      {
        correctWord: "recojan",
        options: [
          {
            text: "recojan",
            isCorrect: true,
            correctTip: "虚拟式三复：recoger → recojan (g→j)。",
            incorrectTip: ""
          },
          {
            text: "recogen",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "陈述式现在时。"
          }
        ]
      },
      {
        correctWord: "todas las pruebas",
        options: [
          {
            text: "todas las pruebas",
            isCorrect: true,
            correctTip: "“全部证据”。",
            incorrectTip: ""
          },
          {
            text: "pocas pruebas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "数量不足。"
          }
        ]
      },
      {
        correctWord: "porque es necesario",
        options: [
          {
            text: "porque es necesario",
            isCorrect: true,
            correctTip: "",
            incorrectTip: ""
          },
          {
            text: "aunque es necesario",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "让步逻辑，非因果。"
          }
        ]
      }
    ],
    completed: false
  }
];
