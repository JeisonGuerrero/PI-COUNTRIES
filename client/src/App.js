import { Routes, Route} from "react-router-dom";
import Detalle from "./Pages/Detalle/Detalle";
import Home from "./Pages/Home/Home";
import Principal from "./Pages/Principal/Principal";
import Create from "./Pages/Create/Create"


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/detalle/:id" element={<Detalle/>}/>
      <Route exact path="/create" element={<Create/>}/>
    </Routes>
  );
}

export default App;