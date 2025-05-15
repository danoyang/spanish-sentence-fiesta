import { Sentence } from "@/types/game";

// -IR Verbs in Presente Perfecto (Present Perfect) Tense
export const irVerbsPresentePerfectoSentences: Sentence[] = [
  // Presente perfecto | Yo | Yo he concluido el proyecto esta semana.
  {
    id: 105,
    chinese: "我这周完成了这个项目。",
    spanish: "Yo he concluido el proyecto esta semana.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"表示\"我\"，主语。", incorrectTip: "" },
          { text: "Me", isCorrect: false, correctTip: "", incorrectTip: "宾格代词不能作主语。" }
        ]
      },
      {
        correctWord: "he concluido",
        options: [
          { text: "he concluido", isCorrect: true, correctTip: "现在完成时：haber (he) + concluido。", incorrectTip: "" },
          { text: "has concluido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" },
          { text: "he concluído", isCorrect: false, correctTip: "", incorrectTip: "过去分词拼写错误，正确无重音。" }
        ]
      },
      {
        correctWord: "el proyecto esta semana",
        options: [
          { text: "el proyecto esta semana", isCorrect: true, correctTip: "状语：本周完成项目。", incorrectTip: "" },
          { text: "un descanso largo", isCorrect: false, correctTip: "", incorrectTip: "含义不符。" }
        ]
      }
    ],
    completed: false
  },

  // Presente perfecto | Tú | Tú has conseguido terminar todo el trabajo esta semana.
  {
    id: 106,
    chinese: "你这周成功完成了所有工作。",
    spanish: "Tú has conseguido terminar todo el trabajo esta semana.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" },
          { text: "Vos", isCorrect: false, correctTip: "", incorrectTip: "地区变体与变位不符。" }
        ]
      },
      {
        correctWord: "has conseguido",
        options: [
          { text: "has conseguido", isCorrect: true, correctTip: "现在完成时：has conseguido。", incorrectTip: "" },
          { text: "he conseguido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" },
          { text: "has conseguído", isCorrect: false, correctTip: "", incorrectTip: "过去分词拼写错误。" }
        ]
      },
      {
        correctWord: "terminar todo el trabajo esta semana",
        options: [
          { text: "terminar todo el trabajo esta semana", isCorrect: true, correctTip: "状语：完成所有工作。", incorrectTip: "" },
          { text: "descansar en casa", isCorrect: false, correctTip: "", incorrectTip: "含义不符。" }
        ]
      }
    ],
    completed: false
  },

  // Presente perfecto | Él | Él ha pulido su presentación a la perfección esta semana.
  {
    id: 107,
    chinese: "他这周把演讲稿打磨得无可挑剔。",
    spanish: "Él ha pulido su presentación a la perfección esta semana.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "ha pulido",
        options: [
          { text: "ha pulido", isCorrect: true, correctTip: "现在完成时：ha pulido。", incorrectTip: "" },
          { text: "has pulido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" },
          { text: "ha púlido", isCorrect: false, correctTip: "", incorrectTip: "过去分词拼写错误。" }
        ]
      },
      {
        correctWord: "su presentación a la perfección esta semana",
        options: [
          { text: "su presentación a la perfección esta semana", isCorrect: true, correctTip: "状语：本周把演讲稿完善。", incorrectTip: "" },
          { text: "la mesa rápidamente", isCorrect: false, correctTip: "", incorrectTip: "对象不符。" }
        ]
      }
    ],
    completed: false
  },

  // Presente perfecto | Nosotros | Nosotros hemos salido a correr por el parque casi cada tarde esta semana.
  {
    id: 108,
    chinese: "我们这周几乎每天傍晚都去公园跑步。",
    spanish: "Nosotros hemos salido a correr por el parque casi cada tarde esta semana.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "hemos salido",
        options: [
          { text: "hemos salido", isCorrect: true, correctTip: "现在完成时：hemos salido。", incorrectTip: "" },
          { text: "han salido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "a correr por el parque casi cada tarde esta semana",
        options: [
          { text: "a correr por el parque casi cada tarde esta semana", isCorrect: true, correctTip: "状语：频率与地点。", incorrectTip: "" },
          { text: "una vez ayer", isCorrect: false, correctTip: "", incorrectTip: "次数与时间不符。" }
        ]
      }
    ],
    completed: false
  },

  // Presente perfecto | Vosotros | Vosotros habéis venido puntuales cada día esta semana.
  {
    id: 109,
    chinese: "你们这周每天都准时到达。",
    spanish: "Vosotros habéis venido puntuales cada día esta semana.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"表示\"你们\"。", incorrectTip: "" },
          { text: "Ustedes", isCorrect: false, correctTip: "", incorrectTip: "形式与变位不符。" }
        ]
      },
      {
        correctWord: "habéis venido",
        options: [
          { text: "habéis venido", isCorrect: true, correctTip: "现在完成时：habéis venido。", incorrectTip: "" },
          { text: "hemos venido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "puntuales cada día esta semana",
        options: [
          { text: "puntuales cada día esta semana", isCorrect: true, correctTip: "状语：每天准时。", incorrectTip: "" },
          { text: "con retraso hoy", isCorrect: false, correctTip: "", incorrectTip: "含义相反。" }
        ]
      }
    ],
    completed: false
  },

  // Presente perfecto | Ellos | Ellos han construido un cobertizo temporal esta semana.
  {
    id: 110,
    chinese: "他们这周搭建了一座临时棚屋。",
    spanish: "Ellos han construido un cobertizo temporal esta semana.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "han construido",
        options: [
          { text: "han construido", isCorrect: true, correctTip: "现在完成时：han construido。", incorrectTip: "" },
          { text: "habéis construido", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "un cobertizo temporal esta semana",
        options: [
          { text: "un cobertizo temporal esta semana", isCorrect: true, correctTip: "状语：建造对象与时间。", incorrectTip: "" },
          { text: "un castillo antiguo", isCorrect: false, correctTip: "", incorrectTip: "对象夸张且不符句意。" }
        ]
      }
    ],
    completed: false
  }
];
