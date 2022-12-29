import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteCity } from "../../redux/weather/weatOperations";
import { useAppDispatch } from "../../redux/hook";
import { useLocation } from "react-router-dom";
import { ICardsProps } from "../../interfaces/Card";
import s from "./Cards.module.css";

export const Cards = ({ updateCityHandle, item }: ICardsProps) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const deleteCityHandle = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLButtonElement;
    dispatch(deleteCity(id));
  };

  const styleForBackgroundCard = (weaterInCity: string) => {
    switch (weaterInCity) {
      case "Rain":
        return `${s.cardRain}`;
      case "Clouds":
        return `${s.cardClouds}`;
      case "Sun":
        return `${s.cardSun}`;
      default:
        return `${s.cardClear}`;
    }
  };

  return (
    <>
      {item &&
        item.length > 0 &&
        item.map((city) => {
          return (
            <Grid item md={3} key={city.id}>
              <Paper
                className={styleForBackgroundCard(city.weather[0].main)}
                elevation={2}
              >
                <Button
                  id={String(city.id)}
                  data-testid="delete-card-button"
                  onClick={deleteCityHandle}
                  className={s.deleteButton}
                >
                  {<DeleteForeverIcon id={String(city.id)} />}
                </Button>
                <Typography className={s.cardTitle}>{city.name}</Typography>
                <Typography className={s.cardSubTitle}>
                  {city.currentDate.dayInWeek}:
                  {` ${city.currentDate.day}.${city.currentDate.mounth}.${city.currentDate.year}`}
                </Typography>
                <Box className={s.containerInfo}>
                  <Box className={s.containerItemsInfo}>
                    <Typography component={"span"}>
                      {Math.floor(city.main.temp_min)}
                    </Typography>
                    <Typography>Min</Typography>
                  </Box>
                  <Box className={s.containerItemsInfo}>
                    <Typography component={"span"}>
                      {Math.floor(city.main.temp_max)}
                    </Typography>
                    <Typography>Max</Typography>
                  </Box>
                </Box>
                <Typography className={s.currentTimeContainer}>
                  Current time:
                  {` ${city.currentDate.hours}:${city.currentDate.minutes}`}
                </Typography>
                <Box className={s.containerButtonInfo}>
                  <Button
                    onClick={updateCityHandle}
                    data-testid="update-card-button"
                    id={city.name}
                    variant="contained"
                  >
                    {<AutorenewIcon id={String(city.id)} />}
                  </Button>
                  <Link to={`${pathname}/${city.name}`} state={city}>
                    <Button variant="contained">More info</Button>
                  </Link>
                </Box>
              </Paper>
            </Grid>
          );
        })}
    </>
  );
};
