import { useShallow } from "zustand/shallow";
import { type Station } from "../../store/HomeStore";
import * as styles from "./VisitedStatus.css";

import TrafficLight from "./TrafficLight/TrafficLight";
import { setStationStatus, useUserStore } from "../../store/UserStore";

interface Props {
  station: Station;
}

export default function VisitedStatus({ station }: Props) {
  const [stationStatus] = useUserStore(useShallow((s) => [s[station.id]]));

  return (
    <>
      <div className={styles.visitedStatusBar}>
        <TrafficLight
          light="untouched"
          handleChange={() => setStationStatus(station.id, "untouched")}
          status={stationStatus}
        />
        <TrafficLight
          light="through"
          handleChange={() => setStationStatus(station.id, "through")}
          status={stationStatus}
        />
        <TrafficLight
          light="visited"
          handleChange={() => setStationStatus(station.id, "visited")}
          status={stationStatus}
        />
      </div>
    </>
  );
}
