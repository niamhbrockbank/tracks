import {create} from 'zustand'
import { LINES } from '../lib/lines'
import { STATIONS } from '../lib/stations'
export interface Line {
    id: string,
    name: string,
    colour: LineColour,
}

//TODO: Fix LineColour type so its actually just the values of line.id not string
export type LineColour = Line["id"]

export interface Station {
    id: string,
    name: string
    lines : string[]
}

interface HomeStore {
    lines: Line[],
    stations : Station[],
}

const initialHomeStore = {
    lines : LINES, 
    stations : STATIONS,
}

export const useHomeStore = create<HomeStore>()(() => ({
    ...initialHomeStore,
}))

