import './index.css'
const Left  = () => {
    return (
  <div className='main'>
    <form action="" className='form'>
   
 <div className='left'></div>

    <div className='right'>
        <h1> Login to continue </h1>
        <input type="email" placeholder='Email' id="input" /> <br />
        <input type="password" placeholder='Password' id="input" />
        <div className='rem'><input type="checkbox" />Remember Me<span>Forgot Password?</span></div>
        <button>LOGIN</button>
        <p>or sign up using</p>

    </div>
    </form>
  </div>
)}
export default Left