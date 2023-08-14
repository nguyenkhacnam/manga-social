import Handle_function from "../../handle_account/handle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Page_login = () => {
  let navigate = useNavigate();
  return (
    <div className="Login">
      <div className="Login-slide">
        <img src="/images/Login/slide1.jpg"></img>
      </div>
      <div className="Login-Box">
        <div className="contain-login">
          <h1>Login</h1>
          <p className="contain-login-des">
            You can use your app or account to login
          </p>
          <div className="Login-Box-input">
            <input
              id="email"
              name="email"
              placeholder="enter your email"
            ></input>
            <input id="password" name="password" placeholder="password"></input>
            <button
              onClick={() => {
                Handle_function.Handle_login(navigate).then((data) => {});
              }}
            >
              Log in
            </button>
            <p className="Login-Box-input-forgotpass">forgot password</p>
            <div className="Login-Box-input-QR">
              <img
                className="Login-Box-input-QR-icon"
                src="/images/Login/QR.png"
              ></img>
              <p>Scan QR Code to login?</p>
            </div>
            <div className="Login-Box-input-footer">
              <hr></hr>
              <p> Or continue with</p>
              <hr></hr>
              <span className="Login-Box-input-footer-text">
                Don’t have an account?{" "}
                <Link to={"/register"}>
                  <span className="signup">Sign up</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_login;
