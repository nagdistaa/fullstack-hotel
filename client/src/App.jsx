import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const routes = <Routes>
    <Route path="/" element={<HomePage/>}/>
  </Routes>;
  return (
    <div className="">
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">{routes}</div>
      <Footer/>
    </div>
  );
};

export default App;
