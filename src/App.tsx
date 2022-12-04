import styled from "styled-components";
import {Provider} from "react-redux";

import {ThemeProvider} from "styled-components";

import {store} from "./store";
import {defaultTheme} from "./theme";
import GlobalStyles from "./globalStyles";

import {Tools, Sidebar} from "./entities";

const Layout = styled.div`
  height: 100vh;
  display: flex;
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <Layout>
        <Sidebar />
        <Tools />
      </Layout>

      <GlobalStyles />
    </Provider>
  </ThemeProvider>
);

export default App;
