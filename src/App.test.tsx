import React from 'react';
import {render, screen, within} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupServer} from "msw/node";
import {rest} from "msw";
import userEvent from '@testing-library/user-event';
//import {handlers} from "./mocks/handlers";

const searchCity = "searchCity"

interface WeatherApiResponse {
    name: string,
    main: {
        temp: number,
        humidity: number
    },
    wind: {
        speed: number
    }
}

interface WeatherApiResponseError {
    cod: number,
    message: string
}

export const handlers = [
    rest.get('https://api.openweathermap.org/data/2.5/weather', (req, res, ctx) => {
        let cityWeather = req.url.searchParams.get('q')
        console.log(res)
        let cityWeatherResponse: WeatherApiResponse | WeatherApiResponseError | null = null
        switch (cityWeather) {
            case 'searchCity':
                cityWeatherResponse =
                    {
                        name: "searchCity",
                        main: {
                            temp: 18.56,
                            humidity: 68
                        },
                        wind: {
                            speed: 6.62
                        }
                    }
                break;
            case 'Londyn':
                cityWeatherResponse =
                    {
                        name: "Londyn",
                        main: {
                            temp: 18.56,
                            humidity: 68
                        },
                        wind: {
                            speed: 6.62
                        }
                    }
                break;
            case 'Rzym' :
                cityWeatherResponse =
                    {
                        name: "Rzym",
                        main: {
                            temp: 18.56,
                            humidity: 68
                        },
                        wind: {
                            speed: 6.62
                        }
                    }
                break;
            case 'Paryż' :
                cityWeatherResponse =
                    {
                        name: "Paryż",
                        main: {
                            temp: 18.56,
                            humidity: 68
                        },
                        wind: {
                            speed: 6.62
                        }
                    }
                break;
            default :
                cityWeatherResponse =
                    {
                        cod: 404,
                        message: "Nie ma takiego miasta!"
                    }
                break;
        }

        return res(
            ctx.status('message' in cityWeatherResponse ? 404 : 200),
            ctx.json(cityWeatherResponse)
        )
    }),

]
const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});
afterEach(() => {
});
afterAll(() => {
    server.close()
});

const renderComponentWithProvider = () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
}
const user = userEvent.setup()
test('it shows input and button', async () => {
    renderComponentWithProvider();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument()
});

test('it shows cityWeather when user filled cityName and clicked button', async () => {
    renderComponentWithProvider();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    await user.click(input);
    await user.keyboard(searchCity)
    await user.click(button)
    screen.debug()
    const nameSelectedCity = await screen.findByText(searchCity)
    expect(nameSelectedCity).toBeInTheDocument()
})

test('it shows three cities to compare', async () => {
    renderComponentWithProvider();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    await user.click(input);
    await user.keyboard(searchCity)
    await user.click(button)

    const citiesToCompare = await within(await screen.findByTitle('panel')).findAllByRole('heading')
    expect(citiesToCompare.length).toBe(3)

})
test('it shows error when user filled does non-existent city', async () => {
    renderComponentWithProvider();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    await user.click(input);
    await user.keyboard('does not-existend city')
    await user.click(button)

    const errorMessage = await screen.findByText(/Nie ma takiego miasta./i)
    expect(errorMessage).toBeInTheDocument()

})


