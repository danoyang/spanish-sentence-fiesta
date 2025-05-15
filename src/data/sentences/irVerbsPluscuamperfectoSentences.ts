import { Sentence } from "@/types/game";

// -IR Verbs in Pluscuamperfecto (Past Perfect) Tense
export const irVerbsPluscuamperfectoSentences: Sentence[] = [
  // Yo — dormir
{
  id: 117,
  chinese: "我以前整晚睡得很沉。",
  spanish: "Yo había dormido toda la noche sin despertarme antes.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"＝我。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数，不是第二人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称单数。"}
      ]
    },
    {
      correctWord: "había dormido",
      options: [
        { text: "había dormido",  isCorrect: true,  correctTip: "助动词\"había\"＋分词\"dormido\"＝过去完成时。", incorrectTip: "" },
        { text: "habías dormido", isCorrect: false, correctTip: "", incorrectTip: "人称不符，应为第一人称。"},
        { text: "he dormido",     isCorrect: false, correctTip: "", incorrectTip: "现在完成时，用错时态。"}
      ]
    },
    {
      correctWord: "toda la noche sin despertarme antes",
      options: [
        { text: "toda la noche sin despertarme antes", isCorrect: true,  correctTip: "状语：整晚未醒。", incorrectTip: "" },
        { text: "un rato",                              isCorrect: false, correctTip: "", incorrectTip: "“一会儿”，信息过少。"},
        { text: "de día",                               isCorrect: false, correctTip: "", incorrectTip: "时间段不符。"}
      ]
    }
  ],
  completed: false
},

// Tú — pedir
{
  id: 118,
  chinese: "你以前能恰到好处地提出请求。",
  spanish: "Tú habías pedido ayuda en el momento preciso antes.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",      isCorrect: true,  correctTip: "\"Tú\"＝你。", incorrectTip: "" },
        { text: "Usted",   isCorrect: false, incorrectTip: "正式第二人称，动词变位不同。", correctTip: "" },
        { text: "Vosotros",isCorrect: false, incorrectTip: "复数主语，与单数不符。",       correctTip: "" }
      ]
    },
    {
      correctWord: "habías pedido",
      options: [
        { text: "habías pedido", isCorrect: true,  correctTip: "过去完成时第二人称。", incorrectTip: "" },
        { text: "has pedido",    isCorrect: false, incorrectTip: "现在完成时。",       correctTip: "" },
        { text: "había pedido",  isCorrect: false, incorrectTip: "人称不符，应为第二人称。", correctTip: "" }
      ]
    },
    {
      correctWord: "ayuda en el momento preciso antes",
      options: [
        { text: "ayuda en el momento preciso antes", isCorrect: true,  correctTip: "状语：在恰当时机请求帮助。", incorrectTip: "" },
        { text: "una palabra",                       isCorrect: false, incorrectTip: "信息不完整。",              correctTip: "" },
        { text: "sin querer",                        isCorrect: false, incorrectTip: "含义不同。",                correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Él — servir
{
  id: 119,
  chinese: "他以前总是面带微笑地为客人服务。",
  spanish: "Él había servido a los clientes con una sonrisa antes.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",     isCorrect: true,  correctTip: "\"Él\"＝他。", incorrectTip: "" },
        { text: "Ella",   isCorrect: false, incorrectTip: "性别不符。",   correctTip: "" },
        { text: "Yo",     isCorrect: false, incorrectTip: "主语应为第三人称单数。", correctTip: "" }
      ]
    },
    {
      correctWord: "había servido",
      options: [
        { text: "había servido",  isCorrect: true,  correctTip: "过去完成时第三人称。", incorrectTip: "" },
        { text: "ha servido",     isCorrect: false, incorrectTip: "现在完成时。",       correctTip: "" },
        { text: "habían servido", isCorrect: false, incorrectTip: "人称不符，应为单数。", correctTip: "" }
      ]
    },
    {
      correctWord: "a los clientes con una sonrisa antes",
      options: [
        { text: "a los clientes con una sonrisa antes", isCorrect: true,  correctTip: "状语：带微笑服务。", incorrectTip: "" },
        { text: "al jefe",                              isCorrect: false, incorrectTip: "服务对象不同。",    correctTip: "" },
        { text: "sin ganas",                            isCorrect: false, incorrectTip: "含义相反。",         correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Nosotros — medir
{
  id: 120,
  chinese: "我们以前仔细测量过每个细节。",
  spanish: "Nosotros habíamos medido cada detalle con cuidado antes.",
  wordChoices: [
    {
      correctWord: "Nosotros",
      options: [
        { text: "Nosotros", isCorrect: true,  correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "主语应为第一人称复数。",   correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第一人称复数。",   correctTip: "" }
      ]
    },
    {
      correctWord: "habíamos medido",
      options: [
        { text: "habíamos medido", isCorrect: true,  correctTip: "过去完成时第一人称复数。", incorrectTip: "" },
        { text: "hemos medido",    isCorrect: false, incorrectTip: "现在完成时。",          correctTip: "" },
        { text: "medimos",         isCorrect: false, incorrectTip: "直陈式现在/过去简单时。", correctTip: "" }
      ]
    },
    {
      correctWord: "cada detalle con cuidado antes",
      options: [
        { text: "cada detalle con cuidado antes", isCorrect: true,  correctTip: "状语：仔细测量。", incorrectTip: "" },
        { text: "una vez",                         isCorrect: false, incorrectTip: "频次不足，信息过少。", correctTip: "" },
        { text: "por error",                       isCorrect: false, incorrectTip: "含义相反。",           correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Vosotros — repetir
{
  id: 121,
  chinese: "你们以前已经把课文背得滚瓜烂熟。",
  spanish: "Vosotros habíais repetido la lección de memoria antes.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第二人称复数。",   correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第二人称复数。",   correctTip: "" }
      ]
    },
    {
      correctWord: "habíais repetido",
      options: [
        { text: "habíais repetido",  isCorrect: true,  correctTip: "过去完成时第二人称复数。", incorrectTip: "" },
        { text: "habéis repetido",   isCorrect: false, incorrectTip: "现在完成时。",             correctTip: "" },
        { text: "habíais repitido",  isCorrect: false, incorrectTip: "分词拼写错误。",           correctTip: "" }
      ]
    },
    {
      correctWord: "la lección de memoria antes",
      options: [
        { text: "la lección de memoria antes", isCorrect: true,  correctTip: "说明背诵对象及时间。", incorrectTip: "" },
        { text: "el título",                   isCorrect: false, incorrectTip: "内容过少。",           correctTip: "" },
        { text: "sin ganas",                   isCorrect: false, incorrectTip: "含义相反。",           correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Ellos — competir
{
  id: 122,
  chinese: "他们以前一起参加过好几场比赛。",
  spanish: "Ellos habían competido juntos en varios torneos antes.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",  isCorrect: true,  correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
        { text: "Ellas",  isCorrect: false, incorrectTip: "性别不同，但动词可变；此处应为包含男性或混合人群。", correctTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第三人称复数。",                correctTip: "" }
      ]
    },
    {
      correctWord: "habían competido",
      options: [
        { text: "habían competido",  isCorrect: true,  correctTip: "过去完成时第三人称复数。", incorrectTip: "" },
        { text: "han competido",     isCorrect: false, incorrectTip: "现在完成时。",             correctTip: "" },
        { text: "habían competído",  isCorrect: false, incorrectTip: "错误重音，书写不规范。",     correctTip: "" }
      ]
    },
    {
      correctWord: "juntos en varios torneos antes",
      options: [
        { text: "juntos en varios torneos antes", isCorrect: true,  correctTip: "状语：一起参赛多次。", incorrectTip: "" },
        { text: "una vez",                        isCorrect: false, incorrectTip: "次数不足，信息过少。", correctTip: "" },
        { text: "por separado",                   isCorrect: false, incorrectTip: "含义相反：分开参加。",  correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
