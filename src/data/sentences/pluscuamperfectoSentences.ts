import { Sentence } from "@/types/game";

// Pluscuamperfecto (Past Perfect) sentences
export const pluscuamperfectoSentences: Sentence[] = [
  // Yo — dibujar
{
  id: 39,
  chinese: "我上课前就已经把草图画好了。",
  spanish: "Yo ya había dibujado el boceto antes de la clase.",
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
      correctWord: "ya había dibujado",
      options: [
        { text: "ya había dibujado", isCorrect: true,  correctTip: "过去完成时，含副词 ya。", incorrectTip: "" },
        { text: "había dibujado",    isCorrect: false, incorrectTip: "缺少 ya，含义变化。", correctTip: "" },
        { text: "he dibujado",       isCorrect: false, incorrectTip: "现在完成时，不符时态。", correctTip: "" }
      ]
    },
    {
      correctWord: "el boceto antes de la clase",
      options: [
        { text: "el boceto antes de la clase",  isCorrect: true,  correctTip: "正确宾语+时间。", incorrectTip: "" },
        { text: "el boceto después de la clase",isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" },
        { text: "el cuadro antes de la clase",  isCorrect: false, incorrectTip: "描绘对象与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Tú — enviar
{
  id: 40,
  chinese: "你中午前就把邮件发出去了。",
  spanish: "Tú habías enviado el correo antes del mediodía.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",    isCorrect: true,  correctTip: "\"Tú\"＝你。", incorrectTip: "" },
        { text: "Yo",    isCorrect: false, incorrectTip: "主语应为第二人称。", correctTip: "" },
        { text: "Usted", isCorrect: false, incorrectTip: "敬语 Usted 与变位不符。", correctTip: "" }
      ]
    },
    {
      correctWord: "habías enviado",
      options: [
        { text: "habías enviado", isCorrect: true,  correctTip: "第二人称过去完成时。", incorrectTip: "" },
        { text: "había enviado",  isCorrect: false, incorrectTip: "主语与变位不符。", correctTip: "" },
        { text: "has enviado",    isCorrect: false, incorrectTip: "现在完成时。", correctTip: "" }
      ]
    },
    {
      correctWord: "el correo antes del mediodía",
      options: [
        { text: "el correo antes del mediodía",  isCorrect: true,  correctTip: "正确时间状语。", incorrectTip: "" },
        { text: "el paquete antes del mediodía", isCorrect: false, incorrectTip: "发送对象与原句不符。", correctTip: "" },
        { text: "el correo después del mediodía",isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Él — jugar
{
  id: 41,
  chinese: "他受伤前已经踢完整场比赛了。",
  spanish: "Él había jugado todo el partido antes de lesionarse.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",  isCorrect: true,  correctTip: "\"Él\"＝他。", incorrectTip: "" },
        { text: "Ella",isCorrect: false, incorrectTip: "性别不符。", correctTip: "" },
        { text: "Yo",  isCorrect: false, incorrectTip: "主语应为第三人称。", correctTip: "" }
      ]
    },
    {
      correctWord: "había jugado",
      options: [
        { text: "había jugado",  isCorrect: true,  correctTip: "第三人称过去完成时。", incorrectTip: "" },
        { text: "habías jugado", isCorrect: false, incorrectTip: "主语与变位不符。", correctTip: "" },
        { text: "ha jugado",     isCorrect: false, incorrectTip: "现在完成时。", correctTip: "" }
      ]
    },
    {
      correctWord: "todo el partido antes de lesionarse",
      options: [
        { text: "todo el partido antes de lesionarse",  isCorrect: true,  correctTip: "完整动作+后续事件。", incorrectTip: "" },
        { text: "medio partido antes de lesionarse",    isCorrect: false, incorrectTip: "完成程度不符。", correctTip: "" },
        { text: "todo el partido después de lesionarse",isCorrect: false, incorrectTip: "逻辑矛盾。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Nosotros — plantar
{
  id: 42,
  chinese: "下雨前我们就已经把树苗种好了。",
  spanish: "Nosotros habíamos plantado los árboles antes de que empezara a llover.",
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
      correctWord: "habíamos plantado",
      options: [
        { text: "habíamos plantado", isCorrect: true,  correctTip: "第一人称复数过去完成时。", incorrectTip: "" },
        { text: "habían plantado",   isCorrect: false, incorrectTip: "第三人称复数形式。", correctTip: "" },
        { text: "hemos plantado",    isCorrect: false, incorrectTip: "现在完成时。", correctTip: "" }
      ]
    },
    {
      correctWord: "los árboles antes de que empezara a llover",
      options: [
        { text: "los árboles antes de que empezara a llover", isCorrect: true,  correctTip: "正确时间从句。", incorrectTip: "" },
        { text: "las flores antes de que empezara a llover",  isCorrect: false, incorrectTip: "种植对象与原句不符。", correctTip: "" },
        { text: "los árboles después de la lluvia",           isCorrect: false, incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Vosotros — reservar
{
  id: 43,
  chinese: "你们到店前就把桌子订好了。",
  spanish: "Vosotros ya habíais reservado la mesa antes de llegar al restaurante.",
  wordChoices: [
    {
      correctWord: "Vosotros",
      options: [
        { text: "Vosotros", isCorrect: true,  correctTip: "\"Vosotros\"＝你们。", incorrectTip: "" },
        { text: "Nosotros", isCorrect: false, incorrectTip: "主语应为第二人称复数。", correctTip: "" },
        { text: "Ustedes",  isCorrect: false, incorrectTip: "拉美地区用法，动词变位不同。", correctTip: "" }
      ]
    },
    {
      correctWord: "ya habíais reservado",
      options: [
        { text: "ya habíais reservado", isCorrect: true,  correctTip: "第二人称复数过去完成时。", incorrectTip: "" },
        { text: "habíamos reservado",   isCorrect: false, incorrectTip: "第一人称复数形式。", correctTip: "" },
        { text: "habéis reservado",     isCorrect: false, incorrectTip: "现在完成时。", correctTip: "" }
      ]
    },
    {
      correctWord: "la mesa antes de llegar al restaurante",
      options: [
        { text: "la mesa antes de llegar al restaurante", isCorrect: true,  correctTip: "动作先于到店。", incorrectTip: "" },
        { text: "las entradas antes de llegar al restaurante", isCorrect: false, incorrectTip: "预订对象与原句不符。", correctTip: "" },
        { text: "la mesa después de llegar al restaurante",   isCorrect: false, incorrectTip: "时间顺序与原句相反。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Ellos — regalar
{
  id: 44,
  chinese: "年底前他们就把礼物都送出去了。",
  spanish: "Ellos habían regalado los obsequios antes de fin de año.",
  wordChoices: [
    {
      correctWord: "Ellos",
      options: [
        { text: "Ellos",   isCorrect: true,  correctTip: "\"Ellos\"＝他们。", incorrectTip: "" },
        { text: "Nosotros",isCorrect: false, incorrectTip: "主语应为第三人称复数。", correctTip: "" },
        { text: "Ellas",   isCorrect: false, incorrectTip: "性别变化，与原句不符。", correctTip: "" }
      ]
    },
    {
      correctWord: "habían regalado",
      options: [
        { text: "habían regalado", isCorrect: true,  correctTip: "第三人称复数过去完成时。", incorrectTip: "" },
        { text: "habíamos regalado", isCorrect: false, incorrectTip: "第一人称复数形式。", correctTip: "" },
        { text: "han regalado",      isCorrect: false, incorrectTip: "现在完成时。", correctTip: "" }
      ]
    },
    {
      correctWord: "los obsequios antes de fin de año",
      options: [
        { text: "los obsequios antes de fin de año", isCorrect: true,  correctTip: "正确时间状语。", incorrectTip: "" },
        { text: "las tarjetas antes de fin de año",  isCorrect: false, incorrectTip: "赠送对象不同。", correctTip: "" },
        { text: "los obsequios después de fin de año",isCorrect: false,incorrectTip: "时间状语与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
