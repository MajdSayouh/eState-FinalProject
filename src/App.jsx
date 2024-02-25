// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
