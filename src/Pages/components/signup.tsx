import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../config/firebase";


const SignUp = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const onSignUp = (e) => {
e.preventDefault();
createUserWithEmailAndPassword(auth,email,password).then( (userCords) => {
    console.log(userCords)

}).catch((error)=>{
    console.log(error)
} )
}

    return (
      <div>
        <h1>sign up</h1>
        <form onSubmit={onSignUp}>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }}/><br/>
        <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
  
  export default SignUp