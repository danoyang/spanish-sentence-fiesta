
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
          { text: "Me", isCorrect: true },
          { text: "Te", isCorrect: false }
        ]
      },
      {
        correctWord: "gusta",
        options: [
          { text: "gusto", isCorrect: false },
          { text: "gusta", isCorrect: true }
        ]
      },
      {
        correctWord: "estudiar",
        options: [
          { text: "estudiar", isCorrect: true },
          { text: "aprender", isCorrect: false }
        ]
      },
      {
        correctWord: "español",
        options: [
          { text: "inglés", isCorrect: false },
          { text: "español", isCorrect: true }
        ]
      }
    ],
    completed: false
  },
  {
    id: 2,
    chinese: "今天天气很好。",
    spanish: "Hoy hace buen tiempo.",
    wordChoices: [
      {
        correctWord: "Hoy",
        options: [
          { text: "Ayer", isCorrect: false },
          { text: "Hoy", isCorrect: true }
        ]
      },
      {
        correctWord: "hace",
        options: [
          { text: "hace", isCorrect: true },
          { text: "tiene", isCorrect: false }
        ]
      },
      {
        correctWord: "buen",
        options: [
          { text: "mal", isCorrect: false },
          { text: "buen", isCorrect: true }
        ]
      },
      {
        correctWord: "tiempo",
        options: [
          { text: "tiempo", isCorrect: true },
          { text: "clima", isCorrect: false }
        ]
      }
    ],
    completed: false
  },
  {
    id: 3,
    chinese: "我有两只可爱的猫。",
    spanish: "Tengo dos gatos bonitos.",
    wordChoices: [
      {
        correctWord: "Tengo",
        options: [
          { text: "Tengo", isCorrect: true },
          { text: "Tiene", isCorrect: false }
        ]
      },
      {
        correctWord: "dos",
        options: [
          { text: "tres", isCorrect: false },
          { text: "dos", isCorrect: true }
        ]
      },
      {
        correctWord: "gatos",
        options: [
          { text: "perros", isCorrect: false },
          { text: "gatos", isCorrect: true }
        ]
      },
      {
        correctWord: "bonitos",
        options: [
          { text: "bonitos", isCorrect: true },
          { text: "grandes", isCorrect: false }
        ]
      }
    ],
    completed: false
  },
  {
    id: 4,
    chinese: "请给我一杯水。",
    spanish: "Dame un vaso de agua, por favor.",
    wordChoices: [
      {
        correctWord: "Dame",
        options: [
          { text: "Dame", isCorrect: true },
          { text: "Dime", isCorrect: false }
        ]
      },
      {
        correctWord: "un",
        options: [
          { text: "una", isCorrect: false },
          { text: "un", isCorrect: true }
        ]
      },
      {
        correctWord: "vaso",
        options: [
          { text: "vaso", isCorrect: true },
          { text: "taza", isCorrect: false }
        ]
      },
      {
        correctWord: "de",
        options: [
          { text: "con", isCorrect: false },
          { text: "de", isCorrect: true }
        ]
      },
      {
        correctWord: "agua",
        options: [
          { text: "agua", isCorrect: true },
          { text: "vino", isCorrect: false }
        ]
      },
      {
        correctWord: "por favor",
        options: [
          { text: "gracias", isCorrect: false },
          { text: "por favor", isCorrect: true }
        ]
      }
    ],
    completed: false
  },
  {
    id: 5,
    chinese: "我明天要去马德里。",
    spanish: "Mañana voy a Madrid.",
    wordChoices: [
      {
        correctWord: "Mañana",
        options: [
          { text: "Hoy", isCorrect: false },
          { text: "Mañana", isCorrect: true }
        ]
      },
      {
        correctWord: "voy",
        options: [
          { text: "voy", isCorrect: true },
          { text: "vas", isCorrect: false }
        ]
      },
      {
        correctWord: "a",
        options: [
          { text: "en", isCorrect: false },
          { text: "a", isCorrect: true }
        ]
      },
      {
        correctWord: "Madrid",
        options: [
          { text: "Madrid", isCorrect: true },
          { text: "Barcelona", isCorrect: false }
        ]
      }
    ],
    completed: false
  }
];
