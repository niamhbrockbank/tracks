import Lines from "../Lines/Lines";
import Statistics from "../Statistics/Statistics";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <>
      <div className={styles.navBar}></div>
      <Statistics />
      <Lines />
    </>
  );
}
