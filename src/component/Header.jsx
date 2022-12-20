import React from 'react'
import "./Header_style.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counterSlice';
const Header = () => {
    const user = useSelector(selectUser)
    console.log(user)
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkdin-logo" />

                </div>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" className='header__input' placeholder='Search'/>

                </div>

            </div>
            <div className="header__right">
                <div className="header__links">
                    <HeaderOptions Icon={HomeIcon}    title="Home"/>
                    <HeaderOptions Icon={PeopleAltIcon}    title="My Networks  "/>
                    <HeaderOptions Icon={BusinessCenterIcon}    title="Jobs"/>
                    <HeaderOptions Icon={MessageIcon}    title="Messaging"/>
                    <HeaderOptions Icon={NotificationsIcon}    title="Notification"/>
                    <HeaderOptions  avatar={Avatar }    title={user.displayName}/>


                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Header
