import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import s from "./weatHome.module.css";

export const WeatherHomePage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header title="Weather home page" />
      <section>
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
              <Grid item md={3}>
                <Paper className={s.cardRain} elevation={2}>
                  <Typography className={s.cardTitle}>Kyiv</Typography>
                  <Typography className={s.cardSubTitle}>
                    Monday: 23.12.22
                  </Typography>
                  <Box className={s.containerInfo}>
                    <Box className={s.containerItemsInfo}>
                      <Typography component={"span"}>-2</Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontFamily: "Raleway",
                          fontWeight: "bold",
                          letterSpacing: 1.2,
                          fontSize: 12,
                          color: "#fff",
                        }}
                      >
                        Min
                      </Typography>
                      <Box
                        className={s.animationContainer}
                        sx={{
                          backgroundColor: "#64b5f6",
                        }}
                      >
                        <Box className={s.sun1}>{<WbSunnyIcon />}</Box>
                      </Box>
                      <Typography component={"span"}>7:00</Typography>
                    </Box>
                    <Box className={s.containerItemsInfo}>
                      <Typography component={"span"}>5</Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontFamily: "Raleway",
                          fontWeight: "bold",
                          letterSpacing: 1.2,
                          fontSize: 12,
                          color: "#fff",
                        }}
                      >
                        Max
                      </Typography>
                      <Box
                        className={s.animationContainer}
                        sx={{ backgroundColor: "#0f52ba" }}
                      >
                        <Box className={s.sun2}>{<Brightness3Icon />}</Box>
                      </Box>
                      <Typography component={"span"}>18:00</Typography>
                    </Box>
                  </Box>
                  <Box className={s.containerButtonInfo}>
                    <Link to={`${pathname}/Kyiv/details`}>
                      <Button variant="contained">More info</Button>
                    </Link>
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
