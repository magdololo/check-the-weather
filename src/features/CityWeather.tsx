import {useParams} from "react-router-dom";
import {useCityWeatherQuery} from "./weatherSlice";
import {skipToken} from "@reduxjs/toolkit/query";
import CompareWithCities from "./CompareWithCities";
import {
    CityName,
    Box,
    CityWeatherContainer,
    PropertiesBox,
    TextField,
    WeatherProperties, ErrorMessage,
} from "../styles/CityWeather.components";
import {TailSpin} from "react-loader-spinner";

export default function CityWeather() {
    const {cityName} = useParams()
    const {
        data: cityWeather,
        isLoading: cityWeatherIsLoading,
        error: cityWeatherError,
        isError: cityWeatherIsError
    } = useCityWeatherQuery(cityName && cityName !== "" ? cityName : skipToken)
    console.log(cityWeatherError)
    return (
        <>
            {cityWeatherIsLoading && <TailSpin color={"#5f9ea0"}/>}
            {cityWeatherIsError && cityWeatherError && "message" in cityWeatherError &&
                <ErrorMessage>{cityWeatherError.message}</ErrorMessage>}
            {!cityWeatherIsError && cityWeather &&
                <>
                    <CityWeatherContainer>
                        <Box><CityName>{cityWeather.name}</CityName></Box>
                        <Box>
                            <PropertiesBox>
                                <TextField><WeatherProperties>Temperatura: </WeatherProperties>{cityWeather.temperature} &#176;C</TextField>
                                <TextField><WeatherProperties>Wiatr: </WeatherProperties>{cityWeather.wind} m/s</TextField>
                                <TextField><WeatherProperties>Wilgotność: </WeatherProperties> {cityWeather.humidity} %</TextField>
                            </PropertiesBox>
                        </Box>
                    </CityWeatherContainer>
                    <CompareWithCities mainCity={cityWeather}/>
                </>
            }
        </>
    )
}