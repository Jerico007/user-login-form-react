import React,{useState} from "react";
import "./index.css";
import SignInPage from "./Components/SignInPage";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
function App() {
  const [token , setToken] = useState("");
  return (
    <div className="App">
      <SignInPage setToken = {setToken}/>
      <LoginPage setToken = {setToken}/>
      <Dashboard token={token}/>
    </div>
  );
}

export default App;
