import { Sentence } from "@/types/game";

// Subjuntivo Presente (Present Subjunctive) sentences
export const subjuntivoPresenteSentences: Sentence[] = [
  // Subjuntivo presente | Yo | reparar
{
  id: 45,
  chinese: "也许我今天会修自行车。",
  spanish: "Tal vez yo repare la bicicleta hoy.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"表示\"我\"，句中主语。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数。"}
      ]
    },
    {
      correctWord: "repare",
      options: [
        { text: "repare", isCorrect: true,  correctTip: "在“Tal vez”后用虚拟式。", incorrectTip: "" },
        { text: "reparo", isCorrect: false, correctTip: "", incorrectTip: "直陈式现在时，不符虚拟式要求。"},
        { text: "repararía", isCorrect: false, correctTip: "", incorrectTip: "条件式，不合句意。"}
      ]
    },
    {
      correctWord: "la bicicleta hoy",
      options: [
        { text: "la bicicleta hoy",        isCorrect: true,  correctTip: "指定修理对象与时间。", incorrectTip: "" },
        { text: "el coche hoy",            isCorrect: false, incorrectTip: "对象与原句不符。", correctTip: "" },
        { text: "la bicicleta mañana",     isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo presente | Tú | soñar
{
  id: 46,
  chinese: "我希望你能憧憬新的项目。",
  spanish: "Espero que tú sueñes con nuevos proyectos.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",     isCorrect: true,  correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" },
        { text: "Usted",  isCorrect: false, incorrectTip: "变位与主语不匹配。", correctTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "主语应为第二人称单数。", correctTip: "" }
      ]
    },
    {
      correctWord: "sueñes",
      options: [
        { text: "sueñes",  isCorrect: true,  correctTip: "第二人称现在虚拟式。", incorrectTip: "" },
        { text: "sueñas",  isCorrect: false, incorrectTip: "直陈式现在时。", correctTip: "" },
        { text: "soñaras", isCorrect: false, incorrectTip: "过去虚拟式。", correctTip: "" }
      ]
    },
    {
      correctWord: "con nuevos proyectos",
      options: [
        { text: "con nuevos proyectos", isCorrect: true,  correctTip: "\"soñar con\" 的固定搭配。", incorrectTip: "" },
        { text: "sobre nuevos proyectos", isCorrect: false, incorrectTip: "介词不搭配 \"soñar\"。", correctTip: "" },
        { text: "en nuevos proyectos",   isCorrect: false, incorrectTip: "介词不搭配 \"soñar\"。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo presente | Él | trabajar
{
  id: 47,
  chinese: "他能加班工作也不错。",
  spanish: "Es bueno que él trabaje horas extra.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",   isCorrect: true,  correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" },
        { text: "Ella", isCorrect: false, incorrectTip: "性别与原句不符。", correctTip: "" },
        { text: "Yo",   isCorrect: false, incorrectTip: "主语应为第三人称单数。", correctTip: "" }
      ]
    },
    {
      correctWord: "trabaje",
      options: [
        { text: "trabaje",   isCorrect: true,  correctTip: "第三人称现在虚拟式。", incorrectTip: "" },
        { text: "trabaja",   isCorrect: false, incorrectTip: "直陈式现在时。", correctTip: "" },
        { text: "trabajara", isCorrect: false, incorrectTip: "过去虚拟式。", correctTip: "" }
      ]
    },
    {
      correctWord: "horas extra",
      options: [
        { text: "horas extra",      isCorrect: true,  correctTip: "说明加班内容。", incorrectTip: "" },
        { text: "en la oficina",    isCorrect: false, incorrectTip: "缺少“加班”含义。", correctTip: "" },
        { text: "muy bien",         isCorrect: false, incorrectTip: "已换为具体宾语短语。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo presente | Nosotros | viajar
{
  id: 48,
  chinese: "可能我们今年夏天会一起去旅行。",
  spanish: "Es posible que nosotros viajemos juntos este verano.",
  wordChoices: [
    {
      correctWord: "Nosotros",
      options: [
        { text: "Nosotros", isCorrect: true,  correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "主语应为第一人称复数。", correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第一人称复数。", correctTip: "" }
      ]
    },
    {
      correctWord: "viajemos",
      options: [
        { text: "viajemos",   isCorrect: true,  correctTip: "第一人称复数虚拟式。", incorrectTip: "" },
        { text: "viajamos",   isCorrect: false, incorrectTip: "直陈式现在时。", correctTip: "" },
        { text: "viajáramos", isCorrect: false, incorrectTip: "过去虚拟式。", correctTip: "" }
      ]
    },
    {
      correctWord: "juntos este verano",
      options: [
        { text: "juntos este verano", isCorrect: true,  correctTip: "方式+时间状语。", incorrectTip: "" },
        { text: "a la playa este verano", isCorrect: false, incorrectTip: "地点信息与原句不符。", correctTip: "" },
        { text: "muy bien",            isCorrect: false, incorrectTip: "已替换为具体短语。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo presente | Vosotros | apagar
{
  id: 49,
  chinese: "我更希望你们走前把灯关掉。",
  spanish: "Prefiero que vosotros apaguéis las luces antes de salir.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"表示\"你们\"。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第二人称复数。", correctTip: "" },
        { text: "Ustedes",  isCorrect: false, incorrectTip: "拉美用法，变位不同。", correctTip: "" }
      ]
    },
    {
      correctWord: "apaguéis",
      options: [
        { text: "apaguéis",  isCorrect: true,  correctTip: "第二人称复数虚拟式，g→gu 变音。", incorrectTip: "" },
        { text: "apagáis",   isCorrect: false, incorrectTip: "直陈式现在时。", correctTip: "" },
        { text: "apagarais", isCorrect: false, incorrectTip: "过去虚拟式。", correctTip: "" }
      ]
    },
    {
      correctWord: "las luces antes de salir",
      options: [
        { text: "las luces antes de salir", isCorrect: true,  correctTip: "说明关闭对象和时机。", incorrectTip: "" },
        { text: "los móviles antes de salir", isCorrect: false, incorrectTip: "关闭对象与原句不符。", correctTip: "" },
        { text: "las luces después de salir", isCorrect: false, incorrectTip: "时间顺序与原句相反。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Subjuntivo presente | Ellos | celebrar
{
  id: 50,
  chinese: "我很高兴他们一起庆祝这个成就。",
  spanish: "Me alegra que ellos celebren este logro juntos.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",  isCorrect: true,  correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第三人称复数。", correctTip: "" },
        { text: "Ella",   isCorrect: false, incorrectTip: "性别/数不符。", correctTip: "" }
      ]
    },
    {
      correctWord: "celebren",
      options: [
        { text: "celebren",   isCorrect: true,  correctTip: "第三人称复数现在虚拟式。", incorrectTip: "" },
        { text: "celebran",   isCorrect: false, incorrectTip: "直陈式现在时。", correctTip: "" },
        { text: "celebraran", isCorrect: false, incorrectTip: "过去虚拟式。", correctTip: "" }
      ]
    },
    {
      correctWord: "este logro juntos",
      options: [
        { text: "este logro juntos", isCorrect: true,  correctTip: "庆祝的内容与方式。", incorrectTip: "" },
        { text: "ese logro juntos",  isCorrect: false, incorrectTip: "指示代词改变导致含义不同。", correctTip: "" },
        { text: "este logro mañana", isCorrect: false, incorrectTip: "时间信息与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
