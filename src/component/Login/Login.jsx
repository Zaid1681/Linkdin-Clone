import React from 'react';
// import "./Login.css"
import logo  from "../img/logo.png"
import "../../component/Signup/Signup.css"
const Login = () => {
  return (
    <div className='login'>
 <div className='signup__data'>
        <div className="signup__header">
            {/* logo */}
            <img src={logo} alt="" />
            {/* heading */}
            <h3 className='signup__header__heading'>Sign in</h3>


        </div>

        <form action="" className='Singup__input'>
            <label htmlFor="">Email or Phone number</label>
            <input type="text" className="singup__email" />
            <label htmlFor="">Password</label>
            <input type="password" className="signup__passsword" />
                <button className='Signup__join'>Sign in</button>

        </form>

        <div className="signup__footer">
            {/* already a linkdin user and link */}
            <span>New to Linkdin? </span>
            <input type="button" value={"Sing up "} className="singup__button"/>
        </div>


      
    </div>
    </div>
  )
}

export default Login
