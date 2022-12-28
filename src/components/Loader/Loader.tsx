import { Box } from "@mui/material";
import { HashLoader } from "react-spinners";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <Box data-testid="loader" className={s.loaderContainer}>
      <HashLoader color={"#4a56e2"} size="100px" />
    </Box>
  );
};
