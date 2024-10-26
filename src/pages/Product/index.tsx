import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterColor = (color: string) => {
    setSearchParams({ color });
  };

  const getColor = () => {
    return searchParams.get("color") ?? "white";
  };

  return (
    <div>
      <div className="h-14 w-full border flex items-center justify-center">
        <input type="color" onChange={(e) => filterColor(e.target.value)} />
      </div>

      <div className="h-14 w-full border flex items-center justify-center">
        <div
          className="w-full h-full border"
          style={{ backgroundColor: getColor() }}
        />
      </div>
      <p>Product Color : {getColor()}</p>
    </div>
  );
};

export default Product;
