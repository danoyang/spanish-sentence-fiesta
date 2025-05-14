
import { Sentence } from "@/types/game";

// 未完成过去时动词变位句子 (18-23)
export const imperfectoTenseSentences: Sentence[] = [
  // Imperfecto | Yo | Yo jugaba al fútbol todos los días cuando era niño.
  {
    id: 18,
    chinese: "我小时候每天都踢足球。",
    spanish: "Yo jugaba al fútbol todos los días cuando era niño.",
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
        correctWord: "jugaba",
        options: [
          { 
            text: "jugaba", 
            isCorrect: true, 
            correctTip: "\"jugaba\"是动词\"jugar\"(玩，踢)的第一人称未完成过去时变位。", 
            incorrectTip: "" 
          },
          { 
            text: "jugabas", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"jugabas\"是\"你\"的未完成过去时变位。" 
          },
          { 
            text: "jugué", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"jugué\"是\"我\"的简单过去时变位。" 
          }
        ]
      },
      {
        correctWord: "al fútbol",
        options: [
          { 
            text: "al fútbol", 
            isCorrect: true, 
            correctTip: "\"al fútbol\"表示\"踢足球\"，是\"a + el fútbol\"的缩写。", 
            incorrectTip: "" 
          },
          { 
            text: "al tenis", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"al tenis\"表示\"打网球\"，与句意不符。" 
          }
        ]
      },
      {
        correctWord: "todos los días cuando era niño",
        options: [
          { 
            text: "todos los días cuando era niño", 
            isCorrect: true, 
            correctTip: "\"todos los días cuando era niño\"表示\"小时候每天\"。", 
            incorrectTip: "" 
          },
          { 
            text: "solo los fines de semana", 
            isCorrect: false, 
            correctTip: "", 
            incorrectTip: "\"solo los fines de semana\"表示\"只在周末\"，与句意不符。" 
          }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Tú | Tú leías muchos libros de aventuras cuando eras estudiante.
  {
    id: 19,
    chinese: "你当学生的时候读了很多冒险小说。",
    spanish: "Tú leías muchos libros de aventuras cuando eras estudiante.",
    wordChoices: [
      { 
        correctWord: "Tú",
        options: [
          { text: "Tú", isCorrect: true, correctTip: "\"Tú\"=\"你\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "leías",
        options: [
          { text: "leías", isCorrect: true, correctTip: "\"leías\"是动词\"leer\"(读)的第二人称未完成过去时变位。", incorrectTip: "" },
          { text: "leía", isCorrect: false, correctTip: "", incorrectTip: "\"leía\"是第一或第三人称单数的未完成过去时变位。" },
          { text: "leíste", isCorrect: false, correctTip: "", incorrectTip: "\"leíste\"是\"你\"的简单过去时变位。" }
        ]
      },
      {
        correctWord: "muchos libros de aventuras",
        options: [
          { text: "muchos libros de aventuras", isCorrect: true, correctTip: "\"muchos libros de aventuras\"表示\"很多冒险小说\"。", incorrectTip: "" },
          { text: "pocas revistas de moda", isCorrect: false, correctTip: "", incorrectTip: "\"pocas revistas de moda\"表示\"几本时尚杂志\"，与句意不符。" }
        ]
      },
      {
        correctWord: "cuando eras estudiante",
        options: [
          { text: "cuando eras estudiante", isCorrect: true, correctTip: "\"cuando eras estudiante\"表示\"当你是学生的时候\"。", incorrectTip: "" },
          { text: "durante las vacaciones", isCorrect: false, correctTip: "", incorrectTip: "\"durante las vacaciones\"表示\"在假期期间\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Él | Él siempre llevaba una cámara cuando viajaba por Europa.
  {
    id: 20,
    chinese: "他在欧洲旅行时总是随身带着一台相机。",
    spanish: "Él siempre llevaba una cámara cuando viajaba por Europa.",
    wordChoices: [
      { 
        correctWord: "Él",
        options: [
          { text: "Él", isCorrect: true, correctTip: "\"Él\"=\"他\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "siempre llevaba",
        options: [
          { text: "siempre llevaba", isCorrect: true, correctTip: "\"siempre llevaba\"表示\"总是带着\"，是\"llevar\"(带)的未完成过去时第三人称单数变位。", incorrectTip: "" },
          { text: "nunca llevaba", isCorrect: false, correctTip: "", incorrectTip: "\"nunca llevaba\"表示\"从不带\"，与句意不符。" },
          { text: "siempre llevó", isCorrect: false, correctTip: "", incorrectTip: "\"siempre llevó\"是简单过去时，而不是未完成过去时。" }
        ]
      },
      {
        correctWord: "una cámara",
        options: [
          { text: "una cámara", isCorrect: true, correctTip: "\"una cámara\"表示\"一台相机\"。", incorrectTip: "" },
          { text: "un teléfono", isCorrect: false, correctTip: "", incorrectTip: "\"un teléfono\"表示\"一部电话\"，与句意不符。" }
        ]
      },
      {
        correctWord: "cuando viajaba por Europa",
        options: [
          { text: "cuando viajaba por Europa", isCorrect: true, correctTip: "\"cuando viajaba por Europa\"表示\"当他在欧洲旅行时\"。", incorrectTip: "" },
          { text: "cuando estaba en casa", isCorrect: false, correctTip: "", incorrectTip: "\"cuando estaba en casa\"表示\"当他在家时\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Nosotros | Nosotros vivíamos en un pequeño pueblo cuando éramos niños.
  {
    id: 21,
    chinese: "我们小时候住在一个小村子里。",
    spanish: "Nosotros vivíamos en un pequeño pueblo cuando éramos niños.",
    wordChoices: [
      { 
        correctWord: "Nosotros",
        options: [
          { text: "Nosotros", isCorrect: true, correctTip: "\"Nosotros\"=\"我们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "vivíamos",
        options: [
          { text: "vivíamos", isCorrect: true, correctTip: "\"vivíamos\"是\"vivir\"(生活，居住)的第一人称复数未完成过去时变位。", incorrectTip: "" },
          { text: "vivían", isCorrect: false, correctTip: "", incorrectTip: "\"vivían\"是\"他们\"的未完成过去时变位，不是\"我们\"的形式。" },
          { text: "vivimos", isCorrect: false, correctTip: "", incorrectTip: "\"vivimos\"可以是现在时或简单过去时，但这里需要未完成过去时\"vivíamos\"来表达持续的状态。" }
        ]
      },
      {
        correctWord: "en un pequeño pueblo",
        options: [
          { text: "en un pequeño pueblo", isCorrect: true, correctTip: "\"en un pequeño pueblo\"表示\"在一个小村子里\"。", incorrectTip: "" },
          { text: "en una gran ciudad", isCorrect: false, correctTip: "", incorrectTip: "\"en una gran ciudad\"表示\"在一个大城市里\"，与句意不符。" }
        ]
      },
      {
        correctWord: "cuando éramos niños",
        options: [
          { text: "cuando éramos niños", isCorrect: true, correctTip: "\"cuando éramos niños\"表示\"当我们是小孩子的时候\"。注意\"éramos\"是\"ser\"的我们形式的未完成过去时。", incorrectTip: "" },
          { text: "cuando fuimos adultos", isCorrect: false, correctTip: "", incorrectTip: "\"cuando fuimos adultos\"表示\"当我们成为成年人时\"，与句意不符。并且\"fuimos\"是简单过去时，不是未完成过去时。" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Vosotros | Vosotros estudiábais medicina en la universidad de Madrid.
  {
    id: 22,
    chinese: "你们在马德里大学学医学。",
    spanish: "Vosotros estudiábais medicina en la universidad de Madrid.",
    wordChoices: [
      { 
        correctWord: "Vosotros",
        options: [
          { text: "Vosotros", isCorrect: true, correctTip: "\"Vosotros\"=\"你们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "estudiábais",
        options: [
          { text: "estudiábais", isCorrect: true, correctTip: "\"estudiábais\"是\"estudiar\"(学习)的第二人称复数(vosotros)未完成过去时变位。", incorrectTip: "" },
          { text: "estudiaban", isCorrect: false, correctTip: "", incorrectTip: "\"estudiaban\"是\"他们\"的未完成过去时变位，而不是\"你们\"的形式。" },
          { text: "estudiasteis", isCorrect: false, correctTip: "", incorrectTip: "\"estudiasteis\"是\"你们\"的简单过去时变位，而不是未完成过去时。简单过去时表示已完成的动作，而未完成过去时表示过去持续进行的动作。" }
        ]
      },
      {
        correctWord: "medicina",
        options: [
          { text: "medicina", isCorrect: true, correctTip: "\"medicina\"表示\"医学\"。", incorrectTip: "" },
          { text: "ingeniería", isCorrect: false, correctTip: "", incorrectTip: "\"ingeniería\"表示\"工程学\"，与句意不符。" }
        ]
      },
      {
        correctWord: "en la universidad de Madrid",
        options: [
          { text: "en la universidad de Madrid", isCorrect: true, correctTip: "\"en la universidad de Madrid\"表示\"在马德里大学\"。", incorrectTip: "" },
          { text: "en el hospital central", isCorrect: false, correctTip: "", incorrectTip: "\"en el hospital central\"表示\"在中心医院\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  },
  // Imperfecto | Ellos | Ellos trabajaban en una fábrica que producía coches.
  {
    id: 23,
    chinese: "他们在一家生产汽车的工厂工作。",
    spanish: "Ellos trabajaban en una fábrica que producía coches.",
    wordChoices: [
      { 
        correctWord: "Ellos",
        options: [
          { text: "Ellos", isCorrect: true, correctTip: "\"Ellos\"=\"他们\"。", incorrectTip: "" }
        ]
      },
      { 
        correctWord: "trabajaban",
        options: [
          { text: "trabajaban", isCorrect: true, correctTip: "\"trabajaban\"是\"trabajar\"(工作)的第三人称复数未完成过去时变位。", incorrectTip: "" },
          { text: "trabajaron", isCorrect: false, correctTip: "", incorrectTip: "\"trabajaron\"是简单过去时，表示已完成的动作。这里需要未完成过去时\"trabajaban\"来表达过去持续的状态。" },
          { text: "trabajan", isCorrect: false, correctTip: "", incorrectTip: "\"trabajan\"是现在时，而不是过去时。这里需要未完成过去时\"trabajaban\"。" }
        ]
      },
      {
        correctWord: "en una fábrica",
        options: [
          { text: "en una fábrica", isCorrect: true, correctTip: "\"en una fábrica\"表示\"在一家工厂\"。", incorrectTip: "" },
          { text: "en un restaurante", isCorrect: false, correctTip: "", incorrectTip: "\"en un restaurante\"表示\"在一家餐厅\"，与句意不符。" }
        ]
      },
      {
        correctWord: "que producía coches",
        options: [
          { text: "que producía coches", isCorrect: true, correctTip: "\"que producía coches\"表示\"生产汽车的\"。注意\"producía\"也是未完成过去时，因为它描述工厂的持续性活动。", incorrectTip: "" },
          { text: "que vendía ropa", isCorrect: false, correctTip: "", incorrectTip: "\"que vendía ropa\"表示\"销售服装的\"，与句意不符。" }
        ]
      }
    ],
    completed: false,
  }
];
