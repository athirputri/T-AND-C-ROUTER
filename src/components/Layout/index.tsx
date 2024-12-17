import { Link, Outlet } from "react-router-dom";
import { cn, generateUuid } from "lib/listFunc";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={cn("flex gap-2 items-center bg-blue-600 p-4")}>
        <Link to={"/"} className="p-2 bg-white rounded">
          Index
        </Link>
        <Link to={"/home"} className={cn("p-2 bg-white rounded")}>
          Home
        </Link>
        <Link to={"/product"} className={cn("p-2 bg-white rounded")}>
          Product
        </Link>
        <Link to={"/profile"} className={cn("p-2 bg-white rounded")}>
          Profile
        </Link>
        <Link to={"/homepage"} className={cn("p-2 bg-white rounded")}>
          Homepage
        </Link>
        <Link to={"/product/create"} className={cn("p-2 bg-white rounded")}>
          Create Product
        </Link>
        <Link
          to={`/product/${generateUuid()}`}
          className={cn("p-2 bg-white rounded")}
        >
          Product By Id
        </Link>
      </div>
      <div className="p-4">
        <Outlet context={{ pathname }} />
      </div>
    </>
  );
};
