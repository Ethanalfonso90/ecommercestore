import SignUpForm from "../../components/signupform/signupform";
import SignInForm from "../../components/signinform/signinform.jsx";

const SignIn = () => {
  return (
    <div className="ui container">
      <div className="ui vertically divided grid">
        <div className="two column row">
          <div className="column">
            <h1>Sign In</h1>
            <SignInForm />
          </div>
          <div className="column">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
