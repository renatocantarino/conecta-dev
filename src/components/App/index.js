import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import theme from "../../theme";
import '../../Mocks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
