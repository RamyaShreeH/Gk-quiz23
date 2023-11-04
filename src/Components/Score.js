import '../App.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const Score = ({score, link}) => {
    const navigate = useNavigate();
    console.log("Score:", score)
    console.log("Link:",link)
    return(
        <div className="quiz-page">
            <h1 className='question'>Results</h1>
            <h1 className='question'>Your Score: {score} / 25</h1>
            <Link to= {link}>View Solution</Link>
            <button className="btn btn-primary mt-2" onClick={()=>navigate("/Gk-quiz23/")}>Back to home</button>
            
        </div>
    )
}
export default Score