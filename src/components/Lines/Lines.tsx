import { LINES } from "../../lib/lines";
import * as styles from "./Lines.css";
import Line from "./Line/Line";

export default function Lines() {
  return (
    <ul className={styles.lineSection}>
      {LINES.map((line) => (
        <Line line={line} key={line.id} />
      ))}
    </ul>
  );
}
