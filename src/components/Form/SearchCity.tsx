import { Box, Button, FormControl } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { getCity } from "../../redux/weather/weatOperations";
import s from "./Form.module.css";

export const FormSearchCity = () => {
  const [cityForSearch, setCity] = useState<string>("");

  const dispatch = useAppDispatch();

  const getWeatherCity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCity({ cityForSearch }));
    setCity("");
  };

  const changeInputValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setCity(value);
  };

  return (
    <Box className={s.searchContainer}>
      <FormControl
        component="form"
        className={s.searchForm}
        onSubmit={getWeatherCity}
      >
        <Box
          component={"input"}
          data-testid="search-input-city"
          type={"text"}
          title="Latin letters allowed"
          pattern="^[a-zA-Zs]+$"
          value={cityForSearch}
          onChange={changeInputValue}
        />
        <Button
          className={s.searchButtonCity}
          variant="contained"
          type="submit"
          disabled={cityForSearch.length > 0 ? false : true}
        >
          Show
        </Button>
      </FormControl>
    </Box>
  );
};
