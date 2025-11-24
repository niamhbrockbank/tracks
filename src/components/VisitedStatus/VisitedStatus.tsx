import { useShallow } from "zustand/shallow";
import { type Line, type Station } from "../../store/HomeStore";

import TrafficLight from "./TrafficLight/TrafficLight";
import { setStationStatus, useUserStore } from "../../store/UserStore";

interface Props {
  station: Station;
  lineId: Line["id"];
}

export default function VisitedStatus({ station, lineId }: Props) {
  const name = `${lineId}-${station.id}-status`;
  const [stationStatus] = useUserStore(useShallow((s) => [s[station.id]]));

  return (
    <>
      <div>
        <TrafficLight
          light="untouched"
          name={name}
          handleChange={() => setStationStatus(station.id, "untouched")}
          status={stationStatus}
        />
        <TrafficLight
          light="through"
          name={name}
          handleChange={() => setStationStatus(station.id, "through")}
          status={stationStatus}
        />
        <TrafficLight
          light="visited"
          name={name}
          handleChange={() => setStationStatus(station.id, "visited")}
          status={stationStatus}
        />
      </div>
    </>
  );
}
