import type { ReactNode } from "react";
import * as styles from "./StatisticsCard.css";

interface Props {
  title?: string;
  content: ReactNode;
  caption?: string;
}

export default function StatisticsCard({ title, content, caption }: Props) {
  return (
    <div className={styles.statsCard}>
      <p className={styles.statsTitle}>{title}</p>
      <span className={styles.statsContent}>{content}</span>
      <caption className={styles.statsCaption}>{caption}</caption>
    </div>
  );
}
