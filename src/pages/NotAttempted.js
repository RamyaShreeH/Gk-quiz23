import {useNavigate} from "react-router-dom"
import '../App.css';
const NotAttempted = () =>{
    const navigate = useNavigate();
    return(
        <div className="quiz-page">
            <h1 className="question">Time's Up! </h1>
            <h1 className="question">Oops! quiz not completed 🥺.</h1>
            <button className="btn btn-primary mt-2" onClick={()=>navigate("/Gk-quiz23/")}>Back to home</button>
        </div>
    )
}
export default NotAttempted;