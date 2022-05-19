import { useState } from "react";
import {
  signInWithAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.js";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="ui secondary segment">
      <h1>Sign In</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="field">
          <div className="ui centred">
            <button className="ui submit button" type="submit">
              Sign In
            </button>
            <button className="ui button primary" onClick={logGoogleUser}>
              Sign In with Gmail
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
