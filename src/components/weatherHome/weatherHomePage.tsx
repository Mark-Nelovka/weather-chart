import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/weather/weatSlice";
import { getCity } from "../../redux/weather/weatOperations";

export const WeatherHomePage = () => {
  const valueState = useSelector((state: IState) => state.weather);
  const dispatch = useDispatch();
  console.log(valueState);
  const wordCity = (e: any) => {
    const { value } = e.target;
    dispatch(getCity(value));
  };

  return (
    <section>
      <input type="input" onChange={wordCity} />
    </section>
  );
};
