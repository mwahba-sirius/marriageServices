import './App.css';
import { Button, createMuiTheme } from '@mui/material';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';


import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { MarraigeService } from './services/marriageService';
import { PopupSystem } from './components/popupSystem';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MosadqaService } from './services/mosadqaService';


const theme = createMuiTheme({
  direction: 'rtl',
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const router = createBrowserRouter([
  {
    path: "/marriage",
    element: <MarraigeService />,
  },
  {
    path: "/mosadqa",
    element: <MosadqaService />,
  },
]);


function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <Provider store={store}>
        <div style={{ width: "100%", height: "5rem", backgroundColor: "#E9F1FD" }} />
        <RouterProvider router={router} />

        <PopupSystem />
      </Provider>
    </CacheProvider>
  );
}

export default App;
