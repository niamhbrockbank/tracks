import {create} from 'zustand'
import { LINES } from '../lib/lines'
import { STATIONS } from '../lib/stations'

export interface Line {
    id: string,
    name: string,
    colour: string,
}

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

