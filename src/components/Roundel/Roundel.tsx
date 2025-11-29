import * as styles from "./Roundel.css";

interface Props {
  label: string;
  colour?: styles.RoundelColour;
  button?: boolean;
  handleClick?: () => void;
}

export default function Roundel({
  label,
  colour,
  button = false,
  handleClick,
  ...props
}: Props) {
  if (button) {
    return (
      <button
        className={styles.roundel[colour || "base"]}
        title={label}
        onClick={handleClick}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </button>
    );
  } else {
    return (
      <div
        className={styles.roundel[colour || "base"]}
        title={label}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </div>
    );
  }
}
