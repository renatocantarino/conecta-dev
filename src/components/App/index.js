import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import theme from "../../theme";
import '../../Mocks';
import store from '../../state/store';
import GuestRoute from "../../routes/GuestRoute";
import Auth from "../Auth";



function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/sign-in" element={<GuestRoute />} />
              <Route path="*" element={<GuestRoute />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
