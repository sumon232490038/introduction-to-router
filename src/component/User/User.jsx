import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  // console.log(user);
  const { name, phone, email, id } = user;
  return (
    <div className="user1">
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
