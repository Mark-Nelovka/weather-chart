import { ResizableBox as ReactResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function ResizableBox({
  children,
  width = 1100,
  height = 300,
  resizable = true,
  style = {},
  className = "",
}) {
  return (
    <div
      style={{
        marginLeft: 15,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
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
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
              className={className}
            >
              {children}
            </div>
          </ReactResizableBox>
        ) : (
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={className}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}