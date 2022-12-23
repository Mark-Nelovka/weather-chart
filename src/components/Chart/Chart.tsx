import ResizableBox from "../../RezizableBox";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

type MyDatum = { date: string; stars: number };

function MyChart() {
  const data = [
    {
      label: "Temperature in this hour",
      data: [
        {
          date: "00",
          stars: 3,
        },
        {
          date: "1",
          stars: 3,
        },
        {
          date: "2",
          stars: 2,
        },
        {
          date: "3",
          stars: 2,
        },
        {
          date: "4",
          stars: 3,
        },
        {
          date: "5",
          stars: 2,
        },
        {
          date: "6",
          stars: 3,
        },
        {
          date: "7",
          stars: 0,
        },
        {
          date: "8",
          stars: -1,
        },
        {
          date: "9",
          stars: 2,
        },
        {
          date: "10",
          stars: 3,
        },
        {
          date: "11",
          stars: 1,
        },
        {
          date: "12",
          stars: -2,
        },
        {
          date: "13",
          stars: 0,
        },
        {
          date: "14",
          stars: 4,
        },
        {
          date: "15",
          stars: 1,
        },
        {
          date: "16",
          stars: 2,
        },
        {
          date: "17",
          stars: 3,
        },
        {
          date: "19",
          stars: 1,
        },
        {
          date: "19",
          stars: 2,
        },
        {
          date: "20",
          stars: -1,
        },
        {
          date: "21",
          stars: 0,
        },
        {
          date: "22",
          stars: 3,
        },
        {
          date: "23",
          stars: -1,
        },
      ],
    },
  ];

  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.stars,
        elementType: "line",
      },
    ],
    []
  );

  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date + " h",
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
          interactionMode: "primary",
          getSeriesStyle: (series) => {
            return {
              color: `url(#${series.index % 4})`,
              opacity: 1,
            };
          },
          renderSVG: () => (
            <defs>
              <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
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
