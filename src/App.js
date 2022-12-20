import Header from "./component/Header";
import SideBar from "./component/Left-Body-Content/SideBar";
import Feed from "./component/Center-body-content/Feed.jsx"
import "./index.css"
import Signup  from "./component/Signup/Signup.jsx";
import {useSelector} from "react-redux" 
import {selectUser , loginUser, logoutUser} from "./features/counterSlice"
import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()

  const user = useSelector(selectUser);
  // console.log(user)
  // useEffect(()=>{
  //   firebase.auth().onAuthStateChanged((userAuth)=>{
  //     if(userAuth){
  //       dispatch(loginUser({
  //         email : userAuth.email , 
  //         uid : userAuth.uid, 
  //         photoURl : userAuth.photoUrl ,
  //         displayName : userAuth.displayName
  //     }))
  //   }
  //   else{
  //       dispatch(logoutUser())

  //     }
  //     // console.log(userAuth.email)
  //   })


  // } , [])



  return (
    <>
    {
      !user ?( <Signup/> ): (<div className="App">
      {/* <h1>Welcome to my linkdin website</h1> */}
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed /> 

      </div>

    </div>
    )
    }
    
    </>

  );
}

export default App;







