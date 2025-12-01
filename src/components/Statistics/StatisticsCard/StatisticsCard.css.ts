import { style } from "@vanilla-extract/css";

export const statsCard = style({
    height: "250px",
    borderRadius: '0.5rem',
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    padding: "8px 36px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
})

export const statsTitle = style({
    color: "#213547",
    fontSize: '1.25rem',
    height: '50px'
})

export const statsContent = style({
    color: "#213547",
    fontSize: '5rem',
    fontWeight: 'bold'
})

export const statsCaption = style({
    textAlign: 'left',
    height: "50px",
    color: "grey"
})