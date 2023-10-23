import React, { useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
  let newToken = "";
  const [message, setMessage] = useState("");
  
  if(localStorage.getItem("token"))
  {
    newToken = localStorage.getItem("token");
  }
  else {
    newToken = token;
  }
  async function getJoke() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        }
      );
      console.log(response);
      setMessage(response.data.data.message);
    } catch (error) {
        alert("You must be logged In");
        // alert(error.response.data.message);
    }
  }
 
  async function logOut(){
    try {
        const response = await axios.delete(
          "https://instagram-express-app.vercel.app/api/auth/logout",
          {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          }
        );
        alert(response.data.message)
        localStorage.clear();
        setMessage("");
      } catch (error) {
        
          alert(error.response.data.message);
      }
  }
  return (
    <div className="Dashboard">
      <p className="message">{message}</p>
      <div className="Buttons">
        <button onClick={getJoke}>Show Joke</button>
        <button onClick={logOut}>LogOut</button>
      </div>
    </div>
  );
};

export default Dashboard;
