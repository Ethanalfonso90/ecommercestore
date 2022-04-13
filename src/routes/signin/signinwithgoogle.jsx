import SignUpForm from "../../components/signupform/signupform";
import SignInForm from "../../components/signinform/signinform.jsx";

const SignIn = () => {
  return (
    <div className="ui container">
      <div className="ui vertically divided grid">
        <div className="two column row">
          <div className="column">
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
