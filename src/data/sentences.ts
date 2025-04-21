
import { Sentence } from "@/types/game";
import { basicSentences } from "./sentences/basicSentences";
import { presenteTenseSentences } from "./sentences/presenteTenseSentences";
import { preteritoTenseSentences } from "./sentences/preteritoTenseSentences";
import { imperfectoTenseSentences } from "./sentences/imperfectoTenseSentences";
import { futuroCondicionalSentences } from "./sentences/futuroCondicionalSentences";
import { presentePerfectoSentences } from "./sentences/presentePerfectoSentences";
import { pluscuamperfectoSentences } from "./sentences/pluscuamperfectoSentences";
import { subjuntivoPresenteSentences } from "./sentences/subjuntivoPresenteSentences";
import { subjuntivoPasadoSentences } from "./sentences/subjuntivoPasadoSentences";
import { imperativoSentences } from "./sentences/imperativoSentences";
import { erVerbsPresenteSentences } from "./sentences/erVerbsPresenteSentences";
import { erVerbsPreteriteSentences } from "./sentences/erVerbsPreteriteSentences";
import { irVerbsPresenteSentences } from "./sentences/irVerbsPresenteSentences";
import { irVerbsPreteriteSentences } from "./sentences/irVerbsPreteriteSentences";
import { irVerbsImperfectoSentences } from "./sentences/irVerbsImperfectoSentences";
import { irVerbsFuturoSentences } from "./sentences/irVerbsFuturoSentences";
import { erVerbsPresentePerfectoSentences } from "./sentences/erVerbsPresentePerfectoSentences";
import { irVerbsPresentePerfectoSentences } from "./sentences/irVerbsPresentePerfectoSentences";
import { erVerbsPluscuamperfectoSentences } from "./sentences/erVerbsPluscuamperfectoSentences";
import { irVerbsPluscuamperfectoSentences } from "./sentences/irVerbsPluscuamperfectoSentences";

// 将所有句子数据合并到一个数组中
export const sentencesData: Sentence[] = [
  ...basicSentences,
  ...presenteTenseSentences,
  ...preteritoTenseSentences,
  ...imperfectoTenseSentences,
  ...futuroCondicionalSentences,
  ...presentePerfectoSentences,
  ...pluscuamperfectoSentences,
  ...subjuntivoPresenteSentences,
  ...subjuntivoPasadoSentences,
  ...imperativoSentences,
  ...erVerbsPresenteSentences,
  ...erVerbsPreteriteSentences,
  ...irVerbsPresenteSentences,
  ...irVerbsPreteriteSentences,
  ...irVerbsImperfectoSentences,
  ...irVerbsFuturoSentences,
  ...erVerbsPresentePerfectoSentences,
  ...irVerbsPresentePerfectoSentences,
  ...erVerbsPluscuamperfectoSentences,
  ...irVerbsPluscuamperfectoSentences
];
