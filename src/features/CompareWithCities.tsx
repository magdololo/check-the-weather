import {citiesData} from "../config";
import {CityWeather} from "./weatherSlice";
import CityCompare from "./CityCompare";
import {Divider, PanelWithCities, Subtitle} from "../styles/CompareWithCities.components";

interface CompareWithCitiesProps {
    mainCity: CityWeather
}

export default function CompareWithCities({mainCity}: CompareWithCitiesProps) {

    return (
        <>
            <Divider/>
            <Subtitle>Porównanie z innymi miastami ze świata</Subtitle>
            <PanelWithCities title={"panel"}>
                {citiesData.map(city =>
                    <CityCompare key={city.name} mainCity={mainCity} cityToCompare={city.name}/>
                )}
            </PanelWithCities>
        </>
    )
}