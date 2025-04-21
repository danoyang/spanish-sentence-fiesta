import { Sentence } from "@/types/game";

// -IR动词 过去时句子
export const irVerbsPreteriteSentences: Sentence[] = [
  // Pretérito | Yo | Yo compartí muy bien ayer.
  {
    id: 81,
    chinese: "我昨天分享得很好。",
    spanish: "Yo compartí muy bien ayer.",
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
            text: "Mi", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Mi\"是所有格\"我的\"，不是主语\"我\"。" 
          }
        ]
      },
      { 
        correctWord: "compartí",
        options: [
          { 
            text: "compartí", 
            isCorrect: true, 
            correctTip: "\"compartí\"是动词\"compartir\"（分享）在第一人称单数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "comparto", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"comparto\"是现在时形式，不是过去时。" 
          },
          { 
            text: "compartiré", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"compartiré\"是将来时形式，不是过去时。" 
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
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "hoy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy\"表示\"今天\"，不是\"昨天\"，不符合过去时语境。" 
          },
          { 
            text: "mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mañana\"表示\"明天\"，不是\"昨天\"，不符合过去时语境。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Tú | Tú cumpliste muy bien ayer.
  {
    id: 82,
    chinese: "你昨天完成得很好。",
    spanish: "Tú cumpliste muy bien ayer.",
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
            text: "Tu", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Tu\"是所有格形容词\"你的\"，不是主语\"你\"（注意没有重音符号）。" 
          }
        ]
      },
      { 
        correctWord: "cumpliste",
        options: [
          { 
            text: "cumpliste", 
            isCorrect: true, 
            correctTip: "\"cumpliste\"是动词\"cumplir\"（完成）在第二人称单数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "cumplí", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cumplí\"是第一人称单数变位，不匹配主语\"Tú\"。" 
          },
          { 
            text: "cumples", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cumples\"是现在时形式，不是过去时。" 
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
            text: "poco bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"poco bien\"表示\"不太好\"，与原句的\"非常好\"意思相反。" 
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "anoche", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"anoche\"表示\"昨晚\"，虽然也是过去时间，但原句使用的是\"昨天\"(ayer)。" 
          },
          { 
            text: "ahora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora\"表示\"现在\"，不符合过去时语境。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Él | Él decidió muy bien ayer.
  {
    id: 83,
    chinese: "他昨天决定得很好。",
    spanish: "Él decidió muy bien ayer.",
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
            text: "Ella", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ella\"表示\"她\"，不是\"他\"。" 
          }
        ]
      },
      { 
        correctWord: "decidió",
        options: [
          { 
            text: "decidió", 
            isCorrect: true, 
            correctTip: "\"decidió\"是动词\"decidir\"（决定）在第三人称单数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "decidí", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"decidí\"是第一人称单数变位，不匹配主语\"Él\"。" 
          },
          { 
            text: "decide", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"decide\"是现在时形式，不是过去时。" 
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
            text: "tan bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"tan bien\"也表示\"这么好\"，但原句使用的是\"muy bien\"（非常好）。" 
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
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "antes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"antes\"表示\"以前\"，不如\"ayer\"(昨天)具体。" 
          },
          { 
            text: "la semana pasada", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"la semana pasada\"表示\"上周\"，不是\"昨天\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Nosotros | Nosotros describimos muy bien ayer.
  {
    id: 84,
    chinese: "我们昨天描述得很好。",
    spanish: "Nosotros describimos muy bien ayer.",
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
        correctWord: "describimos",
        options: [
          { 
            text: "describimos", 
            isCorrect: true, 
            correctTip: "\"describimos\"是动词\"describir\"（描述）在第一人称复数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "describíamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"describíamos\"是过去未完成时形式，不是简单过去时。" 
          },
          { 
            text: "describió", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"describió\"是第三人称单数变位，不匹配主语\"Nosotros\"。" 
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
            text: "bastante bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bastante bien\"表示\"相当好\"，程度不如\"muy bien\"（非常好）。" 
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "hoy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy\"表示\"今天\"，不是\"昨天\"，不符合过去时语境。" 
          },
          { 
            text: "hace tiempo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hace tiempo\"表示\"很久以前\"，比\"昨天\"更久远。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Vosotros | Vosotros descubristeis muy bien ayer.
  {
    id: 85,
    chinese: "你们昨天发现得很好。",
    spanish: "Vosotros descubristeis muy bien ayer.",
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
            text: "Ustedes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ustedes\"也表示\"你们\"，但在西班牙语中更正式，且动词变位不同。" 
          }
        ]
      },
      { 
        correctWord: "descubristeis",
        options: [
          { 
            text: "descubristeis", 
            isCorrect: true, 
            correctTip: "\"descubristeis\"是动词\"descubrir\"（发现）在第二人称复数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "descubrieron", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"descubrieron\"是第三人称复数变位，不匹配主语\"Vosotros\"。" 
          },
          { 
            text: "descubrís", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"descubrís\"是现在时形式，不是过去时。" 
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
            text: "demasiado bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"demasiado bien\"表示\"太好了\"，程度过了，不同于\"muy bien\"（非常好）。" 
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "anteayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"anteayer\"表示\"前天\"，不是\"昨天\"。" 
          },
          { 
            text: "ahora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora\"表示\"现在\"，不符合过去时语境。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Ellos | Ellos dividieron muy bien ayer.
  {
    id: 86,
    chinese: "他们昨天分配得很好。",
    spanish: "Ellos dividieron muy bien ayer.",
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
            text: "Sus", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Sus\"是所有格形容词\"他们的\"，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "dividieron",
        options: [
          { 
            text: "dividieron", 
            isCorrect: true, 
            correctTip: "\"dividieron\"是动词\"dividir\"（分配）在第三人称复数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "dividían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"dividían\"是过去未完成时形式，不是简单过去时。" 
          },
          { 
            text: "dividen", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"dividen\"是现在时形式，不是过去时。" 
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
            text: "muy buenos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy buenos\"用于修饰复数名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          { 
            text: "ayer", 
            isCorrect: true, 
            correctTip: "\"ayer\"表示\"昨天\"，是时间状语，与过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mañana\"表示\"明天\"，不是\"昨天\"，不符合过去时语境。" 
          },
          { 
            text: "el mes pasado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el mes pasado\"表示\"上个月\"，不是\"昨天\"。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
