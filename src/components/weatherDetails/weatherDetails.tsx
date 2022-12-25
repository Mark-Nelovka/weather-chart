import { Card, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import s from "./weatDet.module.css";
import MyChart from "../Chart/Chart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getCityWithDetails,
  cleanStore,
} from "../../redux/weatherDetails/weatDetOperations";

export const WeatherDetails = () => {
  const cityWithState = useAppSelector((state) => state.weatherDetails);

  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCityWithDetails({ cityForSearch: params.city! }));
    return () => {
      dispatch(cleanStore());
    };
  }, [params, dispatch]);

  return (
    <section
      style={{
        backgroundColor: "#ddecf9",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <Container>
        <Card>
          {cityWithState.weatherDetails.length > 0 &&
            cityWithState.weatherDetails.map((state) => {
              return (
                <Box key={state.id}>
                  <Box className={s.detailCardHeader}>
                    <Typography>
                      {`${state.currentDate.dayInWeek}:
               ${Math.floor(state.main.temp)}
              ${" C"}`}
                    </Typography>
                    <Typography>{`${state.currentDate.hours}:${state.currentDate.minutes}`}</Typography>
                  </Box>
                  <Box className={s.globalContainer}>
                    <Box className={s.detailContainerCard}>
                      <Card className={s.detailContainerInfo}>
                        <Typography>
                          Temperature: {Math.floor(state.main.temp)} C
                        </Typography>
                        <Typography>
                          Feels like: {Math.floor(state.main.feels_like)} C
                        </Typography>
                        <Typography>
                          Temperature_min: {Math.floor(state.main.temp_min)} C
                        </Typography>
                        <Typography>
                          Temperature_max: {Math.floor(state.main.temp_max)} C
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
                          Wind gust: {state.wind.gust} m/s
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
