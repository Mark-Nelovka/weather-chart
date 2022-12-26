import { Card, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getCityWithDetails,
  cleanStore,
} from "../../redux/weatherDetails/weatDetOperations";
import MyChart from "../Chart/Chart";
import Loader from "../Loader";
import s from "./weatDet.module.css";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const WeatherDetails = () => {
  const cityWithState = useAppSelector(
    (state) => state.weatherDetails.weatherDetails
  );
  const pending = useAppSelector((state) => state.weatherDetails.pending);
  const rejected = useAppSelector((state) => state.weatherDetails.rejected);

  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCityWithDetails({ cityForSearch: params.city! }));
    return () => {
      dispatch(cleanStore());
    };
  }, [params, dispatch]);

  return (
    <section className={s.sectionWeatherDet}>
      <Container>
        <Card>
          {pending && <Loader />}
          {rejected && <ErrorPage />}
          {!pending &&
            !rejected &&
            cityWithState.length > 0 &&
            cityWithState.map((state) => {
              return (
                <Box key={state.id}>
                  <Box className={s.detailCardHeader}>
                    <Typography>
                      {state.currentDate.dayInWeek}:
                      {Math.floor(state.main.temp)}
                      <span>{" \u00b0"}</span>C
                    </Typography>
                    <Typography>{`${state.currentDate.hours}:${state.currentDate.minutes}`}</Typography>
                  </Box>
                  <Box className={s.globalContainer}>
                    <Box className={s.detailContainerCard}>
                      <Card className={s.detailContainerInfo}>
                        <Typography>
                          Temperature: {Math.floor(state.main.temp)}
                          <span>{" \u00b0"}</span>C
                        </Typography>
                        <Typography>
                          Feels like: {Math.floor(state.main.feels_like)}
                          <span>{" \u00b0"}</span>C
                        </Typography>
                        <Typography>
                          Temperature_min: {Math.floor(state.main.temp_min)}
                          <span>{" \u00b0"}</span>C
                        </Typography>
                        <Typography>
                          Temperature_max: {Math.floor(state.main.temp_max)}
                          <span>{" \u00b0"}</span>C
                        </Typography>
                        <Typography>
                          Pressure: {Math.floor(state.main.pressure)} hPa
                        </Typography>
                      </Card>
                      <Box className={s.detailContainerCenter}>
                        <Typography>{state.name}</Typography>
                      </Box>
                      <Card className={s.detailContainerInfo}>
                        <Typography>
                          Humidity: {state.main.humidity} %
                        </Typography>
                        <Typography>
                          Wind speed: {state.wind.speed} m/s
                        </Typography>
                        <Typography>
                          Wind direction: {state.wind.deg} deg
                        </Typography>
                        <Typography>
                          Wind gust: {state.wind.gust ? state.wind.gust : 0} m/s
                        </Typography>
                        <Typography>Clouds: {state.clouds.all} %</Typography>
                      </Card>
                    </Box>
                    <MyChart historyData={state.history} />
                  </Box>
                </Box>
              );
            })}
        </Card>
      </Container>
    </section>
  );
};
