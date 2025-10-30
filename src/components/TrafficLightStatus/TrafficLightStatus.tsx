import type { Station } from "../../lib/types";
import * as styles from "./TrafficLightStatus.css";

interface Props {
  station: Station;
  lineId: string;
}

export default function TrafficLightStatus({ station, lineId }: Props) {
  // TODO: Get stations across multiple lines to show the same status
  return (
    <>
      <div>
        <input
          type="radio"
          id="untouched-status"
          name={`${lineId}-${station.id}-status`}
          value="untouched"
          className={styles.trafficLightRed}
        />
        <input
          type="radio"
          id="through-status"
          name={`${lineId}-${station.id}-status`}
          value="through"
          className={styles.trafficLightAmber}
        />
        <input
          type="radio"
          id="visited-status"
          name={`${lineId}-${station.id}-status`}
          value="visited"
          className={styles.trafficLightGreen}
        />
      </div>
    </>
  );
}
