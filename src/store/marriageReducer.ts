import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IClient } from '../models/client'
import { IPerson, IPreviousFiance } from '../models/person';
import { IMosadqa } from '../models/mosadqa';
import { IAttachment } from '../models/attachments';
import { IDivorceData } from '../models/divorcedata';
import { IRevisionData } from '../models/revisiondata';

// Define a type for the slice state
export interface IMarriageState {
    client? : IClient;
    husband? : IPerson & {previousFiances : IPreviousFiance[]};
    wife? : IPerson & {previousFiances : IPreviousFiance[]};
    witnesses : IPerson[];
    mosadqa?: IMosadqa;
    divorce? : IDivorceData;
    revision? : IRevisionData;
    attachment?: IAttachment;
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
    setRevisionData(state,payload : PayloadAction<IRevisionData>) {
        state.revision = payload.payload;
    },
    setClient(state,payload : PayloadAction<IClient>) {
        state.client = payload.payload;
    },
    setHusband(state,payload : PayloadAction<IPerson & {previousFiances : IPreviousFiance[]}>) {
        state.husband = payload.payload;
    },
    setWife(state,payload : PayloadAction<IPerson & {previousFiances : IPreviousFiance[]}>) {
        state.wife= payload.payload;
    },
    setDivorceData(state,payload : PayloadAction<IDivorceData>) {
        state.divorce = payload.payload;
    },
    setWitnesses(state,payload : PayloadAction<IPerson[]>) {
        state.witnesses = payload.payload;
    },
    setMosadqa(state,payload : PayloadAction<IMosadqa>) {
        state.mosadqa= payload.payload;
    },
    setAttachment(state,payload : PayloadAction<IAttachment>) {
        state.attachment= payload.payload;
    },
  },
})

export const marriageSliceActions = marriageSlice.actions
export const marraigeSliceReducer = marriageSlice.reducer;

