import React from "react";

import styled from "styled-components";
import {Provider} from "react-redux";

import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./theme";
import {store} from "./store";
import {Sidebar} from "./components/Sidebar";
import GlobalStyles from "./globalStyles";

const Layout = styled.div`
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Layout>
          <Sidebar />
        </Layout>

        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
