import { Box } from "@mui/material";
import { ResizableBox as ReactResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { IChartContainerProps } from "./interfaces/Chart";

export default function ResizableBox({
  children,
  width = 1100,
  height = 300,
  resizable = true,
  style = {},
  className = "",
}: IChartContainerProps) {
  return (
    <Box
      sx={{
        marginLeft: 2,
        paddingBottom: 2,
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          width: "auto",
          background: "white",
          padding: ".5rem",
          borderRadius: "0.5rem",
          ...style,
        }}
      >
        {resizable ? (
          <ReactResizableBox width={width} height={height}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
              className={className}
            >
              {children}
            </Box>
          </ReactResizableBox>
        ) : (
          <Box
            sx={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={className}
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}
