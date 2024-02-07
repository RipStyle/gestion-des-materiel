import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
function Navbar() {
  const [user] = useAuthState(auth);
const navigate = useNavigate()
  const signOutUser = async () => {
    await signOut(auth);
    navigate("/login")
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        {!user ?<><Link id="noMarg" to="/login"> login</Link> <Link id="noMarg" to="/sign-up">+</Link></> :<Link to="/create-materiel">new materiel</Link>} 
        
        <Link to="/client">client </Link>
      </div>
      
      {user ?(<div className="user">
        <p>{user?.displayName }</p>
        <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/666/666201.png"} width="30" height="30" />
         <button onClick={signOutUser}>Log Out</button> </div>): null}
      
    </div>
  );
}
export default Navbar;
