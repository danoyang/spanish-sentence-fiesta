import { Sentence } from "@/types/game";

// Pluscuamperfecto (Past Perfect) sentences
export const pluscuamperfectoSentences: Sentence[] = [
  // Pluscuamperfecto | Yo | Yo había dibujado muy bien antes.
  {
    id: 39,
    chinese: "我以前画得非常好。",
    spanish: "Yo había dibujado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había dibujado",
        options: [
          { 
            text: "había dibujado", 
            isCorrect: true, 
            correctTip: "\"había dibujado\"是过去完成时第一人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"dibujar\"的过去分词\"dibujado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías dibujado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías dibujado\"是第二人称单数(tú)的过去完成时形式，不匹配第一人称主语\"Yo\"。" 
          },
          { 
            text: "he dibujado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"he dibujado\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Tú | Tú habías enviado muy bien antes.
  {
    id: 40,
    chinese: "你以前发送得非常好。",
    spanish: "Tú habías enviado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habías enviado",
        options: [
          { 
            text: "habías enviado", 
            isCorrect: true, 
            correctTip: "\"habías enviado\"是过去完成时第二人称单数形式，由助动词haber的过去未完成时变位\"habías\"加上动词\"enviar\"的过去分词\"enviado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "había enviado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"había enviado\"是第一或第三人称单数(yo/él/ella)的过去完成时形式，不匹配第二人称主语\"Tú\"。" 
          },
          { 
            text: "has enviado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"has enviado\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Él | Él había jugado muy bien antes.
  {
    id: 41,
    chinese: "他以前玩得非常好。",
    spanish: "Él había jugado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "había jugado",
        options: [
          { 
            text: "había jugado", 
            isCorrect: true, 
            correctTip: "\"había jugado\"是过去完成时第三人称单数形式，由助动词haber的过去未完成时变位\"había\"加上动词\"jugar\"的过去分词\"jugado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habías jugado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habías jugado\"是第二人称单数(tú)的过去完成时形式，不匹配第三人称主语\"Él\"。" 
          },
          { 
            text: "ha jugado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ha jugado\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Nosotros | Nosotros habíamos plantado muy bien antes.
  {
    id: 42,
    chinese: "我们以前种植得非常好。",
    spanish: "Nosotros habíamos plantado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíamos plantado",
        options: [
          { 
            text: "habíamos plantado", 
            isCorrect: true, 
            correctTip: "\"habíamos plantado\"是过去完成时第一人称复数形式，由助动词haber的过去未完成时变位\"habíamos\"加上动词\"plantar\"的过去分词\"plantado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habían plantado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habían plantado\"是第三人称复数(ellos/ellas)的过去完成时形式，不匹配第一人称复数主语\"Nosotros\"。" 
          },
          { 
            text: "hemos plantado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hemos plantado\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Vosotros | Vosotros habíais reservado muy bien antes.
  {
    id: 43,
    chinese: "你们以前预订得非常好。",
    spanish: "Vosotros habíais reservado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habíais reservado",
        options: [
          { 
            text: "habíais reservado", 
            isCorrect: true, 
            correctTip: "\"habíais reservado\"是过去完成时第二人称复数形式，由助动词haber的过去未完成时变位\"habíais\"加上动词\"reservar\"的过去分词\"reservado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos reservado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos reservado\"是第一人称复数(nosotros)的过去完成时形式，不匹配第二人称复数主语\"Vosotros\"。" 
          },
          { 
            text: "habéis reservado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habéis reservado\"是现在完成时形式，而不是过去完成时。" 
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
  // Pluscuamperfecto | Ellos | Ellos habían regalado muy bien antes.
  {
    id: 44,
    chinese: "他们以前赠送得非常好。",
    spanish: "Ellos habían regalado muy bien antes.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "habían regalado",
        options: [
          { 
            text: "habían regalado", 
            isCorrect: true, 
            correctTip: "\"habían regalado\"是过去完成时第三人称复数形式，由助动词haber的过去未完成时变位\"habían\"加上动词\"regalar\"的过去分词\"regalado\"组成。", 
            incorrectTip: "" 
          },
          { 
            text: "habíamos regalado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habíamos regalado\"是第一人称复数(nosotros)的过去完成时形式，不匹配第三人称复数主语\"Ellos\"。" 
          },
          { 
            text: "han regalado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"han regalado\"是现在完成时形式，而不是过去完成时。" 
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
  }
];
