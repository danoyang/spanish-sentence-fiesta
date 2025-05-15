import { Sentence } from "@/types/game";

// -ER动词 过去时句子
export const erVerbsPreteriteSentences: Sentence[] = [
  // Pretérito | Yo | Yo comprendí muy bien ayer.
  {
    id: 69,
    chinese: "我昨天完全听懂了老师的讲解。",
    spanish: "Yo comprendí la explicación del profesor ayer.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: "\"Yo\"表示\"我\"。",
            incorrectTip: ""
          },
          {
            text: "Me",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Me\"是宾格形式，不作主语。"
          }
        ]
      },
      {
        correctWord: "comprendí",
        options: [
          {
            text: "comprendí",
            isCorrect: true,
            correctTip: "Pretérito：第一人称单数 \"comprender\"。",
            incorrectTip: ""
          },
          {
            text: "comprendo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时。"
          }
        ]
      },
      {
        correctWord: "la explicación del profesor",
        options: [
          {
            text: "la explicación del profesor",
            isCorrect: true,
            correctTip: "表示老师的讲解。",
            incorrectTip: ""
          },
          {
            text: "las instrucciones",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "语义不同。"
          },
          {
            text: "el ejercicio de matemáticas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "与句意不符。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "\"ayer\"＝昨天。",
            incorrectTip: ""
          },
          {
            text: "hoy",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "不是昨天。"
          }
        ]
      }
    ],
    completed: false
  },

  // Tú — responder
  {
    id: 70,
    chinese: "你昨天回答了考试的所有问题。",
    spanish: "Tú respondiste todas las preguntas del examen ayer.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: "\"Tú\"表示\"你\"。",
            incorrectTip: ""
          },
          {
            text: "Te",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "宾格形式，不作主语。"
          }
        ]
      },
      {
        correctWord: "respondiste",
        options: [
          {
            text: "respondiste",
            isCorrect: true,
            correctTip: "Pretérito：第二人称单数 \"responder\"。",
            incorrectTip: ""
          },
          {
            text: "respondes",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时。"
          }
        ]
      },
      {
        correctWord: "todas las preguntas",
        options: [
          {
            text: "todas las preguntas",
            isCorrect: true,
            correctTip: "符合“所有问题”。",
            incorrectTip: ""
          },
          {
            text: "ninguna pregunta",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义相反。"
          },
          {
            text: "pocas preguntas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "数量不符。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "时间状语“昨天”。",
            incorrectTip: ""
          },
          {
            text: "anoche",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“昨晚”并非“昨天整天”。"
          }
        ]
      }
    ],
    completed: false
  },

  // Él — creer
  {
    id: 71,
    chinese: "他昨天相信了别人告诉他的故事。",
    spanish: "Él creyó la historia que le contaron ayer.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: "\"Él\"＝他。",
            incorrectTip: ""
          },
          {
            text: "Ella",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "性别不符。"
          }
        ]
      },
      {
        correctWord: "creyó",
        options: [
          {
            text: "creyó",
            isCorrect: true,
            correctTip: "Pretérito：第三人称单数 \"creer\"（不规则）。",
            incorrectTip: ""
          },
          {
            text: "cree",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "这是现在时。"
          }
        ]
      },
      {
        correctWord: "la historia que le contaron",
        options: [
          {
            text: "la historia que le contaron",
            isCorrect: true,
            correctTip: "表示别人告诉他的故事。",
            incorrectTip: ""
          },
          {
            text: "la noticia en la radio",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "信息来源不同。"
          },
          {
            text: "una mentira evidente",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "含义不同。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "昨天。",
            incorrectTip: ""
          },
          {
            text: "antes",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "时间范围不明确。"
          }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — deber
  {
    id: 72,
    chinese: "我们昨天按时提交了报告。",
    spanish: "Nosotros debimos entregar el informe a tiempo ayer.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: "\"Nosotros\"＝我们。",
            incorrectTip: ""
          },
          {
            text: "Vosotros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语应为第一人称复数。"
          }
        ]
      },
      {
        correctWord: "debimos",
        options: [
          {
            text: "debimos",
            isCorrect: true,
            correctTip: "Pretérito：第一人称复数 \"deber\"。",
            incorrectTip: ""
          },
          {
            text: "debemos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "现在时，非过去时。"
          }
        ]
      },
      {
        correctWord: "entregar el informe a tiempo",
        options: [
          {
            text: "entregar el informe a tiempo",
            isCorrect: true,
            correctTip: "符合“按时提交报告”。",
            incorrectTip: ""
          },
          {
            text: "leer el informe",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "动作不同。"
          },
          {
            text: "escribir un correo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "任务不同。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "昨天。",
            incorrectTip: ""
          },
          {
            text: "hace tiempo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "时间过于模糊。"
          }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — ver
  {
    id: 73,
    chinese: "你们昨天看了那部新电影。",
    spanish: "Vosotros visteis la película nueva ayer.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: "\"Vosotros\"＝你们。",
            incorrectTip: ""
          },
          {
            text: "Ellos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "主语不符。"
          }
        ]
      },
      {
        correctWord: "visteis",
        options: [
          {
            text: "visteis",
            isCorrect: true,
            correctTip: "Pretérito：第二人称复数 \"ver\"（不规则）。",
            incorrectTip: ""
          },
          {
            text: "vieron",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "第三人称复数，与主语不符。"
          }
        ]
      },
      {
        correctWord: "la película nueva",
        options: [
          {
            text: "la película nueva",
            isCorrect: true,
            correctTip: "新电影。",
            incorrectTip: ""
          },
          {
            text: "un viejo documental",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "内容不符。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "昨天。",
            incorrectTip: ""
          },
          {
            text: "anteayer",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "前天，不是昨天。"
          }
        ]
      }
    ],
    completed: false
  },

  // Ellos — romper
  {
    id: 74,
    chinese: "他们昨天打破了俱乐部的纪录。",
    spanish: "Ellos rompieron el récord del club ayer.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: "\"Ellos\"＝他们。",
            incorrectTip: ""
          },
          {
            text: "Ellas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "性别不符。"
          }
        ]
      },
      {
        correctWord: "rompieron",
        options: [
          {
            text: "rompieron",
            isCorrect: true,
            correctTip: "Pretérito：第三人称复数 \"romper\"。",
            incorrectTip: ""
          },
          {
            text: "rompían",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "未完成过去时。"
          }
        ]
      },
      {
        correctWord: "el récord del club",
        options: [
          {
            text: "el récord del club",
            isCorrect: true,
            correctTip: "俱乐部纪录。",
            incorrectTip: ""
          },
          {
            text: "el vaso",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "与句意无关。"
          },
          {
            text: "la ventana",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "与句意无关。"
          }
        ]
      },
      {
        correctWord: "ayer",
        options: [
          {
            text: "ayer",
            isCorrect: true,
            correctTip: "昨天。",
            incorrectTip: ""
          },
          {
            text: "el mes pasado",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "上个月 ≠ 昨天。"
          }
        ]
      }
    ],
    completed: false
  }
];
