import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import {
  updateTimeAllCity,
  updateCity,
} from "../../redux/weather/weatOperations";
import { cleanStore } from "../../redux/weatherDetails/weatDetOperations";
import getCurrentTime from "../../Heplers/getCurrentTime";
import React, { useState, useEffect } from "react";
import FormSearchCity from "../Form";
import Cards from "../Card";
import Loader from "../Loader";
import s from "./weatHome.module.css";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const WeatherHomePage = () => {
  const [doUpdateAll, setDoUpdateAll] = useState<boolean>(false);
  const item = useAppSelector((state) => state.weather);
  const pending = useAppSelector((state) => state.weather.pending);
  const rejected = useAppSelector((state) => state.weather.rejected);
  const savedItemInDetPage = useAppSelector(
    (state) => state.weatherDetails.weatherDetails
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const dt = getCurrentTime(item.weather);
    if (dt.length > 0 && !doUpdateAll) {
      dispatch(updateTimeAllCity({ itemAll: item.weather, dt }));
    }
    if (savedItemInDetPage.length > 0) {
      dispatch(cleanStore());
    }
  }, [dispatch, item, doUpdateAll, savedItemInDetPage]);

  const updateCityHandle = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLButtonElement;
    setDoUpdateAll(true);
    dispatch(updateCity(id));
  };

  return (
    <>
      <section className={s.sectionHomePage}>
        {!rejected && <FormSearchCity />}
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={2} columnSpacing={{ md: 5 }}>
              {pending && <Loader />}
              {!pending && !rejected && item.weather.length > 0 && (
                <Cards
                  updateCityHandle={updateCityHandle}
                  item={item.weather}
                />
              )}
            </Grid>
          </Box>
        </Container>
      </section>
      {rejected && <ErrorPage />}
    </>
  );
};
