import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx'


const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error, currentUser  } = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/sign-in', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return
      }
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }


  const renderSignInButton = () => {
    if (currentUser) {
      return (
        <button disabled className='bg-gray-400 text-white p-3 rounded-full opacity-80'>
          Already Logged In
        </button>
      );
    } else {
      return (
        <button
          disabled={loading}
          className='bg-pink-900 text-white p-3 rounded-full uppercase hover:opacity-80 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      );
    }
  };



  return (
    <div className='p-3 max-w-lg mx-auto left-part'>
      {/* <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1> */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='✉ E-mail ID ' className=' border p-3 rounded-lg' onChange={handleChange} id='email' />
        <input type="text" placeholder='🗝️ Password' className=' border p-3 rounded-lg' onChange={handleChange} id='password' />
        <span className=' text-pink-950 text-end p-4'>Forgot Password?</span>
        {renderSignInButton()}
        {/* <button disabled={loading} className=' bg-pink-900 text-white p-3 rounded-full uppercase hover:opacity-80 disabled:opacity-80'> {loading? 'Loading...' : 'Sign In'} </button> */}
        {currentUser === null ? (<span className=' text-center p-4'>Or login with</span>):("")}
        {currentUser === null ? (<OAuth/>):("")}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"} >
          <span className=' text-blue-700' >Register</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5' > {error} </p>}
    </div>
  )
}

export default SignIn


