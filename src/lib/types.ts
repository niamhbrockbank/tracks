export interface Line {
    id: string,
    name: string,
    colour: string,
    stations : Station["id"][]
}

export interface Station {
    id: string,
    name: string
    lines : Line["id"][]
}