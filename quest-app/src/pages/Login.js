import './../Main.css';
import wallp from './../img/peri_wallp.jpg';

import { SignInButton as SSO } from '../components/SignInButton';


export default function Login() {

  return (
    <div className="App">
      <div className='ContentLeft'/>
      <div className='Logo' />
      <div className='LogoTitle'><h1>Sign in</h1></div>
      <div className='ContentRight'/>
      <div className="Title">
            rasPERI
      </div>
      {/* <div className="Subtitle">
            risk-assessmeent self-service PERI - tool
      </div> */}
      <div className="Text">
            <p style={{fontSize: "16px", fontWeight: "500"}}>Use your Microsoft Peri Account</p>
      </div>
      <div className="button-17">
        <SSO />
      </div>

    </div>
  );
}