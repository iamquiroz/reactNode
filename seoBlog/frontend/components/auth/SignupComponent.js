import { useState } from 'react';
import { signup } from '../../actions/auth';



const SignupComponent =() => {

  const [ values, setValues ] = useState({
	  name: '',
	  email: '',
	  password: '',
	  error: '',
	  loading: false,
	  message: '',
	  showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e) => {
      e.preventDefault();
    setValues({...values, loading: true, error: false}) 
    const user = {  name, email, password}


    signup(user)
    .then(data =>  {
	  if(data.error){
	      setValues({...values, error: data.error, loading: false});
	  } else {
	    setValues({
	      ...values,
	      name: '',
	      email: '',
	      password: '',
	      error: '',
	      loading: false,
	      message: data.message,
	      showForm: false
	    });

	  }
    })
       // console.table({ name, email, password, error, loading, message, showForm })
  };
  const handleChange = name => (e) => {
      setValues({...values, error: false, [name]: e.target.value}); 
  };
    const signupForm = () => {
      return (
	  <form onSubmit={handleSubmit}>
	  
	      <div className="form-group">
		  <input 
		      value={name}
		      onChange={handleChange('name')}
		      type="text" 
		      className="form-control"
		      placeholder="Type your name"
		  />
	      </div>

	      <div className="form-group">
		  <input 
		    value={email}
		    onChange={handleChange('email')} 
		    type="email" 
		    className="form-control"
		    placeholder="Type your email"
		  />
	      </div>

	      <div className="form-group">
		  <input 
		    value={password}
		    onChange={handleChange('password')}
		    type="password" 
		    className="form-control" 
		    placeholder="Type your password"
		  />
	      </div>

	      <div>
		  <button
		    className="btn btn-primary">
		      Signup
		  </button>
	      </div>
	  </form>
      )
    }


    return (
		<>{ signupForm() }
		</>
    );

};

export default SignupComponent;

