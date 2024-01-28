
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface IPopupState{
    show : boolean;
    currentElement? : React.ReactNode;
}

// Define the initial state using that type
const initialState: IPopupState = {
    show : false
}

export const popupSlice = createSlice({
  name: 'popupSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showPopup(state,action : PayloadAction<React.ReactNode>) {
        state.show = true;
        state.currentElement = action.payload;
    },
    closePopup(state) {
        state.show = false;
    }
  },
})

export const popupActions = popupSlice.actions;
export const popupReducer = popupSlice.reducer;

