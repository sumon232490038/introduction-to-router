import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Haeder/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? (
        <p>soory data is loding</p>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
