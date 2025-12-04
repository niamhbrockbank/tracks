import type { ReactNode } from "react";
import * as styles from "./StatisticsCard.css";

interface Props {
  title?: string;
  content: ReactNode;
  caption?: string;
  isList?: boolean;
}

export default function StatisticsCard({
  title,
  content,
  caption,
  isList,
}: Props) {
  let contentStyling = styles.statsContent;
  if (isList) {
    contentStyling = styles.statsList;
  }

  return (
    <div className={styles.statsCard}>
      <p className={styles.statsTitle}>{title}</p>
      <span className={contentStyling}>{content}</span>
      <span className={styles.statsCaption}>{caption}</span>
    </div>
  );
}
