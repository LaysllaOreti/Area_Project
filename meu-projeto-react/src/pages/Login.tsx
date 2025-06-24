import { useNavigate } from 'react-router-dom';
import '../style.css';

function Login() {
  const navigate = useNavigate();
   const handleLogin = () => {
    navigate('/dashboard');
   }
  return (
    <div className="loginPage">
      <img src="../assets/imagens/logoRexRoth.png" alt="RexRoth logo" />
      <div className="loginBox">
        <h2>Bosch Rexroth S.A.I.C</h2>
        <h3>Monthly Download Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button onClick={handleLogin}>Access</button>
      </div>
    </div>
  );
}

export default Login;
