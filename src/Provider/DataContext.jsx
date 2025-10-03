import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // fetching all data
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
