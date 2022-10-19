import { Routes, Route} from "react-router-dom";
import Detalle from "./Pages/Detalle/Detalle";
import Home from "./Pages/Home/Home";
import Principal from "./Pages/Principal/Principal";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/detalle/:id" element={<Detalle/>}/>
    </Routes>
  );
}

export default App;