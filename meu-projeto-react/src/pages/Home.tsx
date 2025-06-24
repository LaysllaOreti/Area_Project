import { useNavigate } from 'react-router-dom';
import '../style.css'; 

function Home() {
    const navigate = useNavigate();
    
    const handleSignIn = () => {
        navigate('/login');
    };
    
    return (
        <div className="homeContainer">
        <div className="leftSide">
        </div>
        <div className="rightSide">
        <img src="../assets/imagens/logoRexRoth.png" alt="RexRoth logo" />
        
        <h1><span style={{ color: '#0071CE' }}>REX</span><span style={{ color: '#7A7A7A' }}>automate</span></h1>
        
        <p className='frase'>Automate Bosch Rexroth's monthly reports with a smart platform that saves time, reduces manual work, and ensures fast, secure, and accurate data access.</p>
        
        <p className='frase'><strong>Automating efficiency and quality.</strong></p>
        
        <button onClick={handleSignIn}>Sign in</button>

        <p className="slogan">We Move, You Win</p>
        </div>
        </div>
    );
}

export default Home;
