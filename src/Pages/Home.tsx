import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Card from "./card";

export interface Mat {
  id: string;
  img: string;
  name: string;
  qte: number;
}

function Home() {
  const materielRef = collection(db, "materiel");
  const [materiels, setMateriels] = useState<Mat[] | null>(null);
  const getMateriels = async () => {
    const data = await getDocs(materielRef);
    setMateriels(
      data.docs.map((doc) => ({ ...doc.data()})) as Mat[]
    );

  };
  useEffect(() => {
    getMateriels();
  }, [materiels]);

  return (
    <div className="HomeContainer">
      {materiels?.map((mat) => (
        
        <Card key={mat.id} mat={mat}  />

      ))}
    </div>
  );
}
export default Home;
