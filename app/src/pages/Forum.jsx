import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../components/SideBar";

const Forum = () => {
    const postlist = posts;
  return (
      <div>
          <div className='flex flex-row items-center'>
          <h1 className="mx-5 my-4">Welcome to the Forum</h1>
              </div>
        <SideBar />

      <ForumBody postlist={postlist} />
    </div>
  );
};

export default Forum;
