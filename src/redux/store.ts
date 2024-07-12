import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import { baseAPI } from "./API/baseAPI";
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
import storage from "redux-persist/lib/storage";
// ...
const persistConfig = {
  key: "prodID",
  storage,
};

const persistedProdIDReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    product: persistedProdIDReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
