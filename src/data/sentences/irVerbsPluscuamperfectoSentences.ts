import { Sentence } from "@/types/game";

// -IR Verbs in Pluscuamperfecto (Past Perfect) Tense
export const irVerbsPluscuamperfectoSentences: Sentence[] = [
  // Pluscuamperfecto | Yo | Yo había dormido muy bien antes.
  {
    id: 117,
    chinese: "我以前睡得非常好。",
    spanish: "Yo había dormido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había dormido",
        options: [
          { 
            text: "había dormido", 
            isCorrect: true, 
            correctTip: "\"había dormido\"是过去完成时第一人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"dormir\"的过去分词\"dormido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías dormido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías dormido\"是第二人称单数(tú)的过去完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "he dormido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he dormido\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Tú | Tú habías pedido muy bien antes.
  {
    id: 118,
    chinese: "你以前要求得非常好。",
    spanish: "Tú habías pedido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habías pedido",
        options: [
          { 
            text: "habías pedido", 
            isCorrect: true, 
            correctTip: "\"habías pedido\"是过去完成时第二人称单数形式，由助动词haber的过去未完成时变位\"habías\"加上动词\"pedir\"的过去分词\"pedido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "había pedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"había pedido\"是第一或第三人称单数(yo/él/ella)的过去完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "has pedido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has pedido\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Él | Él había servido muy bien antes.
  {
    id: 119,
    chinese: "他以前服务得非常好。",
    spanish: "Él había servido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había servido",
        options: [
          { 
            text: "había servido", 
            isCorrect: true, 
            correctTip: "\"había servido\"是过去完成时第三人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"servir\"的过去分词\"servido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías servido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías servido\"是第二人称单数(tú)的过去完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "ha servido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha servido\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Nosotros | Nosotros habíamos medido muy bien antes.
  {
    id: 120,
    chinese: "我们以前测量得非常好。",
    spanish: "Nosotros habíamos medido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíamos medido",
        options: [
          { 
            text: "habíamos medido", 
            isCorrect: true, 
            correctTip: "\"habíamos medido\"是过去完成时第一人称复数形式，由助动词haber的过去未完成时变位\"habíamos\"加上动词\"medir\"的过去分词\"medido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habían medido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habían medido\"是第三人称复数(ellos/ellas)的过去完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "hemos medido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos medido\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Vosotros | Vosotros habíais repetido muy bien antes.
  {
    id: 121,
    chinese: "你们以前重复得非常好。",
    spanish: "Vosotros habíais repetido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíais repetido",
        options: [
          { 
            text: "habíais repetido", 
            isCorrect: true, 
            correctTip: "\"habíais repetido\"是过去完成时第二人称复数形式，由助动词haber的过去未完成时变位\"habíais\"加上动词\"repetir\"的过去分词\"repetido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos repetido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos repetido\"是第一人称复数(nosotros)的过去完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "habéis repetido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis repetido\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Ellos | Ellos habían competido muy bien antes.
  {
    id: 122,
    chinese: "他们以前竞争得非常好。",
    spanish: "Ellos habían competido muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habían competido",
        options: [
          { 
            text: "habían competido", 
            isCorrect: true, 
            correctTip: "\"habían competido\"是过去完成时第三人称复数形式，由助动词haber的过去未完成时变位\"habían\"加上动词\"competir\"的过去分词\"competido\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos competido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos competido\"是第一人称复数(nosotros)的过去完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "habíais competido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíais competido\"是第二人称复数(vosotros)的过去完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
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
