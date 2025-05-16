import { Sentence } from "@/types/game";

// -ER Verbs in Pluscuamperfecto (Past Perfect) Tense
export const erVerbsPluscuamperfectoSentences: Sentence[] = [
  // Pluscuamperfecto | Yo | Yo había tejido muy bien antes.
  {
    id: 111,
    chinese: "冬天来之前，我给妈妈织过一条厚围巾。",
    spanish: "Yo había tejido una bufanda gruesa para mi madre antes del invierno.",
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
            incorrectTip: "\"Tú\"是\"你\"，不符合主语。"
          }
        ]
      },
      {
        correctWord: "había tejido",
        options: [
          {
            text: "había tejido",
            isCorrect: true,
            correctTip: "第一人称单数的过去完成时：haber（había）+ tejido。",
            incorrectTip: ""
          },
          {
            text: "habías tejido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第二人称单数变位，与主语不符。"
          },
          {
            text: "he tejido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在完成时，不是过去完成时。"
          }
        ]
      },
      {
        correctWord: "una bufanda gruesa",
        options: [
          {
            text: "una bufanda gruesa",
            isCorrect: true,
            correctTip: "表示“厚围巾”，符合句意。",
            incorrectTip: ""
          },
          {
            text: "un sombrero ligero",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这表示“轻便帽子”，与织围巾不符。"
          },
          {
            text: "un abrigo caro",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这表示“昂贵大衣”，与句意不符。"
          }
        ]
      }
    ],
    completed: false
  },

  // Pluscuamperfecto | Tú
  {
    id: 112,
    chinese: "你以前为他生日挑过最合适的礼物。",
    spanish: "Tú habías escogido el regalo perfecto para su cumpleaños.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: "\"Tú\"表示\"你\"，此句主语。",
            incorrectTip: ""
          },
          {
            text: "Yo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "应使用第二人称 \"Tú\"。"
          }
        ]
      },
      {
        correctWord: "habías escogido",
        options: [
          {
            text: "habías escogido",
            isCorrect: true,
            correctTip: "第二人称单数的过去完成时：haber（habías）+ escogido。",
            incorrectTip: ""
          },
          {
            text: "había escogido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第一/第三人称单数，与主语不符。"
          },
          {
            text: "has escogido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在完成时，不是过去完成时。"
          }
        ]
      },
      {
        correctWord: "el regalo perfecto",
        options: [
          {
            text: "el regalo perfecto",
            isCorrect: true,
            correctTip: "意为“最合适的礼物”。",
            incorrectTip: ""
          },
          {
            text: "una carta larga",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这表示“一封长信”，并非礼物本身。"
          }
        ]
      }
    ],
    completed: false
  },

  // Pluscuamperfecto | Él
  {
    id: 113,
    chinese: "他以前总是在阳台上哄宝宝睡觉。",
    spanish: "Él había mecido al bebé en el balcón hasta que se durmió.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: "\"Él\"表示\"他\"，此句主语。",
            incorrectTip: ""
          },
          {
            text: "Ella",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为男性 \"Él\"。"
          }
        ]
      },
      {
        correctWord: "había mecido",
        options: [
          {
            text: "había mecido",
            isCorrect: true,
            correctTip: "第三人称单数的过去完成时：haber（había）+ mecido。",
            incorrectTip: ""
          },
          {
            text: "habías mecido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第二人称单数，与主语不符。"
          }
        ]
      },
      {
        correctWord: "al bebé",
        options: [
          {
            text: "al bebé",
            isCorrect: true,
            correctTip: "表示“给婴儿”。",
            incorrectTip: ""
          },
          {
            text: "al perro",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "句中摇的是婴儿 (bebé)，不是狗 (perro)。"
          }
        ]
      }
    ],
    completed: false
  },

  // Pluscuamperfecto | Nosotros
  {
    id: 114,
    chinese: "我们以前在类似情境中也发生过。",
    spanish: "Nosotros habíamos sucedido en una situación parecida antes.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: "\"Nosotros\"表示\"我们\"，此句主语。",
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
        correctWord: "habíamos sucedido",
        options: [
          {
            text: "habíamos sucedido",
            isCorrect: true,
            correctTip: "第一人称复数的过去完成时：haber（habíamos）+ sucedido。",
            incorrectTip: ""
          },
          {
            text: "habían sucedido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第三人称复数，与主语不符。"
          },
          {
            text: "hemos sucedido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在完成时，不是过去完成时。"
          }
        ]
      },
      {
        correctWord: "en una situación parecida",
        options: [
          {
            text: "en una situación parecida",
            isCorrect: true,
            correctTip: "意为“在类似情境中”。",
            incorrectTip: ""
          },
          {
            text: "en un concierto famoso",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "语境不符，句子讲的是“类似情境”。"
          }
        ]
      }
    ],
    completed: false
  },

  // Pluscuamperfecto | Vosotros
  {
    id: 115,
    chinese: "你们以前在路口主动让过其他司机。",
    spanish: "Vosotros habíais cedido el paso en el cruce.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: "\"Vosotros\"表示\"你们\"，此句主语。",
            incorrectTip: ""
          },
          {
            text: "Nosotros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为 \"Vosotros\"（你们）。"
          }
        ]
      },
      {
        correctWord: "habíais cedido",
        options: [
          {
            text: "habíais cedido",
            isCorrect: true,
            correctTip: "第二人称复数的过去完成时：haber（habíais）+ cedido。",
            incorrectTip: ""
          },
          {
            text: "habíamos cedido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第一人称复数，与主语不符。"
          },
          {
            text: "habéis cedido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在完成时，不是过去完成时。"
          }
        ]
      },
      {
        correctWord: "el paso",
        options: [
          {
            text: "el paso",
            isCorrect: true,
            correctTip: "\"ceder el paso\"＝“让路”。",
            incorrectTip: ""
          },
          {
            text: "la música",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"la música\"与让路无关。"
          }
        ]
      }
    ],
    completed: false
  },

  // Pluscuamperfecto | Ellos
  {
    id: 116,
    chinese: "他们以前在聚会上突然出现过。",
    spanish: "Ellos habían aparecido de repente en la fiesta antes.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: "\"Ellos\"表示\"他们\"，此句主语。",
            incorrectTip: ""
          },
          {
            text: "Ellas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为阳性或混合性 \"Ellos\"。"
          }
        ]
      },
      {
        correctWord: "habían aparecido",
        options: [
          {
            text: "habían aparecido",
            isCorrect: true,
            correctTip: "第三人称复数的过去完成时：haber（habían）+ aparecido。",
            incorrectTip: ""
          },
          {
            text: "habíamos aparecido",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第一人称复数，与主语不符。"
          }
        ]
      },
      {
        correctWord: "de repente",
        options: [
          {
            text: "de repente",
            isCorrect: true,
            correctTip: "表示“突然地”。",
            incorrectTip: ""
          },
          {
            text: "con calma",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“con calma”＝“平静地”，与句意相反。"
          }
        ]
      }
    ],
    completed: false
  }
];