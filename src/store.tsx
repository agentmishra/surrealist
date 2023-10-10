import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configReducer } from "./stores/config";
import { databaseReducer } from "./stores/database";
import { interfaceReducer } from "./stores/interface";

export const store = configureStore({
	reducer: {
		config: configReducer,
		database: databaseReducer,
		interface: interfaceReducer,
	}
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreActions = typeof store.dispatch;

export const useStoreValue: TypedUseSelectorHook<StoreState> = useSelector;
