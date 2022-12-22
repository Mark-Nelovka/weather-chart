import {
  Grid,
  Box,
  Card,
  Paper,
  Typography,
  Icon,
  Button,
} from "@mui/material";
import Header from "../Header";
import Rain from "../../images/water.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import s from "./weatHome.module.css";
import { Container } from "@mui/system";

export const WeatherHomePage = () => {
  return (
    <>
      <Header title="Weather home page" />
      <section>
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
              <Grid item md={3}>
                <Paper
                  className={s.card}
                  sx={{
                    backgroundColor: "#64b5f6",
                  }}
                  elevation={2}
                >
                  <Typography
                    sx={{
                      mb: 2,
                      textAlign: "center",
                      fontFamily: "Raleway",
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    Kyiv
                  </Typography>
                  <Box className={s.containerInfo}>
                    <Box className={s.containerItemsInfo}>
                      <Typography component={"span"}>-2</Typography>
                      <Box
                        sx={{
                          backgroundColor: "#64b5f6",
                          width: 80,
                          height: 45,
                          mb: 2,
                          mt: 2,
                        }}
                      ></Box>
                      {/* <Box className={s.sun1}>{<WbSunnyIcon />}</Box> */}
                      <Typography component={"span"}>7:00</Typography>
                    </Box>
                    <Box className={s.containerItemsInfo}>
                      <Typography component={"span"}>5</Typography>
                      {/* <Box className={s.animationContainer}> */}
                      {/* <Box className={s.sun2}>{<Brightness3Icon />}</Box> */}
                      <Box
                        sx={{
                          backgroundColor: "#0f52ba",
                          width: 80,
                          height: 45,
                          mb: 2,
                          mt: 2,
                        }}
                      ></Box>
                      {/* </Box> */}
                      <Typography component={"span"}>18:00</Typography>
                    </Box>
                  </Box>
                  <Box className={s.containerButtonInfo}>
                    <Button variant="contained">More info</Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
};
