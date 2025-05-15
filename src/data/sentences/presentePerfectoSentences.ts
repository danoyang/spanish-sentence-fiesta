import { Sentence } from "@/types/game";

// Presente Perfecto (Present Perfect) sentences
export const presentePerfectoSentences: Sentence[] = [
  // Yo — visitar
{
  id: 33,
  chinese: "我这周拜访了几个朋友。",
  spanish: "Yo he visitado a varios amigos esta semana.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"＝我。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。"}
      ]
    },
    {
      correctWord: "he visitado",
      options: [
        { text: "he visitado",  isCorrect: true,  correctTip: "haber『he』+ visitado。", incorrectTip: "" },
        { text: "has visitado", isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" },
        { text: "ha visitado",  isCorrect: false, incorrectTip: "第三人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "a varios amigos esta semana",
      options: [
        { text: "a varios amigos esta semana", isCorrect: true,  correctTip: "具体宾语+时间状语。", incorrectTip: "" },
        { text: "a mis abuelos esta semana",    isCorrect: false, incorrectTip: "拜访对象与原句不符。", correctTip: "" },
        { text: "a mis compañeros hoy",         isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Tú — arreglar
{
  id: 34,
  chinese: "你这周把电脑修好了。",
  spanish: "Tú has arreglado el ordenador esta semana.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",  isCorrect: true,  correctTip: "\"Tú\"＝你。", incorrectTip: "" },
        { text: "Yo",  isCorrect: false, incorrectTip: "主语应为第二人称。", correctTip: "" },
        { text: "Usted",isCorrect: false,incorrectTip: "正式您式，与动词变位不符。", correctTip: "" }
      ]
    },
    {
      correctWord: "has arreglado",
      options: [
        { text: "has arreglado", isCorrect: true,  correctTip: "第二人称现在完成时。", incorrectTip: "" },
        { text: "he arreglado",  isCorrect: false, incorrectTip: "第一人称形式。", correctTip: "" },
        { text: "ha arreglado",  isCorrect: false, incorrectTip: "第三人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "el ordenador esta semana",
      options: [
        { text: "el ordenador esta semana", isCorrect: true,  correctTip: "指出修理对象+时间。", incorrectTip: "" },
        { text: "el coche esta semana",     isCorrect: false, incorrectTip: "修理对象与原句不符。", correctTip: "" },
        { text: "el ordenador ayer",        isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Él — cambiar
{
  id: 35,
  chinese: "他这周换了工作。",
  spanish: "Él ha cambiado de trabajo esta semana.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",   isCorrect: true,  correctTip: "\"Él\"＝他。", incorrectTip: "" },
        { text: "Ella", isCorrect: false, incorrectTip: "性别不符。", correctTip: "" },
        { text: "Yo",   isCorrect: false, incorrectTip: "主语应为第三人称。", correctTip: "" }
      ]
    },
    {
      correctWord: "ha cambiado",
      options: [
        { text: "ha cambiado", isCorrect: true,  correctTip: "第三人称现在完成时。", incorrectTip: "" },
        { text: "he cambiado", isCorrect: false, incorrectTip: "第一人称形式。", correctTip: "" },
        { text: "has cambiado",isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "de trabajo esta semana",
      options: [
        { text: "de trabajo esta semana", isCorrect: true,  correctTip: "常见表达：换工作。", incorrectTip: "" },
        { text: "de casa esta semana",    isCorrect: false, incorrectTip: "换的对象不同。", correctTip: "" },
        { text: "de trabajo el mes pasado",isCorrect: false,incorrectTip: "时间状语不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Nosotros — enseñar
{
  id: 36,
  chinese: "我们这周上了三节新课。",
  spanish: "Nosotros hemos enseñado tres clases nuevas esta semana.",
  wordChoices: [
    {
      correctWord: "Nosotros",
      options: [
        { text: "Nosotros", isCorrect: true,  correctTip: "\"Nosotros\"＝我们。", incorrectTip: "" },
        { text: "Vosotros", isCorrect: false, incorrectTip: "主语应为第一人称复数。", correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第一人称复数。", correctTip: "" }
      ]
    },
    {
      correctWord: "hemos enseñado",
      options: [
        { text: "hemos enseñado",  isCorrect: true,  correctTip: "第一人称复数现在完成时。", incorrectTip: "" },
        { text: "han enseñado",    isCorrect: false, incorrectTip: "第三人称复数形式。", correctTip: "" },
        { text: "habéis enseñado", isCorrect: false, incorrectTip: "第二人称复数形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "tres clases nuevas esta semana",
      options: [
        { text: "tres clases nuevas esta semana", isCorrect: true,  correctTip: "具体数量 + 时间。", incorrectTip: "" },
        { text: "dos clases nuevas esta semana",  isCorrect: false, incorrectTip: "数量与原句不符。", correctTip: "" },
        { text: "tres clases nuevas ayer",        isCorrect: false, incorrectTip: "时间状语不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Vosotros — andar
{
  id: 37,
  chinese: "你们这周走了很多公里。",
  spanish: "Vosotros habéis andado muchos kilómetros esta semana.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第二人称复数。", correctTip: "" },
        { text: "Ellos",    isCorrect: false, incorrectTip: "主语应为第二人称复数。", correctTip: "" }
      ]
    },
    {
      correctWord: "habéis andado",
      options: [
        { text: "habéis andado", isCorrect: true,  correctTip: "第二人称复数现在完成时。", incorrectTip: "" },
        { text: "hemos andado",  isCorrect: false, incorrectTip: "第一人称复数形式。", correctTip: "" },
        { text: "han andado",    isCorrect: false, incorrectTip: "第三人称复数形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "muchos kilómetros esta semana",
      options: [
        { text: "muchos kilómetros esta semana", isCorrect: true,  correctTip: "数量 + 时间。", incorrectTip: "" },
        { text: "pocos kilómetros esta semana",  isCorrect: false, incorrectTip: "与原句数量相反。", correctTip: "" },
        { text: "muchos kilómetros ayer",        isCorrect: false, incorrectTip: "时间状语不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Ellos — descansar
{
  id: 38,
  chinese: "他们这周休息了几天。",
  spanish: "Ellos han descansado unos días esta semana.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",   isCorrect: true,  correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
        { text: "Ellas",   isCorrect: false, incorrectTip: "原句包含男性，应用 \"Ellos\"。", correctTip: "" },
        { text: "Nosotros",isCorrect: false, incorrectTip: "主语应为第三人称复数。", correctTip: "" }
      ]
    },
    {
      correctWord: "han descansado",
      options: [
        { text: "han descansado", isCorrect: true,  correctTip: "第三人称复数现在完成时。", incorrectTip: "" },
        { text: "hemos descansado",  isCorrect: false, incorrectTip: "第一人称复数形式。", correctTip: "" },
        { text: "habéis descansado", isCorrect: false, incorrectTip: "第二人称复数形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "unos días esta semana",
      options: [
        { text: "unos días esta semana", isCorrect: true,  correctTip: "具体休息天数 + 时间。", incorrectTip: "" },
        { text: "toda la semana",        isCorrect: false, incorrectTip: "天数与原句不符。", correctTip: "" },
        { text: "unos días el mes pasado",isCorrect: false,incorrectTip: "时间状语不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
