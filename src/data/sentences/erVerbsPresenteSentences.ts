import { Sentence } from "@/types/game";

// -ER动词 现在时句子
export const erVerbsPresenteSentences: Sentence[] = [
  // Presente | Yo | Yo como muy bien hoy.
  {
    id: 63,
    chinese: "我今天吃得非常好。",
    spanish: "Yo como muy bien hoy.",
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
        correctWord: "como",
        options: [
          { 
            text: "como", 
            isCorrect: true, 
            correctTip: "\"como\"是动词\"comer\"（吃）在第一人称单数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "comes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"comes\"是第二人称单数变位，不匹配主语\"Yo\"。" 
          },
          { 
            text: "comemos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"comemos\"是第一人称复数变位，不匹配主语\"Yo\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不是\"今天\"。" 
          },
          { 
            text: "ahora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora\"表示\"现在\"，而句子用的是\"今天\"(hoy)。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Tú | Tú bebes muy bien hoy.
  {
    id: 64,
    chinese: "你今天喝得非常好。",
    spanish: "Tú bebes muy bien hoy.",
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
            text: "Ti", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ti\"是介词后面的第二人称代词形式，不是主语。" 
          }
        ]
      },
      { 
        correctWord: "bebes",
        options: [
          { 
            text: "bebes", 
            isCorrect: true, 
            correctTip: "\"bebes\"是动词\"beber\"（喝）在第二人称单数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "bebo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bebo\"是第一人称单数变位，不匹配主语\"Tú\"。" 
          },
          { 
            text: "bebe", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bebe\"是第三人称单数变位，不匹配主语\"Tú\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mañana\"表示\"明天\"，不是\"今天\"。" 
          },
          { 
            text: "siempre", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"siempre\"表示\"总是\"，不是特定的\"今天\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Él | Él lee muy bien hoy.
  {
    id: 65,
    chinese: "他今天读得内容非常好。",
    spanish: "Él lee muy bien hoy.",
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
            incorrectTip: "\"Ella\"表示\"她\"，不是\"他\"。" 
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
        correctWord: "lee",
        options: [
          { 
            text: "lee", 
            isCorrect: true, 
            correctTip: "\"lee\"是动词\"leer\"（读）在第三人称单数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "leo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"leo\"是第一人称单数变位，不匹配主语\"Él\"。" 
          },
          { 
            text: "leemos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"leemos\"是第一人称复数变位，不匹配主语\"Él\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "ahora", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora\"表示\"现在\"，而句子用的是\"今天\"(hoy)。" 
          },
          { 
            text: "esta semana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"esta semana\"表示\"这周\"，范围比\"今天\"更大。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Nosotros | Nosotros aprendemos muy bien hoy.
  {
    id: 66,
    chinese: "我们今天学习得非常好。",
    spanish: "Nosotros aprendemos muy bien hoy.",
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
            text: "Vosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Vosotros\"表示\"你们\"，不是\"我们\"。" 
          }
        ]
      },
      { 
        correctWord: "aprendemos",
        options: [
          { 
            text: "aprendemos", 
            isCorrect: true, 
            correctTip: "\"aprendemos\"是动词\"aprender\"（学习）在第一人称复数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "aprendo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aprendo\"是第一人称单数变位，不匹配主语\"Nosotros\"。" 
          },
          { 
            text: "aprenden", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aprenden\"是第三人称复数变位，不匹配主语\"Nosotros\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "ayer", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer\"表示\"昨天\"，不是\"今天\"。" 
          },
          { 
            text: "cada día", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cada día\"表示\"每天\"，而不是特定的\"今天\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Vosotros | Vosotros corréis muy bien hoy.
  {
    id: 67,
    chinese: "你们今天跑得非常好。",
    spanish: "Vosotros corréis muy bien hoy.",
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
            text: "Ellos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellos\"表示\"他们\"，不是\"你们\"。" 
          }
        ]
      },
      { 
        correctWord: "corréis",
        options: [
          { 
            text: "corréis", 
            isCorrect: true, 
            correctTip: "\"corréis\"是动词\"correr\"（跑）在第二人称复数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "corremos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"corremos\"是第一人称复数变位，不匹配主语\"Vosotros\"。" 
          },
          { 
            text: "corren", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"corren\"是第三人称复数变位，不匹配主语\"Vosotros\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "mañana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mañana\"表示\"明天\"，不是\"今天\"。" 
          },
          { 
            text: "ahora mismo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ahora mismo\"表示\"现在，此刻\"，比\"今天\"更具体。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Ellos | Ellos venden muy bien hoy.
  {
    id: 68,
    chinese: "他们今天卖得非常好。",
    spanish: "Ellos venden muy bien hoy.",
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
            text: "Los", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Los\"是代词\"他们\"的直接宾格形式，不是主语。" 
          },
          { 
            text: "Ellas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellas\"表示\"她们\"，而不是\"他们\"（包括男性或混合性别）。" 
          }
        ]
      },
      { 
        correctWord: "venden",
        options: [
          { 
            text: "venden", 
            isCorrect: true, 
            correctTip: "\"venden\"是动词\"vender\"（卖）在第三人称复数现在时的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "vende", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"vende\"是第三人称单数变位，不匹配主语\"Ellos\"。" 
          },
          { 
            text: "vendemos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"vendemos\"是第一人称复数变位，不匹配主语\"Ellos\"。" 
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
        correctWord: "hoy",
        options: [
          { 
            text: "hoy", 
            isCorrect: true, 
            correctTip: "\"hoy\"表示\"今天\"，是时间状语。", 
            incorrectTip: "" 
          },
          { 
            text: "esta tarde", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"esta tarde\"表示\"今天下午\"，比\"今天\"更具体。" 
          },
          { 
            text: "este mes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"este mes\"表示\"这个月\"，范围比\"今天\"更大。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
