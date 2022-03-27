import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/style/theme";
import { CssBaseline } from "@mui/material";
import Header from "./layouts/Header";
import Home from "./views/Home/Home";
//import Products from "./views/Products/Products";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
