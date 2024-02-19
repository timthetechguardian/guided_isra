import './../Main.css';
import wallp from './../img/peri_wallp.jpg';
import signInButton from '../components/signInButton';

function Login() {
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="Column">
          <div className="Left-half" style={{ backgroundImage: `url(${wallp})`}}>
            <div className="Wrapper">
              <div className="W_Placeholder"/>
                <div className="OverlayText">
                  <h1>Welcome to...</h1><p/>
                  <h2>The Risk-Assessment self-guidance portal</h2>
                </div>
            </div>
          </div>
          <div className="Right-half">
            <div className="Wrapper">
              <div className="W_Placeholder"/>
                <div className="OverlayText">
                  <h1>Login</h1><p/>
                  <h2>Welcome! Your account has already been created for you.</h2>
                </div>
                <div className="W_Mid_Placeholder"/>
                  <signInButton className="SSO" href="/profile">Single-Sign-On</signInButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
