import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import React, { useState, useEffect } from "react";
import FormSearchCity from "../Form";
import {
  getCity,
  updateTimeAllCity,
  updateCity,
  deleteCity,
} from "../../redux/weather/weatOperations";
import getCurrentTime from "../../Heplers/getCurrentTime";
import Cards from "../Card";
import Loader from "../Loader";
import s from "./weatHome.module.css";

export const WeatherHomePage = () => {
  const [cityForSearch, setCity] = useState<string>("");
  const [doUpdateAll, setDoUpdateAll] = useState<boolean>(false);

  const item = useAppSelector((state) => state.weather.weather);
  const pending = useAppSelector((state) => state.weather.pending);
  const rejected = useAppSelector((state) => state.weather.rejected);

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
    setDoUpdateAll(true);
    dispatch(updateCity(id));
  };

  const deleteCityHandle = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLButtonElement;
    dispatch(deleteCity(id));
  };

  useEffect(() => {
    const dt = getCurrentTime(item);
    if (dt.length > 0 && !doUpdateAll) {
      dispatch(updateTimeAllCity({ itemAll: item, dt }));
    }
  }, [dispatch, item, doUpdateAll]);

  return (
    <section className={s.sectionHomePage}>
      <FormSearchCity
        getWeatherCity={getWeatherCity}
        changeInputValue={changeInputValue}
        cityForSearch={cityForSearch}
      />
      <Container>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
            {pending && <Loader />}
            {!pending &&
              !rejected &&
              item.length > 0 &&
              item.map((city) => {
                return (
                  <Cards
                    key={city.id}
                    city={city}
                    deleteCityHandle={deleteCityHandle}
                    updateCityHandle={updateCityHandle}
                    pathname={pathname}
                  />
                );
              })}
            {rejected && "Error page"}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};
