import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
import Button from "../components/Button";
import SideBar from "../components/SideBar";

const Forum = () => {
    const postlist = posts;
  return (
    <div>
          <h1>Welcome to the Forum</h1>
        <Button children="Add Post" />
    <SideBar />

      <ForumBody postlist={postlist} />
    </div>
  );
};

export default Forum;
