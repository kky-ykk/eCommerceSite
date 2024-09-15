import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    const Navigate=useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const fetchFormData = async (e) => {
    e.preventDefault();

    const response=await axios.post('http://localhost:3000/user/login', {
          email: credentials.email,
          password: credentials.password,
        });
    
    console.log(response.data.token);

    localStorage.setItem("token",response.data.token);

    if (!response.data) alert("Enter valid Credentials!");
    else     Navigate("/");
  };

    return (
        <>
            <div className="signup-container">
                <div className="signup-image">
                    <div className="logo">
                    </div>
                </div>
                <div className="signup-form-container">
                    <h2>Sign up</h2>
                    <p>Don't have any account? <Link to="/signup">Sign Up</Link></p>
                    <form className="signup-form" onSubmit={(e)=>fetchFormData(e)}>
                        <div className="form-group">
                            <input type="email" placeholder="Email address or UserName" required name="email" onChange={(e)=>onChange(e)} />
                        </div>
                        <div className="form-group password-input">
                            <input type="password" placeholder="Password" required name="password" onChange={(e)=>onChange(e)} />
                        </div>
                        
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}