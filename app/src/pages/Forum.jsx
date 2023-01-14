import posts from "../components/forum/Posts";
import ForumBody from "../components/forum/ForumBody";
const Forum = () => {
  const postlist = posts;
  return (
    <div>
      <h1>Welcome to the Forum</h1>
      <ForumBody postlist={postlist} />
    </div>
  );
};

export default Forum;
