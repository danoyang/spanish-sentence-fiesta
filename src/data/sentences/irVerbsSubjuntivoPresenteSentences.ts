import { Sentence } from "@/types/game";

// -IR Verbs in Subjuntivo Presente (Present Subjunctive) Tense
export const irVerbsSubjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | Yo asuma muy bien aunque sea necesario.
  {
    id: 135,
    chinese: "虽然有必要，我也要承担得非常好。",
    spanish: "Yo asuma muy bien aunque sea necesario.",
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
            text: "Tú", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Tú\"表示\"你\"，不是此句的主语。" 
          },
          { 
            text: "Él", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Él\"表示\"他\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "asuma",
        options: [
          { 
            text: "asuma", 
            isCorrect: true, 
            correctTip: "\"asuma\"是动词\"asumir\"（承担）在第一人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "asumo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"asumo\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "asumiera", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"asumiera\"是过去虚拟式形式，不是现在虚拟式。" 
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
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在让步从句中应使用虚拟式(sea)而不是陈述式(es)。" 
          },
          { 
            text: "porque sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque\"表示\"因为\"，而不是\"虽然\"，不符合句意。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Tú | Tú confundas muy bien aunque sea necesario.
  {
    id: 136,
    chinese: "虽然有必要，你也要混淆得非常好。",
    spanish: "Tú confundas muy bien aunque sea necesario.",
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
            text: "Yo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Yo\"表示\"我\"，不是此句的主语。" 
          },
          { 
            text: "Él", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Él\"表示\"他\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "confundas",
        options: [
          { 
            text: "confundas", 
            isCorrect: true, 
            correctTip: "\"confundas\"是动词\"confundir\"（混淆）在第二人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "confundes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"confundes\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "confundieras", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"confundieras\"是过去虚拟式形式，不是现在虚拟式。" 
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
            text: "muy bueno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bueno\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si es necesario\"表示\"如果有必要\"，而不是\"虽然有必要\"，意思不同。" 
          },
          { 
            text: "cuando sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando sea necesario\"表示\"当有必要时\"，与原句的\"虽然有必要\"不符。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Él | Él incluya muy bien aunque sea necesario.
  {
    id: 137,
    chinese: "虽然有必要，他也要包括得非常好。",
    spanish: "Él incluya muy bien aunque sea necesario.",
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
            text: "Yo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Yo\"表示\"我\"，不是此句的主语。" 
          },
          { 
            text: "Tú", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Tú\"表示\"你\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "incluya",
        options: [
          { 
            text: "incluya", 
            isCorrect: true, 
            correctTip: "\"incluya\"是动词\"incluir\"（包括）在第三人称现在虚拟式的正确变位。注意i变为y的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "incluye", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"incluye\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "inclua", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"inclua\"拼写错误，正确的拼写应为\"incluya\"，带有y的拼写变化。" 
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
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在让步从句中应使用虚拟式(sea)而不是陈述式(es)。" 
          },
          { 
            text: "porque sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque\"表示\"因为\"，而不是\"虽然\"，不符合句意。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Nosotros | Nosotros introduzcamos muy bien aunque sea necesario.
  {
    id: 138,
    chinese: "虽然有必要，我们也要介绍得非常好。",
    spanish: "Nosotros introduzcamos muy bien aunque sea necesario.",
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
            text: "Yo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Yo\"表示\"我\"，不是此句的主语。" 
          },
          { 
            text: "Ellos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellos\"表示\"他们\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "introduzcamos",
        options: [
          { 
            text: "introduzcamos", 
            isCorrect: true, 
            correctTip: "\"introduzcamos\"是动词\"introducir\"（介绍）在第一人称复数现在虚拟式的正确变位。注意c变为zc的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "introducimos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"introducimos\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "introduciríamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"introduciríamos\"是条件式，不是现在虚拟式。" 
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
            text: "muy buenos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy buenos\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在让步从句中应使用虚拟式(sea)而不是陈述式(es)。" 
          },
          { 
            text: "mientras sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mientras\"表示\"当...的时候\"，而不是\"虽然\"，不符合句意。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Vosotros | Vosotros produzcáis muy bien aunque sea necesario.
  {
    id: 139,
    chinese: "虽然有必要，你们也要生产得非常好。",
    spanish: "Vosotros produzcáis muy bien aunque sea necesario.",
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
            text: "Nosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Nosotros\"表示\"我们\"，不是此句的主语。" 
          },
          { 
            text: "Ellos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellos\"表示\"他们\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "produzcáis",
        options: [
          { 
            text: "produzcáis", 
            isCorrect: true, 
            correctTip: "\"produzcáis\"是动词\"producir\"（生产）在第二人称复数现在虚拟式的正确变位。注意c变为zc的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "producís", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"producís\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "produciríais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"produciríais\"是条件式，不是现在虚拟式。" 
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
            incorrectTip: "\"muy buenos\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si es necesario\"表示\"如果有必要\"，而不是\"虽然有必要\"，意思不同。" 
          },
          { 
            text: "porque sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque\"表示\"因为\"，而不是\"虽然\"，不符合句意。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Ellos | Ellos traduzcan muy bien aunque sea necesario.
  {
    id: 140,
    chinese: "虽然有必要，他们也要翻译得非常好。",
    spanish: "Ellos traduzcan muy bien aunque sea necesario.",
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
            text: "Nosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Nosotros\"表示\"我们\"，不是此句的主语。" 
          },
          { 
            text: "Vosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Vosotros\"表示\"你们\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "traduzcan",
        options: [
          { 
            text: "traduzcan", 
            isCorrect: true, 
            correctTip: "\"traduzcan\"是动词\"traducir\"（翻译）在第三人称复数现在虚拟式的正确变位。注意c变为zc的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "traducen", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"traducen\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "traducan", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"traducan\"拼写错误，正确的拼写应为\"traduzcan\"，带有zc的拼写变化。" 
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
            text: "muy buenos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy buenos\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque es necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在让步从句中应使用虚拟式(sea)而不是陈述式(es)。" 
          },
          { 
            text: "cuando sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando sea necesario\"表示\"当有必要时\"，与原句的\"虽然有必要\"不符。" 
          }
        ]
      }
    ],
    completed: false,
  },
];
