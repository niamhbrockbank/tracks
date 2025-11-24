import type { Station } from "../store/HomeStore"

export const STATIONS: Station[] = [{
            id: 'west-hampstead',
            name: 'West Hampstead',
            lines: ['jubilee'],
        },
 {
            id: 'finchley-road',
            name: 'Finchley Road',
            lines: ['jubilee', 'metropolitan'],
        }
    ]


export const INITIAL_STATION_STATUS = STATIONS.reduce(
          (prev,cur) => 
          ({...prev,[cur.id]: "untouched"}), {}
      );