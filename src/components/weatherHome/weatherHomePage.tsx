import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FormSearchCity from "../Form";
import s from "./weatHome.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getCity } from "../../redux/weather/weatOperations";

export const WeatherHomePage = () => {
  const [cityForSearch, setCity] = useState<string>("");
  const item = useAppSelector((state) => state.weather);

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const getWeatherCity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCity({ cityForSearch }));
    setCity("");
  };

  const changeInputValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setCity(value);
  };

  // useEffect(() => {
  //   const dt = getCurrentDate("GB");
  // }, [countryList]);

  return (
    <StyledEngineProvider injectFirst>
      <section>
        <FormSearchCity
          getWeatherCity={getWeatherCity}
          changeInputValue={changeInputValue}
          cityForSearch={cityForSearch}
        />
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
              {item.weather.length > 0 &&
                item.weather.map(({ name, main, currentDate, weather }) => {
                  return (
                    <Grid item md={3} key={name}>
                      <Paper
                        className={
                          weather[0].main === "Rain" ? s.cardRain : s.cardClouds
                        }
                        elevation={2}
                      >
                        <Typography className={s.cardTitle}>{name}</Typography>
                        <Typography className={s.cardSubTitle}>
                          {currentDate.dayInWeek}:
                          {` ${currentDate.day}.${currentDate.mounth}.${currentDate.year}`}
                        </Typography>
                        <Box className={s.containerInfo}>
                          <Box className={s.containerItemsInfo}>
                            <Typography component={"span"}>
                              {Math.floor(main.temp_min)}
                            </Typography>
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
                            <Typography component={"span"}>
                              {Math.floor(main.temp_max)}
                            </Typography>
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
                        <Typography className={s.currentTimeContainer}>
                          Current time:
                          {` ${currentDate.hours}:${currentDate.minutes}`}
                        </Typography>
                        <Box className={s.containerButtonInfo}>
                          <Link to={`${pathname}/Kyiv/details`}>
                            <Button variant="contained">More info</Button>
                          </Link>
                        </Box>
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </section>
    </StyledEngineProvider>
  );
};
