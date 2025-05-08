import { Sentence } from "@/types/game";

// -ER Verbs in Presente Perfecto (Present Perfect) Tense
export const erVerbsPresentePerfectoSentences: Sentence[] = [
  // Presente perfecto | Yo | Yo he movido muy bien esta semana.
  {
    id: 99,
    chinese: "这周我的活动调度非常到位。",
    spanish: "Yo he movido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "he movido",
        options: [
          { 
            text: "he movido", 
            isCorrect: true, 
            correctTip: "\"he movido\"是现在完成时第一人称单数形式，由助动词haber的变位\"he\"加上动词\"mover\"的过去分词\"movido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "has movido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has movido\"是第二人称单数(tú)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "ha movido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha movido\"是第三人称单数(él/ella)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente perfecto | Tú | Tú has vuelto muy bien esta semana.
  {
    id: 100,
    chinese: "这周你的返岗安排十分妥当。",
    spanish: "Tú has vuelto muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "has vuelto",
        options: [
          { 
            text: "has vuelto", 
            isCorrect: true, 
            correctTip: "\"has vuelto\"是现在完成时第二人称单数形式，由助动词haber的变位\"has\"加上动词\"volver\"的过去分词\"vuelto\"组成。注意volver的过去分词是不规则的。", 
            incorrectTip: "" 
          },
          { 
            text: "he vuelto", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he vuelto\"是第一人称单数(yo)的现在完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "has volvido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has volvido\"使用了错误的过去分词形式，volver的过去分词是不规则的：vuelto。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente perfecto | Él | Él ha corrido muy bien esta semana.
  {
    id: 101,
    chinese: "这周他的跑步训练成效显著。",
    spanish: "Él ha corrido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "ha corrido",
        options: [
          { 
            text: "ha corrido", 
            isCorrect: true, 
            correctTip: "\"ha corrido\"是现在完成时第三人称单数形式，由助动词haber的变位\"ha\"加上动词\"correr\"的过去分词\"corrido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "he corrido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he corrido\"是第一人称单数(yo)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "has corrido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has corrido\"是第二人称单数(tú)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente perfecto | Nosotros | Nosotros hemos mordido muy bien esta semana.
  {
    id: 102,
    chinese: "这周我们的咬合测试非常精准。",
    spanish: "Nosotros hemos mordido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "hemos mordido",
        options: [
          { 
            text: "hemos mordido", 
            isCorrect: true, 
            correctTip: "\"hemos mordido\"是现在完成时第一人称复数形式，由助动词haber的变位\"hemos\"加上动词\"morder\"的过去分词\"mordido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "han mordido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han mordido\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "habéis mordido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis mordido\"是第二人称复数(vosotros)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente perfecto | Vosotros | Vosotros habéis extendido muy bien esta semana.
  {
    id: 103,
    chinese: "这周你们的方案延展相当顺利。",
    spanish: "Vosotros habéis extendido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habéis extendido",
        options: [
          { 
            text: "habéis extendido", 
            isCorrect: true, 
            correctTip: "\"habéis extendido\"是现在完成时第二人称复数形式，由助动词haber的变位\"habéis\"加上动词\"extender\"的过去分词\"extendido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos extendido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos extendido\"是第一人称复数(nosotros)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "han extendido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han extendido\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente perfecto | Ellos | Ellos han crecido muy bien esta semana.
  {
    id: 104,
    chinese: "这周他们的业务增长非常理想。",
    spanish: "Ellos han crecido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "han crecido",
        options: [
          { 
            text: "han crecido", 
            isCorrect: true, 
            correctTip: "\"han crecido\"是现在完成时第三人称复数形式，由助动词haber的变位\"han\"加上动词\"crecer\"的过去分词\"crecido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos crecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos crecido\"是第一人称复数(nosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "habéis crecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis crecido\"是第二人称复数(vosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien esta semana",
        options: [
          { 
            text: "muy bien esta semana", 
            isCorrect: true, 
            correctTip: "\"muy bien esta semana\"表示\"这周非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
];
