import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFrmAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component.component";
import Button from "../button/button.component";
//import { UserContext } from "../../contexts/user.context";
import "./sign-in-form.styles.scss";
const defaultSignInValues = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [signInFormFields, setSignInFormFields] = useState(defaultSignInValues);
  //const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setSignInFormFields(defaultSignInValues);
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log("error with google pop up", error);
      alert("Google Sign-In Popup has been closed");
    }
  };

  // {
  /* useEffect(() => {
      const redirectResults = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFrmAuth(response.user);
        }
      };
    }, []); */
  //}

  const handleEmailAndPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("invalid login credentials");
          break;
        default:
          console.log("Error while sign in user with email & password", error);
      }
    }
  };
  // Firebase: Error (auth/popup-closed-by-user)
  const handleSignInChange = (event) => {
    const { name, value } = event.target;

    setSignInFormFields({ ...signInFormFields, [name]: value });
  };
  // {
  /* useEffect(() => {
      const redirectResults = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFrmAuth(response.user);
        }
      };
    }, []); */
  //}
  const { email, password } = signInFormFields;
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleEmailAndPasswordSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleSignInChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleSignInChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
      {/*  <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Re-direct
      </button> */}
    </div>
  );
};

export default SignInForm;
