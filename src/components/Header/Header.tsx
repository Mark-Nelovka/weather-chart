import { AppBar, Toolbar, Typography } from "@mui/material";

interface IHeader {
  title: string;
}

export const Header = ({ title }: IHeader) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography sx={{ textAlign: "center", width: "100%", fontSize: 24 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
