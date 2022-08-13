import { useNavigate } from 'react-router';
import styles from '../../styles/BigBall.module.scss';

function ButtonBracketRedirect() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/brackets");
    }

    return (
        <div className={styles.buttonDiv}>
            <button onClick={handleClick} type='button'>CONTINUAR</button>
        </div>
    );
}

export default ButtonBracketRedirect;