import React from "react";
import { Avatar } from "@material-ui/core";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const SideBar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="Left__sidebar">
      <div className="sidebar_content">
        <img
          src="https://img.freepik.com/free-vector/abstract-background_53876-43362.jpg?w=2000"
          alt=""
          className="sidebar__image"
        />
        <Avatar
          className="avatar"
          style={{
            width: "60px",
            height: "60px",
            margin: "auto",
            "z-index": "10",
            top: "-30px",
          }}
          src={user.photoURl}
        ></Avatar>
        <div className="profile_headings">
          <h2 className="sidebar__header"> {user.displayName}</h2>
          <p className="sidebar__subheading">MERN STACK Developer</p>
        </div>

        <div className="profile__stats">
          <p>Who viewed your profile</p>
          <span>27</span>
        </div>

        <div className="profile__stats">
          <p>Impresion of your post</p>
          <span>100</span>
        </div>
      </div>

      <div className="sidebar__recent">
        <p style={{ "margin-left": "10px" }}>Recent</p>
        <div className="recent__hash">
          <span>#</span>internship
        </div>
        <div className="recent__hash">
          <span>#</span>frontend
        </div>
        <div className="recent__hash">
          <span>#</span>backend
        </div>
        <div className="recent__hash">
          <span>#</span>nodejs
        </div>
        <div className="recent__hash">
          <span>#</span>Reactjs
        </div>
        <div className="recent__hash">
          <span>#</span>Tailwind
        </div>
        <div className="recent__hash">
          <span>#</span>internship
        </div>
        <div className="recent__hash">
          <span>#</span>CMS 
        </div>
      </div>
    </div>
  );
};

export default SideBar;
