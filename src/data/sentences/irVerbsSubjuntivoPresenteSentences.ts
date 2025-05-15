import { Sentence } from "@/types/game";

// -IR Verbs in Subjuntivo Presente (Present Subjunctive) Tense
export const irVerbsSubjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | Yo asuma muy bien aunque sea necesario.
  /* 147 ─────────────────────────────────────────────── */
  {
    id: 147,
    chinese: "虽然是保密信息，我也要清楚地分享。",
    spanish: "Yo comparta la información claramente aunque sea confidencial.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo",  isCorrect: true,  correctTip: "主语“我”。", incorrectTip: "" },
          { text: "Tú", isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。"}
        ]
      },
      {
        correctWord: "comparta",
        options: [
          { text: "comparta",  isCorrect: true,  correctTip: "“compartir”第一人称 Subj. Presente。", incorrectTip: "" },
          { text: "comparto",  isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时，不是虚拟式。"},
          { text: "compartiera", isCorrect: false, correctTip: "", incorrectTip: "Subjuntivo Pasado，不符合时态。"}
        ]
      },
      {
        correctWord: "la información claramente",
        options: [
          { text: "la información claramente", isCorrect: true,  correctTip: "“claramente”作方式副词，替代固定的 muy bien。", incorrectTip: "" },
          { text: "información muy bien",       isCorrect: false, correctTip: "", incorrectTip: "副词位置错误，也缺定冠词。"},
          { text: "información claro",          isCorrect: false, correctTip: "", incorrectTip: "应使用副词“claramente”而非形容词。"}
        ]
      },
      {
        correctWord: "aunque sea confidencial",
        options: [
          { text: "aunque sea confidencial", isCorrect: true,  correctTip: "让步从句，动词“ser”用 Subj. Presente (sea)。", incorrectTip: "" },
          { text: "aunque es confidencial",  isCorrect: false, correctTip: "", incorrectTip: "应使用虚拟式“sea”而非直陈式“es”。"},
          { text: "porque sea confidencial", isCorrect: false, correctTip: "", incorrectTip: "连词错误，“porque”表示原因不是让步。"}
        ]
      }
    ],
    completed: false
  },

  /* 148 ─────────────────────────────────────────────── */
  {
    id: 148,
    chinese: "虽然困难，你要尽快发现真相。",
    spanish: "Tú descubras la verdad pronto aunque sea difícil.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true,  correctTip: "主语“你”。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。"}
        ]
      },
      {
        correctWord: "descubras",
        options: [
          { text: "descubras",  isCorrect: true,  correctTip: "“descubrir”第二人称 Subj. Presente。", incorrectTip: "" },
          { text: "descubres",  isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时。"},
          { text: "descubrieras", isCorrect: false, correctTip: "", incorrectTip: "Subjuntivo Pasado。"}
        ]
      },
      {
        correctWord: "la verdad pronto",
        options: [
          { text: "la verdad pronto", isCorrect: true,  correctTip: "副词“pronto”表示“尽快”。", incorrectTip: "" },
          { text: "verdad muy bien",  isCorrect: false, correctTip: "", incorrectTip: "搭配不自然，且缺定冠词。"},
          { text: "la verdad lenta",  isCorrect: false, correctTip: "", incorrectTip: "形容词与语义不符。"}
        ]
      },
      {
        correctWord: "aunque sea difícil",
        options: [
          { text: "aunque sea difícil", isCorrect: true,  correctTip: "让步从句使用 Subj. Presente。", incorrectTip: "" },
          { text: "aunque es difícil",  isCorrect: false, correctTip: "", incorrectTip: "应使用虚拟式“sea”。"},
          { text: "siempre sea difícil", isCorrect: false, correctTip: "", incorrectTip: "连词不符合“虽然”含义。"}
        ]
      }
    ],
    completed: false
  },

  /* 149 ─────────────────────────────────────────────── */
  {
    id: 149,
    chinese: "虽然疲惫，他也要正确地写信。",
    spanish: "Él escriba la carta correctamente aunque esté cansado.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true,  correctTip: "主语“他”。", incorrectTip: "" },
          { text: "Tú", isCorrect: false, correctTip: "", incorrectTip: "人称错误。"}
        ]
      },
      {
        correctWord: "escriba",
        options: [
          { text: "escriba",  isCorrect: true,  correctTip: "“escribir”第三人称 Subj. Presente。", incorrectTip: "" },
          { text: "escribe",  isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时。"},
          { text: "escribiera", isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式，不符时态。"}
        ]
      },
      {
        correctWord: "la carta correctamente",
        options: [
          { text: "la carta correctamente", isCorrect: true,  correctTip: "副词“correctamente”替代 muy bien。", incorrectTip: "" },
          { text: "carta muy bien",         isCorrect: false, correctTip: "", incorrectTip: "缺冠词且副词顺序不当。"},
          { text: "la carta correcto",      isCorrect: false, correctTip: "", incorrectTip: "应使用副词形式。"}
        ]
      },
      {
        correctWord: "aunque esté cansado",
        options: [
          { text: "aunque esté cansado", isCorrect: true,  correctTip: "动词“estar”虚拟式 esté，表达让步。", incorrectTip: "" },
          { text: "aunque está cansado", isCorrect: false, correctTip: "", incorrectTip: "应使用 Subj. Presente。"},
          { text: "porque esté cansado", isCorrect: false, correctTip: "", incorrectTip: "连词含义不符。"}
        ]
      }
    ],
    completed: false
  },

  /* 150 ─────────────────────────────────────────────── */
  {
    id: 150,
    chinese: "虽然时间紧，我们也要公平地分担任务。",
    spanish: "Nosotros compartamos las tareas equitativamente aunque falte tiempo.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true,  correctTip: "主语“我们”。", incorrectTip: "" },
          { text: "Ellos",    isCorrect: false, correctTip: "", incorrectTip: "人称不符。"}
        ]
      },
      {
        correctWord: "compartamos",
        options: [
          { text: "compartamos", isCorrect: true,  correctTip: "“compartir”第一人称复数 Subj. Presente。", incorrectTip: "" },
          { text: "compartimos", isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时。"},
          { text: "compartiéramos", isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式。"}
        ]
      },
      {
        correctWord: "las tareas equitativamente",
        options: [
          { text: "las tareas equitativamente", isCorrect: true,  correctTip: "“equitativamente”表达公平。", incorrectTip: "" },
          { text: "las tareas muy bien",        isCorrect: false, correctTip: "", incorrectTip: "“muy bien”过于笼统。"},
          { text: "las tareas igual",           isCorrect: false, correctTip: "", incorrectTip: "缺少副词形式。"}
        ]
      },
      {
        correctWord: "aunque falte tiempo",
        options: [
          { text: "aunque falte tiempo", isCorrect: true,  correctTip: "动词“faltar”第三人称 Subj. Presente。", incorrectTip: "" },
          { text: "aunque falta tiempo", isCorrect: false, correctTip: "", incorrectTip: "需用虚拟式“falte”。"},
          { text: "si falta tiempo",     isCorrect: false, correctTip: "", incorrectTip: "连词含义变为条件而非让步。"}
        ]
      }
    ],
    completed: false
  },

  /* 151 ─────────────────────────────────────────────── */
  {
    id: 151,
    chinese: "虽然可能会晚，你们也要准时收到订单。",
    spanish: "Vosotros recibáis el pedido a tiempo aunque pueda retrasarse.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true,  correctTip: "主语“你们”（西班牙用法）。", incorrectTip: "" },
          { text: "Ustedes",  isCorrect: false, correctTip: "", incorrectTip: "动词变位会不同。"}
        ]
      },
      {
        correctWord: "recibáis",
        options: [
          { text: "recibáis",  isCorrect: true,  correctTip: "“recibir”第二人称复数 Subj. Presente。", incorrectTip: "" },
          { text: "recibís",   isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时。"},
          { text: "recibierais", isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式。"}
        ]
      },
      {
        correctWord: "el pedido a tiempo",
        options: [
          { text: "el pedido a tiempo", isCorrect: true,  correctTip: "短语“按时收到订单”。", incorrectTip: "" },
          { text: "pedido muy bien",    isCorrect: false, correctTip: "", incorrectTip: "表达不自然且缺冠词。"},
          { text: "el pedido temprano", isCorrect: false, correctTip: "", incorrectTip: "语义不同（提前）。"}
        ]
      },
      {
        correctWord: "aunque pueda retrasarse",
        options: [
          { text: "aunque pueda retrasarse", isCorrect: true,  correctTip: "让步从句，动词“poder”虚拟式 pueda。", incorrectTip: "" },
          { text: "aunque puede retrasarse", isCorrect: false, correctTip: "", incorrectTip: "需用 Subj. Presente。"},
          { text: "si puede retrasarse",     isCorrect: false, correctTip: "", incorrectTip: "连词改变为条件句。"}
        ]
      }
    ],
    completed: false
  },

  /* 152 ─────────────────────────────────────────────── */
  {
    id: 152,
    chinese: "虽然紧张，他们也要镇定地登台。",
    spanish: "Ellos suban al escenario tranquilos aunque haya nervios.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true,  correctTip: "主语“他们”。", incorrectTip: "" },
          { text: "Nosotros", isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。"}
        ]
      },
      {
        correctWord: "suban",
        options: [
          { text: "suban",  isCorrect: true,  correctTip: "“subir”第三人称复数 Subj. Presente。", incorrectTip: "" },
          { text: "suben",  isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时。"},
          { text: "subieran", isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式。"}
        ]
      },
      {
        correctWord: "al escenario tranquilos",
        options: [
          { text: "al escenario tranquilos", isCorrect: true,  correctTip: "副词短语替换 muy bien，表达“镇定地登台”。", incorrectTip: "" },
          { text: "al escenario muy bien",   isCorrect: false, correctTip: "", incorrectTip: "副词过于笼统且缺形容词一致。"},
          { text: "escenario tranquilo",     isCorrect: false, correctTip: "", incorrectTip: "缺介词“al”且数性不一致。"}
        ]
      },
      {
        correctWord: "aunque haya nervios",
        options: [
          { text: "aunque haya nervios", isCorrect: true,  correctTip: "让步从句，动词“haber”虚拟式 haya。", incorrectTip: "" },
          { text: "aunque hay nervios",  isCorrect: false, correctTip: "", incorrectTip: "应使用虚拟式“haya”。"},
          { text: "porque haya nervios", isCorrect: false, correctTip: "", incorrectTip: "连词含义不符。"}
        ]
      }
    ],
    completed: false
  }
];
