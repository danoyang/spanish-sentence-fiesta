import { Sentence } from "@/types/game";

// -ER Verbs in Subjuntivo Pasado (Past Subjunctive) Tense
export const erVerbsSubjuntivoPasadoSentences: Sentence[] = [
  // Subjuntivo pasado | Yo | Yo mantuviera el contacto si tuviera su número.
  {
    id: 129,
    chinese: "如果我有他的号码，我会保持联系。",
    spanish: "Yo mantuviera el contacto si tuviera su número.",
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
        correctWord: "mantuviera",
        options: [
          { 
            text: "mantuviera", 
            isCorrect: true, 
            correctTip: "\"mantuviera\"是动词\"mantener\"（维持）在第一人称过去虚拟式的正确变位。这是不规则变位，词干变为\"mantuv-\"。", 
            incorrectTip: "" 
          },
          { 
            text: "mantenía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mantenía\"是过去未完成时形式，不是过去虚拟式。" 
          },
          { 
            text: "mantendría", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"mantendría\"是条件式，不是过去虚拟式。" 
          }
        ]
      },
      {
        correctWord: "el contacto",
        options: [
          { 
            text: "el contacto", 
            isCorrect: true, 
            correctTip: "\"el contacto\"表示\"联系\"，是mantener的恰当宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为mantener的宾语不自然。" 
          },
          { 
            text: "la promesa", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"la promesa\"表示\"承诺\"，在这个语境中，\"el contacto\"（联系）更合适。" 
          }
        ]
      },
      {
        correctWord: "si tuviera su número",
        options: [
          { 
            text: "si tuviera su número", 
            isCorrect: true, 
            correctTip: "\"si tuviera su número\"表示\"如果我有他的号码\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habría sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si habría sabido\"(如果知道了)与句子的上下文不符，戴眼镜才能看清楚是更符合逻辑的条件。" 
          },
          { 
            text: "si he sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si he sabido\"使用现在完成时态，不符合虚拟条件句的结构。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Tú | Tú reconocieras a tu amigo si llevaras tus gafas.
  {
    id: 130,
    chinese: "如果你戴上眼镜，你会认出你的朋友。",
    spanish: "Tú reconocieras a tu amigo si llevaras tus gafas.",
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
        correctWord: "reconocieras",
        options: [
          { 
            text: "reconocieras", 
            isCorrect: true, 
            correctTip: "\"reconocieras\"是动词\"reconocer\"（认出）在第二人称过去虚拟式的正确变位。注意c变为ci的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "reconocías", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"reconocías\"是过去未完成时形式，不是过去虚拟式。" 
          },
          { 
            text: "reconocerías", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"reconocerías\"是条件式，不是过去虚拟式。" 
          }
        ]
      },
      {
        correctWord: "a tu amigo",
        options: [
          { 
            text: "a tu amigo", 
            isCorrect: true, 
            correctTip: "\"a tu amigo\"表示\"你的朋友\"，是reconocer（认出）的适当宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为reconocer的宾语不自然。" 
          },
          { 
            text: "la cara", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"la cara\"表示\"脸\"，在这个上下文中，认出整个人(a tu amigo)比认出脸更加自然。" 
          }
        ]
      },
      {
        correctWord: "si llevaras tus gafas",
        options: [
          { 
            text: "si llevaras tus gafas", 
            isCorrect: true, 
            correctTip: "\"si llevaras tus gafas\"表示\"如果你戴上眼镜\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si había sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si había sabido\"(如果知道了)与句子的上下文不符，戴眼镜才能看清楚是更符合逻辑的条件。" 
          },
          { 
            text: "cuando pudieras", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando pudieras\"表示\"当你能的时候\"，与句子上下文不符合。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Él | Él atendiera a los clientes si tuviera más tiempo.
  {
    id: 131,
    chinese: "如果他有更多时间，他会照顾顾客。",
    spanish: "Él atendiera a los clientes si tuviera más tiempo.",
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
        correctWord: "atendiera",
        options: [
          { 
            text: "atendiera", 
            isCorrect: true, 
            correctTip: "\"atendiera\"是动词\"atender\"（照顾）在第三人称过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "atendía", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"atendía\"是过去未完成时形式，不是过去虚拟式。" 
          },
          { 
            text: "atendería", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"atendería\"是条件式，不是过去虚拟式。" 
          }
        ]
      },
      {
        correctWord: "a los clientes",
        options: [
          { 
            text: "a los clientes", 
            isCorrect: true, 
            correctTip: "\"a los clientes\"表示\"顾客们\"，是atender（照顾）的合适宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为atender的宾语不恰当。" 
          },
          { 
            text: "el trabajo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"el trabajo\"表示\"工作\"，在服务顾客的上下文中，\"a los clientes\"更具体且合适。" 
          }
        ]
      },
      {
        correctWord: "si tuviera más tiempo",
        options: [
          { 
            text: "si tuviera más tiempo", 
            isCorrect: true, 
            correctTip: "\"si tuviera más tiempo\"表示\"如果他有更多时间\"，是一个符合日常表达的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habría sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si habría sabido\"(如果他知道了)与句子的上下文不符，时间不足才是未能照顾顾客的合理原因。" 
          },
          { 
            text: "cuando pueda", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando pueda\"表示\"当他能的时候\"，使用的是虚拟式现在时而不是过去虚拟式。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Nosotros | Nosotros advirtiéramos sobre el peligro si lo supiéramos.
  {
    id: 132,
    chinese: "如果我们知道，我们会保护大家免受危险。",
    spanish: "Nosotros protegiéramos a la gente del peligro si lo supiéramos.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"，此句主语。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "\"Yo\"表示\"我\"，不是此句的主语。" },
          { text: "Ellos", isCorrect: false, correctTip: "", incorrectTip: "\"Ellos\"表示\"他们\"，不是此句的主语。" }
        ]
      },
      {
        correctWord: "protegiéramos",
        options: [
          { text: "protegiéramos", isCorrect: true, correctTip: "\"protegiéramos\"是动词\"proteger\"（保护）在第一人称复数过去虚拟式的正确变位，注意 g ➔ j 的拼写变化。", incorrectTip: "" },
          { text: "protegíamos", isCorrect: false, correctTip: "", incorrectTip: "\"protegíamos\"是未完成过去时形式，不是过去虚拟式。" },
          { text: "protegeríamos", isCorrect: false, correctTip: "", incorrectTip: "\"protegeríamos\"是条件式，不是过去虚拟式。" }
        ]
      },
      {
        correctWord: "a la gente del peligro",
        options: [
          { text: "a la gente del peligro", isCorrect: true, correctTip: "表示\"保护人们免受危险\"，是\"proteger\"常见用法。", incorrectTip: "" },
          { text: "sobre el peligro", isCorrect: false, correctTip: "", incorrectTip: "短语搭配不当，\"proteger sobre\"不自然。" },
          { text: "muy bien", isCorrect: false, correctTip: "", incorrectTip: "缺少宾语，语义不完整。" }
        ]
      },
      {
        correctWord: "si lo supiéramos",
        options: [
          { text: "si lo supiéramos", isCorrect: true, correctTip: "条件从句使用过去虚拟式(supiéramos)。", incorrectTip: "" },
          { text: "si habríamos sabido", isCorrect: false, correctTip: "", incorrectTip: "条件从句不应使用条件式。"},
          { text: "cuando lo veamos", isCorrect: false, correctTip: "", incorrectTip: "\"cuando lo veamos\"使用现在虚拟式，时间关系不同。" }
        ]
      }
    ],
    completed: false
  },
  // Subjuntivo pasado | Vosotros | Vosotros descendierais de la montaña si hiciera mal tiempo.
  {
    id: 133,
    chinese: "如果天气变坏，你们会从山上下来。",
    spanish: "Vosotros descendierais de la montaña si hiciera mal tiempo.",
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
        correctWord: "descendierais",
        options: [
          { 
            text: "descendierais", 
            isCorrect: true, 
            correctTip: "\"descendierais\"是动词\"descender\"（下降）在第二人称复数过去虚拟式的正确变位。", 
            incorrectTip: "" 
          },
          { 
            text: "descendíais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"descendíais\"是过去未完成时形式，不是过去虚拟式。" 
          },
          { 
            text: "descenderíais", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"descenderíais\"是条件式，不是过去虚拟式。" 
          }
        ]
      },
      {
        correctWord: "de la montaña",
        options: [
          { 
            text: "de la montaña", 
            isCorrect: true, 
            correctTip: "\"de la montaña\"表示\"从山上\"，是descender（下降）的合适场所。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为descender（下降）的地点不合适。" 
          },
          { 
            text: "rápidamente", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"rápidamente\"表示\"迅速地\"，虽然可以修饰动词，但在这个上下文中，下降的地点(de la montaña)更重要。" 
          }
        ]
      },
      {
        correctWord: "si hiciera mal tiempo",
        options: [
          { 
            text: "si hiciera mal tiempo", 
            isCorrect: true, 
            correctTip: "\"si hiciera mal tiempo\"表示\"如果天气变坏\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si habríais sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si habríais sabido\"(如果你们知道)与句子的上下文不符，天气变坏才是离开山上的合理原因。" 
          },
          { 
            text: "cuando llueva", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando llueva\"表示\"当下雨的时候\"，使用的是虚拟式现在时而不是过去虚拟式。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Subjuntivo pasado | Ellos | Ellos defendieran sus opiniones si tuvieran más confianza.
  {
    id: 134,
    chinese: "如果他们有更多自信，他们会捍卫自己的观点。",
    spanish: "Ellos defendieran sus opiniones si tuvieran más confianza.",
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
        correctWord: "defendieran",
        options: [
          { 
            text: "defendieran", 
            isCorrect: true, 
            correctTip: "\"defendieran\"是动词\"defender\"（防守）在第三人称复数过去虚拟式的正确变位。注意e变为ie的拼写变化。", 
            incorrectTip: "" 
          },
          { 
            text: "defendían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"defendían\"是过去未完成时形式，不是过去虚拟式。" 
          },
          { 
            text: "defenderían", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"defenderían\"是条件式，不是过去虚拟式。" 
          }
        ]
      },
      {
        correctWord: "sus opiniones",
        options: [
          { 
            text: "sus opiniones", 
            isCorrect: true, 
            correctTip: "\"sus opiniones\"表示\"他们的观点\"，是defender（捍卫）的恰当宾语。", 
            incorrectTip: "" 
          },
          { 
            text: "muy bien", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"muy bien\"表示\"非常好\"，作为defender的宾语不恰当。" 
          },
          { 
            text: "a la gente", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"a la gente\"表示\"人们\"，虽然可以作为defender的宾语，但在讨论观点的上下文中，\"sus opiniones\"更符合语境。" 
          }
        ]
      },
      {
        correctWord: "si tuvieran más confianza",
        options: [
          { 
            text: "si tuvieran más confianza", 
            isCorrect: true, 
            correctTip: "\"si tuvieran más confianza\"表示\"如果他们有更多自信\"，是一个合适的条件从句。", 
            incorrectTip: "" 
          },
          { 
            text: "si hubieran sabido", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"si hubieran sabido\"(如果他们知道)与句子的上下文不符，缺乏自信才是不能捍卫观点的合理原因。" 
          },
          { 
            text: "cuando sea necesario", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"cuando sea necesario\"表示\"当有必要的时候\"，使用的是虚拟式现在时而不是过去虚拟式。" 
          }
        ]
      }
    ],
    completed: false,
  },
];
