import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../config/firebase";


const SignIn = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const onSignIn = (e) => {
e.preventDefault();
signInWithEmailAndPassword(auth,email,password).then( (userCords) => {
    console.log(userCords)

}).catch((error)=>{
    console.log(error)
} )
}

    return (
      <div>
        <h3>Sign in</h3>
        <form onSubmit={onSignIn}>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }}/>
        <input type="submit" value="Login In" />
        </form>
      </div>
    )
  }
  
  export default SignIn