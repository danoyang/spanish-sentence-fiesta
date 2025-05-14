
import { Sentence } from "@/types/game";

// 一般现在时动词变位句子 (6-11)
export const presenteTenseSentences: Sentence[] = [
  // Presente | Yo | Yo hablo español todos los días.
  {
    id: 6,
    chinese: "我每天都说西班牙语。",
    spanish: "Yo hablo español todos los días.",
    wordChoices: [
      { 
        correctWord: "Yo",
        options: [
          { 
            text: "Yo", 
            isCorrect: true, 
            correctTip: "\"Yo\"表示\"我\"，此句主语。", 
            incorrectTip: "" 
          }
        ]
      },
      { 
        correctWord: "hablo",
        options: [
          { 
            text: "hablo", 
            isCorrect: true, 
            correctTip: "\"hablo\"是动词\"hablar\"（说）的第一人称现在时变位。", 
            incorrectTip: "" 
          },
          { 
            text: "habla", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"habla\"是第三人称或您式，不是\"我\"对应变位。" 
          },
          { 
            text: "hablas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"hablas\"是\"你\"的变位，不是\"我\"用法。" 
          }
        ]
      },
      {
        correctWord: "español todos los días",
        options: [
          { 
            text: "español todos los días", 
            isCorrect: true, 
            correctTip: "西班牙语，每天。", 
            incorrectTip: "" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Tú | Tú siempre llegas tarde a clase.
  {
    id: 7,
    chinese: "你总是迟到上课。",
    spanish: "Tú siempre llegas tarde a clase.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "siempre llegas",
        options: [
          { text: "siempre llegas", isCorrect: true, correctTip: "\"siempre llegas\"表示\"总是到达\"。", incorrectTip: "" },
          { text: "nunca llegas", isCorrect: false, correctTip: "", incorrectTip: "\"nunca llegas\"表示\"从不到达\"，与句意不符。" }
        ]
      },
      {
        correctWord: "tarde a clase",
        options: [
          { text: "tarde a clase", isCorrect: true, correctTip: "\"tarde a clase\"表示\"迟到上课\"。", incorrectTip: "" },
          { text: "temprano a casa", isCorrect: false, correctTip: "", incorrectTip: "\"temprano a casa\"表示\"早到家\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Él | Él vive en una casa pequeña cerca del parque.
  {
    id: 8,
    chinese: "他住在公园附近的一所小房子里。",
    spanish: "Él vive en una casa pequeña cerca del parque.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "vive",
        options: [
          { text: "vive", isCorrect: true, correctTip: "\"vive\"是\"vivir\"(生活，居住)的第三人称现在时", incorrectTip: "" },
          { text: "vivo", isCorrect: false, correctTip: "", incorrectTip: "\"vivo\"是\"我\"的变位。" },
          { text: "vives", isCorrect: false, correctTip: "", incorrectTip: "\"vives\"是\"你\"的变位。" }
        ]
      },
      {
        correctWord: "en una casa pequeña",
        options: [
          { text: "en una casa pequeña", isCorrect: true, correctTip: "\"在一所小房子里\"。", incorrectTip: "" },
          { text: "en un apartamento grande", isCorrect: false, correctTip: "", incorrectTip: "\"在一个大公寓里\"，与句意不符。" }
        ]
      },
      {
        correctWord: "cerca del parque",
        options: [
          { text: "cerca del parque", isCorrect: true, correctTip: "\"靠近公园\"。", incorrectTip: "" },
          { text: "lejos de la ciudad", isCorrect: false, correctTip: "", incorrectTip: "\"远离城市\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Nosotros | Nosotros comemos en este restaurante todos los domingos.
  {
    id: 9,
    chinese: "我们每个星期天都在这家餐厅吃饭。",
    spanish: "Nosotros comemos en este restaurante todos los domingos.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "comemos",
        options: [
          { text: "comemos", isCorrect: true, correctTip: "\"comemos\"是\"comer\"(吃)的第一人称复数现在时变位。", incorrectTip: "" },
          { text: "come", isCorrect: false, correctTip: "", incorrectTip: "\"come\"指第三人称单数，不是\"我们\"的用法。" },
          { text: "coméis", isCorrect: false, correctTip: "", incorrectTip: "\"coméis\"是\"你们\"的用法。" }
        ]
      },
      {
        correctWord: "en este restaurante",
        options: [
          { text: "en este restaurante", isCorrect: true, correctTip: "\"在这家餐厅\"。", incorrectTip: "" },
          { text: "en esa cafetería", isCorrect: false, correctTip: "", incorrectTip: "\"在那家咖啡馆\"，与句意不符。" }
        ]
      },
      {
        correctWord: "todos los domingos",
        options: [
          { text: "todos los domingos", isCorrect: true, correctTip: "\"每个星期天\"。", incorrectTip: "" },
          { text: "una vez al mes", isCorrect: false, correctTip: "", incorrectTip: "\"每月一次\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Vosotros | Vosotros cantáis muy bien en el coro de la escuela.
  {
    id: 10,
    chinese: "你们在学校合唱团唱得很好。",
    spanish: "Vosotros cantáis muy bien en el coro de la escuela.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"代表\"你们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "cantáis",
        options: [
          { text: "cantáis", isCorrect: true, correctTip: "\"cantáis\"是\"cantar\"(唱歌)的vosotros现在时变位。", incorrectTip: "" },
          { text: "cantas", isCorrect: false, correctTip: "", incorrectTip: "\"cantas\"是\"你\"的用法。" },
          { text: "cantamos", isCorrect: false, correctTip: "", incorrectTip: "\"cantamos\"是\"我们\"的用法。" }
        ]
      },
      {
        correctWord: "muy bien",
        options: [
          { text: "muy bien", isCorrect: true, correctTip: "\"很好\"。", incorrectTip: "" },
          { text: "bastante mal", isCorrect: false, correctTip: "", incorrectTip: "\"相当糟糕\"，与句意不符。" }
        ]
      },
      {
        correctWord: "en el coro de la escuela",
        options: [
          { text: "en el coro de la escuela", isCorrect: true, correctTip: "\"在学校合唱团\"。", incorrectTip: "" },
          { text: "en la fiesta de cumpleaños", isCorrect: false, correctTip: "", incorrectTip: "\"在生日派对上\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Presente | Ellos | Ellos juegan al fútbol todos los sábados en el parque.
  {
    id: 11,
    chinese: "他们每个星期六都在公园踢足球。",
    spanish: "Ellos juegan al fútbol todos los sábados en el parque.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "juegan",
        options: [
          { text: "juegan", isCorrect: true, correctTip: "\"juegan\"是\"jugar\"(玩，踢)的第三人称复数现在时变位。", incorrectTip: "" },
          { text: "juego", isCorrect: false, correctTip: "", incorrectTip: "\"juego\"是\"我\"的现在时变位。" },
          { text: "juega", isCorrect: false, correctTip: "", incorrectTip: "\"juega\"是\"他/她\"的变位，不是复数形式。" }
        ]
      },
      {
        correctWord: "al fútbol",
        options: [
          { text: "al fútbol", isCorrect: true, correctTip: "\"al fútbol\"表示\"踢足球\"，是\"a + el fútbol\"的缩写。", incorrectTip: "" },
          { text: "el baloncesto", isCorrect: false, correctTip: "", incorrectTip: "\"el baloncesto\"是\"篮球\"，不是\"足球\"。" }
        ]
      },
      {
        correctWord: "todos los sábados",
        options: [
          { text: "todos los sábados", isCorrect: true, correctTip: "\"todos los sábados\"表示\"每个星期六\"。", incorrectTip: "" },
          { text: "cada domingo", isCorrect: false, correctTip: "", incorrectTip: "\"cada domingo\"表示\"每个星期天\"，与句意不符。" }
        ]
      },
      {
        correctWord: "en el parque",
        options: [
          { text: "en el parque", isCorrect: true, correctTip: "\"en el parque\"表示\"在公园里\"。", incorrectTip: "" },
          { text: "en la playa", isCorrect: false, correctTip: "", incorrectTip: "\"en la playa\"表示\"在海滩上\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  }
];
