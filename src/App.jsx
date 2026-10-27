import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbarCom from "./Components/NavBaarComp";
import Home from "./Screen/Home/HomeScreen";
import Footer from "./SECTION/FooterSection/FoterS";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbarCom />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
