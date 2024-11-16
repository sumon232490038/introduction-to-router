import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "./Contract.css";

const Contract = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <h1>User:{users.length}</h1>
      <div className="contractcss">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Contract;
