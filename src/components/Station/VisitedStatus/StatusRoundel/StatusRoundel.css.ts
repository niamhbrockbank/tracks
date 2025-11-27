import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
    userSelect: "none",
    backgroundColor: "transparent",
    color: "grey",
    border: "12px solid grey",
    width: "68px",
    height: "68px",
    padding: "12px 0",
    borderRadius: "50%",
    margin: "6px",

    display: "flex",
    justifyContent: "center"
})

export const statusOption = styleVariants({
    red: [base, {   borderColor: "red",}],
    amber: [base, {     borderColor: "orange",}],
    green : [base, {     borderColor: "green",}]
})

export const label = style({
    border: "1px solid black",
    color: "black",
    width: "80px",
    margin: "0 -40px",
    backgroundColor: "white"
})

