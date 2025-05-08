import { Sentence } from "@/types/game";

// -ER Verbs in Subjuntivo Presente (Present Subjunctive) Tense
export const erVerbsSubjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | Yo obedezca muy bien aunque sea necesario.
  {
    id: 123,
    chinese: "即便需要服从，我也会全力配合。",
    spanish: "Yo obedezca muy bien aunque sea necesario.",
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
        correctWord: "obedezca",
        options: [
          { 
            text: "obedezca", 
            isCorrect: true, 
            correctTip: "\"obedezca\"是动词\"obedecer\"（服从）在第一人称现在虚拟式的正确变位。注意c变为zc的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "obedezco", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"obedezco\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "obedeca", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"obedeca\"拼写错误，正确的拼写应为\"obedezca\"，带有zc的拼写变化。" 
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
  // Subjuntivo presente | Tú | Tú emerjas muy bien aunque sea necesario.
  {
    id: 124,
    chinese: "就算必须现身，你也要处理得当。",
    spanish: "Tú emerjas muy bien aunque sea necesario.",
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
        correctWord: "emerjas",
        options: [
          { 
            text: "emerjas", 
            isCorrect: true, 
            correctTip: "\"emerjas\"是动词\"emerger\"（浮现）在第二人称现在虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "emerges", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"emerges\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "emergas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"emergas\"拼写错误，正确的拼写应为\"emerjas\"，g变为j的拼写变化。" 
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
  // Subjuntivo presente | Él | Él erga muy bien aunque sea necesario.
  {
    id: 125,
    chinese: "纵需树立权威，他也得把握分寸。",
    spanish: "Él erga muy bien aunque sea necesario.",
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
        correctWord: "erga",
        options: [
          { 
            text: "erga", 
            isCorrect: true, 
            correctTip: "\"erga\"是动词\"erguir\"（竖立）在第三人称现在虚拟式的正确变位，注意这是不规则变位。", 
            incorrectTip: "" 
          },
          { 
            text: "ergue", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ergue\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "ergua", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ergua\"拼写错误，正确的拼写应为\"erga\"，这是不规则变位。" 
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
  // Subjuntivo presente | Nosotros | Nosotros encojamos muy bien aunque sea necesario.
  {
    id: 126,
    chinese: "虽需压缩规模，我们仍会周密部署。",
    spanish: "Nosotros encojamos muy bien aunque sea necesario.",
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
        correctWord: "encojamos",
        options: [
          { 
            text: "encojamos", 
            isCorrect: true, 
            correctTip: "\"encojamos\"是动词\"encoger\"（缩小）在第一人称复数现在虚拟式的正确变位。注意g变为j的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "encogemos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"encogemos\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "encogamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"encogamos\"拼写错误，正确的拼写应为\"encojamos\"，g变为j的拼写变化。" 
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
  // Subjuntivo presente | Vosotros | Vosotros detengáis muy bien aunque sea necesario.
  {
    id: 127,
    chinese: "即便必须阻止，你们也要方法得当。",
    spanish: "Vosotros detengáis muy bien aunque sea necesario.",
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
        correctWord: "detengáis",
        options: [
          { 
            text: "detengáis", 
            isCorrect: true, 
            correctTip: "\"detengáis\"是动词\"detener\"（阻止）在第二人称复数现在虚拟式的正确变位。这是不规则变位。", 
            incorrectTip: "" 
          },
          { 
            text: "detenéis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"detenéis\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "detenáis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"detenáis\"拼写错误，正确的拼写应为\"detengáis\"，因为这是不规则变位。" 
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
  // Subjuntivo presente | Ellos | Ellos recojan muy bien aunque sea necesario.
  {
    id: 128,
    chinese: "纵使需要整合，他们也会系统推进。",
    spanish: "Ellos recojan muy bien aunque sea necesario.",
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
        correctWord: "recojan",
        options: [
          { 
            text: "recojan", 
            isCorrect: true, 
            correctTip: "\"recojan\"是动词\"recoger\"（收集）在第三人称复数现在虚拟式的正确变位。注意g变为j的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "recogen", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recogen\"是陈述式现在时形式，不是虚拟式。" 
          },
          { 
            text: "recogan", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recogan\"拼写错误，正确的拼写应为\"recojan\"，g变为j的拼写变化。" 
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
