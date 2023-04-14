import {CityWeather, useCityWeatherQuery} from "./weatherSlice";
import {
    Box, CityDiff,
    CityName,
    TextField,
    WeatherProperties
} from "../styles/CityCompare.components";
import {Divider} from "../styles/CompareWithCities.components";
import {ErrorMessage} from "../styles/CityWeather.components";

interface CityCompareProps {
    mainCity: CityWeather,
    cityToCompare: string
}

export default function CityCompare({mainCity, cityToCompare}: CityCompareProps) {
    const {
        data: cityWeatherToCompare,
        error: cityWeatherToCompareError,
        isError: cityWeatherToCompareIsError
    } = useCityWeatherQuery(cityToCompare)
    let tempDiff = 0
    let windDiff = 0
    let humDiff = 0
    if (cityWeatherToCompare) tempDiff = Math.abs(mainCity.temperature - cityWeatherToCompare.temperature)
    if (cityWeatherToCompare) windDiff = Math.abs(mainCity.wind - cityWeatherToCompare.wind)
    if (cityWeatherToCompare) humDiff = Math.abs(mainCity.humidity - cityWeatherToCompare.humidity)

    return (
        <>
            {cityWeatherToCompareIsError && cityWeatherToCompareError && "message" in cityWeatherToCompareError &&
                <ErrorMessage>{cityWeatherToCompareError.message}</ErrorMessage>}
            {cityWeatherToCompare &&
                <Box>
                    <CityName>{cityToCompare}</CityName>
                    <TextField><WeatherProperties>Temperatura: </WeatherProperties> {cityWeatherToCompare.temperature} &#176;C</TextField>
                    <CityDiff>
                        {mainCity.temperature - cityWeatherToCompare.temperature !== 0 &&
                            <span>{mainCity.temperature - cityWeatherToCompare.temperature > 0 ? `( niższa o ${tempDiff}` : `( wyższa o ${tempDiff}`} &#176;C )</span>
                        }
                    </CityDiff>
                    <TextField><WeatherProperties>Wiatr: </WeatherProperties> {cityWeatherToCompare.wind} m/s</TextField>
                    <CityDiff>
                        {mainCity.wind - cityWeatherToCompare.wind !== 0 &&
                            <span>{mainCity.wind - cityWeatherToCompare.wind > 0 ? `( słabszy o ${windDiff}` : `( silniejszy o ${windDiff}`} m/s )</span>
                        }
                    </CityDiff>
                    <TextField><WeatherProperties>Wilgotność: </WeatherProperties> {cityWeatherToCompare.humidity} %</TextField>
                    <CityDiff>
                        {mainCity.humidity - cityWeatherToCompare.humidity !== 0 &&
                            <span>{mainCity.humidity - cityWeatherToCompare.humidity > 0 ? `( mniejsza o ${humDiff}` : `( większa o ${humDiff}`} %)</span>
                        }
                    </CityDiff>
                </Box>
            }
        </>
    )
}