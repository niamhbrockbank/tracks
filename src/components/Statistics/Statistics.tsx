import { useShallow } from "zustand/shallow";
import * as styles from "./Statistics.css";
import countStatusTotals from "./utils/countStatusTotals";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import orderMostToLeastVisited from "./utils/orderMostToLeastVisited";
import capitaliseFirstLetter from "../../lib/utils/capitaliseFirstLetter";
import LineLeaderboard from "./LineLeaderboard/LineLeaderboard";

export default function Statistics() {
  const [stationStats, lineStats] = useUserVisitationStore(
    useShallow((s) => [s.stations, s.lines])
  );

  const statusTotals = countStatusTotals(stationStats);
  const fullVisitedArray = orderMostToLeastVisited(lineStats);
  const [mostVisitedLine, secondMostVisitedLine, thirdMostVisitedLine] =
    fullVisitedArray;

  const fullVisitedLeaderboard = (
    <LineLeaderboard lineArray={fullVisitedArray} />
  );

  const mostVisitedLineCardCaption = `2nd: ${capitaliseFirstLetter(
    secondMostVisitedLine.id
  )} and 3rd: ${capitaliseFirstLetter(thirdMostVisitedLine.id)}`;

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
          caption={mostVisitedLineCardCaption}
        />
        <StatisticsCard
          title="Visited Leaderboard"
          content={fullVisitedLeaderboard}
          isList
        />
      </div>
    </section>
  );
}
