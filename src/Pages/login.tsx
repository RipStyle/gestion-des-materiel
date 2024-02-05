import { provider, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
function Login() {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log(res);
    navigate("/");
  };
  return (
    <div>
      <h1>Log in </h1>
      
      <SignIn/>
      <hr className="hr-text gradient" data-content="OR" />
      <button onClick={signInWithGoogle}>Log In with google</button>
    </div>
  );
}
export default Login;
