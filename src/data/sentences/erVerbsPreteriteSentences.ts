import { Sentence } from "@/types/game";

// -ER动词 过去时句子
export const erVerbsPreteriteSentences: Sentence[] = [
  // Pretérito | Yo | Yo comprendí muy bien ayer.
  {
    id: 69,
    chinese: "我昨天理解得非常正确。",
    spanish: "Yo comprendí muy bien ayer.",
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
        correctWord: "comprendí",
        options: [
          { 
            text: "comprendí", 
            isCorrect: true, 
            correctTip: "\"comprendí\"是动词\"comprender\"（理解）在第一人称单数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "comprendo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"comprendo\"是现在时形式，不是过去时。" 
          },
          { 
            text: "comprendía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"comprendía\"是过去未完成时形式，不是简单过去时。" 
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
  // Pretérito | Tú | Tú respondiste muy bien ayer.
  {
    id: 70,
    chinese: "你昨天回答得非常好。",
    spanish: "Tú respondiste muy bien ayer.",
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
        correctWord: "respondiste",
        options: [
          { 
            text: "respondiste", 
            isCorrect: true, 
            correctTip: "\"respondiste\"是动词\"responder\"（回答）在第二人称单数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "respondí", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"respondí\"是第一人称单数变位，不匹配主语\"Tú\"。" 
          },
          { 
            text: "respondes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"respondes\"是现在时形式，不是过去时。" 
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
  // Pretérito | Él | Él creyó muy bien ayer.
  {
    id: 71,
    chinese: "昨日他的判断依据非常充分。",
    spanish: "Él creyó muy bien ayer.",
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
        correctWord: "creyó",
        options: [
          { 
            text: "creyó", 
            isCorrect: true, 
            correctTip: "\"creyó\"是动词\"creer\"（相信）在第三人称单数过去时的正确变位。注意这是不规则动词。", 
            incorrectTip: "" 
          },
          { 
            text: "creió", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"creió\"不是正确的拼写，动词\"creer\"的过去时变位是\"creyó\"。" 
          },
          { 
            text: "cree", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cree\"是现在时形式，不是过去时。" 
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
  // Pretérito | Nosotros | Nosotros debimos muy bien ayer.
  {
    id: 72,
    chinese: "昨日我们的职责履行非常到位。",
    spanish: "Nosotros debimos muy bien ayer.",
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
        correctWord: "debimos",
        options: [
          { 
            text: "debimos", 
            isCorrect: true, 
            correctTip: "\"debimos\"是动词\"deber\"（应该）在第一人称复数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "debemos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"debemos\"是现在时形式，不是过去时。" 
          },
          { 
            text: "debíamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"debíamos\"是过去未完成时形式，不是简单过去时。" 
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
  // Pretérito | Vosotros | Vosotros visteis muy bien ayer.
  {
    id: 73,
    chinese: "昨日你们的观察记录非常详实。",
    spanish: "Vosotros visteis muy bien ayer.",
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
        correctWord: "visteis",
        options: [
          { 
            text: "visteis", 
            isCorrect: true, 
            correctTip: "\"visteis\"是动词\"ver\"（看）在第二人称复数过去时的正确变位。注意这是不规则动词。", 
            incorrectTip: "" 
          },
          { 
            text: "vieron", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"vieron\"是第三人称复数变位，不匹配主语\"Vosotros\"。" 
          },
          { 
            text: "veis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"veis\"是现在时形式，不是过去时。" 
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
  // Pretérito | Ellos | Ellos rompieron muy bien ayer.
  {
    id: 74,
    chinese: "昨日他们的突破进展非常显著。",
    spanish: "Ellos rompieron muy bien ayer.",
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
        correctWord: "rompieron",
        options: [
          { 
            text: "rompieron", 
            isCorrect: true, 
            correctTip: "\"rompieron\"是动词\"romper\"（打破）在第三人称复数过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "rompían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"rompían\"是过去未完成时形式，不是简单过去时。" 
          },
          { 
            text: "rompen", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"rompen\"是现在时形式，不是过去时。" 
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
