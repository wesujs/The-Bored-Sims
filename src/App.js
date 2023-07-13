import { ThemeProvider } from "styled-components";
import Nav from './components/Nav'
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Timeline from './components/Sections/Timeline'
import Shows from './components/Sections/Shows'
import Creators from './components/Sections/Creators'
import Faq from './components/Sections/Faq'
import Footer from './components/Footer'
import GlobalStyles from "./styles/GlobalStyles";
import {dark, light} from './styles/Themes'
import ScrollToTop from "./components/ScrollToTop";
import './App.css'


function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={light}>
      <Nav />
      <Home />
      <About />
      <Timeline />
      <Shows />
      <Creators />
      <Faq />
      <Footer />
    </ThemeProvider>
    <ScrollToTop />
    </>
  );
}

export default App;
