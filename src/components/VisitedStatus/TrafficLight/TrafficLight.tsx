import type { StationStatus } from "../../../store/UserStore";
import * as styles from "./TrafficLight.css";

interface Props {
  light: StationStatus;
  handleChange: () => void;
  status: StationStatus;
  name: string;
}

export default function TrafficLight({
  light,
  handleChange,
  status,
  name,
}: Props) {
  let lightColour = styles.trafficLightRed;

  if (light === "through") {
    lightColour = styles.trafficLightAmber;
  } else if (light === "visited") {
    lightColour = styles.trafficLightGreen;
  }

  return (
    <input
      type="radio"
      id={`${light}-status`}
      name={name}
      value={light}
      className={lightColour}
      checked={status === light}
      onChange={handleChange}
    />
  );
}
