import { useEffect, useState } from "react";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate, useParams } from "react-router-dom";

const EditCard = () => {
  const { id } = useParams();
  console;
  const materielRef = collection(db, "materiel");
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Qte, setQte] = useState("");
const navigate=useNavigate()


  const onEdit = async(e) => {
    e.preventDefault();
    try {
      const likeToEditQuery = query(materielRef, where("id", "==", id));
      const likeToEditData = await getDocs(likeToEditQuery);
      const docRef = likeToEditData.docs[0].ref;
      await updateDoc(docRef, {
        name: Name,
        img: Image || "",
        qte: Qte
      });
      console.log("Document successfully updated!");
      navigate("/")
    } catch (err) {
      console.error("Error updating document: ", err);
    }

  };
  useEffect(() => {
    const onLoad = async () => {
      try {
        const likeToEditQuery = query(materielRef, where("id", "==", id));
        const likeToEditData = await getDocs(likeToEditQuery);
        setName(likeToEditData.docs[0].data().name);
        setQte(likeToEditData.docs[0].data().qte);
        setImage(likeToEditData.docs[0].data().image);
        console.log(likeToEditData.docs[0].data());
      } catch (err) {
        console.log(err);
      }
    };
    onLoad();
  }, [id]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      console.log(Image);
    }
  };

  return (
    <>
      <h1>Edit-card</h1>
      <div className="HomeContainer">
        <div>
          <form onSubmit={onEdit}>
            <input
              value={Name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              value={Qte}
              type="text"
              onChange={(e) => {
                setQte(e.target.value);
              }}
            />
            <br />
            <input
              
              type="file"
              onChange={(event) => handleChange(event)}
            />
            <br />
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default EditCard;
