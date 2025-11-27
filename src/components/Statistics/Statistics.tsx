import { useShallow } from "zustand/shallow";
import * as styles from "./Statistics.css";
import countTotalStatus from "./utils/countTotalStatus";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import { useHomeStore } from "../../store/HomeStore";

export default function Statistics() {
  const [stationStat] = useUserVisitationStore(useShallow((s) => [s]));
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));

  const statusTotals = countTotalStatus(stationStat);

  return (
    <section className={styles.statsSection}>
      <h3>Statistics</h3>
      <div className={styles.statsBox}>
        <p className={styles.statsCard}>
          Stations Visited: {statusTotals.visited}
        </p>
        <p className={styles.statsCard}>
          Stations changed at: {statusTotals.through} Up 3% from last month
        </p>
        <p className={styles.statsCard}>
          Stations not touched: {statusTotals.untouched} Down 6% from last month
        </p>
        <p className={styles.statsCard}>Total stations: {stations.length}</p>
      </div>
    </section>
  );
}
