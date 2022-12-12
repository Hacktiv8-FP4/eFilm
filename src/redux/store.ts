import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import productsReducer from './product';

const persistConfig = {
  storage,
  key: 'root',
};

const rootReducer = combineReducers({
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

const persistor = persistStore(store);
export const makeStore = () => store;
export { persistor };

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
