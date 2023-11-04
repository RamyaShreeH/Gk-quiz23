import {useNavigate} from "react-router-dom"
import '../App.css';
import { Link } from "react-router-dom";
const Solution=({qBank})=>{
    const navigate = useNavigate();
    return(
        <div className="solution-body">
             <Link className = "back-to-home-link"to="/">Back to home</Link>
            <h1 className="heading">Solution</h1>
            <br></br>
            {qBank.map(name => (
                <ol>
                    <p className="solution-question">{name.id}.){name.question}</p>
                    <p>1.){name.options[0]}&nbsp;
                    2.){name.options[1]}&nbsp;
                    3.){name.options[2]}&nbsp; 
                    4.){name.options[3]}</p>
                    <p><span className="solution-answer">Correct answer: &nbsp;</span><b>{name.answer}</b></p>
                </ol>
            ))}
        </div>
    )
}
export default Solution