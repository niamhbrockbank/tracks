import type { StationStatus } from "../../../store/UserStore";
import * as styles from "./TrafficLight.css";

interface Props {
  light: StationStatus;
  handleChange: () => void;
  status: StationStatus;
}

export default function TrafficLight({ light, handleChange, status }: Props) {
  let lightColour = styles.trafficLight["red"];

  if (light === "through") {
    lightColour = styles.trafficLight["amber"];
  } else if (light === "visited") {
    lightColour = styles.trafficLight["green"];
  }

  const checked = light === status;

  return (
    <button
      onClick={handleChange}
      className={checked ? lightColour : styles.base}
      title={light}
    >
      <span className={styles.label}>{light}</span>
    </button>
  );
}
