import { LINES } from "../../lib/lines";
import Line from "../Line/Line";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Tick the Tube</h1>
      <ul>
        {LINES.map((line) => (
          <Line line={line} key={line.id} />
        ))}
      </ul>
    </>
  );
}
