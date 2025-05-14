
import { Sentence } from "@/types/game";

// 过去时动词变位句子 (12-17)
export const preteritoTenseSentences: Sentence[] = [
  // Pretérito | Yo | Yo compré un regalo para mi madre el fin de semana pasado.
  {
    id: 12,
    chinese: "上周末我给我妈妈买了一件礼物。",
    spanish: "Yo compré un regalo para mi madre el fin de semana pasado.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { 
            text: "Yo", 
            isCorrect: true, 
            correctTip: "\"Yo\"=\"我\"。", 
            incorrectTip: "" 
          }
        ]
      },
      { 
        correctWord: "compré",
        options: [
          { 
            text: "compré", 
            isCorrect: true, 
            correctTip: "\"compré\"是\"comprar\"动词过去时\"我\"的变位。", 
            incorrectTip: "" 
          },
          { 
            text: "compró", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"compró\"是\"他/她\"的过去时变位。" 
          },
          { 
            text: "compraste", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"compraste\"是\"你\"的过去时变位。" 
          }
        ]
      },
      {
        correctWord: "un regalo",
        options: [
          { 
            text: "un regalo", 
            isCorrect: true, 
            correctTip: "\"un regalo\"表示\"一件礼物\"。", 
            incorrectTip: "" 
          },
          { 
            text: "una casa", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"una casa\"表示\"一座房子\"，与句意不符。" 
          }
        ]
      },
      {
        correctWord: "para mi madre",
        options: [
          { 
            text: "para mi madre", 
            isCorrect: true, 
            correctTip: "\"para mi madre\"表示\"给我妈妈\"。", 
            incorrectTip: "" 
          },
          { 
            text: "para mi amigo", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"para mi amigo\"表示\"给我的朋友\"，与句意不符。" 
          }
        ]
      },
      {
        correctWord: "el fin de semana pasado",
        options: [
          { 
            text: "el fin de semana pasado", 
            isCorrect: true, 
            correctTip: "\"el fin de semana pasado\"表示\"上周末\"。", 
            incorrectTip: "" 
          },
          { 
            text: "ayer por la noche", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"ayer por la noche\"表示\"昨天晚上\"，与句意不符。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Tú | Tú visitaste el museo de arte la semana pasada.
  {
    id: 13,
    chinese: "你上周去参观了艺术博物馆。",
    spanish: "Tú visitaste el museo de arte la semana pasada.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"=\"你\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "visitaste",
        options: [
          { text: "visitaste", isCorrect: true, correctTip: "\"visitaste\"是\"visitar\"(参观)的\"你\"的过去时变位。", incorrectTip: "" },
          { text: "visité", isCorrect: false, correctTip: "", incorrectTip: "\"visité\"是\"我\"的过去时变位。" },
          { text: "visitó", isCorrect: false, correctTip: "", incorrectTip: "\"visitó\"是\"他/她\"的过去时变位。" }
        ]
      },
      {
        correctWord: "el museo de arte",
        options: [
          { text: "el museo de arte", isCorrect: true, correctTip: "\"el museo de arte\"表示\"艺术博物馆\"。", incorrectTip: "" },
          { text: "el parque nacional", isCorrect: false, correctTip: "", incorrectTip: "\"el parque nacional\"表示\"国家公园\"，与句意不符。" }
        ]
      },
      {
        correctWord: "la semana pasada",
        options: [
          { text: "la semana pasada", isCorrect: true, correctTip: "\"la semana pasada\"表示\"上周\"。", incorrectTip: "" },
          { text: "el mes pasado", isCorrect: false, correctTip: "", incorrectTip: "\"el mes pasado\"表示\"上个月\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Él | Él llamó a su hermana después de la reunión.
  {
    id: 14,
    chinese: "会议结束后，他给他妹妹打了电话。",
    spanish: "Él llamó a su hermana después de la reunión.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"=\"他\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "llamó",
        options: [
          { text: "llamó", isCorrect: true, correctTip: "\"llamó\"是\"llamar\"(打电话)的\"他\"的过去时变位。", incorrectTip: "" },
          { text: "llamé", isCorrect: false, correctTip: "", incorrectTip: "\"llamé\"是\"我\"的过去时变位。" },
          { text: "llamaste", isCorrect: false, correctTip: "", incorrectTip: "\"llamaste\"是\"你\"的过去式。" }
        ]
      },
      {
        correctWord: "a su hermana",
        options: [
          { text: "a su hermana", isCorrect: true, correctTip: "\"a su hermana\"表示\"给他妹妹/姐姐\"。", incorrectTip: "" },
          { text: "a su amigo", isCorrect: false, correctTip: "", incorrectTip: "\"a su amigo\"表示\"给他的朋友\"，与句意不符。" }
        ]
      },
      {
        correctWord: "después de la reunión",
        options: [
          { text: "después de la reunión", isCorrect: true, correctTip: "\"después de la reunión\"表示\"会议结束后\"。", incorrectTip: "" },
          { text: "antes de la cena", isCorrect: false, correctTip: "", incorrectTip: "\"antes de la cena\"表示\"晚餐前\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Nosotros | Nosotros cenamos en un restaurante italiano el viernes pasado.
  {
    id: 15,
    chinese: "上周五我们在一家意大利餐厅吃了晚餐。",
    spanish: "Nosotros cenamos en un restaurante italiano el viernes pasado.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"=\"我们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "cenamos",
        options: [
          { text: "cenamos", isCorrect: true, correctTip: "\"cenamos\"是\"cenar\"(吃晚餐)的\"我们\"的过去时变位。", incorrectTip: "" },
          { text: "cenaste", isCorrect: false, correctTip: "", incorrectTip: "\"cenaste\"是\"你\"的过去时变位。" },
          { text: "cenó", isCorrect: false, correctTip: "", incorrectTip: "\"cenó\"是\"他/她\"的过去时变位。" }
        ]
      },
      {
        correctWord: "en un restaurante italiano",
        options: [
          { text: "en un restaurante italiano", isCorrect: true, correctTip: "\"en un restaurante italiano\"表示\"在一家意大利餐厅\"。", incorrectTip: "" },
          { text: "en una cafetería española", isCorrect: false, correctTip: "", incorrectTip: "\"en una cafetería española\"表示\"在一家西班牙咖啡馆\"，与句意不符。" }
        ]
      },
      {
        correctWord: "el viernes pasado",
        options: [
          { text: "el viernes pasado", isCorrect: true, correctTip: "\"el viernes pasado\"表示\"上周五\"。", incorrectTip: "" },
          { text: "el domingo pasado", isCorrect: false, correctTip: "", incorrectTip: "\"el domingo pasado\"表示\"上周日\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Vosotros | Vosotros organizasteis una fiesta sorpresa para mi cumpleaños.
  {
    id: 16,
    chinese: "你们为我的生日组织了一个惊喜派对。",
    spanish: "Vosotros organizasteis una fiesta sorpresa para mi cumpleaños.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"=\"你们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "organizasteis",
        options: [
          { text: "organizasteis", isCorrect: true, correctTip: "\"organizasteis\"是\"organizar\"(组织)的\"你们\"的过去时变位。", incorrectTip: "" },
          { text: "organizamos", isCorrect: false, correctTip: "", incorrectTip: "\"organizamos\"是\"我们\"的过去时变位。" },
          { text: "organizaron", isCorrect: false, correctTip: "", incorrectTip: "\"organizaron\"是\"他们\"的过去时变位。" }
        ]
      },
      {
        correctWord: "una fiesta sorpresa",
        options: [
          { text: "una fiesta sorpresa", isCorrect: true, correctTip: "\"una fiesta sorpresa\"表示\"一个惊喜派对\"。", incorrectTip: "" },
          { text: "un viaje largo", isCorrect: false, correctTip: "", incorrectTip: "\"un viaje largo\"表示\"一次长途旅行\"，与句意不符。" }
        ]
      },
      {
        correctWord: "para mi cumpleaños",
        options: [
          { text: "para mi cumpleaños", isCorrect: true, correctTip: "\"para mi cumpleaños\"表示\"为了我的生日\"。", incorrectTip: "" },
          { text: "para la graduación", isCorrect: false, correctTip: "", incorrectTip: "\"para la graduación\"表示\"为了毕业典礼\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Pretérito | Ellos | Ellos encontraron las llaves perdidas en el parque.
  {
    id: 17,
    chinese: "他们在公园里找到了丢失的钥匙。",
    spanish: "Ellos encontraron las llaves perdidas en el parque.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"=\"他们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "encontraron",
        options: [
          { text: "encontraron", isCorrect: true, correctTip: "\"encontraron\"是\"encontrar\"(找到)的\"他们\"过去时变位。", incorrectTip: "" },
          { text: "encontré", isCorrect: false, correctTip: "", incorrectTip: "\"encontré\"是\"我\"的过去时变位。" },
          { text: "encontraste", isCorrect: false, correctTip: "", incorrectTip: "\"encontraste\"是\"你\"的过去时变位。" }
        ]
      },
      {
        correctWord: "las llaves perdidas",
        options: [
          { text: "las llaves perdidas", isCorrect: true, correctTip: "\"las llaves perdidas\"表示\"丢失的钥匙\"。", incorrectTip: "" },
          { text: "los documentos importantes", isCorrect: false, correctTip: "", incorrectTip: "\"los documentos importantes\"表示\"重要的文件\"，与句意不符。" }
        ]
      },
      {
        correctWord: "en el parque",
        options: [
          { text: "en el parque", isCorrect: true, correctTip: "\"en el parque\"表示\"在公园里\"。", incorrectTip: "" },
          { text: "en la oficina", isCorrect: false, correctTip: "", incorrectTip: "\"en la oficina\"表示\"在办公室里\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  }
];
