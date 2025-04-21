import { Sentence } from "@/types/game";

// 5个西班牙语句子及其对应的中文翻译和选词游戏数据
export const sentencesData: Sentence[] = [
  {
    id: 1,
    chinese: "我喜欢学习西班牙语。",
    spanish: "Me gusta estudiar español.",
    wordChoices: [
      {
        correctWord: "Me",
        options: [
          {
            text: "Me",
            isCorrect: true,
            correctTip: "“Me” 是“我”的意思，用于表达自我感受。",
            incorrectTip: "",
          },
          {
            text: "Te",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Te” 是“你”的意思，这里需要用“Me”来表示“我喜欢”。",
          },
        ],
      },
      {
        correctWord: "gusta",
        options: [
          {
            text: "gusto",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“gusto”意思是“我喜欢”，但搭配“Me”后正确表达应为“gusta”。",
          },
          {
            text: "gusta",
            isCorrect: true,
            correctTip: "“gusta”表示喜欢的意思，这里主语是“Me”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "estudiar",
        options: [
          {
            text: "estudiar",
            isCorrect: true,
            correctTip: "“estudiar”意思是“学习”，符合句意。",
            incorrectTip: "",
          },
          {
            text: "aprender",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“aprender”更偏向于“掌握/学会”，此处应选“estudiar”表示“学习”。",
          },
        ],
      },
      {
        correctWord: "español",
        options: [
          {
            text: "inglés",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“inglés”是“英语”，此句谈的是“西班牙语”。",
          },
          {
            text: "español",
            isCorrect: true,
            correctTip: "“español”就是“西班牙语”。",
            incorrectTip: "",
          },
        ],
      },
    ],
    completed: false,
  },
  {
    id: 2,
    chinese: "今天天气很好。",
    spanish: "Hoy hace buen tiempo.",
    wordChoices: [
      {
        correctWord: "Hoy",
        options: [
          {
            text: "Ayer",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Ayer”是“昨天”，而“Hoy”才是“今天”。",
          },
          {
            text: "Hoy",
            isCorrect: true,
            correctTip: "“Hoy”表示“今天”，与句子内容匹配。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "hace",
        options: [
          {
            text: "hace",
            isCorrect: true,
            correctTip: "“hace”与“天气”连用表示“天气如何”。",
            incorrectTip: "",
          },
          {
            text: "tiene",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "表达天气时西语常用“hace”，不用“tiene”。",
          },
        ],
      },
      {
        correctWord: "buen",
        options: [
          {
            text: "mal",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“mal”意思是“不好”，此句要表达“很好”应选“buen”。",
          },
          {
            text: "buen",
            isCorrect: true,
            correctTip: "“buen”表示好的天气。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "tiempo",
        options: [
          {
            text: "tiempo",
            isCorrect: true,
            correctTip: "“tiempo”此处表示“天气”。",
            incorrectTip: "",
          },
          {
            text: "clima",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "虽然“clima”也有“气候”之意，但这里更常用“tiempo”描述天气。",
          },
        ],
      },
    ],
    completed: false,
  },
  {
    id: 3,
    chinese: "我有两只可爱的猫。",
    spanish: "Tengo dos gatos bonitos.",
    wordChoices: [
      {
        correctWord: "Tengo",
        options: [
          {
            text: "Tengo",
            isCorrect: true,
            correctTip: "“Tengo”是“我有”。",
            incorrectTip: "",
          },
          {
            text: "Tiene",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Tiene”是“他/她有”，应该用“Tengo”代表“我有”。",
          },
        ],
      },
      {
        correctWord: "dos",
        options: [
          {
            text: "tres",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“tres”是“三”，正确是“dos”--两只猫。",
          },
          {
            text: "dos",
            isCorrect: true,
            correctTip: "“dos”表示“两”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "gatos",
        options: [
          {
            text: "perros",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“perros”是“狗”，题目为猫应选“gatos”。",
          },
          {
            text: "gatos",
            isCorrect: true,
            correctTip: "“gatos”是“猫”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "bonitos",
        options: [
          {
            text: "bonitos",
            isCorrect: true,
            correctTip: "“bonitos”意思是“可爱的，漂亮的”。",
            incorrectTip: "",
          },
          {
            text: "grandes",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“grandes”是“大”，不是“可爱”。",
          },
        ],
      },
    ],
    completed: false,
  },
  {
    id: 4,
    chinese: "请给我一杯水。",
    spanish: "Dame un vaso de agua, por favor.",
    wordChoices: [
      {
        correctWord: "Dame",
        options: [
          {
            text: "Dame",
            isCorrect: true,
            correctTip: "“Dame”表示“给我”。",
            incorrectTip: "",
          },
          {
            text: "Dime",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Dime”是“告诉我”，表达“给我”要用“Dame”。",
          },
        ],
      },
      {
        correctWord: "un",
        options: [
          {
            text: "una",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“una”是阴性，这里“vaso”玻璃杯是阳性应用“un”。",
          },
          {
            text: "un",
            isCorrect: true,
            correctTip: "“un vaso”是“一杯”中的阳性“un”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "vaso",
        options: [
          {
            text: "vaso",
            isCorrect: true,
            correctTip: "“vaso”是“杯子”。",
            incorrectTip: "",
          },
          {
            text: "taza",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“taza”一般是“茶杯”，这里表达“一杯水”要用“vaso”。",
          },
        ],
      },
      {
        correctWord: "de",
        options: [
          {
            text: "con",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“con”是“和、带”，一杯水用“vaso de agua”。",
          },
          {
            text: "de",
            isCorrect: true,
            correctTip: "“de”表达“……的”，此处为“水的杯子”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "agua",
        options: [
          {
            text: "agua",
            isCorrect: true,
            correctTip: "“agua”即“水”。",
            incorrectTip: "",
          },
          {
            text: "vino",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“vino”是“葡萄酒”，题目为水应选“agua”。",
          },
        ],
      },
      {
        correctWord: "por favor",
        options: [
          {
            text: "gracias",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“gracias”是“谢谢”，表达“请”要用“por favor”。",
          },
          {
            text: "por favor",
            isCorrect: true,
            correctTip: "“por favor”是“请”。",
            incorrectTip: "",
          },
        ],
      },
    ],
    completed: false,
  },
  {
    id: 5,
    chinese: "我明天要去马德里。",
    spanish: "Mañana voy a Madrid.",
    wordChoices: [
      {
        correctWord: "Mañana",
        options: [
          {
            text: "Hoy",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Hoy”是“今天”，“Mañana”才是“明天”。",
          },
          {
            text: "Mañana",
            isCorrect: true,
            correctTip: "“Mañana”意思是“明天”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "voy",
        options: [
          {
            text: "voy",
            isCorrect: true,
            correctTip: "“voy”表示“我要去”。",
            incorrectTip: "",
          },
          {
            text: "vas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“vas”表示“你去”，需要用“voy”来表示“我去”。",
          },
        ],
      },
      {
        correctWord: "a",
        options: [
          {
            text: "en",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“en”是“在”/“乘”，这里要用“a”表达去往某地。",
          },
          {
            text: "a",
            isCorrect: true,
            correctTip: "“a”表示方向“去……”。",
            incorrectTip: "",
          },
        ],
      },
      {
        correctWord: "Madrid",
        options: [
          {
            text: "Madrid",
            isCorrect: true,
            correctTip: "“Madrid”是“马德里”。",
            incorrectTip: "",
          },
          {
            text: "Barcelona",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "“Barcelona”是“巴塞罗那”，本句是去“Madrid”。",
          },
        ],
      },
    ],
    completed: false,
  },
  // ---------------- 新增12个动词变位重点句子 ------------------
  // Presente | Yo | Yo hablo muy bien hoy.
  {
    id: 6,
    chinese: "我今天说得非常好。",
    spanish: "Yo hablo muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "“Yo”表示“我”，此句主语。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "hablo",
        options: [
          { text: "hablo", isCorrect: true, correctTip: "“hablo”是动词“hablar”（说）的第一人称现在时变位。", incorrectTip: "" },
          { text: "habla", isCorrect: false, correctTip: "", incorrectTip: "“habla”是第三人称或您式，不是“我”对应变位。" },
          { text: "hablas", isCorrect: false, correctTip: "", incorrectTip: "“hablas”是“你”的变位，不是“我”用法。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Tú | Tú trabajas muy bien hoy.
  {
    id: 7,
    chinese: "你今天工作得非常好。",
    spanish: "Tú trabajas muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "“Tú”表示“你”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "trabajas",
        options: [
          { text: "trabajas", isCorrect: true, correctTip: "“trabajas”是动词“trabajar”的第二人称现在时变位。", incorrectTip: "" },
          { text: "trabajamos", isCorrect: false, correctTip: "", incorrectTip: "“trabajamos”是“我们”的变位。" },
          { text: "trabaja", isCorrect: false, correctTip: "", incorrectTip: "“trabaja”是“他/她/您”的变位。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Él | Él estudia muy bien hoy.
  {
    id: 8,
    chinese: "他今天学习得非常好。",
    spanish: "Él estudia muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "“Él”表示“他”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "estudia",
        options: [
          { text: "estudia", isCorrect: true, correctTip: "“estudia”是“estudiar”第三人称现在时", incorrectTip: "" },
          { text: "estudio", isCorrect: false, correctTip: "", incorrectTip: "“estudio”是“我”的变位。" },
          { text: "estudias", isCorrect: false, correctTip: "", incorrectTip: "“estudias”是“你”的变位。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Nosotros | Nosotros caminamos muy bien hoy.
  {
    id: 9,
    chinese: "我们今天走路走得非常好。",
    spanish: "Nosotros caminamos muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "“Nosotros”表示“我们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "caminamos",
        options: [
          { text: "caminamos", isCorrect: true, correctTip: "“caminamos”是“caminar”的第一人称复数现在时变位。", incorrectTip: "" },
          { text: "camina", isCorrect: false, correctTip: "", incorrectTip: "“camina”指第三人称单数，不是“我们”的用法。" },
          { text: "camináis", isCorrect: false, correctTip: "", incorrectTip: "“camináis”是“你们”的用法。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Vosotros | Vosotros miráis muy bien hoy.
  {
    id: 10,
    chinese: "你们今天看得非常好。",
    spanish: "Vosotros miráis muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "“Vosotros”代表“你们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "miráis",
        options: [
          { text: "miráis", isCorrect: true, correctTip: "“miráis”是“vosotros”现在时变位。", incorrectTip: "" },
          { text: "miras", isCorrect: false, correctTip: "", incorrectTip: "“miras”是“你”的用法。" },
          { text: "miramos", isCorrect: false, correctTip: "", incorrectTip: "“miramos”是“我们”的用法。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Ellos | Ellos escuchan muy bien hoy.
  {
    id: 11,
    chinese: "他们今天听得非常好。",
    spanish: "Ellos escuchan muy bien hoy.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "“Ellos”表示“他们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "escuchan",
        options: [
          { text: "escuchan", isCorrect: true, correctTip: "“escuchan”是“ellos”现在时。", incorrectTip: "" },
          { text: "escucho", isCorrect: false, correctTip: "", incorrectTip: "“escucho”是“我”的过去时变位。" },
          { text: "escucháis", isCorrect: false, correctTip: "", incorrectTip: "“escucháis”是“你们”的变位。" }
        ]
      },
      {
        correctWord: "muy bien hoy",
        options: [
          { text: "muy bien hoy", isCorrect: true, correctTip: "今天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Yo | Yo compré muy bien ayer.
  {
    id: 12,
    chinese: "我昨天买得非常好。",
    spanish: "Yo compré muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "“Yo”=“我”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "compré",
        options: [
          { text: "compré", isCorrect: true, correctTip: "“compré”是“comprar”动词过去时“我”的变位。", incorrectTip: "" },
          { text: "compró", isCorrect: false, correctTip: "", incorrectTip: "“compró”是“他/她”的过去时变位。" },
          { text: "compraste", isCorrect: false, correctTip: "", incorrectTip: "“compraste”是“你”的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Tú | Tú tomaste muy bien ayer.
  {
    id: 13,
    chinese: "你昨天拿得非常好。",
    spanish: "Tú tomaste muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "“Tú”=“你”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "tomaste",
        options: [
          { text: "tomaste", isCorrect: true, correctTip: "“tomaste”是“你”的过去时变位。", incorrectTip: "" },
          { text: "tomé", isCorrect: false, correctTip: "", incorrectTip: "“tomé”是“我”的过去时变位。" },
          { text: "toma", isCorrect: false, correctTip: "", incorrectTip: "“toma”为一般现在时第三人称。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Él | Él llamó muy bien ayer.
  {
    id: 14,
    chinese: "他昨天打电话打得非常好。",
    spanish: "Él llamó muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "“Él”=“他”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "llamó",
        options: [
          { text: "llamó", isCorrect: true, correctTip: "“llamó”是“他”的过去时变位。", incorrectTip: "" },
          { text: "llamé", isCorrect: false, correctTip: "", incorrectTip: "“llamé”是“我”的过去时变位。" },
          { text: "llamaste", isCorrect: false, correctTip: "", incorrectTip: "“llamaste”是“你”的过去式。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Nosotros | Nosotros usamos muy bien ayer.
  {
    id: 15,
    chinese: "我们昨天用得非常好。",
    spanish: "Nosotros usamos muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "“Nosotros”=“我们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "usamos",
        options: [
          { text: "usamos", isCorrect: true, correctTip: "“usamos”是“我们”的一般过去时变位。", incorrectTip: "" },
          { text: "usaste", isCorrect: false, correctTip: "", incorrectTip: "“usaste”是“你”的过去时变位。" },
          { text: "usó", isCorrect: false, correctTip: "", incorrectTip: "“usó”是“他/她”的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Vosotros | Vosotros viajasteis muy bien ayer.
  {
    id: 16,
    chinese: "你们昨天旅行得非常好。",
    spanish: "Vosotros viajasteis muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "“Vosotros”=“你们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "viajasteis",
        options: [
          { text: "viajasteis", isCorrect: true, correctTip: "“viajasteis”是“你们”的过去时变位。", incorrectTip: "" },
          { text: "viajamos", isCorrect: false, correctTip: "", incorrectTip: "“viajamos”是“我们”的过去时变位。" },
          { text: "viajaron", isCorrect: false, correctTip: "", incorrectTip: "“viajaron”是“他们”的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Ellos | Ellos ayudaron muy bien ayer.
  {
    id: 17,
    chinese: "他们昨天帮助得非常好。",
    spanish: "Ellos ayudaron muy bien ayer.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "“Ellos”=“他们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "ayudaron",
        options: [
          { text: "ayudaron", isCorrect: true, correctTip: "“ayudaron”是“他们”过去时变位。", incorrectTip: "" },
          { text: "ayudé", isCorrect: false, correctTip: "", incorrectTip: "“ayudé”是“我”的过去时变位。" },
          { text: "ayudaste", isCorrect: false, correctTip: "", incorrectTip: "“ayudaste”是“你”的过去时变位。" }
        ]
      },
      {
        correctWord: "muy bien ayer",
        options: [
          { text: "muy bien ayer", isCorrect: true, correctTip: "昨天，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Yo | Yo cocinaba muy bien cuando era niño.
  {
    id: 18,
    chinese: "我小时候做饭做得很好。",
    spanish: "Yo cocinaba muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { text: "Yo", isCorrect: true, correctTip: "“Yo”=“我”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "cocinaba",
        options: [
          { text: "cocinaba", isCorrect: true, correctTip: "动词“cocinar”未完成过去时：我。", incorrectTip: "" },
          { text: "cocinabas", isCorrect: false, correctTip: "", incorrectTip: "“cocinabas”是“你”未完成过去时。" },
          { text: "cociné", isCorrect: false, correctTip: "", incorrectTip: "“cociné”是“我”简单过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Tú | Tú bailabas muy bien cuando era niño.
  {
    id: 19,
    chinese: "你小时候跳舞跳得很好。",
    spanish: "Tú bailabas muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "“Tú”=“你”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "bailabas",
        options: [
          { text: "bailabas", isCorrect: true, correctTip: "动词“bailar”未完成过去时：你。", incorrectTip: "" },
          { text: "bailaba", isCorrect: false, correctTip: "", incorrectTip: "“bailaba”本身也对，但指“我/他/她”，题干主语为你。" },
          { text: "bailaron", isCorrect: false, correctTip: "", incorrectTip: "“bailaron”是“他们”简单过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Él | Él cantaba muy bien cuando era niño.
  {
    id: 20,
    chinese: "他小时候唱歌唱得很好。",
    spanish: "Él cantaba muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "“Él”=“他”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "cantaba",
        options: [
          { text: "cantaba", isCorrect: true, correctTip: "“cantaba”动词未完成过去时：他。", incorrectTip: "" },
          { text: "cantabas", isCorrect: false, correctTip: "", incorrectTip: "“cantabas”是“你”未完成过去时。" },
          { text: "canto", isCorrect: false, correctTip: "", incorrectTip: "“canto”是现在时“我”变位。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Nosotros | Nosotros limpiábamos muy bien cuando era niño.
  {
    id: 21,
    chinese: "我们小时候打扫打得很好。",
    spanish: "Nosotros limpiábamos muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "“Nosotros”=“我们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "limpiábamos",
        options: [
          { text: "limpiábamos", isCorrect: true, correctTip: "动词“limpiar”未完成过去时：我们。", incorrectTip: "" },
          { text: "limpiaban", isCorrect: false, correctTip: "", incorrectTip: "“limpiaban”是“他们”未完成过去时。" },
          { text: "limpié", isCorrect: false, correctTip: "", incorrectTip: "“limpié”是“我”简单过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Vosotros | Vosotros tirabais muy bien cuando era niño.
  {
    id: 22,
    chinese: "你们小时候扔东西很厉害。",
    spanish: "Vosotros tirabais muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "“Vosotros”=“你们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "tirabais",
        options: [
          { text: "tirabais", isCorrect: true, correctTip: "“tirabais”未完成过去时：你们。", incorrectTip: "" },
          { text: "tirábamos", isCorrect: false, correctTip: "", incorrectTip: "“tirábamos”是“我们”未完成过去时。" },
          { text: "tiraba", isCorrect: false, correctTip: "", incorrectTip: "“tiraba”是“我/他/她”未完成过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Ellos | Ellos saltaban muy bien cuando era niño.
  {
    id: 23,
    chinese: "他们小时候跳得很好。",
    spanish: "Ellos saltaban muy bien cuando era niño.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "“Ellos”=“他们”。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "saltaban",
        options: [
          { text: "saltaban", isCorrect: true, correctTip: "“saltaban”未完成过去时：他们。", incorrectTip: "" },
          { text: "saltaba", isCorrect: false, correctTip: "", incorrectTip: "“saltaba”是“我/他/她”未完成过去时。" },
          { text: "saltábamos", isCorrect: false, correctTip: "", incorrectTip: "“saltábamos”是“我们”未完成过去时。" }
        ]
      },
      {
        correctWord: "muy bien cuando era niño",
        options: [
          { text: "muy bien cuando era niño", isCorrect: true, correctTip: "小时候，非常好。", incorrectTip: "" }
        ]
      }
    ],
    completed: false,
  }
]
