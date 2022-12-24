export interface IFormProps {
  getWeatherCity: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  changeInputValue: (event: React.ChangeEvent) => void;
  city: string;
}