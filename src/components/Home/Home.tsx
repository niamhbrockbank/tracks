import { LINES } from "../../lib/lines";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Tick the Tube</h1>
      <ul>
        {LINES.map((line) => (
          <li key={line.id}>{line.name}</li>
        ))}
      </ul>
    </>
  );
}
