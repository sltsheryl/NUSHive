import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
import SideBar from "../components/SideBar";
import user from "../images/user.png";
import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";

class Forum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const postlist = posts;
    const profileStyle = {
      float: "right",
      padding: "auto",
    };
    return (
      <div>
        <div className="flex mx-5 my-4">
          <h1 className="d-inline">Welcome to the NusHive</h1>
          <Link to="/profile">
            <img alt="avatar" style={profileStyle} height="50px" src={user}></img>
          </Link>
        </div>
        <SideBar />

        <ForumBody postlist={postlist} />
      </div>
    );
  }
}

export default Forum;
