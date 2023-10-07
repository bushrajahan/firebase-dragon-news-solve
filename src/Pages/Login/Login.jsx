import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
 const location = useLocation();
 const navigate = useNavigate();
 console.log("location in the login page",location)
  const {signIn} = useContext(AuthContext)
  const handleSubmit = e =>{
     e.preventDefault()
     const form = new FormData(e.currentTarget)
       console.log(form.get('password'))
       const email = form.get('email')
       const password = form.get('password')
       signIn(email,password)
       .then(res =>

           navigate(location?.state? location.state : '/')
        
       
       )
       .catch(error => console.log(error))
    }
  return (
    <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <div>
     <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Dont have an account <Link className='text-center text-blue' to="/register">Register</Link></p>
     </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;