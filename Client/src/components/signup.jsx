import { useState } from 'react';
import './SignUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignUp() {

  const Navigate=useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    username:"",
    email: "",
    password: ""
  });

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const fetchFormData = async (e) => {
    e.preventDefault();

    const response=await axios.post('http://localhost:3000/user/signup', {
          name: credentials.name,
          username:credentials.username,
          email: credentials.email,
          password: credentials.password,
        })
      
    console.log("response :",response);
    if (!response) alert("Enter valid Credentials!");
    else     Navigate("/login");
  };



  return (
    <div className="signup-container">
      <div className="signup-image">
        <div className="logo">
        </div>
      </div>
      <div className="signup-form-container">
        <h2>Sign up</h2>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
        <form className="signup-form" onSubmit={(ev)=>fetchFormData(ev)} >
          <div className="form-group">
            <input type="text" placeholder="Your name" name="name" required onChange={(e)=>onChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username" name="username" required onChange={(e)=>onChange(e)}/>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email address" name="email" required onChange={(e)=>onChange(e)}/>
          </div>
          <div className="form-group password-input">
            <input type="password" placeholder="Password" name="password" required  onChange={(e)=>onChange(e)}/>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" required/>
            <span>I agree with <a href="/">Privacy Policy</a> and <a href="/">Terms of Use</a></span>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
