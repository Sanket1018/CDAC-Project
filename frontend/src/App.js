import logo from './logo.svg';
import { Navbar } from './component/Navbar';
import './App.css';
import { CssBaseline, dividerClasses, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home.jsx'

function App() {
  return (
      <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>


  <Navbar/>
        <Home/>
      </ThemeProvider>
  );
}

export default App;
