import { useState } from "react";
import type { Station, StationStatus } from "../../lib/types";
import TrafficLight from "./TrafficLight/TrafficLight";

interface Props {
  station: Station;
  lineId: string;
  status: StationStatus;
}

export default function TrafficLightStatus({ station, lineId, status }: Props) {
  // TODO: Get stations across multiple lines to show the same status
  const [controlledStatus, setControlledStatus] = useState(status);
  const name = `${lineId}-${station.id}-status`;

  return (
    <>
      <div>
        <TrafficLight
          light="untouched"
          name={name}
          handleChange={() => setControlledStatus("untouched")}
          status={controlledStatus}
        />
        <TrafficLight
          light="through"
          name={name}
          handleChange={() => setControlledStatus("through")}
          status={controlledStatus}
        />
        <TrafficLight
          light="visited"
          name={name}
          handleChange={() => setControlledStatus("visited")}
          status={controlledStatus}
        />
      </div>
    </>
  );
}
