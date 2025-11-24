import { create } from "zustand"
import type { Station } from "./HomeStore"
import { INITIAL_STATION_STATUS } from "../lib/stations"

export type StationStatus = "untouched" | "through" | "visited"

interface UserStore {
    [stationId : Station["id"]]  : StationStatus
}

const initialUserStore = {
    ...INITIAL_STATION_STATUS
}

export const useUserStore = create<UserStore>(() => ({
    ...initialUserStore,
}))

export function setStationStatus(stationId : string, status: StationStatus) {
    useUserStore.setState(() => {
        return  {[stationId] : status}
    })}