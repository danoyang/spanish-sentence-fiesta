import { Sentence } from "@/types/game";

// -IR动词 不完成过去时句子
export const irVerbsImperfectoSentences: Sentence[] = [
  // Imperfecto | Yo | Yo existía muy bien cuando era niño.
  {
    id: 87,
    chinese: "我儿时生活得非常充实。",
    spanish: "Yo existía muy bien cuando era niño.",
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
        correctWord: "existía",
        options: [
          { 
            text: "existía", 
            isCorrect: true, 
            correctTip: "\"existía\"是动词\"existir\"（存在）在第一人称单数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "existo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"existo\"是现在时形式，不是不完成过去时。" 
          },
          { 
            text: "existí", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"existí\"是简单过去时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当我小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不适合形容童年或长期的过去状态。" 
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
  // Imperfecto | Tú | Tú insistías muy bien cuando era niño.
  {
    id: 88,
    chinese: "你童年时总能恰当坚持立场。",
    spanish: "Tú insistías muy bien cuando era niño.",
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
        correctWord: "insistías",
        options: [
          { 
            text: "insistías", 
            isCorrect: true, 
            correctTip: "\"insistías\"是动词\"insistir\"（坚持）在第二人称单数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "insistía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"insistía\"是第一和第三人称单数变位，不匹配主语\"Tú\"。" 
          },
          { 
            text: "insististe", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"insististe\"是简单过去时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当你小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "antes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"antes\"表示\"以前\"，不如\"cuando era niño\"(当小时候)具体。" 
          },
          { 
            text: "hace mucho tiempo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hace mucho tiempo\"表示\"很久以前\"，不如\"cuando era niño\"(当小时候)具体。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Él | Él ocurría muy bien cuando era niño.
  {
    id: 89,
    chinese: "他年少时的经历总是积极向上。",
    spanish: "Él ocurría muy bien cuando era niño.",
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
        correctWord: "ocurría",
        options: [
          { 
            text: "ocurría", 
            isCorrect: true, 
            correctTip: "\"ocurría\"是动词\"ocurrir\"（发生）在第三人称单数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "ocurre", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ocurre\"是现在时形式，不是不完成过去时。" 
          },
          { 
            text: "ocurrió", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ocurrió\"是简单过去时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当他小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "siempre", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"siempre\"表示\"总是\"，不如\"cuando era niño\"(当小时候)具体。" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不适合形容童年或长期的过去状态。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Nosotros | Nosotros partíamos muy bien cuando era niño.
  {
    id: 90,
    chinese: "我们儿时总能和谐共处。",
    spanish: "Nosotros partíamos muy bien cuando era niño.",
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
        correctWord: "partíamos",
        options: [
          { 
            text: "partíamos", 
            isCorrect: true, 
            correctTip: "\"partíamos\"是动词\"partir\"（分开）在第一人称复数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "partimos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"partimos\"可以是现在时或简单过去时形式，不是不完成过去时。" 
          },
          { 
            text: "partiremos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"partiremos\"是将来时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当我们小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "hace tiempo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hace tiempo\"表示\"很久以前\"，不如\"cuando era niño\"(当小时候)具体。" 
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
  // Imperfecto | Vosotros | Vosotros permitíais muy bien cuando era niño.
  {
    id: 91,
    chinese: "你们幼年时总能妥善处理授权事宜。",
    spanish: "Vosotros permitíais muy bien cuando era niño.",
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
        correctWord: "permitíais",
        options: [
          { 
            text: "permitíais", 
            isCorrect: true, 
            correctTip: "\"permitíais\"是动词\"permitir\"（允许）在第二人称复数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "permitís", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"permitís\"是现在时形式，不是不完成过去时。" 
          },
          { 
            text: "permitisteis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"permitisteis\"是简单过去时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当你们小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "de niños", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"de niños\"也表示\"小时候\"，但不是句子中使用的表达方式。" 
          },
          { 
            text: "en el pasado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"en el pasado\"表示\"在过去\"，不如\"cuando era niño\"(当小时候)具体。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Ellos | Ellos prohibían muy bien cuando era niño.
  {
    id: 92,
    chinese: "他们童年时期总能恰当约束行为。",
    spanish: "Ellos prohibían muy bien cuando era niño.",
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
        correctWord: "prohibían",
        options: [
          { 
            text: "prohibían", 
            isCorrect: true, 
            correctTip: "\"prohibían\"是动词\"prohibir\"（禁止）在第三人称复数不完成过去时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "prohiben", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"prohiben\"是现在时形式，不是不完成过去时。还有拼写错误，正确的现在时应为\"prohíben\"。" 
          },
          { 
            text: "prohibieron", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"prohibieron\"是简单过去时形式，不是不完成过去时。" 
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
        correctWord: "cuando era niño",
        options: [
          { 
            text: "cuando era niño", 
            isCorrect: true, 
            correctTip: "\"cuando era niño\"表示\"当他们小时候\"，是时间状语从句，与不完成过去时态相符。", 
            incorrectTip: "" 
          },
          { 
            text: "antes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"antes\"表示\"以前\"，不如\"cuando era niño\"(当小时候)具体。" 
          },
          { 
            text: "el año pasado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el año pasado\"表示\"去年\"，不适合形容童年或长期的过去状态。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
