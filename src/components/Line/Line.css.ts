import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../index.css";

export const lineSection = style({
    padding: "0px"
})

export const line = style([borderRadius, {
    listStyleType : 'none',
    width: '80vw',
    margin: '10px auto',
    padding: '16px 24px',
    border: '1px solid black',
}])

export const lineName = style({})

export const showButton = style({
    backgroundColor: 'whitesmoke',
    border: '1px solid black',
    margin: "8px"
})