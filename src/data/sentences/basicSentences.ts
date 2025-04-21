import { Sentence } from "@/types/game";

// 基础句子 (1-5)
export const basicSentences: Sentence[] = [
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
            correctTip: "\"Me\" 是\"我\"的意思，用于表达自我感受。",
            incorrectTip: "",
          },
          {
            text: "Te",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Te\" 是\"你\"的意思，这里需要用\"Me\"来表示\"我喜欢\"。",
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
            incorrectTip: "\"gusto\"意思是\"我喜欢\"，但搭配\"Me\"后正确表达应为\"gusta\"。",
          },
          {
            text: "gusta",
            isCorrect: true,
            correctTip: "\"gusta\"表示喜欢的意思，这里主语是\"Me\"。",
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
            correctTip: "\"estudiar\"意思是\"学习\"，符合句意。",
            incorrectTip: "",
          },
          {
            text: "aprender",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"aprender\"更偏向于\"掌握/学会\"，此处应选\"estudiar\"表示\"学习\"。",
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
            incorrectTip: "\"inglés\"是\"英语\"，此句谈的是\"西班牙语\"。",
          },
          {
            text: "español",
            isCorrect: true,
            correctTip: "\"español\"就是\"西班牙语\"。",
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
            incorrectTip: "\"Ayer\"是\"昨天\"，而\"Hoy\"才是\"今天\"。",
          },
          {
            text: "Hoy",
            isCorrect: true,
            correctTip: "\"Hoy\"表示\"今天\"，与句子内容匹配。",
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
            correctTip: "\"hace\"与\"天气\"连用表示\"天气如何\"。",
            incorrectTip: "",
          },
          {
            text: "tiene",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "表达天气时西语常用\"hace\"，不用\"tiene\"。",
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
            incorrectTip: "\"mal\"意思是\"不好\"，此句要表达\"很好\"应选\"buen\"。",
          },
          {
            text: "buen",
            isCorrect: true,
            correctTip: "\"buen\"表示好的天气。",
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
            correctTip: "\"tiempo\"此处表示\"天气\"。",
            incorrectTip: "",
          },
          {
            text: "clima",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "虽然\"clima\"也有\"气候\"之意，但这里更常用\"tiempo\"描述天气。",
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
            correctTip: "\"Tengo\"是\"我有\"。",
            incorrectTip: "",
          },
          {
            text: "Tiene",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Tiene\"是\"他/她有\"，应该用\"Tengo\"代表\"我有\"。",
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
            incorrectTip: "\"tres\"是\"三\"，正确是\"dos\"--两只猫。",
          },
          {
            text: "dos",
            isCorrect: true,
            correctTip: "\"dos\"表示\"两\"。",
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
            incorrectTip: "\"perros\"是\"狗\"，题目为猫应选\"gatos\"。",
          },
          {
            text: "gatos",
            isCorrect: true,
            correctTip: "\"gatos\"是\"猫\"。",
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
            correctTip: "\"bonitos\"意思是\"可爱的，漂亮的\"。",
            incorrectTip: "",
          },
          {
            text: "grandes",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"grandes\"是\"大\"，不是\"可爱\"。",
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
            correctTip: "\"Dame\"表示\"给我\"。",
            incorrectTip: "",
          },
          {
            text: "Dime",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Dime\"是\"告诉我\"，表达\"给我\"要用\"Dame\"。",
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
            incorrectTip: "\"una\"是阴性，这里\"vaso\"玻璃杯是阳性应用\"un\"。",
          },
          {
            text: "un",
            isCorrect: true,
            correctTip: "\"un vaso\"是\"一杯\"中的阳性\"un\"。",
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
            correctTip: "\"vaso\"是\"杯子\"。",
            incorrectTip: "",
          },
          {
            text: "taza",
            isCorrect: false,
            correctTip: "",
            incorrectTip: ""taza\"一般是\"茶杯\"，这里表达\"一杯水\"要用\"vaso\"。",
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
            incorrectTip: ""con\"是\"和、带\"，一杯水用\"vaso de agua\"。",
          },
          {
            text: "de",
            isCorrect: true,
            correctTip: "\"de\"表达\"……的\"，此处为\"水的杯子\"。",
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
            correctTip: "\"agua\"即\"水\"。",
            incorrectTip: "",
          },
          {
            text: "vino",
            isCorrect: false,
            correctTip: "",
            incorrectTip: ""vino\"是\"葡萄酒\"，题目为水应选\"agua\"。",
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
            incorrectTip: ""gracias\"是\"谢谢\"，表达\"请\"要用\"por favor\"。",
          },
          {
            text: "por favor",
            isCorrect: true,
            correctTip: ""por favor\"是\"请\"。",
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
            incorrectTip: "\"Hoy\"是\"今天\"，\"Mañana\"才是\"明天\"。",
          },
          {
            text: "Mañana",
            isCorrect: true,
            correctTip: "\"Mañana\"意思是\"明天\"。",
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
            correctTip: "\"voy\"表示\"我要去\"。",
            incorrectTip: "",
          },
          {
            text: "vas",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"vas\"表示\"你去\"，需要用\"voy\"来表示\"我去\"。",
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
            incorrectTip: "\"en\"是\"在\"/\"乘\"，这里要用\"a\"表达去往某地。",
          },
          {
            text: "a",
            isCorrect: true,
            correctTip: "\"a\"表示方向\"去……\"。",
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
            correctTip: "\"Madrid\"是\"马德里\"。",
            incorrectTip: "",
          },
          {
            text: "Barcelona",
            isCorrect: false,
            correctTip: "",
            incorrectTip: "\"Barcelona\"是\"巴塞罗那\"，本句是去\"Madrid\"。",
          },
        ],
      },
    ],
    completed: false,
  }
];
