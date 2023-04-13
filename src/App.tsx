import React from 'react';
import SearchCityInput from "./features/SearchCityInput";
import CityWeather from "./features/CityWeather";
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SearchCityInput/>}>
                    <Route path='/:cityName' element={<CityWeather/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
