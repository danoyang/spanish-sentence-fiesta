
import { Sentence } from "@/types/game";

// 一般现在时动词变位句子 (6-11)
export const presenteTenseSentences: Sentence[] = [
  // Presente | Yo | Yo hablo muy bien hoy.
  {
    id: 6,
    chinese: "我今天说得非常好。",
    spanish: "Yo hablo muy bien hoy.",
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
        correctWord: "muy bien hoy",
        options: [
          { 
            text: "muy bien hoy", 
            isCorrect: true, 
            correctTip: "今天，非常好。", 
            incorrectTip: "" 
          }
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
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"表示\"你\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "trabajas",
        options: [
          { text: "trabajas", isCorrect: true, correctTip: "\"trabajas\"是动词\"trabajar\"的第二人称现在时变位。", incorrectTip: "" },
          { text: "trabajamos", isCorrect: false, correctTip: "", incorrectTip: "\"trabajamos\"是\"我们\"的变位。" },
          { text: "trabaja", isCorrect: false, correctTip: "", incorrectTip: "\"trabaja\"是\"他/她/您\"的变位。" }
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
          { text: "Él", isCorrect: true, correctTip: "\"Él\"表示\"他\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "estudia",
        options: [
          { text: "estudia", isCorrect: true, correctTip: "\"estudia\"是\"estudiar\"第三人称现在时", incorrectTip: "" },
          { text: "estudio", isCorrect: false, correctTip: "", incorrectTip: "\"estudio\"是\"我\"的变位。" },
          { text: "estudias", isCorrect: false, correctTip: "", incorrectTip: "\"estudias\"是\"你\"的变位。" }
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
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"表示\"我们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "caminamos",
        options: [
          { text: "caminamos", isCorrect: true, correctTip: "\"caminamos\"是\"caminar\"的第一人称复数现在时变位。", incorrectTip: "" },
          { text: "camina", isCorrect: false, correctTip: "", incorrectTip: "\"camina\"指第三人称单数，不是\"我们\"的用法。" },
          { text: "camináis", isCorrect: false, correctTip: "", incorrectTip: "\"camináis\"是\"你们\"的用法。" }
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
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"代表\"你们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "miráis",
        options: [
          { text: "miráis", isCorrect: true, correctTip: "\"miráis\"是\"vosotros\"现在时变位。", incorrectTip: "" },
          { text: "miras", isCorrect: false, correctTip: "", incorrectTip: "\"miras\"是\"你\"的用法。" },
          { text: "miramos", isCorrect: false, correctTip: "", incorrectTip: "\"miramos\"是\"我们\"的用法。" }
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
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"表示\"他们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "escuchan",
        options: [
          { text: "escuchan", isCorrect: true, correctTip: "\"escuchan\"是\"ellos\"现在时。", incorrectTip: "" },
          { text: "escucho", isCorrect: false, correctTip: "", incorrectTip: "\"escucho\"是\"我\"的过去时变位。" },
          { text: "escucháis", isCorrect: false, correctTip: "", incorrectTip: "\"escucháis\"是\"你们\"的变位。" }
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
  }
];
