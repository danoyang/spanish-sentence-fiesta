
// Corrected the inner quotes for proper string syntax to fix TS1005 errors

import { Sentence } from "@/types/game";

// Futuro (Future Tense) and Condicional (Conditional Tense) sentences
export const futuroCondicionalSentences: Sentence[] = [
  // Futuro | Yo | Yo viajaré a Barcelona el próximo verano para visitar a mi familia.
  {
    id: 24,
    chinese: "明年夏天我将去巴塞罗那探望我的家人。",
    spanish: "Yo viajaré a Barcelona el próximo verano para visitar a mi familia.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: '"Yo" 表示"我"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "viajaré",
        options: [
          {
            text: "viajaré",
            isCorrect: true,
            correctTip: '"viajaré"是动词"viajar"(旅行)的第一人称将来时变位，表示"我将会旅行"。将来时的变位通常是在动词原形后直接加上特定的结尾，对于第一人称单数是"-é"。',
            incorrectTip: ""
          },
          {
            text: "viajo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"viajo" 是现在时，表示"我现在旅行"。这里需要用将来时"viajaré"来表达将来要发生的动作。'
          },
          {
            text: "viajé",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"viajé" 是过去时，表示"我旅行了"。这里需要用将来时"viajaré"来表达将来要发生的动作。'
          }
        ]
      },
      {
        correctWord: "a Barcelona",
        options: [
          {
            text: "a Barcelona",
            isCorrect: true,
            correctTip: '"a Barcelona"表示"去巴塞罗那"。在西班牙语中，前往某地时通常用介词"a"。',
            incorrectTip: ""
          },
          {
            text: "en Madrid",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"en Madrid"表示"在马德里"，而不是"去巴塞罗那"。且地点不正确。'
          }
        ]
      },
      {
        correctWord: "el próximo verano",
        options: [
          {
            text: "el próximo verano",
            isCorrect: true,
            correctTip: '"el próximo verano"表示"明年夏天"。',
            incorrectTip: ""
          },
          {
            text: "la semana pasada",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"la semana pasada"表示"上周"，是过去时间，与将来时的动词不匹配。'
          }
        ]
      },
      {
        correctWord: "para visitar a mi familia",
        options: [
          {
            text: "para visitar a mi familia",
            isCorrect: true,
            correctTip: '"para visitar a mi familia"表示"为了探望我的家人"。',
            incorrectTip: ""
          },
          {
            text: "para trabajar allí",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"para trabajar allí"表示"为了在那里工作"，与句意不符。'
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Tú | Tú encontrarás un buen trabajo cuando termines tus estudios.
  {
    id: 25,
    chinese: "当你完成学业时，你会找到一份好工作。",
    spanish: "Tú encontrarás un buen trabajo cuando termines tus estudios.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: '"Tú" 表示"你"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "encontrarás",
        options: [
          {
            text: "encontrarás",
            isCorrect: true,
            correctTip: '"encontrarás"是动词"encontrar"(找到)的第二人称将来时变位，表示"你将会找到"。将来时的第二人称单数变位是在动词原形后加上"-ás"。',
            incorrectTip: ""
          },
          {
            text: "encuentras",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"encuentras"是现在时，表示"你现在找到"。这里需要用将来时"encontrarás"来表达将来会发生的动作。注意现在时还有元音变化，而将来时是基于动词原形的。'
          },
          {
            text: "encontraste",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"encontraste"是过去时，表示"你找到了"。这里需要用将来时"encontrarás"来表达将来会发生的动作。'
          }
        ]
      },
      {
        correctWord: "un buen trabajo",
        options: [
          {
            text: "un buen trabajo",
            isCorrect: true,
            correctTip: '"un buen trabajo"表示"一份好工作"。',
            incorrectTip: ""
          },
          {
            text: "una casa grande",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"una casa grande"表示"一座大房子"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "cuando termines tus estudios",
        options: [
          {
            text: "cuando termines tus estudios",
            isCorrect: true,
            correctTip: '"cuando termines tus estudios"表示"当你完成学业时"。注意这里的"termines"是虚拟式，因为它表示一个将来可能发生的动作，而不是将来时。当表达"当...时"的将来情况，西班牙语使用虚拟式而非将来时。',
            incorrectTip: ""
          },
          {
            text: "cuando terminarás la universidad",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"cuando terminarás la universidad"是不正确的语法。在表达"当...时"的将来情况时，西班牙语使用虚拟式(subjuntivo)而不是将来时。正确形式是"cuando termines"。'
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Él | Él conseguirá un ascenso en su trabajo el próximo mes.
  {
    id: 26,
    chinese: "下个月他将在工作中获得晋升。",
    spanish: "Él conseguirá un ascenso en su trabajo el próximo mes.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: '"Él" 表示"他"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "conseguirá",
        options: [
          {
            text: "conseguirá",
            isCorrect: true,
            correctTip: '"conseguirá"是动词"conseguir"(获得)的第三人称将来时变位，表示"他将会获得"。将来时的第三人称单数变位是在动词原形后加上"-á"。',
            incorrectTip: ""
          },
          {
            text: "consigue",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"consigue"是现在时，表示"他现在获得"。这里需要用将来时"conseguirá"来表达将来要发生的动作。'
          },
          {
            text: "consiguió",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"consiguió"是过去时，表示"他获得了"。这里需要用将来时"conseguirá"来表达将来要发生的动作。'
          }
        ]
      },
      {
        correctWord: "un ascenso",
        options: [
          {
            text: "un ascenso",
            isCorrect: true,
            correctTip: '"un ascenso"表示"一份晋升"。',
            incorrectTip: ""
          },
          {
            text: "un descenso",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"un descenso"表示"一份降职"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "en su trabajo",
        options: [
          {
            text: "en su trabajo",
            isCorrect: true,
            correctTip: '"en su trabajo"表示"在他的工作中"。',
            incorrectTip: ""
          },
          {
            text: "en sus estudios",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"en sus estudios"表示"在他的学习中"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "el próximo mes",
        options: [
          {
            text: "el próximo mes",
            isCorrect: true,
            correctTip: '"el próximo mes"表示"下个月"。',
            incorrectTip: ""
          },
          {
            text: "la semana pasada",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"la semana pasada"表示"上周"，是过去时间，与将来时的动词不匹配。'
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Nosotros | Nosotros compraremos una casa nueva cuando ahorremos suficiente dinero.
  {
    id: 27,
    chinese: "当我们存够钱时，我们将买一套新房子。",
    spanish: "Nosotros compraremos una casa nueva cuando ahorremos suficiente dinero.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: '"Nosotros" 表示"我们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "compraremos",
        options: [
          {
            text: "compraremos",
            isCorrect: true,
            correctTip: '"compraremos"是动词"comprar"(购买)的第一人称复数将来时变位，表示"我们将会购买"。将来时的第一人称复数变位是在动词原形后加上"-emos"。',
            incorrectTip: ""
          },
          {
            text: "compramos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"compramos"是现在时或过去时，表示"我们现在购买"或"我们购买了"。这里需要用将来时"compraremos"来表达将来要发生的动作。'
          },
          {
            text: "compraríamos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"compraríamos"是条件式，表示"我们将购买（如果...）"。这里需要用将来时"compraremos"来表达将来确定发生的动作。'
          }
        ]
      },
      {
        correctWord: "una casa nueva",
        options: [
          {
            text: "una casa nueva",
            isCorrect: true,
            correctTip: '"una casa nueva"表示"一套新房子"。',
            incorrectTip: ""
          },
          {
            text: "un coche usado",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"un coche usado"表示"一辆二手车"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "cuando ahorremos suficiente dinero",
        options: [
          {
            text: "cuando ahorremos suficiente dinero",
            isCorrect: true,
            correctTip: '"cuando ahorremos suficiente dinero"表示"当我们存够钱时"。注意这里的"ahorremos"是虚拟式，因为它表示一个将来可能发生的动作，而不是将来时。当表达"当...时"的将来情况，西班牙语使用虚拟式而非将来时。',
            incorrectTip: ""
          },
          {
            text: "cuando ahorraremos mucho dinero",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"cuando ahorraremos mucho dinero"是不正确的语法。在表达"当...时"的将来情况时，西班牙语使用虚拟式(subjuntivo)而不是将来时。正确形式是"cuando ahorremos"。'
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Vosotros | Vosotros organizaréis una fiesta para celebrar el fin de curso.
  {
    id: 28,
    chinese: "你们将组织一个聚会来庆祝学期结束。",
    spanish: "Vosotros organizaréis una fiesta para celebrar el fin de curso.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: '"Vosotros" 表示"你们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "organizaréis",
        options: [
          {
            text: "organizaréis",
            isCorrect: true,
            correctTip: '"organizaréis"是动词"organizar"(组织)的第二人称复数将来时变位，表示"你们将会组织"。将来时的第二人称复数变位是在动词原形后加上"-éis"。',
            incorrectTip: ""
          },
          {
            text: "organizáis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"organizáis"是现在时，表示"你们现在组织"。这里需要用将来时"organizaréis"来表达将来会发生的动作。'
          },
          {
            text: "organizasteis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"organizasteis"是过去时，表示"你们组织了"。这里需要用将来时"organizaréis"来表达将来会发生的动作。'
          }
        ]
      },
      {
        correctWord: "una fiesta",
        options: [
          {
            text: "una fiesta",
            isCorrect: true,
            correctTip: '"una fiesta"表示"一个聚会/派对"。',
            incorrectTip: ""
          },
          {
            text: "una reunión formal",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"una reunión formal"表示"一个正式会议"，与庆祝的语境不符。'
          }
        ]
      },
      {
        correctWord: "para celebrar",
        options: [
          {
            text: "para celebrar",
            isCorrect: true,
            correctTip: '"para celebrar"表示"为了庆祝"。',
            incorrectTip: ""
          },
          {
            text: "para discutir",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"para discutir"表示"为了讨论"，与庆祝的语境不符。'
          }
        ]
      },
      {
        correctWord: "el fin de curso",
        options: [
          {
            text: "el fin de curso",
            isCorrect: true,
            correctTip: '"el fin de curso"表示"学期结束"。',
            incorrectTip: ""
          },
          {
            text: "el comienzo del año",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"el comienzo del año"表示"年初"，与句意不符。'
          }
        ]
      }
    ],
    completed: false
  },

  // Futuro | Ellos | Ellos construirán un nuevo estadio de fútbol en el centro de la ciudad.
  {
    id: 29,
    chinese: "他们将在城市中心建造一座新的足球场。",
    spanish: "Ellos construirán un nuevo estadio de fútbol en el centro de la ciudad.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: '"Ellos" 表示"他们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "construirán",
        options: [
          {
            text: "construirán",
            isCorrect: true,
            correctTip: '"construirán"是动词"construir"(建造)的第三人称复数将来时变位，表示"他们将会建造"。将来时的第三人称复数变位是在动词原形后加上"-án"。',
            incorrectTip: ""
          },
          {
            text: "construyen",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"construyen"是现在时，表示"他们现在建造"。这里需要用将来时"construirán"来表达将来会发生的动作。'
          },
          {
            text: "construyeron",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"construyeron"是过去时，表示"他们建造了"。这里需要用将来时"construirán"来表达将来会发生的动作。'
          }
        ]
      },
      {
        correctWord: "un nuevo estadio de fútbol",
        options: [
          {
            text: "un nuevo estadio de fútbol",
            isCorrect: true,
            correctTip: '"un nuevo estadio de fútbol"表示"一座新的足球场"。',
            incorrectTip: ""
          },
          {
            text: "una antigua biblioteca",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"una antigua biblioteca"表示"一座古老的图书馆"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "en el centro",
        options: [
          {
            text: "en el centro",
            isCorrect: true,
            correctTip: '"en el centro"表示"在中心"。',
            incorrectTip: ""
          },
          {
            text: "en las afueras",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"en las afueras"表示"在郊区"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "de la ciudad",
        options: [
          {
            text: "de la ciudad",
            isCorrect: true,
            correctTip: '"de la ciudad"表示"城市的"。',
            incorrectTip: ""
          },
          {
            text: "del pueblo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"del pueblo"表示"村庄的"，与句意不符。'
          }
        ]
      }
    ],
    completed: false
  },

  // ----- Condicional -----
  // Condicional | Yo | Yo viajaría por todo el mundo si tuviera suficiente dinero.
  {
    id: 30,
    chinese: "如果我有足够的钱，我会环游世界。",
    spanish: "Yo viajaría por todo el mundo si tuviera suficiente dinero.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          {
            text: "Yo",
            isCorrect: true,
            correctTip: '"Yo" 表示"我"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "viajaría",
        options: [
          {
            text: "viajaría",
            isCorrect: true,
            correctTip: '"viajaría"是动词"viajar"(旅行)的第一人称单数条件式变位，表示"我会旅行"(在某个条件下)。条件式的第一人称单数变位是在动词原形后加上"-ía"。',
            incorrectTip: ""
          },
          {
            text: "viajo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"viajo"是现在时，表示"我现在旅行"。这里需要用条件式"viajaría"来表达假设情况下会发生的动作。'
          },
          {
            text: "viajaré",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"viajaré"是将来时，表示"我将会旅行"。这里需要用条件式"viajaría"来表达假设情况下会发生的动作。'
          }
        ]
      },
      {
        correctWord: "por todo el mundo",
        options: [
          {
            text: "por todo el mundo",
            isCorrect: true,
            correctTip: '"por todo el mundo"表示"环游世界/遍及全世界"。',
            incorrectTip: ""
          },
          {
            text: "a mi ciudad natal",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"a mi ciudad natal"表示"到我的家乡"，与句意不符。'
          }
        ]
      },
      {
        correctWord: "si tuviera",
        options: [
          {
            text: "si tuviera",
            isCorrect: true,
            correctTip: '"si tuviera"表示"如果我有"。注意这里使用的是虚拟式过去时(imperfecto de subjuntivo)，用于表达与现实相反或不太可能的假设条件。',
            incorrectTip: ""
          },
          {
            text: "si tengo",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"si tengo"使用的是现在时，表示"如果我有"(现在或将来可能发生的情况)。在条件句中，当主句使用条件式时，从句应使用虚拟式过去时来表达假设条件，所以应该用"si tuviera"而不是"si tengo"。'
          },
          {
            text: "si tendré",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"si tendré"在西班牙语中是不正确的语法结构。在条件句中，"si"后面不能使用将来时。正确形式是使用虚拟式过去时"si tuviera"。'
          }
        ]
      },
      {
        correctWord: "suficiente dinero",
        options: [
          {
            text: "suficiente dinero",
            isCorrect: true,
            correctTip: '"suficiente dinero"表示"足够的钱"。',
            incorrectTip: ""
          },
          {
            text: "mucho tiempo libre",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"mucho tiempo libre"表示"很多空闲时间"，与句意不符。'
          }
        ]
      }
    ],
    completed: false
  },

  // Condicional | Tú | Tú sacarías muy bien si pudiera.
  {
    id: 31,
    chinese: "如果可以的话，你会拿得非常好。",
    spanish: "Tú sacarías muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          {
            text: "Tú",
            isCorrect: true,
            correctTip: '"Tú" 表示"你"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "sacarías",
        options: [
          {
            text: "sacarías",
            isCorrect: true,
            correctTip: '"sacarías"是"你会拿"的条件式。',
            incorrectTip: ""
          },
          {
            text: "sacas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"sacas"是现在时，这里应选"sacarías"。'
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false
  },

  // Condicional | Él | Él buscaría muy bien si pudiera.
  {
    id: 32,
    chinese: "如果可以的话，他会找得非常好。",
    spanish: "Él buscaría muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          {
            text: "Él",
            isCorrect: true,
            correctTip: '"Él" 表示"他"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "buscaría",
        options: [
          {
            text: "buscaría",
            isCorrect: true,
            correctTip: '"buscaría"是"他会找"的条件式。',
            incorrectTip: ""
          },
          {
            text: "busca",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"busca"是现在时，这里应选"buscaría"。'
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false
  },

  // Condicional | Nosotros | Nosotros lavaríamos muy bien si pudiera.
  {
    id: 33,
    chinese: "如果可以的话，我们会洗得非常好。",
    spanish: "Nosotros lavaríamos muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          {
            text: "Nosotros",
            isCorrect: true,
            correctTip: '"Nosotros" 表示"我们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "lavaríamos",
        options: [
          {
            text: "lavaríamos",
            isCorrect: true,
            correctTip: '"lavaríamos"是"我们会洗"的条件式。',
            incorrectTip: ""
          },
          {
            text: "lavamos",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"lavamos"是现在时，这里应选"lavaríamos"。'
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false
  },

  // Condicional | Vosotros | Vosotros ganaríais muy bien si pudiera.
  {
    id: 34,
    chinese: "如果可以的话，你们会赢得非常好。",
    spanish: "Vosotros ganaríais muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          {
            text: "Vosotros",
            isCorrect: true,
            correctTip: '"Vosotros" 表示"你们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "ganaríais",
        options: [
          {
            text: "ganaríais",
            isCorrect: true,
            correctTip: '"ganaríais"是"你们会赢"的条件式。',
            incorrectTip: ""
          },
          {
            text: "ganáis",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"ganáis"是现在时，这里应选"ganaríais"。'
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false
  },

  // Condicional | Ellos | Ellos terminarían muy bien si pudiera.
  {
    id: 35,
    chinese: "如果可以的话，他们会非常好地完成。",
    spanish: "Ellos terminarían muy bien si pudiera.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          {
            text: "Ellos",
            isCorrect: true,
            correctTip: '"Ellos" 表示"他们"。',
            incorrectTip: ""
          }
        ]
      },
      {
        correctWord: "terminarían",
        options: [
          {
            text: "terminarían",
            isCorrect: true,
            correctTip: '"terminarían"是"他们会完成"的条件式。',
            incorrectTip: ""
          },
          {
            text: "terminan",
            isCorrect: false,
            correctTip: "",
            incorrectTip: '"terminan"是现在时，这里应选"terminarían"。'
          }
        ]
      },
      {
        correctWord: "muy bien si pudiera",
        options: [
          {
            text: "muy bien si pudiera",
            isCorrect: true,
            correctTip: "如果可以的话，非常好。",
            incorrectTip: ""
          }
        ]
      }
    ],
    completed: false
  }
];

