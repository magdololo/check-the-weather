import {CityWeather, useCityWeatherQuery} from "./weatherSlice";
import {
    CompareCityBox, CompareCityDiff,
    CompareCityName,
    CompareCityTextField,
    CompareCityWeatherProperties
} from "../styles/CityCompare.components";

interface CityCompareProps {
    mainCity: CityWeather,
    cityToCompare: string
}

export default function CityCompare({mainCity, cityToCompare}: CityCompareProps) {
    const {
        data: cityWeatherToCompare,
        error: city1WeatherError,
        isError: city1WeatherIsError
    } = useCityWeatherQuery(cityToCompare)
    let tempDiff = 0
    let windDiff = 0
    let humDiff = 0
    if (cityWeatherToCompare) tempDiff = Math.abs(mainCity.temperature - cityWeatherToCompare.temperature)
    if (cityWeatherToCompare) windDiff = Math.abs(mainCity.wind - cityWeatherToCompare.wind)
    if (cityWeatherToCompare) humDiff = Math.abs(mainCity.humidity - cityWeatherToCompare.humidity)

    return (
        <>
            {cityWeatherToCompare &&
                <CompareCityBox>
                    <CompareCityName>{cityToCompare}</CompareCityName>
                    <CompareCityTextField><CompareCityWeatherProperties>Temperatura: </CompareCityWeatherProperties> {cityWeatherToCompare.temperature} &#176;C</CompareCityTextField>
                    <CompareCityDiff>
                        {mainCity.temperature - cityWeatherToCompare.temperature !== 0 &&
                            <span>{mainCity.temperature - cityWeatherToCompare.temperature > 0 ? `( niższa o ${tempDiff}` : `( wyższa o ${tempDiff}`} &#176;C )</span>
                        }
                    </CompareCityDiff>
                    <CompareCityTextField><CompareCityWeatherProperties>Wiatr: </CompareCityWeatherProperties> {cityWeatherToCompare.wind} m/s</CompareCityTextField>
                    <CompareCityDiff>
                        {mainCity.wind - cityWeatherToCompare.wind !== 0 &&
                            <span>{mainCity.wind - cityWeatherToCompare.wind > 0 ? `( słabszy o ${windDiff}` : `( silniejszy o ${windDiff}`} m/s )</span>
                        }
                    </CompareCityDiff>
                    <CompareCityTextField><CompareCityWeatherProperties>Wilgotność: </CompareCityWeatherProperties> {cityWeatherToCompare.humidity} %</CompareCityTextField>
                    <CompareCityDiff>
                        {mainCity.humidity - cityWeatherToCompare.humidity !== 0 &&
                            <span>{mainCity.humidity - cityWeatherToCompare.humidity > 0 ? `( mniejsza o ${humDiff}` : `( większa o ${humDiff}`} %)</span>
                        }
                    </CompareCityDiff>
                </CompareCityBox>
            }
        </>
    )
}