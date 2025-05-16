import { Sentence } from "@/types/game";

// -IR动词 不完成过去时句子
export const irVerbsImperfectoSentences: Sentence[] = [
  // Yo — vivir
  {
    id: 87,
    chinese: "我小时候无忧无虑地生活。",
    spanish: "Yo vivía sin preocupaciones cuando era niño.",
    wordChoices: [
      {
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "\"Yo\"＝我。", incorrectTip: "" },
          { text: "Me", isCorrect: false, correctTip: "", incorrectTip: "宾格代词，不能作主语。" }
        ]
      },
      {
        correctWord: "vivía",
        options: [
          { text: "vivía", isCorrect: true, correctTip: "动词\"vivir\"未完成过去时第一人称：vivía。", incorrectTip: "" },
          { text: "vivo", isCorrect: false, correctTip: "", incorrectTip: "现在时。"},
          { text: "viví", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。"}
        ]
      },
      {
        correctWord: "sin preocupaciones",
        options: [
          { text: "sin preocupaciones", isCorrect: true, correctTip: "“无忧无虑”。", incorrectTip: "" },
          { text: "con estrés", isCorrect: false, correctTip: "", incorrectTip: "含义相反。"},
          { text: "bajo presión", isCorrect: false, correctTip: "", incorrectTip: "含义相反。"}
        ]
      },
      {
        correctWord: "cuando era niño",
        options: [
          { text: "cuando era niño", isCorrect: true, correctTip: "时间状语：小时候。", incorrectTip: "" },
          { text: "ayer", isCorrect: false, correctTip: "", incorrectTip: "指昨日，不符长期过去。"}
        ]
      }
    ],
    completed: false
  },

  // Tú — insistir
  {
    id: 88,
    chinese: "你小时候总是很坚持自己的想法。",
    spanish: "Tú insistías en tus ideas con mucha energía cuando eras niño.",
    wordChoices: [
      {
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"＝你。", incorrectTip: "" },
          { text: "Usted", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "insistías",
        options: [
          { text: "insistías", isCorrect: true, correctTip: "动词\"insistir\"未完成过去时第二人称：insistías。", incorrectTip: "" },
          { text: "insististe", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" },
          { text: "insistes", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "en tus ideas",
        options: [
          { text: "en tus ideas", isCorrect: true, correctTip: "“坚持自己的想法”。", incorrectTip: "" },
          { text: "en mis ideas", isCorrect: false, correctTip: "", incorrectTip: "人称不匹配。" }
        ]
      },
      {
        correctWord: "con mucha energía",
        options: [
          { text: "con mucha energía", isCorrect: true, correctTip: "方式状语：充满活力。", incorrectTip: "" },
          { text: "sin ganas", isCorrect: false, correctTip: "", incorrectTip: "含义相反。"}
        ]
      }
    ],
    completed: false
  },

  // Él — dormir
  {
    id: 89,
    chinese: "他小时候每晚都睡得很沉。",
    spanish: "Él dormía profundamente cada noche cuando era niño.",
    wordChoices: [
      {
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "Ella", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "dormía",
        options: [
          { text: "dormía", isCorrect: true, correctTip: "\"dormir\"未完成过去时第三人称：dormía。", incorrectTip: "" },
          { text: "durmió", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" },
          { text: "duerme", isCorrect: false, correctTip: "", incorrectTip: "现在时。" }
        ]
      },
      {
        correctWord: "profundamente",
        options: [
          { text: "profundamente", isCorrect: true, correctTip: "副词：深沉地。", incorrectTip: "" },
          { text: "ligeramente", isCorrect: false, correctTip: "", incorrectTip: "表示浅睡，含义相反。" }
        ]
      },
      {
        correctWord: "cada noche",
        options: [
          { text: "cada noche", isCorrect: true, correctTip: "频率状语：每晚。", incorrectTip: "" },
          { text: "una vez", isCorrect: false, correctTip: "", incorrectTip: "次数不同。" }
        ]
      }
    ],
    completed: false
  },

  // Nosotros — partir
  {
    id: 90,
    chinese: "我们小时候总是很早动身去上学。",
    spanish: "Nosotros partíamos temprano hacia la escuela cuando éramos niños.",
    wordChoices: [
      {
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "Vosotros", isCorrect: false, correctTip: "", incorrectTip: "人称不符。" }
        ]
      },
      {
        correctWord: "partíamos",
        options: [
          { text: "partíamos", isCorrect: true, correctTip: "\"partir\"未完成过去时第一人称复数：partíamos。", incorrectTip: "" },
          { text: "partimos", isCorrect: false, correctTip: "", incorrectTip: "现在/简单过去时。" }
        ]
      },
      {
        correctWord: "temprano",
        options: [
          { text: "temprano", isCorrect: true, correctTip: "时间副词：很早。", incorrectTip: "" },
          { text: "tarde", isCorrect: false, correctTip: "", incorrectTip: "含义相反：迟。"}
        ]
      },
      {
        correctWord: "hacia la escuela",
        options: [
          { text: "hacia la escuela", isCorrect: true, correctTip: "方向补语：去学校。", incorrectTip: "" },
          { text: "al cine", isCorrect: false, correctTip: "", incorrectTip: "地点不符。" }
        ]
      }
    ],
    completed: false
  },

  // Vosotros — compartir
  {
    id: 91,
    chinese: "你们小时候总是乐于分享玩具。",
    spanish: "Vosotros compartíais vuestros juguetes con gusto cuando erais niños.",
    wordChoices: [
      {
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "Ustedes", isCorrect: false, correctTip: "", incorrectTip: "动词变位不符。" }
        ]
      },
      {
        correctWord: "compartíais",
        options: [
          { text: "compartíais", isCorrect: true, correctTip: "\"compartir\"未完成过去时第二人称复数：compartíais。", incorrectTip: "" },
          { text: "compartisteis", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "vuestros juguetes",
        options: [
          { text: "vuestros juguetes", isCorrect: true, correctTip: "“你们的玩具”。", incorrectTip: "" },
          { text: "mis juguetes", isCorrect: false, correctTip: "", incorrectTip: "所有格不匹配。" }
        ]
      },
      {
        correctWord: "con gusto",
        options: [
          { text: "con gusto", isCorrect: true, correctTip: "“乐意地”。", incorrectTip: "" },
          { text: "a la fuerza", isCorrect: false, correctTip: "", incorrectTip: "含义相反：被迫。"}
        ]
      }
    ],
    completed: false
  },

  // Ellos — prohibir
  {
    id: 92,
    chinese: "他们小时候在游戏时常常禁止吵架。",
    spanish: "Ellos prohibían las peleas durante los juegos cuando eran niños.",
    wordChoices: [
      {
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "", incorrectTip: "" },
          { text: "Ellas", isCorrect: false, correctTip: "", incorrectTip: "性别不符。" }
        ]
      },
      {
        correctWord: "prohibían",
        options: [
          { text: "prohibían", isCorrect: true, correctTip: "\"prohibir\"未完成过去时第三人称复数：prohibían。", incorrectTip: "" },
          { text: "prohibieron", isCorrect: false, correctTip: "", incorrectTip: "简单过去时。" }
        ]
      },
      {
        correctWord: "las peleas",
        options: [
          { text: "las peleas", isCorrect: true, correctTip: "“打架”。", incorrectTip: "" },
          { text: "los cantos", isCorrect: false, correctTip: "", incorrectTip: "对象不同。" }
        ]
      },
      {
        correctWord: "durante los juegos",
        options: [
          { text: "durante los juegos", isCorrect: true, correctTip: "时间/场景状语：在游戏时。", incorrectTip: "" },
          { text: "en clase", isCorrect: false, correctTip: "", incorrectTip: "场景不同。" }
        ]
      }
    ],
    completed: false
  }
];