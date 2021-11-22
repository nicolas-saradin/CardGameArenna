import './LogIn.css';
import profile from './a.png';
import email from './email.jpg';
import pass from './pass.png';

function LogIn() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Log In </h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="user name" className="name" />
            </div>
            <div className="login-button">
              <button id="submit-btn" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
