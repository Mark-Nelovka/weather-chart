import { Card, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import s from "./weatDet.module.css";
import MyChart from "../Chart/Chart";

export const WeatherDetails = () => {
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
          <Box className={s.detailCardHeader}>
            <Typography>Kyiv, Monday: 26 C</Typography>
            <Typography>14:15:17</Typography>
          </Box>
          <Box className={s.detailContainerInfo}>
            <Typography>Temperature: </Typography>
            <Typography>Feels like: </Typography>
            <Typography>Temperature_min: </Typography>
            <Typography>Temperature_max: </Typography>
            <Typography>Pressure: </Typography>
            <Typography>Humidity: </Typography>
            <Typography>Sea level: </Typography>
            <Typography>Wind speed: </Typography>
            <Typography>Wind direction: </Typography>
            <Typography>Wind gust: </Typography>
            <Typography>Clouds: </Typography>
            <Typography>Country: </Typography>
            <Typography>Sunrise: </Typography>
            <Typography>Sunset: </Typography>
          </Box>
          <MyChart />
        </Card>
      </Container>
    </section>
  );
};
