import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    const handelLogin=()=>{
        navigate('/home')
    }
  return (
   
      <form className="FormDiv">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handelLogin}>
          Login
        </button>
      </form>
   
  );
};

export default Login;
