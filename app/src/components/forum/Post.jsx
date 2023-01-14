import Card from 'react-bootstrap/Card';
import replies from "../../images/replies.png";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Post = ({ post }) => {
    const titleStyle = {
        color: "#292929",
        fontSize: "24px",
        textDecoration: "none"
    }

    const tagsDisplay = [];
    const tags = post.tags.split(" ")
    for (var i=0; i < tags.length; i++) {
        tagsDisplay.push(
                <Button className="text-xs rounded mx-4 w-1" variant="secondary">{tags[i]}</Button>
        );
    }


  return (
    <div>
          <Card className="mx-4 " body>
              <a href="/" style={titleStyle}>{post.title}</a>
      
              {/* number of replies */}
              <div>

                  <p className="d-inline ">{post.date}</p>
              </div>
              <div className="replies">
               <img height="20px" src={replies} />
              <p className="d-inline">{post.replies.split(" ").length}</p>
            </div>
         
              <div className="row partners-images">
                  <ButtonGroup >{ tagsDisplay }</ButtonGroup>
                </div>
           
             
             
          </Card>
      
    </div>
  );
};

export default Post;
