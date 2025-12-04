import type { Station } from "../HomeStore";
import type { StationStatus, UserLineStatus } from "../UserVisitationStore";

export function calculateNewLineStatuses(station: Station | undefined, newStatus: StationStatus, prevStatus : StationStatus, lines : UserLineStatus){
    if (!station){
        return lines
    }

    const newLineStats = {...lines}

    for (const lineWithStation of station.lines){
        lines[lineWithStation]![newStatus] += 1;
        lines[lineWithStation]![prevStatus] -= 1
    }

    return newLineStats
}