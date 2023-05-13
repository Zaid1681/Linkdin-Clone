import React, { useState } from "react";
import { loginUser } from "../../features/userSlice";
import logo from "../img/logo.png";
import "./Signup.css";
// import auth from "../../firebase.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";

import { useDispatch } from "react-redux";

const Signup = () => {
  let auth = getAuth();
  const [signUp, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [photoUrl, setPhotourl] = useState("");
  const [des, setDes] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required");
    }
    if (!password) {
      alert("password is required");
    }
    if (!cpassword) {
      alert("please confirm password");
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
            description: des,
          })
          .then(() => {
            // fire the loginUSer method of calling
            // usd to write the value of ation of redux
            dispatch(
              loginUser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: photoUrl,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });

    setName("");
    setPassword("");
    setCpassword("");
    setPhotourl("");
    setDes("");
  };

  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // setting a vlue into
        dispatch(
          loginUser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });

    setEmail("");
    setPassword("");
    setCpassword("");
    setPhotourl("");
  };
  return (
    <>
      {signUp === true ? (
        <div className="signup__data">
          <div className="signup__header">
            {/* logo */}
            <img src={logo} alt="" />
            {/* heading */}
            <h3 className="signup__header__heading">
              Make the most of your professional life
            </h3>
          </div>

          <form action="" className="Singup__input" onSubmit={register}>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="singup__email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="">Email or Phone number</label>
            <input
              type="text"
              className="singup__email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="signup__passsword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              className="signup__cpassword"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <label htmlFor="">PhotoUrl</label>
            <input
              type="text"
              className="signup__cpassword"
              value={photoUrl}
              onChange={(e) => setPhotourl(e.target.value)}
            />
            <span>
              {" "}
              By clicking Agree & Join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </span>
            {/* User Sign up data */}
            <button className="Signup__join">Agree & Join</button>
          </form>

          <div className="signup__footer">
            {/* already a linkdin user and link */}
            <span>Already on Linkdin?</span>
            <input
              type="button"
              onClick={() => setSignup(false)}
              value={"Sing in"}
              className="singup__button"
            />
          </div>
          {/* Login form */}
        </div>
      ) : (
        <div className="login">
          <div className="signup__data">
            <div className="signup__header">
              {/* logo */}
              <img src={logo} alt="" />
              {/* heading */}
              <h3 className="signup__header__heading">Sign in</h3>
            </div>

            <form action="" className="Singup__input" onSubmit={login}>
              <label htmlFor="">Email or Phone number</label>
              <input
                type="text"
                className="singup__email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="signup__passsword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="Signup__join">Sign in</button>
            </form>

            <div className="signup__footer">
              {/* already a linkdin user and link */}
              <span>New to Linkdin? </span>
              <input
                type="button"
                onClick={() => setSignup(true)}
                value={"Sing up "}
                className="singup__button"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
