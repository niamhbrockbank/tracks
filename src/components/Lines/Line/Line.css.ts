import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../../index.css";

export const line = style([borderRadius, {
    listStyleType : 'none',
    margin: '20px auto',
    padding: '16px 24px',
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
}])

export const lineName = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    color: "#213547",
})

export const showButton = style({
    backgroundColor: 'whitesmoke',
    border: '1px solid black',
    margin: "8px"
})

export const lineSummary = style({
    display: "flex",
    gap: "12px"
})