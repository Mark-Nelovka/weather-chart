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
          <Box className={s.globalContainer}>
            <Box className={s.detailContainerCard}>
              <Card className={s.detailContainerInfo}>
                <Typography>Temperature: 26C</Typography>
                <Typography>Feels like: 28C</Typography>
                <Typography>Temperature_min: 24C</Typography>
                <Typography>Temperature_max: 30C</Typography>
                <Typography>Pressure: 1015 hPa</Typography>
              </Card>
              <Box className={s.detailContainerCenter}>
                <Typography>Ukraine</Typography>
                <Box className={s.timeContainer}>
                  <Box>
                    <Box className={s.boxSun}></Box>
                    <Typography component={"span"}>7:00</Typography>
                  </Box>
                  <Box>
                    <Box className={s.boxMoon}></Box>
                    <Typography component={"span"}>18:00</Typography>
                  </Box>
                </Box>
              </Box>
              <Card className={s.detailContainerInfo}>
                <Typography>Humidity: 64%</Typography>
                <Typography>Sea level: 1015 hPa</Typography>
                <Typography>Wind speed: 0.62 m/s</Typography>
                <Typography>Wind direction: 349 deg</Typography>
                <Typography>Wind gust: 1.18 m/s</Typography>
              </Card>
            </Box>
            <MyChart />
          </Box>
        </Card>
      </Container>
    </section>
  );
};
