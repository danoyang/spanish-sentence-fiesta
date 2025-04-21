import { Sentence } from "@/types/game";

// -IR Verbs in Presente Perfecto (Present Perfect) Tense
export const irVerbsPresentePerfectoSentences: Sentence[] = [
  // Presente perfecto | Yo | Yo he suspendido muy bien esta semana.
  {
    id: 105,
    chinese: "我这周暂停得非常好。",
    spanish: "Yo he suspendido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "he suspendido",
        options: [
          { 
            text: "he suspendido", 
            isCorrect: true, 
            correctTip: "\"he suspendido\"是现在完成时第一人称单数形式，由助动词haber的变位\"he\"加上动词\"suspender\"的过去分词\"suspendido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "has suspendido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has suspendido\"是第二人称单数(tú)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "ha suspendido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha suspendido\"是第三人称单数(él/ella)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
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
  // Presente perfecto | Tú | Tú has oído muy bien esta semana.
  {
    id: 106,
    chinese: "你这周听得非常好。",
    spanish: "Tú has oído muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "has oído",
        options: [
          { 
            text: "has oído", 
            isCorrect: true, 
            correctTip: "\"has oído\"是现在完成时第二人称单数形式，由助动词haber的变位\"has\"加上动词\"oír\"的过去分词\"oído\"组成。注意oír的过去分词是不规则的。", 
            incorrectTip: "" 
          },
          { 
            text: "he oído", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he oído\"是第一人称单数(yo)的现在完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "has oido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has oido\"拼写错误，正确的过去分词是\"oído\"，带有重音符号。" 
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
  // Presente perfecto | Él | Él ha pulido muy bien esta semana.
  {
    id: 107,
    chinese: "他这周打磨得非常好。",
    spanish: "Él ha pulido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "ha pulido",
        options: [
          { 
            text: "ha pulido", 
            isCorrect: true, 
            correctTip: "\"ha pulido\"是现在完成时第三人称单数形式，由助动词haber的变位\"ha\"加上动词\"pulir\"的过去分词\"pulido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "he pulido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he pulido\"是第一人称单数(yo)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "has pulido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has pulido\"是第二人称单数(tú)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
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
  // Presente perfecto | Nosotros | Nosotros hemos salido muy bien esta semana.
  {
    id: 108,
    chinese: "我们这周出去得非常好。",
    spanish: "Nosotros hemos salido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "hemos salido",
        options: [
          { 
            text: "hemos salido", 
            isCorrect: true, 
            correctTip: "\"hemos salido\"是现在完成时第一人称复数形式，由助动词haber的变位\"hemos\"加上动词\"salir\"的过去分词\"salido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "han salido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han salido\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "habéis salido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis salido\"是第二人称复数(vosotros)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
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
  // Presente perfecto | Vosotros | Vosotros habéis venido muy bien esta semana.
  {
    id: 109,
    chinese: "你们这周来得非常好。",
    spanish: "Vosotros habéis venido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habéis venido",
        options: [
          { 
            text: "habéis venido", 
            isCorrect: true, 
            correctTip: "\"habéis venido\"是现在完成时第二人称复数形式，由助动词haber的变位\"habéis\"加上动词\"venir\"的过去分词\"venido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos venido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos venido\"是第一人称复数(nosotros)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "han venido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han venido\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
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
  // Presente perfecto | Ellos | Ellos han sentido muy bien esta semana.
  {
    id: 110,
    chinese: "他们这周感觉非常好。",
    spanish: "Ellos han sentido muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "han sentido",
        options: [
          { 
            text: "han sentido", 
            isCorrect: true, 
            correctTip: "\"han sentido\"是现在完成时第三人称复数形式，由助动词haber的变位\"han\"加上动词\"sentir\"的过去分词\"sentido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos sentido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos sentido\"是第一人称复数(nosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "habéis sentido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis sentido\"是第二人称复数(vosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
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
