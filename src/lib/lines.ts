import type { Line } from "../store/HomeStore";

export const LINES :  Line[] = [
    {
        id : 'jubilee',
        name: 'Jubilee',
        colour: '#858f97',
        stations: ["west-hampstead", "finchley-road"]
    },
    {
        id: 'metropolitan',
        name: 'Metropolitan',
        colour: '#751157', 
        stations: [
           "finchley-road"
        ]
    }
]