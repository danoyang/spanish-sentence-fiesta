import { Sentence } from "@/types/game";

// Subjuntivo Pasado (Past Subjunctive) sentences
export const subjuntivoPasadoSentences: Sentence[] = [
  // Subjuntivo pasado | Yo | disfrutar
{
  id: 51,
  chinese: "要是当时知道，我本来能好好享受这场音乐会。",
  spanish: "Yo disfrutara del concierto si hubiera sabido.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"表示\"我\"，句子主语。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数，不是第二人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数。"}
      ]
    },
    {
      correctWord: "disfrutara",
      options: [
        { text: "disfrutara",    isCorrect: true,  correctTip: "\"disfrutara\"为第一人称过去虚拟式。", incorrectTip: "" },
        { text: "disfruto",      isCorrect: false, incorrectTip: "直陈式现在时。",                 correctTip: "" },
        { text: "disfrutaría",   isCorrect: false, incorrectTip: "条件式，用错时态。",             correctTip: "" }
      ]
    },
    {
      correctWord: "del concierto",
      options: [
        { text: "del concierto",        isCorrect: true,  correctTip: "具体指出享受的是音乐会。", incorrectTip: "" },
        { text: "del partido",          isCorrect: false, incorrectTip: "内容与原句不符。",       correctTip: "" },
        { text: "muy bien",             isCorrect: false, incorrectTip: "换成具体名词更自然。",   correctTip: "" }
      ]
    },
    {
      correctWord: "si hubiera sabido",
      options: [
        { text: "si hubiera sabido",      isCorrect: true,  correctTip: "第一人称虚拟条件从句。", incorrectTip: "" },
        { text: "si sabía",               isCorrect: false, incorrectTip: "使用未完成过去时，结构错误。", correctTip: "" },
        { text: "aunque hubiera sabido",  isCorrect: false, incorrectTip: "让步句而非条件句。",     correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo pasado | Tú | explicar
{
  id: 52,
  chinese: "要是当时知道，你本来能把主题解释得很清楚。",
  spanish: "Tú explicaras el tema con detalle si hubieras sabido.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",       isCorrect: true,  correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" },
        { text: "Usted",    isCorrect: false, incorrectTip: "正式第二人称，动词变位不同。", correctTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "复数主语，与单数不符。",       correctTip: "" }
      ]
    },
    {
      correctWord: "explicaras",
      options: [
        { text: "explicaras",    isCorrect: true,  correctTip: "第二人称过去虚拟式。", incorrectTip: "" },
        { text: "explicas",      isCorrect: false, incorrectTip: "直陈式现在时。",       correctTip: "" },
        { text: "explicarías",   isCorrect: false, incorrectTip: "条件式，用错时态。",   correctTip: "" }
      ]
    },
    {
      correctWord: "el tema con detalle",
      options: [
        { text: "el tema con detalle", isCorrect: true,  correctTip: "具体说明解释对象及程度。", incorrectTip: "" },
        { text: "el asunto brevemente", isCorrect: false, incorrectTip: "与原句意义不符。",       correctTip: "" },
        { text: "muy bien",             isCorrect: false, incorrectTip: "已用具体短语替代抽象副词。", correctTip: "" }
      ]
    },
    {
      correctWord: "si hubieras sabido",
      options: [
        { text: "si hubieras sabido", isCorrect: true,  correctTip: "第二人称过去虚拟式条件从句。", incorrectTip: "" },
        { text: "si hubiera sabido",  isCorrect: false, incorrectTip: "主语不一致，应使用\"hubieras\"。", correctTip: "" },
        { text: "si sabrías",        isCorrect: false, incorrectTip: "时态错误。",                        correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo pasado | Él | formar
{
  id: 53,
  chinese: "要是当时知道，他本来能制定出清晰的计划。",
  spanish: "Él formara un plan claro si hubiera sabido.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",    isCorrect: true,  correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" },
        { text: "Ella",  isCorrect: false, incorrectTip: "性别不符。",         correctTip: "" },
        { text: "Yo",    isCorrect: false, incorrectTip: "主语应为第三人称单数。", correctTip: "" }
      ]
    },
    {
      correctWord: "formara",
      options: [
        { text: "formara",    isCorrect: true,  correctTip: "第三人称过去虚拟式。", incorrectTip: "" },
        { text: "forma",      isCorrect: false, incorrectTip: "直陈式现在时。",     correctTip: "" },
        { text: "formaría",   isCorrect: false, incorrectTip: "条件式，用错时态。", correctTip: "" }
      ]
    },
    {
      correctWord: "un plan claro",
      options: [
        { text: "un plan claro", isCorrect: true,  correctTip: "具体说明制定内容。", incorrectTip: "" },
        { text: "una idea vaga", isCorrect: false, incorrectTip: "与“清晰计划”含义相反。", correctTip: "" },
        { text: "muy bien",      isCorrect: false, incorrectTip: "用具体名词更自然。",     correctTip: "" }
      ]
    },
    {
      correctWord: "si hubiera sabido",
      options: [
        { text: "si hubiera sabido",  isCorrect: true,  correctTip: "第三人称过去虚拟式条件从句。", incorrectTip: "" },
        { text: "si hubiese sabido",  isCorrect: false, incorrectTip: "虽正确但与给定答案不符。",   correctTip: "" },
        { text: "si sabía",           isCorrect: false, incorrectTip: "时态错误。",                 correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo pasado | Nosotros | guardar
{
  id: 54,
  chinese: "要是当时知道，我们本来能把文件保存好。",
  spanish: "Nosotros guardáramos los archivos si hubiéramos sabido.",
  wordChoices: [
    {
      correctWord: "Nosotros",
      options: [
        { text: "Nosotros", isCorrect: true,  correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "主语应为第一人称复数。",     correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第一人称复数。",     correctTip: "" }
      ]
    },
    {
      correctWord: "guardáramos",
      options: [
        { text: "guardáramos",   isCorrect: true,  correctTip: "第一人称复数过去虚拟式。", incorrectTip: "" },
        { text: "guardamos",     isCorrect: false, incorrectTip: "直陈式现在/过去时。",     correctTip: "" },
        { text: "guardaríamos",  isCorrect: false, incorrectTip: "条件式，用错时态。",     correctTip: "" }
      ]
    },
    {
      correctWord: "los archivos",
      options: [
        { text: "los archivos", isCorrect: true,  correctTip: "具体指出保存对象。", incorrectTip: "" },
        { text: "las fotos",    isCorrect: false, incorrectTip: "对象与原句不符。",   correctTip: "" },
        { text: "muy bien",     isCorrect: false, incorrectTip: "用具体名词更自然。", correctTip: "" }
      ]
    },
    {
      correctWord: "si hubiéramos sabido",
      options: [
        { text: "si hubiéramos sabido", isCorrect: true,  correctTip: "第一人称复数过去虚拟式条件从句。", incorrectTip: "" },
        { text: "si hubiera sabido",    isCorrect: false, incorrectTip: "主语不一致，应为\"hubiéramos\"。", correctTip: "" },
        { text: "si sabríamos",        isCorrect: false, incorrectTip: "条件式错误。",                         correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo pasado | Vosotros | imaginar
{
  id: 55,
  chinese: "要是当时知道，你们本来能把场景想象得更生动。",
  spanish: "Vosotros imaginarais la escena completa si hubierais sabido.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"表示\"你们\"。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第二人称复数。",     correctTip: "" },
        { text: "Ustedes",  isCorrect: false, incorrectTip: "拉美用法，动词变位不同。",     correctTip: "" }
      ]
    },
    {
      correctWord: "imaginarais",
      options: [
        { text: "imaginarais",   isCorrect: true,  correctTip: "第二人称复数过去虚拟式。", incorrectTip: "" },
        { text: "imagináis",     isCorrect: false, incorrectTip: "直陈式现在时。",          correctTip: "" },
        { text: "imaginaríais",  isCorrect: false, incorrectTip: "条件式，用错时态。",      correctTip: "" }
      ]
    },
    {
      correctWord: "la escena completa",
      options: [
        { text: "la escena completa", isCorrect: true,  correctTip: "具体指出想象内容。", incorrectTip: "" },
        { text: "el paisaje entero",  isCorrect: false, incorrectTip: "对象与原句不同。",   correctTip: "" },
        { text: "muy bien",           isCorrect: false, incorrectTip: "已换成具体短语。",   correctTip: "" }
      ]
    },
    {
      correctWord: "si hubierais sabido",
      options: [
        { text: "si hubierais sabido", isCorrect: true,  correctTip: "第二人称复数过去虚拟式条件从句。", incorrectTip: "" },
        { text: "si hubiera sabido",   isCorrect: false, incorrectTip: "主语不一致，应为\"hubierais\"。", correctTip: "" },
        { text: "si sabríais",         isCorrect: false, incorrectTip: "条件式错误。",                      correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo pasado | Ellos | juntar
{
  id: 56,
  chinese: "要是当时知道，他们本来能把团队召集起来。",
  spanish: "Ellos juntaran al equipo si hubieran sabido.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",  isCorrect: true,  correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" },
        { text: "Ellas",  isCorrect: false, incorrectTip: "性别或数不符。",           correctTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第三人称复数。",  correctTip: "" }
      ]
    },
    {
      correctWord: "juntaran",
      options: [
        { text: "juntaran",    isCorrect: true,  correctTip: "第三人称复数过去虚拟式。", incorrectTip: "" },
        { text: "juntan",      isCorrect: false, incorrectTip: "直陈式现在时。",         correctTip: "" },
        { text: "juntarían",   isCorrect: false, incorrectTip: "条件式，用错时态。",     correctTip: "" }
      ]
    },
    {
      correctWord: "al equipo",
      options: [
        { text: "al equipo",  isCorrect: true,  correctTip: "具体说明召集对象。", incorrectTip: "" },
        { text: "a la clase", isCorrect: false, incorrectTip: "对象与原句不符。",   correctTip: "" },
        { text: "muy bien",   isCorrect: false, incorrectTip: "用具体名词更自然。", correctTip: "" }
      ]
    },
    {
      correctWord: "si hubieran sabido",
      options: [
        { text: "si hubieran sabido",  isCorrect: true,  correctTip: "第三人称复数过去虚拟式条件从句。", incorrectTip: "" },
        { text: "si hubiera sabido",   isCorrect: false, incorrectTip: "主语不一致，应为\"hubieran\"。",  correctTip: "" },
        { text: "si habrían sabido",   isCorrect: false, incorrectTip: "条件完成式错误用法。",            correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
