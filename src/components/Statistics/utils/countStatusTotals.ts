import type {  StatusCount, UserStationStatus } from "../../../store/UserVisitationStore";

export default function countStatusTotals(stations : UserStationStatus): StatusCount {
    const statusCount = {
        untouched: 0,
        through: 0,
        visited: 0
    }

    for (const station in stations){
        const status = stations[station]
        statusCount[status] += 1
    }

    return statusCount
}