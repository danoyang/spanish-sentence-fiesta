import { Sentence } from "@/types/game";

// -ER Verbs in Pluscuamperfecto (Past Perfect) Tense
export const erVerbsPluscuamperfectoSentences: Sentence[] = [
  // Pluscuamperfecto | Yo | Yo había tejido muy bien antes.
  {
    id: 111,
    chinese: "在那之前，我曾编织得非常好。",
    spanish: "Yo había tejido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había tejido",
        options: [
          { 
            text: "había tejido", 
            isCorrect: true, 
            correctTip: "\"había tejido\"是过去完成时第一人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"tejer\"的过去分词\"tejido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías tejido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías tejido\"是第二人称单数(tú)的过去完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "he tejido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he tejido\"是现在完成时形式，而不是过去完成时。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pluscuamperfecto | Tú | Tú habías escogido muy bien antes.
  {
    id: 112,
    chinese: "在那之前，你曾做出过非常明智的选择。",
    spanish: "Tú habías escogido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habías escogido",
        options: [
          { 
            text: "habías escogido", 
            isCorrect: true, 
            correctTip: "\"habías escogido\"是过去完成时第二人称单数形式，由助动词haber的过去未完成时变位\"habías\"加上动词\"escoger\"的过去分词\"escogido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "había escogido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"había escogido\"是第一或第三人称单数(yo/él/ella)的过去完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "has escogido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has escogido\"是现在完成时形式，而不是过去完成时。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pluscuamperfecto | Él | Él había mecido muy bien antes.
  {
    id: 113,
    chinese: "在那之前，他摇动摇篮的动作曾非常娴熟。",
    spanish: "Él había mecido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había mecido",
        options: [
          { 
            text: "había mecido", 
            isCorrect: true, 
            correctTip: "\"había mecido\"是过去完成时第三人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"mecer\"的过去分词\"mecido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías mecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías mecido\"是第二人称单数(tú)的过去完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "ha mecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha mecido\"是现在完成时形式，而不是过去完成时。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pluscuamperfecto | Nosotros | Nosotros habíamos sucedido muy bien antes.
  {
    id: 114,
    chinese: "在那之前，我们处理事务的方式曾非常得当。",
    spanish: "Nosotros habíamos sucedido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíamos sucedido",
        options: [
          { 
            text: "habíamos sucedido", 
            isCorrect: true, 
            correctTip: "\"habíamos sucedido\"是过去完成时第一人称复数形式，由助动词haber的过去未完成时变位\"habíamos\"加上动词\"suceder\"的过去分词\"sucedido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habían sucedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habían sucedido\"是第三人称复数(ellos/ellas)的过去完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "hemos sucedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos sucedido\"是现在完成时形式，而不是过去完成时。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pluscuamperfecto | Vosotros | Vosotros habíais cedido muy bien antes.
  {
    id: 115,
    chinese: "在那之前，你们协调问题时曾表现得非常配合。",
    spanish: "Vosotros habíais cedido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíais cedido",
        options: [
          { 
            text: "habíais cedido", 
            isCorrect: true, 
            correctTip: "\"habíais cedido\"是过去完成时第二人称复数形式，由助动词haber的过去未完成时变位\"habíais\"加上动词\"ceder\"的过去分词\"cedido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos cedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos cedido\"是第一人称复数(nosotros)的过去完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "habéis cedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis cedido\"是现在完成时形式，而不是过去完成时。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pluscuamperfecto | Ellos | Ellos habían aparecido muy bien antes.
  {
    id: 116,
    chinese: "在那之前，他们的登场方式曾安排得非常妥当。",
    spanish: "Ellos habían aparecido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habían aparecido",
        options: [
          { 
            text: "habían aparecido", 
            isCorrect: true, 
            correctTip: "\"habían aparecido\"是过去完成时第三人称复数形式，由助动词haber的过去未完成时变位\"habían\"加上动词\"aparecer\"的过去分词\"aparecido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos aparecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos aparecido\"是第一人称复数(nosotros)的过去完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "habíais aparecido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíais aparecido\"是第二人称复数(vosotros)的过去完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          }
        ]
      },
      {
        correctWord: "muy bien antes",
        options: [
          { 
            text: "muy bien antes", 
            isCorrect: true, 
            correctTip: "\"muy bien antes\"表示\"以前非常好\"。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
];
