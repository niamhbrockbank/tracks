import { style, styleVariants } from "@vanilla-extract/css";
import { metropolitan } from "../../index.css";

const baseButton = style({
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

const base = style({
    userSelect: "none",
    backgroundColor: "transparent",
    color: "grey",
    border: "12px solid grey",
    width: "48px",
    padding: "12px 0",
    borderRadius: "50%",
    margin: "6px",

    display: "flex",
    justifyContent: "center"
})

export type RoundelColour = "green" | "red" | "base" | "amber" | "metropolitan"

export const roundel = styleVariants({
    base: [base],
    red: [base, {borderColor: "red",}],
    amber: [base, {borderColor: "orange",}],
    green : [base, {borderColor: "green",}],
    metropolitan: [base, {borderColor: metropolitan }]
})

export const roundelButton = styleVariants({
    base: [baseButton],
    red: [baseButton, {   borderColor: "red",}],
    amber: [baseButton, {     borderColor: "orange",}],
    green : [baseButton, {     borderColor: "green",}]
})

export const label = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    color: "black",
    width: "80px",
    height: "20px",
    margin: "0 -40px",
    backgroundColor: "white", 
})