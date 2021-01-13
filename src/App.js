import "./App.css";
import { FaEye, FaShareSquare } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="login">
          <div className="login_container">
            <h1 className="welcome">Welcome Back</h1>
            <p className="text mb">Login in here</p>
            <form className="form">
              <div className="form-group mb">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="br"
                />
              </div>
              <div className="form-group mb form-group-password">
                <input type="password" placeholder="Password" className="br" />
                <div className="eye">
                  <FaEye color="#afafaf" size="1.5em" />
                </div>
              </div>
            </form>
            <a href="/" className="forgot mb">
              Forgot Password
            </a>
            <div className="login-button mb">

              <FaShareSquare className="send" size="2em"/>
              <button className="">Login</button>
            </div>
            <p className="sign-up">
              Don't have an account? <a href="/">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
