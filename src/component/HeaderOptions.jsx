import React from 'react'
import "./Header_style.css"
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counterSlice'
import firebase from 'firebase/compat/app';


const HeaderOptions = ({Icon , title , avatar}) => {
  const user = useSelector(selectUser)

  return (
    <div className='HeaderOptions'>
        {
            Icon && <Icon style={{"width":"25px" , "height" : "25px" , "margin" : "auto"}}></Icon>
          
        }
        {
            avatar && <Avatar src={user.photoURl} name={avatar} className="avatar" style={{"width" :"25px" , "height" : "25px" , "margin" : "auto" , "objectFit" : "contain"}} onClick={e=>firebase.auth().signOut()}></Avatar>
          
        }
      {
        <span>
        {title}
      </span> 
      }
    </div>
  )
}

export default HeaderOptions
