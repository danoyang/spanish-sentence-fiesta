import { Sentence } from "@/types/game";

// -IR Verbs in Subjuntivo Pasado (Past Subjunctive) Tense
export const irVerbsSubjuntivoPasadoSentences: Sentence[] = [
  // Subjuntivo pasado | Yo | Yo permitiría la entrada si tuviera la llave.
  {
    id: 141,
    chinese: "如果我有钥匙，我会允许进入。",
    spanish: "Yo permitiría la entrada si tuviera la llave.",
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
        correctWord: "permitiría",
        options: [
          { 
            text: "permitiría", 
            isCorrect: true, 
            correctTip: "\"permitiría\"是动词\"permitir\"（允许）在第一人称条件式的正确变位，表示\"我会允许\"。", 
            incorrectTip: "" 
          },
          { 
            text: "permitiera", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"permitiera\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "permitía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"permitía\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "la entrada",
        options: [
          { 
            text: "la entrada", 
            isCorrect: true, 
            correctTip: "\"la entrada\"表示\"入口/进入\"，是动词permitir的宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，在这个句子结构中不自然。" 
          },
          { 
            text: "el permiso", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el permiso\"表示\"许可\"，但在\"permitir el permiso\"（允许许可）中重复了概念。" 
          }
        ]
      },
      {
        correctWord: "si tuviera la llave",
        options: [
          { 
            text: "si tuviera la llave", 
            isCorrect: true, 
            correctTip: "\"si tuviera la llave\"表示\"如果我有钥匙\"，是一个条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habría la llave", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(tuviera)而不是条件式(habría)。" 
          },
          { 
            text: "si tengo la llave", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si tengo la llave\"使用现在时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Tú | Tú sentirías menos dolor si tomaras la medicina.
  {
    id: 142,
    chinese: "如果你服药，你会感觉疼痛减轻。",
    spanish: "Tú sentirías menos dolor si tomaras la medicina.",
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
        correctWord: "sentirías",
        options: [
          { 
            text: "sentirías", 
            isCorrect: true, 
            correctTip: "\"sentirías\"是动词\"sentir\"（感觉）在第二人称条件式的正确变位，表示\"你会感觉\"。", 
            incorrectTip: "" 
          },
          { 
            text: "sintieras", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"sintieras\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "sentías", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"sentías\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "menos dolor",
        options: [
          { 
            text: "menos dolor", 
            isCorrect: true, 
            correctTip: "\"menos dolor\"表示\"更少的疼痛\"，符合日常表达。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，与感觉动词搭配不自然。" 
          },
          { 
            text: "mejor sensación", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mejor sensación\"表示\"更好的感觉\"，但与上下文的疼痛情景不太搭配。" 
          }
        ]
      },
      {
        correctWord: "si tomaras la medicina",
        options: [
          { 
            text: "si tomaras la medicina", 
            isCorrect: true, 
            correctTip: "\"si tomaras la medicina\"表示\"如果你服药\"，是一个符合生活情境的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si había medicina", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(tomaras)而不是过去未完成时(había)。" 
          },
          { 
            text: "cuando tomes medicina", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando tomes medicina\"表示\"当你服药的时候\"，使用的是虚拟式现在时而不是过去虚拟式。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Él | Él recibiría mejores notas si estudiara más.
  {
    id: 143,
    chinese: "如果他多学习一些，他会获得更好的成绩。",
    spanish: "Él recibiría mejores notas si estudiara más.",
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
        correctWord: "recibiría",
        options: [
          { 
            text: "recibiría", 
            isCorrect: true, 
            correctTip: "\"recibiría\"是动词\"recibir\"（接收）在第三人称条件式的正确变位，表示\"他会获得\"。", 
            incorrectTip: "" 
          },
          { 
            text: "recibiera", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recibiera\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "recibía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"recibía\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "mejores notas",
        options: [
          { 
            text: "mejores notas", 
            isCorrect: true, 
            correctTip: "\"mejores notas\"表示\"更好的成绩\"，是一个合适的宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为recibir的宾语不合适。" 
          },
          { 
            text: "buenos resultados", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"buenos resultados\"表示\"好的结果\"，在学习上下文中，\"mejores notas\"更具体且合适。" 
          }
        ]
      },
      {
        correctWord: "si estudiara más",
        options: [
          { 
            text: "si estudiara más", 
            isCorrect: true, 
            correctTip: "\"si estudiara más\"表示\"如果他多学习一些\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habría estudiado", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(estudiara)而不是条件式(habría estudiado)。" 
          },
          { 
            text: "si estudia", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si estudia\"使用现在时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Nosotros | Nosotros decidiríamos ir al cine si tuviéramos dinero.
  {
    id: 144,
    chinese: "如果我们有钱，我们会决定去看电影。",
    spanish: "Nosotros decidiríamos ir al cine si tuviéramos dinero.",
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
        correctWord: "decidiríamos",
        options: [
          { 
            text: "decidiríamos", 
            isCorrect: true, 
            correctTip: "\"decidiríamos\"是动词\"decidir\"（决定）在第一人称复数条件式的正确变位，表示\"我们会决定\"。", 
            incorrectTip: "" 
          },
          { 
            text: "decidiéramos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"decidiéramos\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "decidíamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"decidíamos\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "ir al cine",
        options: [
          { 
            text: "ir al cine", 
            isCorrect: true, 
            correctTip: "\"ir al cine\"表示\"去看电影\"，是一个合适的目的地。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为decidir的目的不合适。" 
          },
          { 
            text: "buenos resultados", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"buenos resultados\"表示\"好的结果\"，在决定去看电影的上下文中，不是最合适的选择。" 
          }
        ]
      },
      {
        correctWord: "si tuviéramos dinero",
        options: [
          { 
            text: "si tuviéramos dinero", 
            isCorrect: true, 
            correctTip: "\"si tuviéramos dinero\"表示\"如果我们有钱\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habríamos tenido dinero", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(tuviéramos)而不是条件式(habríamos tenido)。" 
          },
          { 
            text: "si tenemos dinero", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si tenemos dinero\"使用现在时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Vosotros | Vosotros podríais viajar si ahorrarais dinero.
  {
    id: 145,
    chinese: "如果你们存钱，你们就能旅行。",
    spanish: "Vosotros podríais viajar si ahorrarais dinero.",
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
        correctWord: "podríais",
        options: [
          { 
            text: "podríais", 
            isCorrect: true, 
            correctTip: "\"podríais\"是动词\"poder\"（能够）在第二人称复数条件式的正确变位，表示\"你们能够\"。", 
            incorrectTip: "" 
          },
          { 
            text: "pudierais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"pudierais\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "podíais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"podíais\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "viajar",
        options: [
          { 
            text: "viajar", 
            isCorrect: true, 
            correctTip: "\"viajar\"表示\"旅行\"，是一个合适的目的。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为poder的目的不合适。" 
          },
          { 
            text: "buenos resultados", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"buenos resultados\"表示\"好的结果\"，在旅行的上下文中，不是最合适的选择。" 
          }
        ]
      },
      {
        correctWord: "si ahorrarais dinero",
        options: [
          { 
            text: "si ahorrarais dinero", 
            isCorrect: true, 
            correctTip: "\"si ahorrarais dinero\"表示\"如果你们存钱\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habríais ahorrado dinero", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(ahorrarais)而不是条件式(habríais ahorrado)。" 
          },
          { 
            text: "si ahorramos dinero", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si ahorramos dinero\"使用现在时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Ellos | Ellos vendrían a la fiesta si recibieran la invitación.
  {
    id: 146,
    chinese: "如果他们收到邀请，他们会来参加聚会。",
    spanish: "Ellos vendrían a la fiesta si recibieran la invitación.",
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
        correctWord: "vendrían",
        options: [
          { 
            text: "vendrían", 
            isCorrect: true, 
            correctTip: "\"vendrían\"是动词\"venir\"（来）在第三人称复数条件式的正确变位，表示\"他们会来\"。", 
            incorrectTip: "" 
          },
          { 
            text: "vinieran", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"vinieran\"是过去虚拟式形式，在主句中使用不自然，应使用条件式。" 
          },
          { 
            text: "venían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"venían\"是过去未完成时形式，不适合表达假设性情况。" 
          }
        ]
      },
      {
        correctWord: "a la fiesta",
        options: [
          { 
            text: "a la fiesta", 
            isCorrect: true, 
            correctTip: "\"a la fiesta\"表示\"去参加聚会\"，是一个合适的目的地。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为venir的目的不合适。" 
          },
          { 
            text: "buenos resultados", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"buenos resultados\"表示\"好的结果\"，在参加聚会的上下文中，不是最合适的选择。" 
          }
        ]
      },
      {
        correctWord: "si recibieran la invitación",
        options: [
          { 
            text: "si recibieran la invitación", 
            isCorrect: true, 
            correctTip: "\"si recibieran la invitación\"表示\"如果他们收到邀请\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si hubieran recibido la invitación", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "在这种虚拟条件句中，条件从句应使用过去虚拟式(recibieran)而不是条件式(hubieran recibido)。" 
          },
          { 
            text: "si reciben la invitación", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si reciben la invitación\"使用现在时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
