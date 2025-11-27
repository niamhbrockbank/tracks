import { useShallow } from "zustand/shallow";
import { type Station } from "../../../store/HomeStore";
import * as styles from "./VisitedStatus.css";

import StatusRoundel from "./StatusRoundel/StatusRoundel";
import {
  setStationStatus,
  useUserVisitationStore,
  type UserStore,
} from "../../../store/UserVisitationStore";

interface Props {
  station: Station;
}

export default function VisitedStatus({ station }: Props) {
  const [stationStatus] = useUserVisitationStore(
    useShallow((s: UserStore) => [s[station.id]])
  );

  return (
    <>
      <div className={styles.visitedStatusBar}>
        <StatusRoundel
          option="untouched"
          handleChange={() => setStationStatus(station.id, "untouched")}
          currentStatus={stationStatus}
        />
        <StatusRoundel
          option="through"
          handleChange={() => setStationStatus(station.id, "through")}
          currentStatus={stationStatus}
        />
        <StatusRoundel
          option="visited"
          handleChange={() => setStationStatus(station.id, "visited")}
          currentStatus={stationStatus}
        />
      </div>
    </>
  );
}
