import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IClient } from '../models/client'
import { IPerson, IPreviousFiance } from '../models/person';
import { IMosadqa } from '../models/mosadqa';

// Define a type for the slice state
export interface IMarriageState {
    client? : IClient;
    husband? : IPerson & {previousFiances : IPreviousFiance[]};
    wife? : IPerson & {previousFiances : IPreviousFiance[]};
    witnesses : IPerson[];
    mosadqa?: IMosadqa;
}

// Define the initial state using that type
const initialState: IMarriageState= {
    witnesses : []
}

export const marriageSlice = createSlice({
  name: 'marriageSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setClient(state,payload : PayloadAction<IClient>) {
        state.client = payload.payload;
    },
    setHusband(state,payload : PayloadAction<IPerson & {previousFiances : IPreviousFiance[]}>) {
        state.husband = payload.payload;
    },
    setWife(state,payload : PayloadAction<IPerson & {previousFiances : IPreviousFiance[]}>) {
        state.wife= payload.payload;
    },
    setWitnesses(state,payload : PayloadAction<IPerson[]>) {
        state.witnesses = payload.payload;
    },
    setMosadqa(state,payload : PayloadAction<IMosadqa>) {
        state.mosadqa= payload.payload;
    },
  },
})

export const marriageSliceActions = marriageSlice.actions
export const marraigeSliceReducer = marriageSlice.reducer;

