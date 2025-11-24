import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../index.css";

export const line = style([borderRadius, {
    listStyleType : 'none',
    width: '80vw',
    margin: '10px auto',
    padding: '16px 24px',
    border: '1px solid black',
}])

export const lineName = style({})