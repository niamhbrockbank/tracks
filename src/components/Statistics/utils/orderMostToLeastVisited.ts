import type { LineId } from "../../../store/HomeStore";
import type { StatusCount, UserLineStatus } from "../../../store/UserVisitationStore";

interface LineStatusCount {id : LineId, status: StatusCount}

export default function orderMostToLeastVisited(lineStatuses: UserLineStatus): LineStatusCount[] {
    const lineIds = Object.keys(lineStatuses) as LineId[]
    const lineArray = lineIds.map(key => {return {id : key , status: lineStatuses[key]} as LineStatusCount});

    const sortedLineArray = lineArray.sort(compareVisited)

    return sortedLineArray
}

function compareVisited(line1: LineStatusCount, line2: LineStatusCount){
    const line1Visited = line1.status.visited
    const line2Visited = line2.status.visited

    if (line1Visited < line2Visited){
        return 1
    }
    if (line1Visited > line2Visited){
        return -1
    }
    return 0
}