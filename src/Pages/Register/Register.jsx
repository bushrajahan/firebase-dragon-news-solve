import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleSubmit =(e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    console.log(form.get('password'))
    const email = form.get('email')
    const photoUrl  = form.get('photo')
    const password = form.get('password')
    console.log(email,photoUrl)
    //createUSer
    createUser(email,password)
    .then(res => console.log(res.user))
    .catch(error =>console.error(error))
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
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='photo '  placeholder="photo url" className="input input-bordered" required />
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>Dont have an account <Link className='text-center text-blue' to="/login">Login</Link></p>
     </div>
    </div>
  </div>
</div> 
    </div>
  );
};

export default Register;