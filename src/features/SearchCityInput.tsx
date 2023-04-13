import React from "react";
import {Box, Button, Input} from "../styles/SearchCityInput.components";
import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

export default function SearchCityInput() {
    const [cityName, setCityName] = useState<string>("")
    console.log(cityName)
    const navigate = useNavigate()
    const handleSearchClick = () => {
        navigate(`/${cityName}`)
    }
    return (
        <>
            <Box>
                <Input
                    id="cityInput"
                    placeholder="Wpisz miasto"
                    name={'cityName'}
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCityName(e.target.value)
                    }}
                    value={cityName}/>
                <Button onClick={handleSearchClick}>Szukaj</Button>
            </Box>
            <Outlet/>
        </>
    )
}