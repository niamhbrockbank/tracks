import { style } from "@vanilla-extract/css";

export const statsSection = style({
     width: '80vw',
    border: "1px solid black",
    borderRadius: '8px',
    padding: "24px 32px",
    margin: "auto"
})

export const statsBox = style({
    display: "grid",
    grid: "250px / auto auto",
    gap: "24px",
})

export const statsCard = style({
    border: "1px solid black",
    borderRadius: '8px',
    height: "250px"
})