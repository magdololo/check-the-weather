import {citiesData} from "../config";
import {CityWeather} from "./weatherSlice";
import CityCompare from "./CityCompare";
import {PanelWithCities} from "../styles/CompareWithCities.components";

interface CompareWithCitiesProps {
    mainCity: CityWeather
}

export default function CompareWithCities({mainCity}: CompareWithCitiesProps) {

    return (
        <>
            <PanelWithCities>
                {citiesData.map(city =>
                    <CityCompare key={city.name} mainCity={mainCity} cityToCompare={city.name}/>
                )}
            </PanelWithCities>
        </>
    )
}