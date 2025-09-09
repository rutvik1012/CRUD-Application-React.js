import React from "react";
import User from "./Components/User";
import { Routes ,BrowserRouter,Route} from "react-router-dom"
import AddUser from "./Components/AddUSer";
const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="/AddUser" element={<AddUser/>}></Route>
    </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;
