import { useOutletContext } from "react-router-dom";

const Home = () => {
  const outlet = useOutletContext();
  return (
    <div>
      <pre>{JSON.stringify(outlet)}</pre>
      <p>Home Page</p>
    </div>
  );
};

export default Home;
