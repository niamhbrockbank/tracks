import { create } from "zustand"
import { type LineId, type Station } from "./HomeStore"
import { INITIAL_STATION_STATUS } from "../lib/stations"
import { INITIAL_LINE_STATUS } from "../lib/lines"

export type StationStatus = "untouched" | "through" | "visited"

export type StatusCount = { [T in StationStatus]: number}

export interface UserStationStatus { [stationId : Station["id"]]  : StationStatus} 
export type UserLineStatus = {[T in LineId]? : StatusCount}

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
        return  {stations: {...prevState.stations, [stationId] : status}}
    })}

