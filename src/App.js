import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import TradingChart from "./components/IndividualPage/TradingChart/TradingChart";
import PostThread from "./components/IndividualPage/PostThread/PostThread";
import IndividualPage from "./pages/IndividualPage/IndividualPage";
import LaunchNewCoin from "./pages/LaunchNewCoin/LaunchNewCoin";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individual-page" element={<IndividualPage />} />
        <Route path="/launch-coin" element={<LaunchNewCoin />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
