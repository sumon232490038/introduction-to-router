import { useNavigate } from "react-router-dom";
import "./Post.css";
import PropTypes from "prop-types"; // ES6

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h3>Person{id}</h3>
      <p>{title}</p>

      <button onClick={handleNavigate}>show details</button>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.array,
};

export default Post;
