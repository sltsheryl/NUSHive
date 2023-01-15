import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
import SideBar from "../components/SideBar";
import user from "../images/user.png";
import React, { Component } from "react";
import logo from "../images/logo.png";

class Forum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const postlist = posts;
    const profileStyle = {  
    };
    const topBarStyle = {
      backgroundColor: "#956df8",
    }
    return (
      <div>
        <div className="flex " style={topBarStyle}>
          <img src={logo} alt="logo" height="80px" />
          <img alt="avatar" style={profileStyle} height="50px" src={user}></img>
        </div>
        <SideBar />

        <ForumBody postlist={postlist} />
      </div>
    );
  }
}

export default Forum;
