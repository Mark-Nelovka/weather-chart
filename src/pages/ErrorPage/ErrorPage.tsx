import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ErrorImage from "../../images/Error.jpg";
import s from "./errorPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box className={s.containerError}>
        <Button
          className={s.buttonError}
          variant="outlined"
          onClick={() => navigate("/weather-chart")}
        >
          Back to home page
        </Button>
        <Box>
          <img src={ErrorImage} alt="Error" width="400" />
        </Box>
      </Box>
    </>
  );
}
