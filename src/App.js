import React from "react";
import { AppStateProvider } from "./utilities/app-state";
import { HashRouter } from "react-router-dom";
import { GIClassNameProvider } from "./utilities/gi-className";

import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

import RouterIndex from "./routes/index";
import reducers from "./reducers";

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: "GI-"
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#ffc0cb",
      main: "#4a4a4a",
      dark: "#4a4a4a",
      contrastText: "#ffc0cb"
    },
    secondary: {
      main: "#4a4a4a"
    }
  },
  overrides: {}
});

function App() {
  return (
    <AppStateProvider reducer={reducers}>
      <GIClassNameProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <HashRouter>
            <RouterIndex />
          </HashRouter>
        </MuiThemeProvider>
      </GIClassNameProvider>
    </AppStateProvider>
  );
}

export default App;
