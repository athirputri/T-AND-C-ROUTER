import { Link, Outlet } from "react-router-dom";
import { cn, generateUuid } from "lib/listFunc";

export const Layout = () => {
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

      <Outlet />
    </>
  );
};
