import React, { useState } from "react";
import axios from "axios";

const SignInPage = ({ setToken }) => {
  //Creating useState to handel inputs from form
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    conf_password: "",
  });

  const [error, setError] = useState("");

  function handelInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function hadelSubmit(e) {
    e.preventDefault();

    if (data.password !== data.conf_password) {
      setError("Password didn't match");
    } else {
      setError("");
      axios
        .post("https://instagram-express-app.vercel.app/api/auth/signup", {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response.data);
          setToken(response.data.data.token);
          setData({
            ...data,
            name: "",
            email: "",
            password: "",
            conf_password: "",
          });
          alert(response.data.message);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }

  return (
    <div className="SignInPage">
      <form onSubmit={hadelSubmit} className="Form">
        <input
          onInput={handelInput}
          value={data.name}
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        ></input>
        <input
          onInput={handelInput}
          value={data.email}
          type="email"
          name="email"
          placeholder="axy@gmail.com"
          required
        ></input>
        <input
          onInput={handelInput}
          value={data.password}
          type="password"
          pattern="[0-9]{3}"
          name="password"
          placeholder="Enter password [0-9] minlength = 3"
          required
        ></input>
        <input
          onInput={handelInput}
          value={data.conf_password}
          type="password"
          name="conf_password"
          placeholder="Confirm password"
          required
        ></input>
        <button type="submit">Sing up</button>
      </form>
      <h1 className="Error">{error}</h1>
    </div>
  );
};

export default SignInPage;
