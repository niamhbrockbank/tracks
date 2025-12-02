import { style, styleVariants } from "@vanilla-extract/css";
import { bakerloo, central, circle, district, hammersmithCity, jubilee, metropolitan, northern, piccadilly, victoria, waterlooCity } from "../../index.css";
import type { LineId } from "../../store/HomeStore";

const baseButton = style({
    userSelect: "none",
    backgroundColor: "transparent",
    color: "grey",
    border: "12px solid #ced0d3ff",
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
    border: "12px solid #ced0d3ff",
    width: "48px",
    padding: "12px 0",
    borderRadius: "50%",
    margin: "6px",

    display: "flex",
    justifyContent: "center"
})

export type RoundelColour = "green" | "red" | "base" | "amber" | LineId

export const roundel = styleVariants({
    base: [base],
    red: [base, {borderColor: "red",}],
    amber: [base, {borderColor: "orange",}],
    green : [base, {borderColor: "green",}],
    metropolitan: [base, {borderColor: metropolitan }],
    jubilee: [base, {borderColor: jubilee }],
    bakerloo: [base, {borderColor: bakerloo }],
    central: [base, {borderColor: central }],
    circle: [base, {borderColor: circle }],
    district: [base, {borderColor: district }],
    ['hammersmith-city']: [base, {borderColor: hammersmithCity }],
    northern: [base, {borderColor: northern}],
    piccadilly: [base, {borderColor: piccadilly }],
    victoria: [base, {borderColor: victoria }],
    ['waterloo-city']: [base, {borderColor: waterlooCity }],
})

export const roundelButton = styleVariants({
    base: [baseButton],
    red: [baseButton, {   borderColor: "red",}],
    amber: [baseButton, {     borderColor: "orange",}],
    green : [baseButton, {     borderColor: "green",}],
    metropolitan: [baseButton, {borderColor: metropolitan }],
    jubilee: [baseButton, {borderColor: jubilee }],
    bakerloo: [baseButton, {borderColor: bakerloo }],
    central: [baseButton, {borderColor: central }],
    circle: [baseButton, {borderColor: circle }],
    district: [baseButton, {borderColor: district }],
    ['hammersmith-city']: [baseButton, {borderColor: hammersmithCity }],
    northern: [baseButton, {borderColor: northern}],
    piccadilly: [baseButton, {borderColor: piccadilly }],
    victoria: [baseButton, {borderColor: victoria }],
    ['waterloo-city']: [baseButton, {borderColor: waterlooCity }],
})

export const labelBase = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#3b40a4ff",
    width: "80px",
    height: "20px",
    margin: "0 -40px",
})

export const label = styleVariants({
    base : [labelBase],
    small: [labelBase, {fontSize: "x-small"}]
})