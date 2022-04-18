import { useNavigate } from "react-router";
import '../styles/button.css'

const ButtonBracketRedirect = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/brackets");
    }

    return (
        <div className="button-div">
            <button onClick={handleClick} type="button">CONTINUAR</button>
        </div>
    );
}

export default ButtonBracketRedirect;