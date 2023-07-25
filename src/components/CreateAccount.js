import Link from "antd/es/typography/Link";
import React, { useState } from "react";

function AccountCreationForm(props) {
  const data = {
    name: "",
    email: "",
    password: ""
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.flag1();
    data.name = name;
    data.email = email;
    data.password = password;
    props.userdataf(data);
    console.log("userdata");

    // Handle successful account creation here (e.g. redirect to confirmation page
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div claName="login-container">
      <div className="account-creation-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Re-enter Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength={8}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="conditions">
              <input type="checkbox" id="conditions" required />I agree to the
              terms and conditions
            </label>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have account?<Link to="cart"> Singin</Link>
        </p>
      </div>
    </div>
  );
}

export default AccountCreationForm;
