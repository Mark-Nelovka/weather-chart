import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FormSearchCity from "../Form";
import { getCurrentWeather } from "../API";
import getCurrentDate from "../../General/getCurrentDate";
import s from "./weatHome.module.css";
import { StyledEngineProvider } from "@mui/material/styles";

export const WeatherHomePage = () => {
  const [city, setCity] = useState<string>("");
  const [countryList, setCountryList] = useState(["IT", "GB"]);
  const { pathname } = useLocation();

  const getWeatherCity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await getCurrentWeather({ city });
    console.log(res);
  };

  const changeInputValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setCity(value);
  };

  useEffect(() => {
    const dt = getCurrentDate({ countryList });
  }, [countryList]);

  return (
    <StyledEngineProvider injectFirst>
      <section>
        <FormSearchCity
          getWeatherCity={getWeatherCity}
          changeInputValue={changeInputValue}
          city={city}
        />
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
    </StyledEngineProvider>
  );
};
