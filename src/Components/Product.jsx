import Button from "./Button";

const Product = ({ val, mover, count }) => {
  const { live, c, description, title } = val;
  const colors = [
    "hover:bg-gray-500",
    "hover:bg-orange-500",
    "hover:bg-blue-900",
    "hover:bg-purple-800",
    "hover:bg-amber-300",
  ];
  return (
    <div className={`w-full py-10 text-white h-[23rem] ${colors[count]}`}>
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-[80%] mx-auto flex items-center justify-between p-10"
      >
        <h1 className="capitalize font-medium text-6xl">{title}</h1>
        <div className="w-1/3">
          <p>{description}</p>0
          <div className=" flex items-center mt-10 gap-5">
            {live && <Button title="Get Started" />}
            {c && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
