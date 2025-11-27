import type { Line, Station } from "../../../../store/HomeStore"
import type { StatusCount, UserStore } from "../../../../store/UserVisitationStore"

//TODO: Make the keys related to the StationStatus type instead of hardcoded
export function countLineStatus(lineId : Line["id"], stations: Station[], stationStatuses: UserStore): StatusCount{
    const statusCount = {
        untouched : 0,
        through: 0,
        visited: 0
    }
    
    for (const station of stations){
        if (station.lines.includes(lineId)){
        const status = stationStatuses[station.id]
        statusCount[status] += 1
    }
    }    

    return statusCount
}