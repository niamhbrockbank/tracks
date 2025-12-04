import { create } from "zustand"
import { useHomeStore, type LineId, type Station } from "./HomeStore"
import { INITIAL_STATION_STATUS } from "../lib/stations"
import { INITIAL_LINE_STATUS } from "../lib/lines"
import { calculateNewLineStatuses } from "./utils/calculateNewLineStatuses"

export type StationStatus = "untouched" | "through" | "visited"

export type StatusCount = { [T in StationStatus]: number}

export type UserStationStatus = { [stationId : Station["id"]]  : StationStatus} 
export type UserLineStatus = {[T in LineId]? : StatusCount}

export interface LineStatusCount {id : LineId, status: StatusCount}

export interface UserStore {
    stations: UserStationStatus
    lines: UserLineStatus
}

const initialUserVisitationStore = {
    stations : {...INITIAL_STATION_STATUS},
    lines: {...INITIAL_LINE_STATUS}
}

export const useUserVisitationStore = create<UserStore>(() => ({
    ...initialUserVisitationStore,
}))

export function setStationStatus(stationId : string, status: StationStatus) {
    useUserVisitationStore.setState((prevState) => {

    // Update line statuses
    const fullStation = useHomeStore.getState().stations.find(s => s.id === stationId)
    const prevStatus = prevState.stations[stationId]
    const lines = prevState.lines

    const newLineStatuses = calculateNewLineStatuses(fullStation, status, prevStatus, lines)
    
    return  {stations: {...prevState.stations, [stationId] : status}, lines: newLineStatuses
    }})
}

