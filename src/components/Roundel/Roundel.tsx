import * as styles from "./Roundel.css";

interface Props {
  label: string;
  smallLabel?: boolean;
  colour?: styles.RoundelColour;
  title?: string;
  button?: boolean;
  handleClick?: () => void;
}

export default function Roundel({
  label,
  smallLabel = false,
  colour,
  title = label,
  button = false,
  handleClick,
  ...props
}: Props) {
  let labelStyle = styles.label["base"];
  if (smallLabel) {
    labelStyle = styles.label["small"];
  }

  if (button) {
    return (
      <button
        className={styles.roundelButton[colour || "base"]}
        title={label}
        onClick={handleClick}
        {...props}
      >
        <span className={labelStyle}>{label}</span>
      </button>
    );
  } else {
    return (
      <div
        className={styles.roundel[colour || "base"]}
        title={title}
        {...props}
      >
        <span className={labelStyle}>{label}</span>
      </div>
    );
  }
}
