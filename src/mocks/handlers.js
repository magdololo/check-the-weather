import {rest} from 'msw';
import {setupServer} from "msw/node";


export const handlers = [
    rest.get('https://api.openweathermap.org/data/2.5/weather', (req, res, ctx) => {


        return res(
            ctx.status(200),
            ctx.json({
                name: "",
                temperature: "",
                humidity: "",
                wind: ''
            })
        )

    }),

    ,

]