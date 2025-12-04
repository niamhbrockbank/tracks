import { useShallow } from "zustand/shallow";
import * as styles from "./Statistics.css";
import countStatusTotals from "./utils/countStatusTotals";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import orderMostToLeastVisited from "./utils/orderMostToLeastVisited";
import capitaliseFirstLetter from "../../lib/utils/capitaliseFirstLetter";

export default function Statistics() {
  const [stationStats, lineStats] = useUserVisitationStore(
    useShallow((s) => [s.stations, s.lines])
  );

  const statusTotals = countStatusTotals(stationStats);
  const [mostVisitedLine, secondMostVisitedLine, thirdMostVisitedLine] =
    orderMostToLeastVisited(lineStats);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsBox}>
        <StatisticsCard
          title="No. Visited Stations"
          content={statusTotals.visited}
          caption=" -3% from last month"
        />
        <StatisticsCard
          title="No. Changed At Stations"
          content={statusTotals.through}
          caption=" +3% from last month"
        />
        <StatisticsCard
          title="No. Untouched Stations"
          content={statusTotals.untouched}
          caption="-6% from last month"
        />
        <StatisticsCard
          title="Most Visited Line"
          content={capitaliseFirstLetter(mostVisitedLine.id)}
          caption={`2nd: ${capitaliseFirstLetter(
            secondMostVisitedLine.id
          )} and 3rd: ${capitaliseFirstLetter(thirdMostVisitedLine.id)}`}
        />
      </div>
    </section>
  );
}
