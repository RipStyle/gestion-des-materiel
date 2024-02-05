import { doc, query,getDocs, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";

const Card = (Props) => {
  const { mat } = Props.mat;
  const navigate = useNavigate()
const Edit = () =>{
  
  navigate("/edit?id="+mat.id)
}
const onDelete = async()=> {
try{
  const likeToDeleteQuery = query(
    Props.materielRef,
    where("id","==",Props.key)

  )
  const likeToDeleteData = await getDocs(likeToDeleteQuery);
  const likeToDelete = doc(db,"materiel",likeToDeleteData.docs[0].id)
  await deleteDoc(likeToDelete)
}catch (err){
console.log(err)
}
}

  return (
    <div className="card">
      <div className="header">
        <h1>{mat.name}</h1>
      </div>
      <div className="body">
        {mat.img ?<img src={mat.img} alt="image" />: ""}
      </div>
      <div className="footer">
        <p>{mat.qte}</p>
      </div>
      <div className="buttons">
        <button onClick={Edit} className="button editbtn">Edit</button>
        <button   onClick={onDelete} className="button deletebtn">Delete</button>
      </div>
    </div>
  );
};

export default Card;
