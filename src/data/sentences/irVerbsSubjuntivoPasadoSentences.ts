import { Sentence } from "@/types/game";

// -IR Verbs in Subjuntivo Pasado (Past Subjunctive) Tense
export const irVerbsSubjuntivoPasadoSentences: Sentence[] = [
  /* 141 ------------------------------------------------------------- */
  {
    id: 141,
    chinese: "如果我收到钥匙，我会允许进入。",
    spanish: "Yo permitiría la entrada si recibiera la llave.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo",  isCorrect: true,  correctTip: "主语“我”。", incorrectTip: "" },
          { text: "Tú", isCorrect: false, correctTip: "", incorrectTip: "主语错误，应为第一人称。"}
        ]
      },
      {
        correctWord: "permitiría",
        options: [
          { text: "permitiría", isCorrect: true,  correctTip: "动词“permitir”第一人称条件式。", incorrectTip: "" },
          { text: "permitiera",  isCorrect: false, correctTip: "", incorrectTip: "这是过去虚拟式，用在从句而非主句。"}
        ]
      },
      {
        correctWord: "la entrada",
        options: [
          { text: "la entrada", isCorrect: true,  correctTip: "作宾语，表示“进入/入口”。", incorrectTip: "" },
          { text: "el permiso", isCorrect: false, correctTip: "", incorrectTip: "语义重复（许可）。"}
        ]
      },
      {
        correctWord: "si recibiera la llave",
        options: [
          { text: "si recibiera la llave", isCorrect: true,  correctTip: "动词“recibir”过去虚拟式，-ir 结尾，构成条件从句。", incorrectTip: "" },
          { text: "si tuviera la llave",   isCorrect: false, correctTip: "", incorrectTip: "动词不是 -ir 结尾，不符合本组要求。"},
          { text: "si tengo la llave",     isCorrect: false, correctTip: "", incorrectTip: "使用现在时，不符合虚拟条件句结构。"}
        ]
      }
    ],
    completed: false
  },

  /* 142 ------------------------------------------------------------- */
  {
    id: 142,
    chinese: "如果你服下药，你会感觉疼痛减轻。",
    spanish: "Tú sentirías menos dolor si ingirieras la medicina.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true,  correctTip: "主语“你”。", incorrectTip: "" },
          { text: "Yo", isCorrect: false, correctTip: "", incorrectTip: "主语应为第二人称。"}
        ]
      },
      {
        correctWord: "sentirías",
        options: [
          { text: "sentirías", isCorrect: true,  correctTip: "动词“sentir”第二人称条件式。", incorrectTip: "" },
          { text: "sintieras",  isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式，用于从句。"}
        ]
      },
      {
        correctWord: "menos dolor",
        options: [
          { text: "menos dolor",    isCorrect: true,  correctTip: "表示疼痛减轻。", incorrectTip: "" },
          { text: "mayor dolor",    isCorrect: false, correctTip: "", incorrectTip: "含义相反。"}
        ]
      },
      {
        correctWord: "si ingirieras la medicina",
        options: [
          { text: "si ingirieras la medicina", isCorrect: true,  correctTip: "动词“ingerir”过去虚拟式，-ir 结尾。", incorrectTip: "" },
          { text: "si tomaras la medicina",    isCorrect: false, correctTip: "", incorrectTip: "动词“tomar”是 -ar 结尾，不符合要求。"},
          { text: "si tomas la medicina",      isCorrect: false, correctTip: "", incorrectTip: "现在时态，不符合虚拟条件句结构。"}
        ]
      }
    ],
    completed: false
  },

  /* 143 ------------------------------------------------------------- */
  {
    id: 143,
    chinese: "如果他多上课，他会得到更好的成绩。",
    spanish: "Él recibiría mejores notas si asistiera más a clase.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él",  isCorrect: true,  correctTip: "主语“他”。", incorrectTip: "" },
          { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。"}
        ]
      },
      {
        correctWord: "recibiría",
        options: [
          { text: "recibiría", isCorrect: true,  correctTip: "动词“recibir”第三人称条件式。", incorrectTip: "" },
          { text: "recibiera",  isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式，应在从句使用。"}
        ]
      },
      {
        correctWord: "mejores notas",
        options: [
          { text: "mejores notas", isCorrect: true,  correctTip: "表示更好的成绩。", incorrectTip: "" },
          { text: "malas notas",   isCorrect: false, correctTip: "", incorrectTip: "含义相反。"}
        ]
      },
      {
        correctWord: "si asistiera más a clase",
        options: [
          { text: "si asistiera más a clase", isCorrect: true,  correctTip: "动词“asistir”过去虚拟式，-ir 结尾。", incorrectTip: "" },
          { text: "si estudiara más",         isCorrect: false, correctTip: "", incorrectTip: "动词“estudiar”结尾为 -ar。"},
          { text: "si asiste más a clase",    isCorrect: false, correctTip: "", incorrectTip: "现在时态，不符合条件结构。"}
        ]
      }
    ],
    completed: false
  },

  /* 144 ------------------------------------------------------------- */
  {
    id: 144,
    chinese: "如果我们有钱，我们会决定去看电影。",
    spanish: "Nosotros decidiríamos ir al cine si consiguiéramos dinero.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true,  correctTip: "主语“我们”。", incorrectTip: "" },
          { text: "Ellos",    isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。"}
        ]
      },
      {
        correctWord: "decidiríamos",
        options: [
          { text: "decidiríamos", isCorrect: true,  correctTip: "动词“decidir”第一人称复数条件式。", incorrectTip: "" },
          { text: "decidiéramos",  isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式，应在从句使用。"}
        ]
      },
      {
        correctWord: "ir al cine",
        options: [
          { text: "ir al cine", isCorrect: true,  correctTip: "表示去看电影。", incorrectTip: "" },
          { text: "comer fuera", isCorrect: false, correctTip: "", incorrectTip: "不同活动。"}
        ]
      },
      {
        correctWord: "si consiguiéramos dinero",
        options: [
          { text: "si consiguiéramos dinero", isCorrect: true,  correctTip: "动词“conseguir”过去虚拟式，-ir 结尾。", incorrectTip: "" },
          { text: "si tuviéramos dinero",     isCorrect: false, correctTip: "", incorrectTip: "动词“tener”以 -er 结尾，不符合要求。"},
          { text: "si tenemos dinero",         isCorrect: false, correctTip: "", incorrectTip: "现在时态，不符合虚拟条件句结构。"}
        ]
      }
    ],
    completed: false
  },

  /* 145 ------------------------------------------------------------- */
  {
    id: 145,
    chinese: "如果你们攒钱，你们就能出门旅行。",
    spanish: "Vosotros saldríais de viaje si reunierais dinero.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true,  correctTip: "主语“你们”。", incorrectTip: "" },
          { text: "Ustedes",  isCorrect: false, correctTip: "", incorrectTip: "需用西班牙变位“Vosotros”。"}
        ]
      },
      {
        correctWord: "saldríais",
        options: [
          { text: "saldríais", isCorrect: true,  correctTip: "动词“salir”第二人称复数条件式，-ir 结尾。", incorrectTip: "" },
          { text: "podríais",  isCorrect: false, correctTip: "", incorrectTip: "动词“poder”以 -er 结尾，不符合要求。"}
        ]
      },
      {
        correctWord: "de viaje",
        options: [
          { text: "de viaje",  isCorrect: true,  correctTip: "短语，表示去旅行。", incorrectTip: "" },
          { text: "en casa",   isCorrect: false, correctTip: "", incorrectTip: "含义相反。"}
        ]
      },
      {
        correctWord: "si reunierais dinero",
        options: [
          { text: "si reunierais dinero", isCorrect: true,  correctTip: "动词“reunir”过去虚拟式，-ir 结尾。", incorrectTip: "" },
          { text: "si ahorrarais dinero",  isCorrect: false, correctTip: "", incorrectTip: "动词“ahorrar”以 -ar 结尾，不符合要求。"},
          { text: "si reunís dinero",       isCorrect: false, correctTip: "", incorrectTip: "现在时态，不符合条件结构。"}
        ]
      }
    ],
    completed: false
  },

  /* 146 ------------------------------------------------------------- */
  {
    id: 146,
    chinese: "如果他们收到邀请，他们会来参加聚会。",
    spanish: "Ellos vendrían a la fiesta si recibieran la invitación.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true,  correctTip: "主语“他们”。", incorrectTip: "" },
          { text: "Nosotros", isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。"}
        ]
      },
      {
        correctWord: "vendrían",
        options: [
          { text: "vendrían", isCorrect: true,  correctTip: "动词“venir”第三人称复数条件式，-ir 结尾。", incorrectTip: "" },
          { text: "vinieran",  isCorrect: false, correctTip: "", incorrectTip: "过去虚拟式，应在从句使用。"}
        ]
      },
      {
        correctWord: "a la fiesta",
        options: [
          { text: "a la fiesta", isCorrect: true,  correctTip: "表示去参加聚会。", incorrectTip: "" },
          { text: "al trabajo",  isCorrect: false, correctTip: "", incorrectTip: "不同场所。"}
        ]
      },
      {
        correctWord: "si recibieran la invitación",
        options: [
          { text: "si recibieran la invitación", isCorrect: true,  correctTip: "动词“recibir”过去虚拟式，-ir 结尾。", incorrectTip: "" },
          { text: "si reciben la invitación",    isCorrect: false, correctTip: "", incorrectTip: "现在时态，不符合虚拟条件句结构。"},
          { text: "si hubieran recibido la invitación", isCorrect: false, correctTip: "", incorrectTip: "属于第三条件句形式，不符合本句式。"}
        ]
      }
    ],
    completed: false
  }
];
