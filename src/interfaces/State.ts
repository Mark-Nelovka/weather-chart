export interface IItemsWeather {
  id: number,
  coord: {
    lat: number,
    lon: number
  },
  weather: {
    main: string
  }[],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    visibility: number
  },
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  sys: {
    country: string
  },
  name: string,
  currentDate: {
    day: number,
    mounth: number,
    year: number,
    hours: number,
    minutes: number,
    dayInWeek: string
  }
  dtCreated: number
}

export interface IStateWeather {
    weather: IItemsWeather[],
    pending: boolean,
}

export interface IItemsWeatherDetails {
  id: number,
  coord: {
    lat: number,
    lon: number
  },
  weather: {
    main: string
  }[],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    visibility: number
  },
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  sys: {
    country: string
  },
  name: string,
  currentDate: {
    day: number,
    mounth: number,
    year: number,
    hours: number,
    minutes: number,
    dayInWeek: string
  }
  dtCreated: number,
  history: {
    main: {
      temp: number
    }
  }[];
}

export interface IStateWeatherDetails {
  weatherDetails: IItemsWeatherDetails[],
  pending: boolean,
}