import { Box, Button, TextField, FormControl } from "@mui/material";
import { IFormProps } from "../../interfaces/Form";
import s from "./Form.module.css";

export const FormSearchCity = ({
  getWeatherCity,
  changeInputValue,
  cityForSearch,
}: IFormProps) => {
  return (
    <Box className={s.searchContainer}>
      <FormControl
        component="form"
        className={s.searchForm}
        onSubmit={getWeatherCity}
      >
        <TextField
          id="outlined-basic"
          label="Write city"
          variant="outlined"
          value={cityForSearch}
          size="small"
          onChange={changeInputValue}
        />
        <Button
          className={s.searchButtonCity}
          variant="contained"
          type="submit"
        >
          Show
        </Button>
      </FormControl>
    </Box>
  );
};
