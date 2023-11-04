import {useNavigate} from "react-router-dom"
import '../App.css';
const NotAttempted = () =>{
    const navigate = useNavigate();
    return(
        <div className="App-header">
            <h1 className="question">Time's Up! </h1>
            <h1 className="question">Oops! quiz not completed 🥺.</h1>
            <button className="btn btn-primary mt-2" onClick={()=>navigate("/")}>Back to home</button>
        </div>
    )
}
export default NotAttempted;