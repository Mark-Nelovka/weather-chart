import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FormSearchCity from "../Form";
import s from "./weatHome.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getCity,
  updateTimeAllCity,
  updateCity,
  deleteCity,
} from "../../redux/weather/weatOperations";
import getCurrentTime from "../../Heplers/getCurrentTime";
import Cards from "../Card";

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

  const updateCityHandle = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLButtonElement;
    dispatch(updateCity(id));
  };

  const deleteCityHandle = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLButtonElement;
    dispatch(deleteCity(id));
  };

  useEffect(() => {
    const dt = getCurrentTime(item.weather);
    if (dt.length > 0) {
      dispatch(updateTimeAllCity({ itemAll: item.weather, dt }));
    }
  }, [dispatch, item]);

  return (
    <StyledEngineProvider injectFirst>
      <section className={s.section}>
        <FormSearchCity
          getWeatherCity={getWeatherCity}
          changeInputValue={changeInputValue}
          cityForSearch={cityForSearch}
        />
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
              {item.weather.length > 0 &&
                item.weather.map((city) => {
                  return (
                    <Cards
                      city={city}
                      deleteCityHandle={deleteCityHandle}
                      updateCityHandle={updateCityHandle}
                      pathname={pathname}
                    />
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </section>
    </StyledEngineProvider>
  );
};
