import { STATIONS } from "../../lib/stations";
import type { Line } from "../../lib/types";
import Station from "../Station/Station";
import * as styles from "./Line.css";

interface Props {
  line: Line;
}

export default function Line({ line }: Props) {
  return (
    <div className={styles.line}>
      <li
        key={line.id}
        className={styles.lineName}
        style={{
          borderBottom: `4px solid ${line.colour}`,
        }}
      >
        {line.name}
      </li>
      <ul>
        {line.stations.map((stationId) => {
          const shownStation = STATIONS.find(
            (station) => station.id === stationId
          );
          return (
            shownStation && <Station station={shownStation} lineId={line.id} />
          );
        })}
      </ul>
    </div>
  );
}
