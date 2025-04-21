import { Sentence } from "@/types/game";

// Subjuntivo Presente (Present Subjunctive) sentences
export const subjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | Yo repare muy bien aunque sea necesario.
  {
    id: 45,
    chinese: "虽然有必要，我也要修理得非常好。",
    spanish: "Yo repare muy bien aunque sea necesario.",
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
        correctWord: "repare",
        options: [
          { 
            text: "repare", 
            isCorrect: true, 
            correctTip: "\"repare\"是动词\"reparar\"（修理）在第一人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "repara", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"repara\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "reparé", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"reparé\"是过去时形式，不是现在虚拟式。" 
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
  // Subjuntivo presente | Tú | Tú soñes muy bien aunque sea necesario.
  {
    id: 46,
    chinese: "虽然有必要，你也要梦想得非常好。",
    spanish: "Tú soñes muy bien aunque sea necesario.",
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
            text: "Nosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Nosotros\"表示\"我们\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "soñes",
        options: [
          { 
            text: "soñes", 
            isCorrect: true, 
            correctTip: "\"soñes\"是动词\"soñar\"（梦想）在第二人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "sueñas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"sueñas\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "soñaras", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"soñaras\"是过去虚拟式，不是现在虚拟式。" 
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
  // Subjuntivo presente | Él | Él trabaje muy bien aunque sea necesario.
  {
    id: 47,
    chinese: "虽然有必要，他也要工作得非常好。",
    spanish: "Él trabaje muy bien aunque sea necesario.",
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
            incorrectTip: "\"Ella\"表示\"她\"，不是此句的主语。" 
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
        correctWord: "trabaje",
        options: [
          { 
            text: "trabaje", 
            isCorrect: true, 
            correctTip: "\"trabaje\"是动词\"trabajar\"（工作）在第三人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "trabaja", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"trabaja\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "trabajara", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"trabajara\"是过去虚拟式，不是现在虚拟式。" 
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
            text: "tan bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"tan bien\"也表示\"这么好\"，但原句使用的是\"muy bien\"（非常好）。" 
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
            incorrectTip: "\"mientras sea necesario\"表示\"只要有必要\"，与原句的\"虽然有必要\"不符。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Nosotros | Nosotros viajemos muy bien aunque sea necesario.
  {
    id: 48,
    chinese: "虽然有必要，我们也要旅行得非常好。",
    spanish: "Nosotros viajemos muy bien aunque sea necesario.",
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
            text: "Vosotros", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Vosotros\"表示\"你们\"，不是此句的主语。" 
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
        correctWord: "viajemos",
        options: [
          { 
            text: "viajemos", 
            isCorrect: true, 
            correctTip: "\"viajemos\"是动词\"viajar\"（旅行）在第一人称复数现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "viajamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"viajamos\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "viajáramos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"viajáramos\"是过去虚拟式，不是现在虚拟式。" 
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
            text: "bastante bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bastante bien\"表示\"相当好\"，程度不如\"muy bien\"（非常好）。" 
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
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque era necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aunque era necesario\"使用了过去未完成时，而不是现在虚拟式，不符合语法要求。" 
          },
          { 
            text: "a pesar de ser necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"a pesar de ser necesario\"是另一种表达\"尽管必要\"的方式，但原句使用的是\"aunque sea necesario\"。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Vosotros | Vosotros apaguéis muy bien aunque sea necesario.
  {
    id: 49,
    chinese: "虽然有必要，你们也要关闭得非常好。",
    spanish: "Vosotros apaguéis muy bien aunque sea necesario.",
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
            text: "Ustedes", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ustedes\"也表示\"你们\"，但在西班牙语中更正式，且动词变位不同。" 
          }
        ]
      },
      { 
        correctWord: "apaguéis",
        options: [
          { 
            text: "apaguéis", 
            isCorrect: true, 
            correctTip: "\"apaguéis\"是动词\"apagar\"（关闭）在第二人称复数现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "apagáis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"apagáis\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "apagaréis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"apagaréis\"是将来时形式，不是现在虚拟式。" 
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
            text: "muy bueno", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bueno\"用于修饰名词，而不是动词。应使用副词形式\"muy bien\"。" 
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
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "aunque será necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aunque será necesario\"使用了将来时，而不是现在虚拟式，不符合语法要求。" 
          },
          { 
            text: "porque sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque sea necesario\"表示\"因为有必要\"，而不是\"虽然有必要\"，不符合句意。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo presente | Ellos | Ellos celebren muy bien aunque sea necesario.
  {
    id: 50,
    chinese: "虽然有必要，他们也要庆祝得非常好。",
    spanish: "Ellos celebren muy bien aunque sea necesario.",
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
            text: "Ellas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellas\"表示\"她们\"，而不是\"他们\"（包括男性或混合性别）。" 
          }
        ]
      },
      { 
        correctWord: "celebren",
        options: [
          { 
            text: "celebren", 
            isCorrect: true, 
            correctTip: "\"celebren\"是动词\"celebrar\"（庆祝）在第三人称复数现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "celebran", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"celebran\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "celebrarán", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"celebrarán\"是将来时形式，不是现在虚拟式。" 
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
        correctWord: "aunque sea necesario",
        options: [
          { 
            text: "aunque sea necesario", 
            isCorrect: true, 
            correctTip: "\"aunque sea necesario\"表示\"虽然是必要的\"，是一个让步从句。", 
            incorrectTip: "" 
          },
          { 
            text: "cuando sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando sea necesario\"表示\"当有必要时\"，与原句的\"虽然有必要\"不符。" 
          },
          { 
            text: "si fuera necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si fuera necesario\"表示\"如果有必要的话\"，是条件句而不是让步句。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
