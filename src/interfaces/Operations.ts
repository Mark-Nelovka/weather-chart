import { IItemsWeather } from "./State"

export interface IPropsGetCity {
    cityForSearch: string
}

export interface IPropsUpdateAll {
    itemAll: IItemsWeather[],
    dt: number[]
}