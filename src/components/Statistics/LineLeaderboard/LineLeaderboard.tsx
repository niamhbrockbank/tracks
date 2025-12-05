import capitaliseFirstLetter from "../../../lib/utils/capitaliseFirstLetter";
import type { LineStatusCount } from "../../../store/UserVisitationStore";
import * as styles from "./LineLeaderboard.css";
import { rankLine, type LineRanking } from "./utils/rankLine";

interface Props {
  lineArray: LineStatusCount[];
}

export default function LineLeaderboard({ lineArray }: Props) {
  const lineRanking: LineRanking[] = [{ ...lineArray[0], ranking: 1 }];
  for (let i = 1; i < lineArray.length; i++) {
    const nextRanking = rankLine(lineArray[i], lineRanking[i - 1], i);
    lineRanking.push(nextRanking);
  }

  return (
    <ol className={styles.lineLeaderboard}>
      {lineRanking.map((line) => (
        <li value={line.ranking} key={line.id}>
          {capitaliseFirstLetter(line.id.replace("-", " "))} (
          {line.status.visited})
        </li>
      ))}
    </ol>
  );
}
