import logo from './logo.svg';
import { Navbar } from './component/Navbar';
import './App.css';
import { CssBaseline, dividerClasses, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';


function App() {
  return (
      <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>


  <Navbar/>
      </ThemeProvider>
  );
}

export default App;
