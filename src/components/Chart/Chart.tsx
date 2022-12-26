import React from "react";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../../RezizableBox";
import { IChartProps, MyDatum } from "../../interfaces/Chart";

function MyChart({ historyData }: IChartProps) {
  const dataTest: MyDatum[] = [];

  historyData.reduce((acc: number, el) => {
    if (acc === 24) {
      return acc;
    }

    dataTest.push({ date: String(acc), temp: el.main.temp });

    return acc + 1;
  }, 1);

  const data = [{ data: dataTest }];

  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.temp,
        elementType: "line",
      },
    ],
    []
  );

  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  return (
    <ResizableBox>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          renderSVG: () => (
            <defs>
              <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#17EAD9" />
                <stop offset="100%" stopColor="#6078EA" />
              </linearGradient>
            </defs>
          ),
        }}
      />
    </ResizableBox>
  );
}

export default MyChart;
