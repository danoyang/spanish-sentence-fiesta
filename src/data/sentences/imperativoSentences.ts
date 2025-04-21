import { Sentence } from "@/types/game";

// Imperativo (Imperative) sentences
export const imperativoSentences: Sentence[] = [
  // Imperativo | Yo | Yo mostre muy bien ahora.
  {
    id: 57,
    chinese: "现在我展示得非常好。",
    spanish: "Yo mostre muy bien ahora.",
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
            text: "Me", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Me\"是代词\"我\"的宾格形式，不是主语。" 
          },
          { 
            text: "Tu", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Tu\"是所有格\"你的\"，不是主语\"我\"。" 
          }
        ]
      },
      { 
        correctWord: "mostre",
        options: [
          { 
            text: "mostre", 
            isCorrect: true, 
            correctTip: "\"mostre\"是动词\"mostrar\"（展示）的第一人称命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "muestro", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muestro\"是现在时形式，不是命令式。" 
          },
          { 
            text: "mostraré", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mostraré\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "bien muy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "西班牙语中副词\"muy\"应放在被修饰的词前面，词序颠倒了。" 
          },
          { 
            text: "muy bueno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bueno\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "hora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hora\"表示\"小时\"，不是\"现在\"的意思。" 
          },
          { 
            text: "hoy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy\"表示\"今天\"，不是\"现在\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperativo | Tú | Tú nada muy bien ahora.
  {
    id: 58,
    chinese: "现在你游泳得非常好。",
    spanish: "Tú nada muy bien ahora.",
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
            text: "Te", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Te\"是代词\"你\"的宾格形式，不是主语。" 
          },
          { 
            text: "Su", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Su\"是所有格\"他/她/您的\"，不是主语\"你\"。" 
          }
        ]
      },
      { 
        correctWord: "nada",
        options: [
          { 
            text: "nada", 
            isCorrect: true, 
            correctTip: "\"nada\"是动词\"nadar\"（游泳）的第二人称命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "nadas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"nadas\"是现在时形式，不是命令式。" 
          },
          { 
            text: "nadarás", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"nadarás\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "mucho bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "副词\"mucho\"不用于修饰另一个副词\"bien\"，应使用\"muy\"。" 
          },
          { 
            text: "bien muy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "西班牙语中副词\"muy\"应放在被修饰的词前面，词序颠倒了。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "ya", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ya\"表示\"已经\"，不是\"现在\"的意思。" 
          },
          { 
            text: "entonces", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"entonces\"表示\"那时，然后\"，不是\"现在\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperativo | Él | Él presente muy bien ahora.
  {
    id: 59,
    chinese: "现在他展示得非常好。",
    spanish: "Él presente muy bien ahora.",
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
            text: "Le", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Le\"是代词\"他\"的间接宾格形式，不是主语。" 
          },
          { 
            text: "Lo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Lo\"是代词\"他\"的直接宾格形式，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "presente",
        options: [
          { 
            text: "presente", 
            isCorrect: true, 
            correctTip: "\"presente\"是动词\"presentar\"（展示）的第三人称命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "presenta", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"presenta\"是现在时形式，不是命令式。" 
          },
          { 
            text: "presentará", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"presentará\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bueno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bueno\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          },
          { 
            text: "bastante bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bastante bien\"表示\"相当好\"，程度不如\"muy bien\"（非常好）。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "luego", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"luego\"表示\"稍后，然后\"，不是\"现在\"的意思。" 
          },
          { 
            text: "antes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"antes\"表示\"以前\"，与\"现在\"相反。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperativo | Nosotros | Nosotros quedemos muy bien ahora.
  {
    id: 60,
    chinese: "现在我们留在此处做得非常好。",
    spanish: "Nosotros quedemos muy bien ahora.",
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
            text: "Nos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Nos\"是代词\"我们\"的宾格形式，不是主语。" 
          },
          { 
            text: "Nuestros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Nuestros\"是所有格形容词\"我们的\"，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "quedemos",
        options: [
          { 
            text: "quedemos", 
            isCorrect: true, 
            correctTip: "\"quedemos\"是动词\"quedar\"（留下）的第一人称复数命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "quedamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"quedamos\"是现在时形式，不是命令式。" 
          },
          { 
            text: "quedaremos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"quedaremos\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "muy buenos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy buenos\"用于修饰复数名词，而不是动词。应使用副词形式\"muy bien\"。" 
          },
          { 
            text: "poco bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"poco bien\"表示\"不太好\"，与原句的\"非常好\"意思相反。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "hoy día", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy día\"表示\"如今，现今\"，指较长时期，而不是具体的\"现在\"时刻。" 
          },
          { 
            text: "mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mañana\"表示\"明天\"，不是\"现在\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperativo | Vosotros | Vosotros recordad muy bien ahora.
  {
    id: 61,
    chinese: "现在你们记得非常好。",
    spanish: "Vosotros recordad muy bien ahora.",
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
            text: "Os", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Os\"是代词\"你们\"的宾格形式，不是主语。" 
          },
          { 
            text: "Vuestros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Vuestros\"是所有格形容词\"你们的\"，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "recordad",
        options: [
          { 
            text: "recordad", 
            isCorrect: true, 
            correctTip: "\"recordad\"是动词\"recordar\"（记得）的第二人称复数命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "recordáis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recordáis\"是现在时形式，不是命令式。" 
          },
          { 
            text: "recordaréis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recordaréis\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "bien muy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "西班牙语中副词\"muy\"应放在被修饰的词前面，词序颠倒了。" 
          },
          { 
            text: "muy buenos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy buenos\"用于修饰复数名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "ya", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ya\"表示\"已经\"，不是\"现在\"的意思。" 
          },
          { 
            text: "después", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"después\"表示\"之后\"，不是\"现在\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperativo | Ellos | Ellos tomen muy bien ahora.
  {
    id: 62,
    chinese: "现在他们拿得非常好。",
    spanish: "Ellos tomen muy bien ahora.",
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
            text: "Les", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Les\"是代词\"他们\"的间接宾格形式，不是主语。" 
          },
          { 
            text: "Los", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Los\"是代词\"他们\"的直接宾格形式，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "tomen",
        options: [
          { 
            text: "tomen", 
            isCorrect: true, 
            correctTip: "\"tomen\"是动词\"tomar\"（拿）的第三人称复数命令式形式。", 
            incorrectTip: "" 
          },
          { 
            text: "toman", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"toman\"是现在时形式，不是命令式。" 
          },
          { 
            text: "tomarán", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"tomarán\"是将来时形式，不是命令式。" 
          }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { 
            text: "muy bien", 
            isCorrect: true, 
            correctTip: "\"muy bien\"表示\"非常好\"，修饰动词。", 
            incorrectTip: "" 
          },
          { 
            text: "mucho bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "副词\"mucho\"不用于修饰另一个副词\"bien\"，应使用\"muy\"。" 
          },
          { 
            text: "muy bueno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bueno\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "ahora",
        options: [
          { 
            text: "ahora", 
            isCorrect: true, 
            correctTip: "\"ahora\"表示\"现在\"，指示动作发生的时间。", 
            incorrectTip: "" 
          },
          { 
            text: "entonces", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"entonces\"表示\"那时，然后\"，不是\"现在\"。" 
          },
          { 
            text: "siempre", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"siempre\"表示\"总是\"，不是\"现在\"的意思。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
