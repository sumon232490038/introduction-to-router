import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  //   console.log(postDetails);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1> No:{postDetails.id} Post Details </h1>
      <h3>Details{postDetails.body}</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
