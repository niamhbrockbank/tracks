import type { Station } from "../../store/HomeStore";
import VisitedStatus from "./VisitedStatus/VisitedStatus";
import * as styles from "./Station.css";

interface Props {
  station: Station;
}

export default function Station({ station }: Props) {
  return (
    <div className={styles.station}>
      <li className={styles.stationName}>{station?.name}</li>
      <VisitedStatus station={station} />
    </div>
  );
}
