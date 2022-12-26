export interface IChartContainerProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  resizable?: boolean;
  style?: Object;
  className?: string;
}

export type MyDatum = { date: string; temp: number };

export interface IChartProps {
  historyData: {
    main: {
      temp: number;
    };
  }[];
}