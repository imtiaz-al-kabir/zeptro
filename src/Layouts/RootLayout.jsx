import axios from "axios";
import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { DataProvider } from "../Provider/DataContext";

const RootLayout = () => {
  const [location, setLocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        // console.log(location);
        const exactLocation = location.data.address;

        setLocation(exactLocation);
        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  //   useEffect(() => {
  //     getLocation();
  //   }, []);
  return (
    <>
      {" "}
      <DataProvider>
        <Navbar
          location={location}
          openDropDown={openDropDown}
          setOpenDropDown={setOpenDropDown}
          getLocation={getLocation}
        />
        <Outlet />
        <Footer />
      </DataProvider>
    </>
  );
};

export default RootLayout;
