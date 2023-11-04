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
          <Link to="/StatesAndCapital" className="link">States and capital</Link>
        </li>
        <li>
          <Link to="/History"  className="link">History</Link>
        </li>
        <li>
          <Link to="/Geography"  className="link">Geography</Link>
        </li>
        <li>
          <Link to="/IndianCulture"  className="link">Indian Culture</Link>
        </li>
        <li>
          <Link to="/DaysAndYears"  className="link">Days and years</Link>
        </li>
        <li>
          <Link to="/Mathematics"  className="link">Mathematics</Link>
        </li>
        <li>
          <Link to="/GeneralScience"  className="link">General Science</Link>
        </li>
        <li>
          <Link to="/Sports"  className="link">Sports</Link>
        </li>
        <li>
          <Link to="/Astronomy"  className="link">Astronomy</Link>
        </li>
        <li>
          <Link to="/Technology"  className="link">Technology</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
