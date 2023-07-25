import React, { useState } from "react";
import "./Login.css";

function UserLogin(props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.userdata)
    let a=0;    
    props.userdata.map((data)=>{
      if(data.email===email && data.password===password){
        a=1;
      }});
    if(a){
    props.flag();
    }  
    setEmail("");
    setPassword("");
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <p>----------------- New to Canva -----------------</p>
      <button onClick={() => props.flag1()}>Create Your Canva Account</button>
    </div>
  );
}

export default UserLogin;
