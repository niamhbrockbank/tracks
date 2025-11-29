import type { StationStatus } from "../../../../../store/UserVisitationStore";
import Roundel from "../../../../Roundel/Roundel";
import type { RoundelColour } from "../../../../Roundel/Roundel.css";

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
  let optionColour: RoundelColour = "red";

  if (option === "through") {
    optionColour = "amber";
  } else if (option === "visited") {
    optionColour = "green";
  }

  const checked = option === currentStatus;

  return (
    <Roundel
      handleClick={handleChange}
      colour={checked ? optionColour : undefined}
      label={option}
      button
    />
  );
}
