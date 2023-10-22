import React, { useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState("");

  async function getJoke() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(response.data.message)
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
