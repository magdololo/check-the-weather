import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {weatherSlice} from "../features/weatherSlice";

export const store = configureStore({
    reducer: {
        [weatherSlice.reducerPath]: weatherSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherSlice.middleware)
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

