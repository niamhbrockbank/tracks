import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../index.css";

export const station = style([borderRadius, {
    listStyleType: 'none',
    margin: '10px',
    border: '1px solid black',
    padding: '10px 24px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}])

export const stationName = style({})

export const visitingOptions = style([borderRadius, {
    padding: '8px 16px',
}])