import type { LineId } from "../../../store/HomeStore";
import type { StatusCount, UserLineStatus } from "../../../store/UserVisitationStore";

export default function orderMostToLeastVisited(lineStatuses: UserLineStatus): LineId[] {
    const lineIds = Object.keys(lineStatuses) as LineId[]
    const lineArray = lineIds.map(key => [key, lineStatuses[key]] as [LineId, StatusCount]);

    const sortedLineArray = lineArray.sort(compareVisited).map(([id]) => id)

    return sortedLineArray
}

function compareVisited(line1: [LineId, StatusCount], line2: [LineId, StatusCount]){
    if (line1[1].visited < line2[1].visited){
        return 1
    }
    if (line1[1].visited > line2[1].visited){
        return -1
    }
    return 0
}