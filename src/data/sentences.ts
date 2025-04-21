import { Sentence } from "@/types/game";
import { basicSentences } from "./sentences/basicSentences";
import { presenteTenseSentences } from "./sentences/presenteTenseSentences";
import { preteritoTenseSentences } from "./sentences/preteritoTenseSentences";
import { imperfectoTenseSentences } from "./sentences/imperfectoTenseSentences";
import { futuroCondicionalSentences } from "./sentences/futuroCondicionalSentences";
import { presentePerfectoSentences } from "./sentences/presentePerfectoSentences";
import { pluscuamperfectoSentences } from "./sentences/pluscuamperfectoSentences";

// 将所有句子数据合并到一个数组中
export const sentencesData: Sentence[] = [
  ...basicSentences,
  ...presenteTenseSentences,
  ...preteritoTenseSentences,
  ...imperfectoTenseSentences,
  ...futuroCondicionalSentences,
  ...presentePerfectoSentences,
  ...pluscuamperfectoSentences
];
