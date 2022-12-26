import { IItemsWeather } from "./State";

export interface ICardsProps {
  city: IItemsWeather;
  deleteCityHandle: (event: React.MouseEvent) => void;
  updateCityHandle: (event: React.MouseEvent) => void;
  pathname: string;
}