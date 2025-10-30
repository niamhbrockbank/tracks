import type { Station } from "../../lib/types";
import TrafficLightStatus from "../TrafficLightStatus/TrafficLightStatus";
import * as styles from "./Station.css";

interface Props {
  station: Station;
  lineId: string;
}

export default function Station({ station, lineId }: Props) {
  return (
    <div className={styles.station}>
      <li className={styles.stationName}>{station?.name}</li>
      <TrafficLightStatus station={station} lineId={lineId} />
    </div>
  );
}
