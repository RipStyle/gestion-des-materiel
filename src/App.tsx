import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Navbar from "./Pages/components/navbar";
import Create from "./Pages/materiel/create"
import SignUp from "./Pages/components/signup";
import EditCard from "./Pages/EditCard";
const Main = () => {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-materiel" element={<Create />} />
      </Routes>
    </Router>
    </div>
  );
};

export default Main;
