import { Link } from "react-router-dom";
import '../App.css';

function Home() {
  return (
    <div className="main-page">
      <br />
      <h1 className="heading">General Knowledge Quiz</h1>
      <br></br>
      <ul>
        <li>
          <Link to="/Gk-quiz23/StatesAndCapital" className="link">States and capital</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/History"  className="link">History</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/Geography"  className="link">Geography</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/IndianCulture"  className="link">Indian Culture</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/DaysAndYears"  className="link">Days and years</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/Mathematics"  className="link">Mathematics</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/GeneralScience"  className="link">General Science</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/Sports"  className="link">Sports</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/Astronomy"  className="link">Astronomy</Link>
        </li>
        <li>
          <Link to="/Gk-quiz23/Technology"  className="link">Technology</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
