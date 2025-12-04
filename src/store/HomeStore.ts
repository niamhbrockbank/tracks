import {create} from 'zustand'
import { LINES } from '../lib/lines'
import { STATIONS } from '../lib/stations'
export interface Line {
    id: LineId,
    name: string,
}
export type LineId = 'metropolitan' | 'jubilee' | 'bakerloo' | 'central' | 'circle' | 'district' | 'hammersmith-city' | 'northern'| 'piccadilly' | 'victoria' | 'waterloo-city'

export interface Station {
    id: string,
    name: string
    lines : Line["id"][]
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

