import { create } from "zustand"
import { type Station } from "./HomeStore"
import { INITIAL_STATION_STATUS } from "../lib/stations"

export type StationStatus = "untouched" | "through" | "visited"

export type StatusCount = { [T in StationStatus]: number}
export interface UserStore {
    [stationId : Station["id"]]  : StationStatus
}

const initialUserVisitationStore = {
    ...INITIAL_STATION_STATUS
}

export const useUserVisitationStore = create<UserStore>(() => ({
    ...initialUserVisitationStore,
}))

export function setStationStatus(stationId : string, status: StationStatus) {
    useUserVisitationStore.setState(() => {
        return  {[stationId] : status}
    })}

