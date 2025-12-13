import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Registeration() {
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    logEmail: "",
    logPass: "",
  });

  const navigate = useNavigate();

  function Change(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSignup(event) {
    event.preventDefault();

    const user = {
      name: form.Name,
      email: form.Email,
      password: form.Password,
    };

     if(user.email===""){
      alert("Fill the Form")
    }else{
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account Created Successfully!");
    setIsSignup(false);}
   
  }

  function handleLogin(event) {
    event.preventDefault();

    const saved = JSON.parse(localStorage.getItem("userData"));

if(form.logEmail===""){
  alert("Fill Your Form")
}
    if (form.logEmail === saved.email && form.logPass === saved.password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Wrong Email or Password!");
    }
  }

  return (
    <div className="auth-main">
  <div className="auth-box">

    {/* TAB BUTTONS */}
    <div className="auth-tabs">
      <button
        className={!isSignup ? "active" : ""}
        onClick={() => setIsSignup(false)}
      >
        Sign In
      </button>
      <button
        className={isSignup ? "active" : ""}
        onClick={() => setIsSignup(true)}
      >
        Sign Up
      </button>
    </div>

    {/* FORMS */}
    {!isSignup ? (
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>

        <input className="in" type="email" name="logEmail" placeholder="Email" onChange={Change} />
        <input className="in" type="password" name="logPass" placeholder="Password" onChange={Change} />

        <button className="rbtn">Login</button>
      </form>
    ) : (
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Create Account ✨</h2>

        <input className="in" type="text" name="Name" placeholder="Name" onChange={Change} />
        <input className="in" type="email" name="Email" placeholder="Email" onChange={Change} />
        <input className="in" type="password" name="Password" placeholder="Password" onChange={Change} />

        <button className="rbtn">Sign Up</button>
      </form>
    )}

  </div>
</div>

  );
}
