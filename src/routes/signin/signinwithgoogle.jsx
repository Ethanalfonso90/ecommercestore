import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.js";
import SignUpForm from "../../components/signupform/signupform";
import SignInForm from "../../components/signinform/signinform.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
