import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate = useNavigate()
const onSignIn = (e) => {
e.preventDefault();
signInWithEmailAndPassword(auth,email,password).then( (userCords) => {
    console.log(userCords)
    navigate("/")

}).catch((error)=>{
    console.log(error)
} )
}

    return (
      <div className="HomeContainer">
        <form onSubmit={onSignIn}>
        <input type="text" placeholder="Email:" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" placeholder="Password:" onChange={(e) => { setPassword(e.target.value) }}/><br/>
        <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
  
  export default SignIn