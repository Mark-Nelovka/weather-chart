import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            fontSize: 28,
            letterSpacing: 1.1,
          }}
        >
          Welcome to weather website | Thanks that remember us
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
