
import { Sentence } from "@/types/game";

// 过去时动词变位句子 (12-17)
export const preteritoTenseSentences: Sentence[] = [
  // Pretérito | Yo | comprar
{
  id: 12,
  chinese: "我昨天买到了一些超值商品。",
  spanish: "Yo compré unas gangas ayer.",
  wordChoices: [
    {
      correctWord: "Yo",
      options: [
        { text: "Yo",  isCorrect: true,  correctTip: "\"Yo\"表示\"我\"。", incorrectTip: "" },
        { text: "Tú",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。"},
        { text: "Él",  isCorrect: false, correctTip: "", incorrectTip: "主语应为第一人称。"}
      ]
    },
    {
      correctWord: "compré",
      options: [
        { text: "compré",     isCorrect: true,  correctTip: "\"comprar\" 第一人称简单过去时。", incorrectTip: "" },
        { text: "compró",     isCorrect: false, incorrectTip: "第三人称形式。", correctTip: "" },
        { text: "compraste",  isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "unas gangas ayer",
      options: [
        { text: "unas gangas ayer",  isCorrect: true,  correctTip: "具体说明所买内容。", incorrectTip: "" },
        { text: "muy bien ayer",     isCorrect: false, correctTip: "", incorrectTip: "表达过于笼统。"},
        { text: "unos libros ayer",  isCorrect: false, correctTip: "", incorrectTip: "与原句含义不符。"}
      ]
    }
  ],
  completed: false
},

// Pretérito | Tú | tomar
{
  id: 13,
  chinese: "你昨天喝了一杯浓咖啡。",
  spanish: "Tú tomaste un café fuerte ayer.",
  wordChoices: [
    {
      correctWord: "Tú",
      options: [
        { text: "Tú",  isCorrect: true,  correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" },
        { text: "Yo",  isCorrect: false, incorrectTip: "主语应为第二人称。", correctTip: "" },
        { text: "Usted",isCorrect: false,incorrectTip: "正式您式，与句中动词变位不符。", correctTip: "" }
      ]
    },
    {
      correctWord: "tomaste",
      options: [
        { text: "tomaste", isCorrect: true,  correctTip: "\"tomar\" 第二人称简单过去时。", incorrectTip: "" },
        { text: "tomé",    isCorrect: false, incorrectTip: "第一人称形式。", correctTip: "" },
        { text: "toma",    isCorrect: false, incorrectTip: "现在时形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "un café fuerte ayer",
      options: [
        { text: "un café fuerte ayer", isCorrect: true,  correctTip: "说明所喝饮料。", incorrectTip: "" },
        { text: "muy bien ayer",       isCorrect: false, incorrectTip: "缺乏具体内容。", correctTip: "" },
        { text: "un té suave ayer",    isCorrect: false, incorrectTip: "饮料与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Pretérito | Él | llamar
{
  id: 14,
  chinese: "他昨天给妈妈打了电话。",
  spanish: "Él llamó a su madre ayer.",
  wordChoices: [
    {
      correctWord: "Él",
      options: [
        { text: "Él",   isCorrect: true,  correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" },
        { text: "Ella", isCorrect: false, incorrectTip: "性别不符。", correctTip: "" },
        { text: "Yo",   isCorrect: false, incorrectTip: "主语应为第三人称。", correctTip: "" }
      ]
    },
    {
      correctWord: "llamó",
      options: [
        { text: "llamó",     isCorrect: true,  correctTip: "\"llamar\" 第三人称简单过去时。", incorrectTip: "" },
        { text: "llamé",     isCorrect: false, incorrectTip: "第一人称形式。", correctTip: "" },
        { text: "llamaste",  isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "a su madre ayer",
      options: [
        { text: "a su madre ayer", isCorrect: true,  correctTip: "指明通话对象。", incorrectTip: "" },
        { text: "muy bien ayer",   isCorrect: false, incorrectTip: "缺乏具体信息。", correctTip: "" },
        { text: "a su amigo ayer", isCorrect: false, incorrectTip: "对象与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Pretérito | Nosotros | usar
{
  id: 15,
  chinese: "我们昨天试用了新软件。",
  spanish: "Nosotros usamos el nuevo software ayer.",
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
      correctWord: "usamos",
      options: [
        { text: "usamos",   isCorrect: true,  correctTip: "\"usar\" 第一人称复数简单过去时。", incorrectTip: "" },
        { text: "usaste",   isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" },
        { text: "usó",      isCorrect: false, incorrectTip: "第三人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "el nuevo software ayer",
      options: [
        { text: "el nuevo software ayer", isCorrect: true,  correctTip: "具体指出所用软件。", incorrectTip: "" },
        { text: "muy bien ayer",          isCorrect: false, incorrectTip: "应使用具体名词而非笼统描述。", correctTip: "" },
        { text: "el viejo software ayer", isCorrect: false, incorrectTip: "与原句“nuevo”相反。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Pretérito | Vosotros | viajar
{
  id: 16,
  chinese: "你们昨天去了海边旅行。",
  spanish: "Vosotros viajasteis a la costa ayer.",
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
      correctWord: "viajasteis",
      options: [
        { text: "viajasteis", isCorrect: true,  correctTip: "\"viajar\" 第二人称复数简单过去时。", incorrectTip: "" },
        { text: "viajamos",   isCorrect: false, incorrectTip: "第一人称复数形式。", correctTip: "" },
        { text: "viajaron",   isCorrect: false, incorrectTip: "第三人称复数形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "a la costa ayer",
      options: [
        { text: "a la costa ayer", isCorrect: true,  correctTip: "指出旅行目的地。", incorrectTip: "" },
        { text: "muy bien ayer",   isCorrect: false, incorrectTip: "缺具体信息。", correctTip: "" },
        { text: "al campo ayer",   isCorrect: false, incorrectTip: "目的地与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
},

// Pretérito | Ellos | ayudar
{
  id: 17,
  chinese: "他们昨天在家里帮忙了。",
  spanish: "Ellos ayudaron en casa ayer.",
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
      correctWord: "ayudaron",
      options: [
        { text: "ayudaron", isCorrect: true,  correctTip: "\"ayudar\" 第三人称复数简单过去时。", incorrectTip: "" },
        { text: "ayudé",    isCorrect: false, incorrectTip: "第一人称形式。", correctTip: "" },
        { text: "ayudaste", isCorrect: false, incorrectTip: "第二人称形式。", correctTip: "" }
      ]
    },
    {
      correctWord: "en casa ayer",
      options: [
        { text: "en casa ayer",  isCorrect: true,  correctTip: "指出帮忙地点。", incorrectTip: "" },
        { text: "muy bien ayer", isCorrect: false, incorrectTip: "缺具体情景。", correctTip: "" },
        { text: "en clase ayer", isCorrect: false, incorrectTip: "地点与原句不符。", correctTip: "" }
      ]
    }
  ],
  completed: false
}
];
