import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../components/SideBar";
import user from "../images/user.png"

const Forum = () => {
    const postlist = posts;
    const profileStyle = {
        float: "right",
        padding:"auto"
    }
  return (
      <div>
          <div className='flex mx-5 my-4'>
              <h1 className="d-inline">Welcome to the Forum</h1>
    
              <img style={profileStyle}  height="50px" src={user}></img>
              </div>
        <SideBar />

      <ForumBody postlist={postlist} />
    </div>
  );
};

export default Forum;