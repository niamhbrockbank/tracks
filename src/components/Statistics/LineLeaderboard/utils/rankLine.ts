import type { LineStatusCount } from "../../../../store/UserVisitationStore";

export interface LineRanking extends LineStatusCount {
    ranking: number
}
export function rankLine(line: LineStatusCount, prevLine: LineRanking, index: number): LineRanking{
    if (line.status.visited === prevLine.status.visited) {
        return {...line, ranking: prevLine.ranking }
    }

    return {...line, ranking: index + 1}
}