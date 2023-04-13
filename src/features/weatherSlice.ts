import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface CityWeather {
    name: string
    temperature: number
    wind: number,
    humidity: number

}

export const weatherSlice = createApi({
    reducerPath: "weather",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org"}),
    tagTypes: ["CityWeather"],
    keepUnusedDataFor: 3600,
    endpoints: (build) => ({
        cityWeather: build.query<CityWeather, string>({
            query: (cityName) => `/data/2.5/weather?q=${cityName}&lang=pl&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
            transformResponse: (response: {
                name: string,
                main: { temp: number, humidity: number },
                wind: { speed: number }
            }, meta, arg) => {
                const cityWeather = {
                    name: response.name,
                    temperature: Math.floor(response.main.temp),
                    humidity: response.main.humidity,
                    wind: Math.floor(response.wind.speed)
                }
                return cityWeather
            },
        })
    }),
});

export const {useCityWeatherQuery} = weatherSlice