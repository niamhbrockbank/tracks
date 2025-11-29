import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../../index.css";

export const line = style([borderRadius, {
    listStyleType : 'none',
    width: '80vw',
    margin: '10px auto',
    padding: '16px 24px',
    border: '1px solid black',
}])

export const lineName = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px"
})

export const showButton = style({
    backgroundColor: 'whitesmoke',
    border: '1px solid black',
    margin: "8px"
})

export const lineSummary = style({
    display: "flex",
})