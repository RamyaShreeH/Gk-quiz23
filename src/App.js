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
        <Route path="/StatesAndCapital" Component={StatesAndCapital} />
        <Route path="/StatesAndCapitalSol" Component={StatesAndCapitalSol} />
        <Route path="/History" Component={History} />
        <Route path="/HistorySol" Component={HistorySol} />
        <Route path="/Geography" Component={Geography} />
        <Route path="/GeographySol" Component={GeographySol} />
        <Route path="/IndianCulture" Component={IndianCulture} />
        <Route path="/IndianCultureSol" Component={IndianCultureSol} />
        <Route path="/DaysAndYears" Component={DaysAndYears} />
        <Route path="/DaysAndYearsSol" Component={DaysAndYearsSol} />
        <Route path="/Mathematics" Component={Mathematics} />
        <Route path="/MathematicsSol" Component={MathematicsSol} />
        <Route path="/GeneralScience" Component={GeneralScience} />
        <Route path="/GeneralScienceSol" Component={GeneralScienceSol} />
        <Route path="/Sports" Component={Sports} />
        <Route path="/SportsSol" Component={SportsSol} />
        <Route path="/Astronomy" Component={Astronomy} />
        <Route path="/AstronomySol" Component={AstronomySol} />
        <Route path="/Technology" Component={Technology} />
        <Route path="/TechnologySol" Component={TechnologySol} />
        <Route path="/Score" Component={Score} />
        <Route path="/NotAttempted" Component={NotAttempted} />
      
      </Routes>
    </Router>
	</>
);
}

export default App;
