import type { Line, LineId } from "../store/HomeStore";
import { STATIONS } from "./stations";

export const LINES :  Line[] = [
    {
        id : 'jubilee',
        name: 'Jubilee',
    },
    {
        id: 'metropolitan',
        name: 'Metropolitan',
    },
    {
        id: 'bakerloo',
        name: 'Bakerloo',

    }
    ,{
        id: 'central',
        name: 'Central',
    },
    {
        id: 'circle',
        name: 'Circle',
    },
    {
        id: 'district',
        name: 'District',
    },
    {
        id: 'hammersmith-city',
        name: 'Hammersmith & City',
    },
    {
        id: 'northern',
        name: 'Northern',
    },
    {
        id: 'piccadilly',
        name: 'Piccadilly',
    },
    {
        id: 'victoria',
        name: 'Victoria',
    },
    {
        id: 'waterloo-city',
        name: 'Waterloo & City',
    },
]

type LineStationTally = Record<LineId, number>
const NUMBER_STATIONS_ON_LINE = LINES.reduce<LineStationTally>((prev, cur) => ({...prev, [cur.id] : 0}), {} as LineStationTally)

STATIONS.forEach((station) => {
    for (const line of station.lines){
        NUMBER_STATIONS_ON_LINE[line] += 1
    }
})


export const INITIAL_LINE_STATUS = LINES.reduce((prev, cur) => ({...prev, [cur.id] : {untouched: NUMBER_STATIONS_ON_LINE[cur.id], through: 0, visited: 0}}), {})