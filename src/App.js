import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Deshbord from "./Page/Deshbordpage/Deshbord";
// import Login from "./Page/Loginpage/Loginpage";
import Login from "./Page/Loginpage/Login";
function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Deshbord" element={<Deshbord />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
