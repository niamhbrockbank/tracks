import { style } from "@vanilla-extract/css";

 const trafficLight = style({
    cursor: 'pointer',
    height: '25px',
    width: '25px',
})

export const trafficLightRed = style([trafficLight, {   
    accentColor: 'red'
}])

export const trafficLightAmber = style([trafficLight, {    accentColor: '#ff5e00ff'}])

export const trafficLightGreen = style([trafficLight, {    accentColor: 'green',}])