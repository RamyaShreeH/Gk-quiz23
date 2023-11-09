import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Score from "./Components/Score"
import NotAttempted from "./pages/NotAttempted";
import StatesAndCapital from "./pages/StatesAndCapital";
import StatesAndCapitalSol from "./pages/StatesAndCapitalSol";
import History from "./pages/History";
import HistorySol from "./pages/HistorySol";
import Geography from "./pages/Geography";
import GeographySol from "./pages/GeographySol";
import IndianCulture from "./pages/IndianCulture";
import IndianCultureSol from "./pages/IndianCultureSol";
import DaysAndYears from "./pages/DaysAndYears";
import DaysAndYearsSol from "./pages/DaysAndYearsSol";
import Mathematics from "./pages/Mathematics";
import MathematicsSol from "./pages/MathematicsSol";
import GeneralScience from "./pages/GeneralScience";
import GeneralScienceSol from "./pages/GeneralScienceSol";
import Sports from "./pages/Sports";
import SportsSol from "./pages/SportsSol";
import Astronomy from "./pages/Astronomy";
import AstronomySol from "./pages/AstronomySol";
import Technology from "./pages/Technology";
import TechnologySol from "./pages/TechnologySol";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Gk quiz";
  }, []);
return (
	<>
   
    <Router>
      <Routes>
        <Route path="/Gk-quiz23/" Component={Home} />
        <Route path="/Gk-quiz23/StatesAndCapital" Component={StatesAndCapital} />
        <Route path="/Gk-quiz23/StatesAndCapitalSol" Component={StatesAndCapitalSol} />
        <Route path="/Gk-quiz23/History" Component={History} />
        <Route path="/Gk-quiz23/HistorySol" Component={HistorySol} />
        <Route path="/Gk-quiz23/Geography" Component={Geography} />
        <Route path="/Gk-quiz23/GeographySol" Component={GeographySol} />
        <Route path="/Gk-quiz23/IndianCulture" Component={IndianCulture} />
        <Route path="/Gk-quiz23/IndianCultureSol" Component={IndianCultureSol} />
        <Route path="/Gk-quiz23/DaysAndYears" Component={DaysAndYears} />
        <Route path="/Gk-quiz23/DaysAndYearsSol" Component={DaysAndYearsSol} />
        <Route path="/Gk-quiz23/Mathematics" Component={Mathematics} />
        <Route path="/Gk-quiz23/MathematicsSol" Component={MathematicsSol} />
        <Route path="/Gk-quiz23/GeneralScience" Component={GeneralScience} />
        <Route path="/Gk-quiz23/GeneralScienceSol" Component={GeneralScienceSol} />
        <Route path="/Gk-quiz23/Sports" Component={Sports} />
        <Route path="/Gk-quiz23/SportsSol" Component={SportsSol} />
        <Route path="/Gk-quiz23/Astronomy" Component={Astronomy} />
        <Route path="/Gk-quiz23/AstronomySol" Component={AstronomySol} />
        <Route path="/Gk-quiz23/Technology" Component={Technology} />
        <Route path="/Gk-quiz23/TechnologySol" Component={TechnologySol} />
        <Route path="/Gk-quiz23/Score" Component={Score} />
        <Route path="/Gk-quiz23/NotAttempted" Component={NotAttempted} />
      
      </Routes>
    </Router>
	</>
);
}

export default App;
