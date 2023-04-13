import {useParams} from "react-router-dom";
import {useCityWeatherQuery} from "./weatherSlice";
import {skipToken} from "@reduxjs/toolkit/query";
import CompareWithCities from "./CompareWithCities";
import {
    CityName,
    CityWeatherBox,
    CityWeatherContainer,
    CityWeatherPropertiesBox,
    CityWeatherTextField,
    WeatherProperties,
} from "../styles/CityWeather.components";

export default function CityWeather() {
    const {cityName} = useParams()
    const {
        data: cityWeather,
        error: cityWeatherError,
        isError: cityWeatherIsError
    } = useCityWeatherQuery(cityName && cityName !== "" ? cityName : skipToken)

    return (
        <>
            {cityWeather &&
                <>
                    <CityWeatherContainer>
                        <CityWeatherBox><CityName>{cityWeather.name}</CityName></CityWeatherBox>
                        <CityWeatherBox>
                            <CityWeatherPropertiesBox>
                                <CityWeatherTextField><WeatherProperties>Temperatura: </WeatherProperties>{cityWeather.temperature} &#176;C</CityWeatherTextField>
                                <CityWeatherTextField><WeatherProperties>Wiatr: </WeatherProperties>{cityWeather.wind} m/s</CityWeatherTextField>
                                <CityWeatherTextField><WeatherProperties>Wilgotność: </WeatherProperties> {cityWeather.humidity} %</CityWeatherTextField>
                            </CityWeatherPropertiesBox>
                        </CityWeatherBox>
                    </CityWeatherContainer>
                    <CompareWithCities mainCity={cityWeather}/>
                </>
            }
        </>
    )
}