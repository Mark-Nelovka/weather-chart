import { Box, Button, FormControl, TextField } from "@mui/material";
import Notiflix from "notiflix";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { getCity } from "../../redux/weather/weatOperations";
import s from "./Form.module.css";

export const FormSearchCity = () => {
  const [cityForSearch, setCityForSearch] = useState<string>("");
  const [cityForSearchError, setCityForSearchError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const getWeatherCity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getCity({ cityForSearch }));
    setCityForSearch("");
  };

  const changeInputValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    const regExp = "^[a-zA-Z]";
    if (!value.search(regExp) || cityForSearch.length === 1) {
      setCityForSearch(value);
      setCityForSearchError(false);
      return;
    }
    Notiflix.Notify.info("Latin letters allowed");
    setCityForSearchError(true);
  };

  return (
    <Box className={s.searchContainer}>
      <FormControl
        component="form"
        className={s.searchForm}
        onSubmit={getWeatherCity}
      >
        <TextField
          error={cityForSearchError ? true : false}
          id="outlined-basic"
          label="Search city"
          data-testid="search-input-city"
          variant="outlined"
          title="Latin letters allowed"
          value={cityForSearch}
          onChange={changeInputValue}
        />
        <Button
          className={s.searchButtonCity}
          variant="contained"
          type="submit"
          data-testid="button-form-submit"
          disabled={cityForSearch.length > 0 ? false : true}
        >
          Show
        </Button>
      </FormControl>
    </Box>
  );
};
