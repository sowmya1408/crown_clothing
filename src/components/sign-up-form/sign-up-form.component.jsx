import { useState } from "react";
import FormInput from "../form-input/form-input.component.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFrmAuth,
} from "../../utils/firebase/firebase.utils";
//import { UserContext } from "../../contexts/user.context";
import "./sign-up-form.styles.scss";
const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formfields;

  //const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formfields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFrmAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered error", error);
      }
    }
  };
  console.log(email, password);
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        {/* This can be also another method to use on Inputs */}
        {/* <FormInput
          label="Full Name"
          inputOptions = {{
          type:"text",
          required : true,
          onChange:handleChange,
          name:"displayName",
          value: displayName,
        }}
        /> */}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
