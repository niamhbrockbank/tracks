import type {  StatusCount, UserStore } from "../../../store/UserVisitationStore";

export default function countTotalStatus(stations : UserStore): StatusCount {
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