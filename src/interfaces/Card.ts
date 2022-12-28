import { IItemsWeather } from "./State";

export interface ICardsProps {
  item: IItemsWeather[];
  updateCityHandle: (event: React.MouseEvent) => void;
}