import { useShallow } from "zustand/shallow";
import { useHomeStore, type Line } from "../../../store/HomeStore";
import * as styles from "./Line.css";
import { useUserVisitationStore } from "../../../store/UserVisitationStore";
import { useState } from "react";
import Stations from "../../Stations/Stations";
import Roundel from "../../Roundel/Roundel";

interface Props {
  line: Line;
}

export default function Line({ line }: Props) {
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));
  const [lineStats] = useUserVisitationStore(
    useShallow((s) => {
      return [s.lines];
    })
  );
  const [stationsShown, setStationsShown] = useState(false);
  const { untouched, visited, through } = lineStats[line.id]!;

  return (
    <div className={styles.line[line.id]}>
      <li key={line.id} className={styles.lineTitleRow}>
        <span className={styles.lineTitleRowLeft}>
          {line.name}
          <a
            className={styles.showButton}
            onClick={() => setStationsShown(!stationsShown)}
          >
            {stationsShown ? "Hide" : "Expand"}
          </a>
        </span>

        <div className={styles.lineSummary}>
          <Roundel label={`${untouched}`} colour={line.id} title="untouched" />
          <Roundel label={`${through}`} colour={line.id} title="through" />
          <Roundel label={`${visited}`} colour={line.id} title="visited" />
        </div>
      </li>
      {stationsShown && <Stations lineId={line.id} stations={stations} />}
      {stationsShown && (
        <a
          className={styles.showButton}
          onClick={() => setStationsShown(!stationsShown)}
        >
          {stationsShown ? "Hide" : "Expand"}
        </a>
      )}
    </div>
  );
}
