import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
