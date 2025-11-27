import type { StationStatus } from "../../../../store/UserVisitationStore";
import * as styles from "./StatusRoundel.css";

interface Props {
  option: StationStatus;
  handleChange: () => void;
  currentStatus: StationStatus;
}

export default function StatusRoundel({
  option,
  handleChange,
  currentStatus,
}: Props) {
  let optionColour = styles.statusOption["red"];

  if (option === "through") {
    optionColour = styles.statusOption["amber"];
  } else if (option === "visited") {
    optionColour = styles.statusOption["green"];
  }

  const checked = option === currentStatus;

  return (
    <button
      onClick={handleChange}
      className={checked ? optionColour : styles.base}
      title={option}
    >
      <span className={styles.label}>{option}</span>
    </button>
  );
}
