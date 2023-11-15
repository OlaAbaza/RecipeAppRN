// store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Define the state type
interface FavoriteState {
  ids: string[];
}

// Initial state
const initialState: FavoriteState = {
  ids: [],
};

// Create a slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("qq" + state.ids);

      state.ids.push(action.payload.ids);
      console.log("oop" + state.ids);
    },
    deleteFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

// Export actions and reducer
export const { add, deleteFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

// Configure and export the Redux store
export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    // Add other reducers if needed
  },
});

// Create a type for RootState
export type RootState = ReturnType<typeof store.getState>;

// Create a typed useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export useDispatch hook with correct type
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
