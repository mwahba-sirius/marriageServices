import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import { FianceAddition, PersonType } from './steps/fianceAddition';
import { Button, createMuiTheme } from '@mui/material';
import { WitnessAddition } from './steps/witnessAddition';
import { PreviousFianceModal } from './steps/previousFiance';
import { ClientAddition } from './steps/clientAddition';
import { Stepper } from './components/Stepper';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';


import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { MosadqaData } from './steps/MosadqaData';
import { IStepRef } from './utils';
import { Provider, useDispatch } from 'react-redux';
import { marraigeSliceReducer, marriageSliceActions } from './store/marriageReducer';
import { store } from './store';
import { MarraigeService } from './services/marriageService';


const theme = createMuiTheme({
  direction: 'rtl',
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});



function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <Provider store={store}>
        <MarraigeService />
      </Provider>
    </CacheProvider>
  );
}

export default App;
