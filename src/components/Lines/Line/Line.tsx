import { useShallow } from "zustand/shallow";
import { useHomeStore, type Line } from "../../../store/HomeStore";
import * as styles from "../Lines.css";
import Station from "../../Station/Station";
import { useUserVisitationStore } from "../../../store/UserVisitationStore";
import { countLineStatus } from "./utils/countLineStatus";
import { useState } from "react";

interface Props {
  line: Line;
}

export default function Line({ line }: Props) {
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));
  const [stationStatuses] = useUserVisitationStore(
    useShallow((s) => {
      return [s];
    })
  );
  const [stationsShown, setStationsShown] = useState(false);
  const { untouched, through, visited } = countLineStatus(
    line.id,
    stations,
    stationStatuses
  );

  return (
    <div className={styles.line}>
      <li
        key={line.id}
        className={styles.lineName}
        style={{
          borderBottom: `8px solid ${line.colour}`,
        }}
      >
        {line.name}
        <span>
          {" "}
          untouched:
          {untouched} -- through:{through} -- visited:{visited}
        </span>
        <button
          className={styles.showButton}
          onClick={() => setStationsShown(!stationsShown)}
        >
          {stationsShown ? "Hide" : "Show"}
        </button>
      </li>
      {stationsShown && (
        <ul>
          {stations.map((station) => {
            if (station.lines.includes(line.id)) {
              return <Station station={station} key={station.id} />;
            }
          })}
        </ul>
      )}
    </div>
  );
}
