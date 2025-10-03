import { useContext } from "react";
import { DataContext } from "../Provider/DataContext";

const Category = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  const getUniqueCategory = (data, property) => {
    let newVal = data.map((el) => {
      return el[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  console.log(categoryOnlyData);
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => (
          <button
            key={index}
            className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
