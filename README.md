# Check the weather

## Application description

Check the weather is simple web application that allows you to check actual weather for the city that you searched for.
It will also show you weather for few pre-configured cities and show differences for temperature, humidity and wind
speed.

## Local development setup

Due to usage of external API(openweathermap.org) for application to be running we need to have dedicated api key.
To use it you need to create new file in main project folder named `.env`.
Add to file below line and replace `YOUR_API_KEY` with api key provided by openweathermap.org
`REACT_APP_WEATHER_API_KEY=YOUR_API_KEY`

### To run application

`npm install`
`npm start`

### Technologies/libraries

Initial setup done by Create React App

- Languages: `Typescript`
- Libraries: `React`, `Redux-toolkit`, `React-router`
- Styling: `styled components`
- Testing: `Jest`

### Testing

You can run unit tests by `npm run test`

## Assumptions

- Cities to compare - predefined list of cities stored as array in `config.ts`, depending on the needs list can be
  extended
- Language - currently only one language supported, pl, but api can support other languages if needed and application
  can use libraries like `i18next` to be multilingual
- Units - application is set to metric system but if needed can be changed
- Weather properties - currently only temperature, humidity and wind speed are shown in application but api provides
  much more data that could be used to show more detailed information about the weather for the given cities
- City not found - when user searches for a city that is not supported by the api application shows information that the
  city is not available

## Features that can be added

- Autocomplete - application could show suggestions for the city name when user types in search input. That would
  require to use other data source to get the list of available cities.
- Selectable list of cities to compare - user could define list of cities with which main city weather would be compared