import logo from './logo.svg';
import { Navbar } from './component/Navbar/Navbar.jsx';
import './App.css';
import { CssBaseline, dividerClasses, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home.jsx'
import RestaurantDetails from './component/Restaurant/RestaurantDetails.jsx';

function App() {
  return (
      <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>


  <Navbar/>
        {/* <Home/> */}
        <RestaurantDetails/>
      </ThemeProvider>
  );
}

export default App;
