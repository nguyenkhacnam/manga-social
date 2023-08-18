import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentsReducer from './comments/commentsSlice'
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import userSlice from "./Feature/userSlice";
import mangaData from "./Feature/mangaData";

const reduxStateSyncConfig = {
  predicate: (action) => {
    const blacklist = [PERSIST, PURGE, REHYDRATE];
    if (typeof action !== "function") {
      if (Array.isArray(blacklist)) {
        return blacklist.indexOf(action.type) < 0;
      }
    }
    return false;
  },
};

const stateSyncMiddleware = [createStateSyncMiddleware(reduxStateSyncConfig)];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice,
    mangaData: mangaData,
    comments: commentsReducer,
  })
);

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(stateSyncMiddleware);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
initMessageListener(store);
export const persistor = persistStore(store);
