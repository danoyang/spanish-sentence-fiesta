import { Sentence } from "@/types/game";

// Presente Perfecto (Present Perfect) sentences
export const presentePerfectoSentences: Sentence[] = [
  // Presente perfecto | Yo | Yo he visitado muy bien esta semana.
  {
    id: 33,
    chinese: "我这周访问得非常好。",
    spanish: "Yo he visitado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "he visitado",
        options: [
          { 
            text: "he visitado", 
            isCorrect: true, 
            correctTip: "\"he visitado\"是现在完成时第一人称单数形式，由助动词haber的变位\"he\"加上动词\"visitar\"的过去分词\"visitado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "has visitado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has visitado\"是第二人称单数(tú)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "ha visitado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha visitado\"是第三人称单数(él/ella)的现在完成时形式，不匹配第一人称主语\"Yo\"。" 
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
  // Presente perfecto | Tú | Tú has arreglado muy bien esta semana.
  {
    id: 34,
    chinese: "你这周修理得非常好。",
    spanish: "Tú has arreglado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "has arreglado",
        options: [
          { 
            text: "has arreglado", 
            isCorrect: true, 
            correctTip: "\"has arreglado\"是现在完成时第二人称单数形式，由助动词haber的变位\"has\"加上动词\"arreglar\"的过去分词\"arreglado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "he arreglado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he arreglado\"是第一人称单数(yo)的现在完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "ha arreglado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha arreglado\"是第三人称单数(él/ella)的现在完成时形式，不匹配第二人称主语\"Tú\"。" 
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
  // Presente perfecto | Él | Él ha cambiado muy bien esta semana.
  {
    id: 35,
    chinese: "他这周改变得非常好。",
    spanish: "Él ha cambiado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "ha cambiado",
        options: [
          { 
            text: "ha cambiado", 
            isCorrect: true, 
            correctTip: "\"ha cambiado\"是现在完成时第三人称单数形式，由助动词haber的变位\"ha\"加上动词\"cambiar\"的过去分词\"cambiado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "he cambiado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he cambiado\"是第一人称单数(yo)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "has cambiado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has cambiado\"是第二人称单数(tú)的现在完成时形式，不匹配第三人称主语\"Él\"。" 
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
  // Presente perfecto | Nosotros | Nosotros hemos enseñado muy bien esta semana.
  {
    id: 36,
    chinese: "我们这周教得非常好。",
    spanish: "Nosotros hemos enseñado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "hemos enseñado",
        options: [
          { 
            text: "hemos enseñado", 
            isCorrect: true, 
            correctTip: "\"hemos enseñado\"是现在完成时第一人称复数形式，由助动词haber的变位\"hemos\"加上动词\"enseñar\"的过去分词\"enseñado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "han enseñado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han enseñado\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "habéis enseñado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis enseñado\"是第二人称复数(vosotros)的现在完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
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
  // Presente perfecto | Vosotros | Vosotros habéis andado muy bien esta semana.
  {
    id: 37,
    chinese: "你们这周走得非常好。",
    spanish: "Vosotros habéis andado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habéis andado",
        options: [
          { 
            text: "habéis andado", 
            isCorrect: true, 
            correctTip: "\"habéis andado\"是现在完成时第二人称复数形式，由助动词haber的变位\"habéis\"加上动词\"andar\"的过去分词\"andado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos andado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos andado\"是第一人称复数(nosotros)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "han andado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han andado\"是第三人称复数(ellos/ellas)的现在完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
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
  // Presente perfecto | Ellos | Ellos han descansado muy bien esta semana.
  {
    id: 38,
    chinese: "他们这周休息得非常好。",
    spanish: "Ellos han descansado muy bien esta semana.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "han descansado",
        options: [
          { 
            text: "han descansado", 
            isCorrect: true, 
            correctTip: "\"han descansado\"是现在完成时第三人称复数形式，由助动词haber的变位\"han\"加上动词\"descansar\"的过去分词\"descansado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "hemos descansado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos descansado\"是第一人称复数(nosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "habéis descansado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis descansado\"是第二人称复数(vosotros)的现在完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
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
  }
];
