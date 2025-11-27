import Lines from "../Lines/Lines";
import Statistics from "../Statistics/Statistics";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Tick the Tube</h1>
      <Statistics />
      <Lines />
    </>
  );
}
