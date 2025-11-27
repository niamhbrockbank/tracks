import { style } from "@vanilla-extract/css";

export const statsSection = style({
     width: '80vw',
    margin: "auto"
})

export const statsBox = style({
    display: "grid",
    grid: "250px / auto auto",
    gap: "24px",
})

export const statsCard = style({
    border: "1px solid #e2e8f0",
    borderRadius: '0.5rem',
    height: "250px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: "#020617"
})