import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="p-8">
      <Link className="p-2 bg-blue-500 text-white rounded" to={"/home"}>
        Go to Home
      </Link>
    </div>
  );
};

export default Index;
