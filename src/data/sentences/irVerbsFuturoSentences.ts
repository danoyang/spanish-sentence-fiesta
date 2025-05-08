import { Sentence } from "@/types/game";

// -IR动词 将来时句子
export const irVerbsFuturoSentences: Sentence[] = [
  // Futuro | Yo | Yo uniré muy bien mañana.
  {
    id: 93,
    chinese: "我明日将妥善整合资源。",
    spanish: "Yo uniré muy bien mañana.",
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
        correctWord: "uniré",
        options: [
          { 
            text: "uniré", 
            isCorrect: true, 
            correctTip: "\"uniré\"是动词\"unir\"（联合）在第一人称单数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "uno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"uno\"是现在时形式，不是将来时。" 
          },
          { 
            text: "uní", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"uní\"是过去时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "hoy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy\"表示\"今天\"，不是\"明天\"，不符合将来时语境。" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不是\"明天\"，不符合将来时语境。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Futuro | Tú | Tú admitirás muy bien mañana.
  {
    id: 94,
    chinese: "你明日需恰当处理接纳事宜。",
    spanish: "Tú admitirás muy bien mañana.",
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
        correctWord: "admitirás",
        options: [
          { 
            text: "admitirás", 
            isCorrect: true, 
            correctTip: "\"admitirás\"是动词\"admitir\"（接受）在第二人称单数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "admites", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"admites\"是现在时形式，不是将来时。" 
          },
          { 
            text: "admitiste", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"admitiste\"是过去时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "ahora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora\"表示\"现在\"，不是\"明天\"，不符合将来时语境。" 
          },
          { 
            text: "la semana que viene", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"la semana que viene\"表示\"下周\"，不是\"明天\"，虽然也符合将来时态。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Futuro | Él | Él añadirá muy bien mañana.
  {
    id: 95,
    chinese: "他将于次日精准补充内容。",
    spanish: "Él añadirá muy bien mañana.",
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
        correctWord: "añadirá",
        options: [
          { 
            text: "añadirá", 
            isCorrect: true, 
            correctTip: "\"añadirá\"是动词\"añadir\"（添加）在第三人称单数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "añade", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"añade\"是现在时形式，不是将来时。" 
          },
          { 
            text: "añadió", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"añadió\"是过去时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "pronto", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"pronto\"表示\"很快\"，不如\"mañana\"(明天)具体。" 
          },
          { 
            text: "el mes que viene", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el mes que viene\"表示\"下个月\"，不是\"明天\"，虽然也符合将来时态。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Futuro | Nosotros | Nosotros consumiremos muy bien mañana.
  {
    id: 96,
    chinese: "我们明日将高效完成资源调配。",
    spanish: "Nosotros consumiremos muy bien mañana.",
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
        correctWord: "consumiremos",
        options: [
          { 
            text: "consumiremos", 
            isCorrect: true, 
            correctTip: "\"consumiremos\"是动词\"consumir\"（消耗）在第一人称复数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "consumimos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"consumimos\"可以是现在时或简单过去时形式，不是将来时。" 
          },
          { 
            text: "consumiríamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"consumiríamos\"是条件时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "hoy", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hoy\"表示\"今天\"，不是\"明天\"，不符合将来时语境。" 
          },
          { 
            text: "luego", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"luego\"表示\"稍后\"，不如\"mañana\"(明天)具体。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Futuro | Vosotros | Vosotros discutiréis muy bien mañana.
  {
    id: 97,
    chinese: "你们需在明日深入探讨议题。",
    spanish: "Vosotros discutiréis muy bien mañana.",
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
        correctWord: "discutiréis",
        options: [
          { 
            text: "discutiréis", 
            isCorrect: true, 
            correctTip: "\"discutiréis\"是动词\"discutir\"（讨论）在第二人称复数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "discutís", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"discutís\"是现在时形式，不是将来时。" 
          },
          { 
            text: "discutisteis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"discutisteis\"是过去时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "después", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"después\"表示\"之后\"，不如\"mañana\"(明天)具体。" 
          },
          { 
            text: "pasado mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"pasado mañana\"表示\"后天\"，不是\"明天\"，虽然也符合将来时态。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Futuro | Ellos | Ellos exigirán muy bien mañana.
  {
    id: 98,
    chinese: "他们将于明日明确提出诉求。",
    spanish: "Ellos exigirán muy bien mañana.",
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
        correctWord: "exigirán",
        options: [
          { 
            text: "exigirán", 
            isCorrect: true, 
            correctTip: "\"exigirán\"是动词\"exigir\"（要求）在第三人称复数将来时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "exigen", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"exigen\"是现在时形式，不是将来时。" 
          },
          { 
            text: "exigieron", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"exigieron\"是过去时形式，不是将来时。" 
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
        correctWord: "mañana",
        options: [
          { 
            text: "mañana", 
            isCorrect: true, 
            correctTip: "\"mañana\"表示\"明天\"，是时间状语，与将来时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不是\"明天\"，不符合将来时语境。" 
          },
          { 
            text: "el próximo año", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el próximo año\"表示\"明年\"，不是\"明天\"，虽然也符合将来时态。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
