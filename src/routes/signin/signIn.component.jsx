import {
  signInWithGooglePopup,
  createUserDocumentFrmAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFrmAuth(user);
  };
  return (
    <div>
      <h1>signIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
