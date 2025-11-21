import type { Station } from "../../lib/types";
import VisitedStatus from "../VisitedStatus/VisitedStatus";
import * as styles from "./Station.css";

interface Props {
  station: Station;
  lineId: string;
}

export default function Station({ station, lineId }: Props) {
  return (
    <div className={styles.station}>
      <li className={styles.stationName}>{station?.name}</li>
      <VisitedStatus
        station={station}
        lineId={lineId}
        status={station.status}
      />
    </div>
  );
}
