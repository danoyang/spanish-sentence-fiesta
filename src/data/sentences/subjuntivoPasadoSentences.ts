import { Sentence } from "@/types/game";

// Subjuntivo Pasado (Past Subjunctive) sentences
export const subjuntivoPasadoSentences: Sentence[] = [
  // Subjuntivo pasado | Yo | Yo disfrutara muy bien si hubiera sabido.
  {
    id: 51,
    chinese: "如果我当时知道，我本来会享受得非常好。",
    spanish: "Yo disfrutara muy bien si hubiera sabido.",
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
        correctWord: "disfrutara",
        options: [
          { 
            text: "disfrutara", 
            isCorrect: true, 
            correctTip: "\"disfrutara\"是动词\"disfrutar\"（享受）在第一人称过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "disfruto", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"disfruto\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "disfrutaré", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"disfrutaré\"是将来时形式，不是过去虚拟式。" 
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
            text: "bastante bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"bastante bien\"表示\"相当好\"，程度不如\"muy bien\"（非常好）。" 
          }
        ]
      },
      {
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si sabía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si sabía\"使用了过去未完成时，而不是过去虚拟式，不符合虚拟条件句的语法要求。" 
          },
          { 
            text: "aunque hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aunque hubiera sabido\"表示\"即使我知道\"，是让步句而不是条件句。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Tú | Tú explicaras muy bien si hubiera sabido.
  {
    id: 52,
    chinese: "如果我当时知道，你本来会解释得非常好。",
    spanish: "Tú explicaras muy bien si hubiera sabido.",
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
        correctWord: "explicaras",
        options: [
          { 
            text: "explicaras", 
            isCorrect: true, 
            correctTip: "\"explicaras\"是动词\"explicar\"（解释）在第二人称过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "explicas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"explicas\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "explicabas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"explicabas\"是过去未完成时形式，不是过去虚拟式。" 
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
            text: "poco bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"poco bien\"表示\"不太好\"，与原句的\"非常好\"意思相反。" 
          }
        ]
      },
      {
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si sabría", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si sabría\"使用了条件式，在条件句中不应使用条件式，这是常见错误。" 
          },
          { 
            text: "cuando hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando hubiera sabido\"表示\"当我知道的时候\"，不符合条件句的逻辑。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Él | Él formara muy bien si hubiera sabido.
  {
    id: 53,
    chinese: "如果我当时知道，他本来会形成得非常好。",
    spanish: "Él formara muy bien si hubiera sabido.",
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
            text: "Yo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Yo\"表示\"我\"，不是此句的主语。" 
          }
        ]
      },
      { 
        correctWord: "formara",
        options: [
          { 
            text: "formara", 
            isCorrect: true, 
            correctTip: "\"formara\"是动词\"formar\"（形成）在第三人称过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "forma", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"forma\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "formaría", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"formaría\"是条件式形式，在这个句子中应使用过去虚拟式。" 
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
            text: "demasiado bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"demasiado bien\"表示\"太好了\"，程度过了，不同于\"muy bien\"（非常好）。" 
          }
        ]
      },
      {
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si había sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si había sabido\"使用了过去完成时，而不是过去虚拟式，不符合虚拟条件句的语法要求。" 
          },
          { 
            text: "porque hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque hubiera sabido\"表示\"因为我知道\"，是原因句而不是条件句。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Nosotros | Nosotros guardáramos muy bien si hubiera sabido.
  {
    id: 54,
    chinese: "如果我当时知道，我们本来会保存得非常好。",
    spanish: "Nosotros guardáramos muy bien si hubiera sabido.",
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
        correctWord: "guardáramos",
        options: [
          { 
            text: "guardáramos", 
            isCorrect: true, 
            correctTip: "\"guardáramos\"是动词\"guardar\"（保存）在第一人称复数过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "guardamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"guardamos\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "guardaríamos", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"guardaríamos\"是条件式形式，在这个句子中应使用过去虚拟式。" 
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
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si hubieramos sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si hubieramos sabido\"表示\"如果我们知道\"，而原句是\"如果我知道\"。另外，正确拼写应是\"hubiéramos\"。" 
          },
          { 
            text: "aunque hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"aunque hubiera sabido\"表示\"即使我知道\"，是让步句而不是条件句。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Vosotros | Vosotros imaginarais muy bien si hubiera sabido.
  {
    id: 55,
    chinese: "如果我当时知道，你们本来会想象得非常好。",
    spanish: "Vosotros imaginarais muy bien si hubiera sabido.",
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
        correctWord: "imaginarais",
        options: [
          { 
            text: "imaginarais", 
            isCorrect: true, 
            correctTip: "\"imaginarais\"是动词\"imaginar\"（想象）在第二人称复数过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "imagináis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"imagináis\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "imaginaríais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"imaginaríais\"是条件式形式，在这个句子中应使用过去虚拟式。" 
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
            incorrectTip: "\"muy buenos\"用于修饰复数名词，而不是动词。应使用副词形式\"muy bien\"。" 
          }
        ]
      },
      {
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "cuando hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando hubiera sabido\"表示\"当我知道的时候\"，不符合条件句的逻辑。" 
          },
          { 
            text: "si he sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si he sabido\"使用了现在完成时，而不是过去虚拟式，不符合虚拟条件句的语法要求。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Ellos | Ellos juntaran muy bien si hubiera sabido.
  {
    id: 56,
    chinese: "如果我当时知道，他们本来会聚集得非常好。",
    spanish: "Ellos juntaran muy bien si hubiera sabido.",
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
            text: "Ellas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"Ellas\"表示\"她们\"，而不是\"他们\"（包括男性或混合性别）。" 
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
        correctWord: "juntaran",
        options: [
          { 
            text: "juntaran", 
            isCorrect: true, 
            correctTip: "\"juntaran\"是动词\"juntar\"（聚集）在第三人称复数过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "juntan", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"juntan\"是现在时形式，不是过去虚拟式。" 
          },
          { 
            text: "juntarían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"juntarían\"是条件式形式，在这个句子中应使用过去虚拟式。" 
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
        correctWord: "si hubiera sabido",
        options: [
          { 
            text: "si hubiera sabido", 
            isCorrect: true, 
            correctTip: "\"si hubiera sabido\"表示\"如果我知道的话\"，是一个过去虚拟条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habría sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si habría sabido\"使用了条件完成时，在条件句中不应使用条件式，这是常见错误。" 
          },
          { 
            text: "porque hubiera sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"porque hubiera sabido\"表示\"因为我知道\"，是原因句而不是条件句。" 
          }
        ]
      }
    ],
    completed: false,
  }
];
