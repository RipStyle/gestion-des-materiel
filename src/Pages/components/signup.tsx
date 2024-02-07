import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate = useNavigate()
const onSignUp = (e) => {
e.preventDefault();

createUserWithEmailAndPassword(auth,email,password).then( (userCords) => {
    console.log(userCords)
navigate("/")
}).catch((error)=>{
    console.log(error)
} )
}

    return (<><h1>sign up</h1>
      <div className="HomeContainer">
        
        <form onSubmit={onSignUp}>
        <input type="text" placeholder="Email:" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" placeholder="Password:"  onChange={(e) => { setPassword(e.target.value) }}/><br/>
        <input type="submit" value="Sign up" />
        </form>
      </div>
      </>
    )
  }
  
  export default SignUp