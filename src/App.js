import React from 'react';
import { AppStateProvider } from "./utilities/app-state"
import { HashRouter } from 'react-router-dom'

import RouterIndex from './routes/index'

import reducers from './reducers'

function App() {
  return (
    <AppStateProvider reducer={reducers} >
      <HashRouter>
        <RouterIndex />
      </HashRouter>
    </AppStateProvider>
  );
}

export default App;
