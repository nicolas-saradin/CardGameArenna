import './Register.css';
import profile from './a.png';
import email from './email.jpg';
import pass from './pass.png';
import Name from './Name.png';

function Register() {
  return (
    <div className="main">
      <div className="register-sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Register</h1>
            <div className="second-input">
              <img src={Name} alt="email" className="email" />
              <input
                type="text"
                placeholder="Name, Last Name"
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user Email" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="PassWord" className="name" />
            </div>
            <div className="login-button">
              <button type="submit">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
