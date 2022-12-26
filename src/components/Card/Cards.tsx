import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ICardsProps } from "../../interfaces/Card";
import s from "./Cards.module.css";

export const Cards = ({
  city,
  deleteCityHandle,
  updateCityHandle,
  pathname,
}: ICardsProps) => {
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
    <Grid item md={3} key={city.id}>
      <Paper
        className={styleForBackgroundCard(city.weather[0].main)}
        elevation={2}
      >
        <Button
          id={String(city.id)}
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
          <Button onClick={updateCityHandle} id={city.name} variant="contained">
            {<AutorenewIcon id={String(city.id)} />}
          </Button>
          <Link to={`${pathname}/${city.name}`}>
            <Button variant="contained">More info</Button>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};
